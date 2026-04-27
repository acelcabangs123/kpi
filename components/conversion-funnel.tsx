"use client";

import { Card } from "@/components/ui/card";

interface FunnelData {
  name: string;
  value: number;
}

interface ConversionFunnelProps {
  data: FunnelData[];
}

const colors = ["#3b82f6", "#22c55e", "#f97316", "#ef4444"];
const conversionRates = [100, 7.16, 39.16, 39.29];

export function ConversionFunnel({ data }: ConversionFunnelProps) {
  const maxValue = data[0]?.value || 0;

  return (
    <Card className="p-6 border-0 shadow-sm bg-white">
      <h3 className="text-sm font-bold text-gray-900 mb-6">CONVERSION FUNNEL</h3>
      <div className="space-y-3">
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100;
          const width = Math.max(percentage, 15);
          
          return (
            <div key={item.name} className="flex flex-col gap-2">
              <div
                className="flex items-center justify-between text-white font-bold text-sm px-4 py-3 rounded transition-all"
                style={{
                  width: `${width}%`,
                  backgroundColor: colors[index],
                  minWidth: "100px",
                }}
              >
                <span>{item.value.toLocaleString()}</span>
                {index < data.length - 1 && <span>{conversionRates[index + 1]}%</span>}
              </div>
              <span className="text-xs text-gray-600 font-medium">{item.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
