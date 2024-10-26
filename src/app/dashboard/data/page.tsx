"use client";
import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Input } from "~/components/ui/input";
import { ScrollArea } from "~/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { HelpCircle } from "lucide-react";
// Define interfaces for our data structures

interface Dataset {
  id: number;
  type: string;
  color: string;
  description: string;
  additionalInfo: string;
  comingSoon?: boolean;
  tables?: Table[];
  flag: string;
  datapoints: number;
  dateRange: string; // New field for date range\
  volume: string;
  dataQuality: string;
  availFormats: string;
  coverage: string;
  history: string;
}

interface Table {
  name: string;
  columns: Column[];
}

interface DatasetProps {
  dataset: Dataset;
  isExpanded: boolean;
  onToggle: () => void;
}

interface Column {
  name: string;
  type: string;
  example: string;
}

// Mock data for datasets
const MOCK_DATASETS: Dataset[] = [
  {
    id: 1,
    type: "Receipts",
    color: "green",
    dateRange: "Weekly 15 Dec - 22 Dec",
    description:
      "Analyze detailed receipt data from various merchants and users.",
    additionalInfo:
      "This dataset provides insights into purchasing patterns, popular products, and spending habits.",
    tables: [
      {
        name: "[Sample] Target(Ecommerce Data-G - S).csv",
        columns: [
          { name: "store_name", type: "String", example: "Target" },
          {
            name: "store_location",
            type: "String",
            example: "175 W Army Trail Rd, Glendale Heights, IL 60139-1971",
          },
          { name: "zipcode", type: "Integer", example: "60139" },
          { name: "category", type: "String", example: "Grocery" },
          {
            name: "sub_category",
            type: "String",
            example: "Halloween Candy & Treats",
          },
          { name: "brand", type: "String", example: "Hershey" },
          {
            name: "product_title",
            type: "String",
            example: "Hershey's Halloween Shapes Variety Pack - 45pc/22.55oz",
          },
          {
            name: "product_description",
            type: "String",
            example:
              "Get ready for your Halloween parties and neighborhood tri...",
          },
          {
            name: "product_url",
            type: "String",
            example:
              "https://www.target.com/p/hershey-39-s-halloween-shapes-va...",
          },
          { name: "upc", type: "Integer", example: "34000952526" },
          { name: "weight", type: "String", example: "22.55 Oz" },
          { name: "regular_price", type: "Float", example: "11.99" },
          { name: "sale_price", type: "Float", example: "0" },
          {
            name: "image_url",
            type: "String",
            example:
              "https://target.scene7.com/is/image/Target/GUEST_2b...b6dd-3...",
          },
        ],
      },
      {
        name: "[Sample] Macys(Ecommerce Data - F).csv",
        columns: [
          { name: "store_name", type: "String", example: "Macy's" },
          { name: "product_id", type: "String", example: "13617245" },
          {
            name: "product_title",
            type: "String",
            example:
              "Charter Club Damask Designs Printed Lattice King Duvet Cover",
          },
          { name: "category", type: "String", example: "Bed & Bath" },
          { name: "price", type: "Float", example: "170.00" },
          { name: "sale_price", type: "Float", example: "59.99" },
          { name: "availability", type: "String", example: "In Stock" },
        ],
      },
      {
        name: "[Sample] Walmart Ecommerce Data.csv",
        columns: [
          { name: "store_name", type: "String", example: "Walmart" },
          { name: "item_id", type: "String", example: "551215441" },
          {
            name: "product_name",
            type: "String",
            example: "Apple AirPods Pro (2nd Generation) with MagSafe Case",
          },
          { name: "current_price", type: "Float", example: "199.00" },
          { name: "category", type: "String", example: "Electronics" },
          { name: "stock_status", type: "String", example: "In stock" },
        ],
      },
    ],
    flag: "🇮🇩",
    datapoints: 100000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 10,
    type: "Receipts",
    color: "green",
    dateRange: "Montly 10 Sept - 10 Oct",
    description:
      "Analyze detailed receipt data from various merchants and users.",
    additionalInfo:
      "This dataset provides insights into purchasing patterns, popular products, and spending habits.",
    tables: [
      {
        name: "[Sample] Target(Ecommerce Data-G - S).csv",
        columns: [
          { name: "store_name", type: "String", example: "Target" },
          {
            name: "store_location",
            type: "String",
            example: "175 W Army Trail Rd, Glendale Heights, IL 60139-1971",
          },
          { name: "zipcode", type: "Integer", example: "60139" },
          { name: "category", type: "String", example: "Grocery" },
          {
            name: "sub_category",
            type: "String",
            example: "Halloween Candy & Treats",
          },
          { name: "brand", type: "String", example: "Hershey" },
          {
            name: "product_title",
            type: "String",
            example: "Hershey's Halloween Shapes Variety Pack - 45pc/22.55oz",
          },
          {
            name: "product_description",
            type: "String",
            example:
              "Get ready for your Halloween parties and neighborhood tri...",
          },
          {
            name: "product_url",
            type: "String",
            example:
              "https://www.target.com/p/hershey-39-s-halloween-shapes-va...",
          },
          { name: "upc", type: "Integer", example: "34000952526" },
          { name: "weight", type: "String", example: "22.55 Oz" },
          { name: "regular_price", type: "Float", example: "11.99" },
          { name: "sale_price", type: "Float", example: "0" },
          {
            name: "image_url",
            type: "String",
            example:
              "https://target.scene7.com/is/image/Target/GUEST_2b...b6dd-3...",
          },
        ],
      },
      {
        name: "[Sample] Macys(Ecommerce Data - F).csv",
        columns: [
          { name: "store_name", type: "String", example: "Macy's" },
          { name: "product_id", type: "String", example: "13617245" },
          {
            name: "product_title",
            type: "String",
            example:
              "Charter Club Damask Designs Printed Lattice King Duvet Cover",
          },
          { name: "category", type: "String", example: "Bed & Bath" },
          { name: "price", type: "Float", example: "170.00" },
          { name: "sale_price", type: "Float", example: "59.99" },
          { name: "availability", type: "String", example: "In Stock" },
        ],
      },
      {
        name: "[Sample] Walmart Ecommerce Data.csv",
        columns: [
          { name: "store_name", type: "String", example: "Walmart" },
          { name: "item_id", type: "String", example: "551215441" },
          {
            name: "product_name",
            type: "String",
            example: "Apple AirPods Pro (2nd Generation) with MagSafe Case",
          },
          { name: "current_price", type: "Float", example: "199.00" },
          { name: "category", type: "String", example: "Electronics" },
          { name: "stock_status", type: "String", example: "In stock" },
        ],
      },
    ],
    flag: "🇮🇩",
    datapoints: 1000000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 15,
    type: "Product",
    color: "green",
    dateRange: "Montly - 10 Dec - 10 Jan",
    description: "Analyze detailed Product purchased data from various users",
    additionalInfo:
      "This dataset provides insights into purchasing patterns, popular products, and spending habits.",
    tables: [
      {
        name: "[Sample] Target(Ecommerce Data-G - S).csv",
        columns: [
          { name: "store_name", type: "String", example: "Target" },
          {
            name: "store_location",
            type: "String",
            example: "175 W Army Trail Rd, Glendale Heights, IL 60139-1971",
          },
          { name: "zipcode", type: "Integer", example: "60139" },
          { name: "category", type: "String", example: "Grocery" },
          {
            name: "sub_category",
            type: "String",
            example: "Halloween Candy & Treats",
          },
          { name: "brand", type: "String", example: "Hershey" },
          {
            name: "product_title",
            type: "String",
            example: "Hershey's Halloween Shapes Variety Pack - 45pc/22.55oz",
          },
          {
            name: "product_description",
            type: "String",
            example:
              "Get ready for your Halloween parties and neighborhood tri...",
          },
          {
            name: "product_url",
            type: "String",
            example:
              "https://www.target.com/p/hershey-39-s-halloween-shapes-va...",
          },
          { name: "upc", type: "Integer", example: "34000952526" },
          { name: "weight", type: "String", example: "22.55 Oz" },
          { name: "regular_price", type: "Float", example: "11.99" },
          { name: "sale_price", type: "Float", example: "0" },
          {
            name: "image_url",
            type: "String",
            example:
              "https://target.scene7.com/is/image/Target/GUEST_2b...b6dd-3...",
          },
        ],
      },
      {
        name: "[Sample] Macys(Ecommerce Data - F).csv",
        columns: [
          { name: "store_name", type: "String", example: "Macy's" },
          { name: "product_id", type: "String", example: "13617245" },
          {
            name: "product_title",
            type: "String",
            example:
              "Charter Club Damask Designs Printed Lattice King Duvet Cover",
          },
          { name: "category", type: "String", example: "Bed & Bath" },
          { name: "price", type: "Float", example: "170.00" },
          { name: "sale_price", type: "Float", example: "59.99" },
          { name: "availability", type: "String", example: "In Stock" },
        ],
      },
      {
        name: "[Sample] Walmart Ecommerce Data.csv",
        columns: [
          { name: "store_name", type: "String", example: "Walmart" },
          { name: "item_id", type: "String", example: "551215441" },
          {
            name: "product_name",
            type: "String",
            example: "Apple AirPods Pro (2nd Generation) with MagSafe Case",
          },
          { name: "current_price", type: "Float", example: "199.00" },
          { name: "category", type: "String", example: "Electronics" },
          { name: "stock_status", type: "String", example: "In stock" },
        ],
      },
    ],
    flag: "🇮🇩",
    datapoints: 2000000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 2,
    type: "Instagram",
    color: "pink",
    dateRange: "Weekly - 15-22 December",
    description:
      "Manage and process collections of images for computer vision tasks",
    additionalInfo:
      "Supports JPEG, PNG, and TIFF formats. Includes tools for image preprocessing and augmentation.",
    comingSoon: true,
    flag: "🌎",
    datapoints: 500000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 3,
    type: "TikTok",
    color: "purple",
    dateRange: "Weekly - 15-22 December", // New field

    description: "Analyze short-form video content and user engagement",
    additionalInfo:
      "Includes tools for trend analysis, content categorization, and user behavior insights.",
    comingSoon: true,

    flag: "🇨🇳",
    datapoints: 2000000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 4,
    type: "Navigation",
    color: "blue",
    dateRange: "Weekly - 15-22 December",

    description: "Work with GPS data and perform route optimization",
    additionalInfo:
      "Supports various GPS data formats. Includes tools for route planning and traffic analysis.",
    comingSoon: true,

    flag: "🇩🇪",
    datapoints: 750000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
  {
    id: 5,
    type: "Geospatial",
    color: "yellow",
    dateRange: "Weekly - 15-22 December",
    description: "Work with geographical data and perform spatial analysis",
    additionalInfo:
      "Supports GeoJSON, Shapefile, and KML formats. Includes tools for mapping, spatial queries, and distance calculations.",
    comingSoon: true,
    flag: "🇧🇷",
    datapoints: 1500000,
    volume: "150M",
    dataQuality: "98%",
    availFormats: ".json, .csv, a...",
    coverage: "1",
    history: "1",
  },
];

// Helper Functions
const formatDatapoints = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "K";
  return num.toString();
};

