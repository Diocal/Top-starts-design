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

interface ChannelStatsProps {
  stats: {
    title: string;
    data: Array<{ day: number; value: number }>;
    color: string;
    change: number;
    percentageChange: number;
  }[];
}

export default function ChannelStats({ stats }: ChannelStatsProps) {
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-gray-200 mb-6">Channel stats</h3>
      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-xl p-6 shadow-lg overflow-hidden"
          >
            {/* Título y estadísticas clave */}
            <div className="flex justify-between items-center mb-4">
              <h4
                className="text-[18px] font-semibold text-gray-300"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  color: "hsl(var(--subtle-light))",
                  letterSpacing: "0.2px",
                  marginBottom: "-10px",
                }}
              >
                {stat.title}
              </h4>

              <div className="flex flex-col items-end">
                <div className="flex items-center space-x-2">
                  <img
                    src={stat.change > 0 ? "/ArrowUp.svg" : "/ArrowDown.svg"}
                    alt={stat.change > 0 ? "Arrow Up" : "Arrow Down"}
                    className="w-4 h-4"
                  />
                  <p
                    className={`text-[21px] font-bold ${
                      stat.change > 0 ? "text-[#60CF97]" : "text-[#E97575]"
                    }`}
                  >
                    {`${Math.abs(Math.round(stat.change / 1000))}k`}
                  </p>
                </div>
                <p
                  className={`text-sm font-medium mt-1 ${
                    stat.percentageChange > 0
                      ? "text-[#60CF97]"
                      : "text-[#E97575]"
                  }`}
                >
                  {stat.percentageChange > 0
                    ? `+${stat.percentageChange}%`
                    : `${stat.percentageChange}%`}
                </p>
              </div>
            </div>

            {/* Gráfico */}
            <div className="relative" style={{ marginLeft: "-20%" }}>
              <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={stat.data}>
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
                        stopColor={stat.change > 0 ? "#60CF97" : "#E97575"}
                        stopOpacity={0.6}
                      />
                      <stop
                        offset="95%"
                        stopColor={stat.change > 0 ? "#60CF97" : "#E97575"}
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
                    domain={[0, 10000]} // Rango uniforme para todos los gráficos
                    tick={{ fill: "#666", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) =>
                      value >= 1000 ? `${value / 1000}K` : value
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
                    stroke={stat.change > 0 ? "#60CF97" : "#E97575"}
                    strokeWidth={2}
                    fill={`url(#color${index})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
