import React, { useState } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { HelpCircle } from "lucide-react";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

interface GraphType {
  title: string;
  description: string;
  ChartComponent: React.FC;
}

const generateLineData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    name: String.fromCharCode(65 + i),
    value: Math.floor(Math.random() * 100),
  }));
};

const generateScatterData = (count: number) => {
  return Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  }));
};

const generateRadarData = () => [
  { subject: "Math", A: 120, B: 110, fullMark: 150 },
  { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
  { subject: "English", A: 86, B: 130, fullMark: 150 },
  { subject: "Geography", A: 99, B: 100, fullMark: 150 },
  { subject: "Physics", A: 85, B: 90, fullMark: 150 },
  { subject: "History", A: 65, B: 85, fullMark: 150 },
];

const LineChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <LineChart data={generateLineData(5)}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);

const BarChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={generateLineData(5)}>
      <Bar dataKey="value" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  </ResponsiveContainer>
);

const PieChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <PieChart>
      <Pie
        data={generateLineData(4)}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {generateLineData(4).map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

const AreaChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={generateLineData(5)}>
      <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </AreaChart>
  </ResponsiveContainer>
);

const ScatterChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <ScatterChart>
      <XAxis type="number" dataKey="x" name="x" />
      <YAxis type="number" dataKey="y" name="y" />
      <Scatter name="Values" data={generateScatterData(50)} fill="#8884d8" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
    </ScatterChart>
  </ResponsiveContainer>
);

const RadarChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={generateRadarData()}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Student A"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      <Radar
        name="Student B"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.6}
      />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

const graphicTypes: GraphType[] = [
  {
    title: "Time Series",
    description: "Track data changes over time to identify trends.",
    ChartComponent: LineChartComponent,
  },
  {
    title: "Bar Charts",
    description: "Compare quantities across different categories.",
    ChartComponent: BarChartComponent,
  },
  {
    title: "Pie Charts",
    description: "Show composition and proportion of data categories.",
    ChartComponent: PieChartComponent,
  },
  {
    title: "Area Charts",
    description: "Visualize quantitative data over a continuous interval.",
    ChartComponent: AreaChartComponent,
  },
  {
    title: "Scatter Plots",
    description: "Examine relationships between two variables.",
    ChartComponent: ScatterChartComponent,
  },
  {
    title: "Radar Charts",
    description: "Display multivariate data in a two-dimensional chart.",
    ChartComponent: RadarChartComponent,
  },
];

const GraphCard: React.FC<GraphType> = ({
  title,
  description,
  ChartComponent,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-300 ease-in-out ${isHovered ? "shadow-lg" : "hover:shadow-md"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-6">
        <CardTitle className="mb-2 text-xl font-bold">{title}</CardTitle>
        <p className="text-sm text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="p-4">
        <ChartComponent />
      </CardContent>
    </Card>
  );
};

const GraphsDashboard: React.FC = () => {
  return (
    <div className="space-y-8 p-8">
      <div className="grid grid-cols-2 gap-8">
        {graphicTypes.map((type, index) => (
          <GraphCard key={index} {...type} />
        ))}
      </div>
    </div>
  );
};

export default GraphsDashboard;
