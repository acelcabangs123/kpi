"use client";

import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";

interface ChartData {
  month: string;
  adSpend: number;
  leads: number;
}

interface AdSpendVsLeadsChartProps {
  data: ChartData[];
}

export function AdSpendVsLeadsChart({ data }: AdSpendVsLeadsChartProps) {
  return (
    <Card className="p-6 border-0 shadow-sm bg-white">
      <h3 className="text-sm font-bold text-gray-900 mb-4">AD SPEND vs LEADS</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "#fff", 
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
            formatter={(value) => {
              if (typeof value === 'number') {
                return value.toLocaleString();
              }
              return value;
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="adSpend" fill="#22c55e" name="Ad Spend" />
          <Line yAxisId="right" type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={2} name="Leads" />
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
}
