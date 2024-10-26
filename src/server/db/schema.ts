// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import 'server-only'

import { sql } from "drizzle-orm";
import {
  index,
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
export const createTable = pgTableCreator((name) => `data_seller_bridge_${name}`);

export const parentCategories = createTable(
  "parent_categories",
  {
    parentCategoryId: serial("parent_category_id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
  }
);

export const categories = createTable(
  "categories",
  {
    categoryId: serial("category_id").primaryKey(),
    name: varchar("name", { length: 50 }).notNull().unique(),
    parentCategoryId: integer("parent_category_id")
      .references(() => parentCategories.parentCategoryId),
  }
);

export const users = createTable(
  "users",
  {
    userId: serial("user_id").primaryKey(),
    username: varchar("username", { length: 50 }).unique(),
    email: varchar("email", { length: 255 }).unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  }
);

export const merchants = createTable(
  "merchants",
  {
    merchantId: serial("merchant_id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    address: varchar("address"),
  }
);

export const locales = createTable(
  "locales",
  {
    localeId: serial("locale_id").primaryKey(),
    language: char("language", { length: 10 }).notNull(),
    country: char("country", { length: 3 }).notNull(),
    currency: char("currency", { length: 3 }).notNull(),
  },
  (table) => ({
    uniqueLocale: uniqueIndex("unique_locale").on(table.language, table.country, table.currency),
  })
);

export const receipts = createTable(
  "receipts",
  {
    receiptId: serial("receipt_id").primaryKey(),
    receiptNumber: varchar("receipt_number", { length: 50 }).unique(),
    merchantId: integer("merchant_id").notNull().references(() => merchants.merchantId),
    userId: integer("user_id").notNull().references(() => users.userId),
    categoryId: integer("category_id").references(() => categories.categoryId),
    date: timestamp("date").notNull(),
    totalPrice: numeric("total_price", { precision: 10, scale: 2 }).notNull(),
    taxAndServ: numeric("tax_and_serv", { precision: 10, scale: 2 }).notNull(),
    currency: char("currency", { length: 3 }).notNull(),
    description: text("description"),
    source: varchar("source", { length: 50 }),
    localeId: integer("locale_id").notNull().references(() => locales.localeId),
  },
  (table) => ({
    merchantIdIndex: index("idx_receipts_merchant_id").on(table.merchantId),
    userIdIndex: index("idx_receipts_user_id").on(table.userId),
    categoryIdIndex: index("idx_receipts_category_id").on(table.categoryId),
    localeIdIndex: index("idx_receipts_locale_id").on(table.localeId),
  })
);

export const products = createTable(
  "products",
  {
    productId: serial("product_id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
  }
);

export const lineItems = createTable(
  "line_items",
  {
    lineItemId: serial("line_item_id").primaryKey(),
    receiptId: integer("receipt_id").notNull().references(() => receipts.receiptId),
    productId: integer("product_id").notNull().references(() => products.productId),
    itemPrice: numeric("item_price", { precision: 10, scale: 2 }).notNull(),
    categoryId: integer("category_id").references(() => categories.categoryId),
    quantity: integer("quantity").notNull(),
    totalPrice: numeric("total_price", { precision: 10, scale: 2 }).notNull(),
  },
  (table) => ({
    receiptIdIndex: index("idx_line_items_receipt_id").on(table.receiptId),
    productIdIndex: index("idx_line_items_product_id").on(table.productId),
  })
);

export const modifiers = createTable(
  "modifiers",
  {
    modifierId: serial("modifier_id").primaryKey(),
    lineItemId: integer("line_item_id").notNull().references(() => lineItems.lineItemId),
    name: varchar("name", { length: 50 }).notNull().unique(),
    value: doublePrecision("value"),
  },
  (table) => ({
    lineItemIdIndex: index("idx_modifiers_line_item_id").on(table.lineItemId),
  })
);