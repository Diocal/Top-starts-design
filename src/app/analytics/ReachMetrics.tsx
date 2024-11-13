"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

interface ReachMetricsProps {
  metrics: {
    title: string;
    data: Array<{ day: number; value: number }>;
    color: string;
    change: number;
    percentageChange: number;
  }[];
}

export default function ReachMetrics({ metrics }: ReachMetricsProps) {
  return (
    <div className="mt-8 space-y-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-[#121212] rounded-xl p-6 shadow-lg overflow-hidden"
        >
          {/* Header: Title and stats */}
          <div className="flex justify-between items-center mb-4">
            {/* Title */}
            <h4
              className="text-[18px] font-semibold text-gray-300"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                color: "hsl(var(--subtle-light))",
                letterSpacing: "0.2px",
              }}
            >
              {metric.title}
            </h4>

            {/* Stats: Arrow, value, and percentage */}
            <div className="flex flex-col items-end">
              <div className="flex items-center space-x-2">
                <img
                  src={metric.change > 0 ? "/ArrowUp.svg" : "/ArrowDown.svg"}
                  alt={metric.change > 0 ? "Arrow Up" : "Arrow Down"}
                  className="w-4 h-4"
                />
                <p
                  className={`text-[18px] font-bold ${
                    metric.change > 0 ? "text-[#60CF97]" : "text-[#E97575]"
                  }`}
                >
                  {metric.change > 0
                    ? `+${metric.change}`
                    : `${metric.change}`}
                </p>
              </div>
              <p
                className={`text-sm font-medium mt-1 ${
                  metric.percentageChange > 0
                    ? "text-[#60CF97]"
                    : "text-[#E97575]"
                }`}
              >
                {metric.percentageChange > 0
                  ? `+${metric.percentageChange}%`
                  : `${metric.percentageChange}%`}
              </p>
            </div>
          </div>

          {/* Chart */}

          <ResponsiveContainer width="120%" height={150} style={{ marginLeft: "-20%" }}>
            <AreaChart data={metric.data}>
              <defs>
                <linearGradient
                  id={`color${index}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={metric.color}
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="95%"
                    stopColor={metric.color}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255, 255, 255, 0.1)"
                vertical={false}
              />
              <XAxis
                dataKey="day"
                tick={{ fill: "#666", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: "#666", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) =>
                  value >= 1000 ? `${value / 1000}k` : value
                }
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1E1E1E",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                }}
                labelStyle={{ color: "#aaa" }}
                cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
              />
              <Area
                type="basis"
                dataKey="value"
                stroke={metric.color}
                strokeWidth={2}
                fill={`url(#color${index})`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
}
