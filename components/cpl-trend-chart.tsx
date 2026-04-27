"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

interface ChartData {
  month: string;
  cpl: number;
}

interface CPLTrendChartProps {
  data: ChartData[];
}

export function CPLTrendChart({ data }: CPLTrendChartProps) {
  return (
    <Card className="p-6 border-0 shadow-sm bg-white">
      <h3 className="text-sm font-bold text-gray-900 mb-4">CPL (COST PER LEAD) TREND</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={["dataMin - 0.5", "dataMax + 0.5"]} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#fff", 
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
            formatter={(value) => {
              if (typeof value === 'number') {
                return `$${value.toFixed(2)}`;
              }
              return value;
            }}
          />
          <Line 
            type="monotone" 
            dataKey="cpl" 
            stroke="#22c55e" 
            strokeWidth={2}
            dot={{ fill: "#22c55e", r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
