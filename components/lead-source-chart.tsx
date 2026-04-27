"use client";

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

interface LeadSourceData {
  name: string;
  value: number;
}

interface LeadSourceChartProps {
  data: LeadSourceData[];
}

const COLORS = ["#3b82f6", "#f97316", "#22c55e", "#ef4444"];

export function LeadSourceChart({ data }: LeadSourceChartProps) {
  return (
    <Card className="p-6 border-0 shadow-sm bg-white">
      <h3 className="text-sm font-bold text-gray-900 mb-4">LEAD SOURCE BREAKDOWN</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, value }) => `${name} ${value}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