// Dataset Component
const Dataset: React.FC<DatasetProps> = ({ dataset, isExpanded, onToggle }) => {
  const [expandedTable, setExpandedTable] = useState<number | null>(null);

  const onToggleTable = (index: number, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedTable(expandedTable === index ? null : index);
  };

  const renderDatasetHeader = () => {
    const { type, color, description, flag, datapoints, dateRange } = dataset;

    return (
      <div className="flex items-center space-x-6">
        <div className="h-40 w-1/3 flex-shrink-0">
          <div
            className={`bg-${color}-100 flex h-full items-center justify-center rounded-lg`}
          >
            <span className="text-4xl">{type[0]}</span>
          </div>
        </div>
        <div className="flex-grow">
          <CardTitle className="mb-2 text-xl font-semibold">
            <span>{type} Dataset</span>
            <span className="ml-2 text-sm text-gray-500">{dateRange}</span>
          </CardTitle>
          <p className="mb-4 text-gray-600">{description}</p>
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <Button onClick={(e) => e.stopPropagation()}>
                Analyze Dataset
              </Button>
              <Button variant="outline" onClick={(e) => e.stopPropagation()}>
                Save
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {formatDatapoints(datapoints)} Datapoints
              </span>
              <span className="text-2xl">{flag}</span>
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderExpandedContent = () => {
    const {
      additionalInfo,
      volume,
      dataQuality,
      availFormats,
      coverage,
      history,
    } = dataset;

    return (
      <div className="mt-4 space-y-4">
        <div className="pt-4">
          <div className="flex items-center justify-between text-center">
            {[
              { label: "VOLUME", value: volume, unit: "records" },
              { label: "DATA QUALITY", value: dataQuality, unit: "Accuracy" },
              { label: "AVAIL. FORMATS", value: availFormats, unit: "File" },
              { label: "COVERAGE", value: coverage, unit: "Country" },
              { label: "HISTORY", value: history, unit: "days" },
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && <div className="h-12 w-px bg-gray-200" />}
                <div className="flex-1">
                  <h5 className="text-sm font-medium text-gray-500">
                    {item.label}
                  </h5>
                  <p className="text-lg font-semibold">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.unit}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div className="pt-4">
            <h4 className="mb-2 font-semibold">Information:</h4>
            <p className="text-gray-600">{additionalInfo}</p>
          </div>
        </div>
        {renderDataDictionary()}
      </div>
    );
  };

  const renderDataDictionary = () => {
    const { tables } = dataset;

    if (!tables || tables.length === 0) return null;

    return (
      <div className="pt-4">
        <h5 className="mb-2 font-semibold">Data Dictionary</h5>
        <div className="space-y-2">
          {tables.map((table, index) => (
            <div key={index} className="overflow-hidden rounded-md border">
              <div
                className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-2 hover:bg-gray-100"
                onClick={(e) => onToggleTable(index, e)}
              >
                <span>{table.name}</span>
                {expandedTable === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {expandedTable === index && (
                <div className="p-4" onClick={(e) => e.stopPropagation()}>
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-2 text-left">Attribute</th>
                        <th className="p-2 text-left">Type</th>
                        <th className="p-2 text-left">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.columns.map((column, colIndex) => (
                        <tr
                          key={colIndex}
                          className={
                            colIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="p-2">{column.name}</td>
                          <td className="p-2">{column.type}</td>
                          <td className="p-2">{column.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card
      className={`relative cursor-pointer transition-all duration-300 ease-in-out ${
        isExpanded ? "shadow-lg" : "hover:shadow-md"
      }`}
      onClick={onToggle}
    >
      <CardContent className="p-6">
        {renderDatasetHeader()}
        {isExpanded && renderExpandedContent()}
      </CardContent>
      {dataset.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-5 backdrop-blur-[2px] backdrop-filter">
          <span className="text-3xl font-bold text-gray-800">COMING SOON</span>
        </div>
      )}
    </Card>
  );
};

// DatasetsDashboard Component
const DatasetsDashboard: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const renderFilters = () => {
    return (
      <div className="flex flex-wrap gap-3 rounded-lg p-4 shadow-sm">
        {[
          {
            placeholder: "All Datasets",
            options: ["All Datasets", "One Time Payment", "Suscription"],
          },
          {
            placeholder: "All Types",
            options: MOCK_DATASETS.map((dataset) => dataset.type),
          },
          {
            placeholder: "Last Modified",
            options: ["Last Modified", "Name", "Size"],
          },
          {
            placeholder: "Filter Time Range",
            options: [
              "Last hour",
              "Last 24 hours",
              "Last 7 days",
              "Last 14 days",
              "Last 30 days",
              "Last 90 days",
            ],
          },
        ].map((selectData, index) => (
          <Select key={index}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder={selectData.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {selectData.options.map((option, optionIndex) => (
                <SelectItem
                  key={optionIndex}
                  value={option.toLowerCase().replace(/ /g, "_")}
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}
        <div className="relative flex-grow">
          <Input className="w-full pl-10" placeholder="Search datasets" />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
            size={18}
          />
        </div>
      </div>
    );
  };

  const renderDatasets = () => {
    return MOCK_DATASETS.map((dataset) => (
      <Dataset
        key={dataset.id}
        dataset={dataset}
        isExpanded={expandedId === dataset.id}
        onToggle={() => handleToggle(dataset.id)}
      />
    ));
  };

  return (
    <ScrollArea className="h-[90vh] flex-grow">
      <div className="flex w-full flex-col items-center justify-between border-b bg-white px-6 py-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Data</h1>
            <HelpCircle className="h-5 w-5 cursor-pointer text-gray-400" />
          </div>
          <div className="space-x-2">
            <Button variant="default">My Datasets</Button>
            <Button variant="outline">Give Feedback</Button>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col p-4">
        {renderFilters()}
        <div className="space-y-4 pr-4">{renderDatasets()}</div>
      </div>
    </ScrollArea>
  );
};

export default DatasetsDashboard;
