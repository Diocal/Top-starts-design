"use client";
import React, { useState, useEffect } from "react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";
import { HelpCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import GraphsDashboard from "~/app/_components/graphsDashboard";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Card } from "~/components/ui/card";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface DataBundle {
  id: string;
  name: string;
}

interface ChartDataItem {
  name: string;
  value: number;
}

const mockDataBundles: DataBundle[] = [
  { id: "1", name: "Receipt Data Q2" },
  { id: "2", name: "Receipt Data Q3" },
  { id: "3", name: "Product Performance Q2" },
  { id: "4", name: "Marketing Campaign Results" },
];

const tabItems: string[] = ["Analysis", "Table", "Graphs"];

// Mock data for charts
const mockChartData: ChartDataItem[] = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 200 },
  { name: "Apr", value: 278 },
  { name: "May", value: 189 },
];

export default function Analysis(): JSX.Element {
  const [selectedBundle, setSelectedBundle] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("Analysis");

  useEffect(() => {
    // Fetch data or perform other side effects when the selected bundle changes
    if (selectedBundle) {
      console.log(`Fetching data for bundle: ${selectedBundle}`);
      // Implement your data fetching logic here
    }
  }, [selectedBundle]);

  const handleBundleSelect = (bundleId: string) => {
    setSelectedBundle(bundleId);
  };

  const handleExport = (type: "data" | "charts") => {
    console.log(`Exporting ${type}`);
    // Implement export logic here
  };

  return (
    <ScrollArea className="h-[90vh] flex-grow">
      <div className="space-y-4">
        <div className="flex w-full items-center justify-between border-b bg-white px-6 py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Analysis</h1>
            <HelpCircle className="h-5 w-5 cursor-pointer text-gray-400" />
          </div>
          <Select onValueChange={handleBundleSelect}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select a data bundle" />
            </SelectTrigger>
            <SelectContent>
              {mockDataBundles.map((bundle) => (
                <SelectItem key={bundle.id} value={bundle.id}>
                  {bundle.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="px-6">
          {selectedBundle ? (
            <>
              <Tabs defaultValue="charts" className="mt-6">
                <div className="flex w-full items-center justify-between">
                  <TabsList>
                    <TabsTrigger value="charts">Charts</TabsTrigger>
                    <TabsTrigger value="table">Data Table</TabsTrigger>
                    <TabsTrigger value="analysis">Analysis Tools</TabsTrigger>
                  </TabsList>
                  <div className="space-x-2">
                    <Button variant="default">Buy dataset</Button>
                    <Button variant="outline">Request access</Button>
                  </div>
                </div>

                <div className="mt-4">
                  <TabsContent value="charts">
                    <GraphsDashboard></GraphsDashboard>
                  </TabsContent>
                  <TabsContent value="table">
                    <Card className="p-4">
                      <h3 className="mb-2 text-lg font-semibold">Data Table</h3>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              Value
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {mockChartData.map((item) => (
                            <tr key={item.name}>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.name}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {item.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Card>
                  </TabsContent>
                  <TabsContent value="analysis">
                    <Card className="p-4">
                      <h3 className="mb-2 text-lg font-semibold">
                        Analysis Tools
                      </h3>
                      <p>Add your analysis tools and filters here.</p>
                    </Card>
                  </TabsContent>
                </div>
              </Tabs>
            </>
          ) : (
            <div className="py-10 text-center">
              <p className="text-xl text-gray-500">
                Please select a data set to view analysis.
              </p>
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
