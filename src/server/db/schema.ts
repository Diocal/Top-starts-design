// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  pgTable,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  numeric,
  integer,
  text,
  char,
  uniqueIndex,
  doublePrecision
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `topstarts_${name}`);

// export const UserMessages = createTable('user_messages', {
//   user_id: text('user_id').primaryKey().notNull(),
//   createTs: timestamp('create_ts').defaultNow().notNull(),
// })

// User Config Table
export const userConfig = createTable(
  "user_config",
  {
    userId: serial("user_id").primaryKey(),
    location: varchar("location", { length: 100 }).notNull(),
    language: varchar("language", { length: 10 }).notNull(),
  }
);

// Channels Table
export const channels = createTable(
  "channels",
  {
    channelId: serial("channel_id").primaryKey(),
    channelType: varchar("channel_type", { length: 50 }).notNull(),
    creationDate: timestamp("creation_date").defaultNow(),
    status: varchar("status", { length: 20 }).notNull(),
    owner: integer("owner").notNull().references(() => userConfig.userId),
    name: varchar("name", { length: 100 }).notNull(),
    imageUrl: varchar("image_url", { length: 255 }),
    numberUsers: integer("number_users").default(0),
    rank: integer("rank").default(0),
    language: varchar("language", { length: 10 }).notNull(),
    growthValue: doublePrecision("growth_value").default(0),
    activeValue: doublePrecision("active_value").default(0),
    points: integer("points").default(0),
  },
  (channels) => ({
    uniqueName: uniqueIndex("unique_channel_name").on(channels.name),
  })
);

// Topics Enum Table
export const topics = createTable(
  "topics",
  {
    topicId: serial("topic_id").primaryKey(),
    topicValue: text("topic_value").notNull().unique(),
  }
);