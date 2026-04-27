import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KPICardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  vsLastMonth: number;
  trend: "up" | "down";
}

export function KPICard({ icon, label, value, vsLastMonth, trend }: KPICardProps) {
  const isPositive = trend === "up";
  const trendColor = isPositive ? "text-green-600" : "text-red-600";
  const trendBg = isPositive ? "bg-green-50" : "bg-red-50";

  return (
    <Card className="p-4 flex flex-col gap-3 border-0 shadow-sm bg-white">
      <div className="flex items-center justify-between">
        <span className="text-gray-600 text-sm font-medium">{label}</span>
        <div className="text-blue-600">{icon}</div>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
      </div>
      
      <div className={`flex items-center gap-1 text-xs font-medium ${trendColor}`}>
        <TrendingUp size={14} />
        <span>{vsLastMonth}%</span>
        <span className="text-gray-500 font-normal">vs Last Month</span>
      </div>
    </Card>
  );
}
