import { Card } from "@/components/ui/card";

interface WeeklyData {
  week: string;
  adSpend: number;
  leads: number;
  cpl: number;
  calls: number;
  qualifiedCalls: number;
}

interface WeeklyPerformanceTableProps {
  data: WeeklyData[];
}

export function WeeklyPerformanceTable({ data }: WeeklyPerformanceTableProps) {
  return (
    <Card className="p-6 border-0 shadow-sm bg-white overflow-x-auto">
      <h3 className="text-sm font-bold text-white mb-4 bg-gray-900 -m-6 px-6 py-3">
        WEEKLY PERFORMANCE (This Month)
      </h3>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-3 text-left font-semibold text-gray-900">Week</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Ad Spend</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Leads</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">CPL</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Calls</th>
              <th className="px-4 py-3 text-right font-semibold text-gray-900">Qualified Calls</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.week} className={`border-b border-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <td className="px-4 py-3 text-gray-900 font-medium">{row.week}</td>
                <td className="px-4 py-3 text-right text-gray-700">${row.adSpend.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.leads.toLocaleString()}</td>
                <td className="px-4 py-3 text-right text-gray-700">${row.cpl.toFixed(2)}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.calls}</td>
                <td className="px-4 py-3 text-right text-gray-700">{row.qualifiedCalls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
