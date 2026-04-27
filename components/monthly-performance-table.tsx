import { Card } from "@/components/ui/card";

interface PerformanceData {
  month: string;
  adSpend: number;
  leads: number;
  calls: number;
  qualifiedCalls: number;
  closedDeals: number;
  cpl: number;
  costPerCall: number;
  closeRate: number;
}

interface MonthlyPerformanceTableProps {
  data: PerformanceData[];
}

export function MonthlyPerformanceTable({ data }: MonthlyPerformanceTableProps) {
  const lastRow = data[data.length - 1];

  return (
    <Card className="p-6 border-0 shadow-sm bg-white overflow-x-auto">
      <h3 className="text-sm font-bold text-gray-900 mb-4">MONTHLY PERFORMANCE OVERVIEW</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-900 bg-gray-900 text-white">
              <th className="px-4 py-3 text-left font-bold">Month</th>
              <th className="px-4 py-3 text-right font-bold">Ad Spend</th>
              <th className="px-4 py-3 text-right font-bold">Leads</th>
              <th className="px-4 py-3 text-right font-bold">Calls</th>
              <th className="px-4 py-3 text-right font-bold">Qualified Calls</th>
              <th className="px-4 py-3 text-right font-bold">Closed Deals</th>
              <th className="px-4 py-3 text-right font-bold">CPL</th>
              <th className="px-4 py-3 text-right font-bold">Cost per Call</th>
              <th className="px-4 py-3 text-right font-bold">Close Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const isLastRow = row === lastRow;
              const bgColor = isLastRow ? "bg-green-50" : index % 2 === 0 ? "bg-white" : "bg-gray-50";

              return (
                <tr key={row.month} className={`border-b border-gray-200 ${bgColor}`}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{row.month}</td>
                  <td className="px-4 py-3 text-right text-gray-700">${row.adSpend.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.leads.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.calls}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.qualifiedCalls}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.closedDeals}</td>
                  <td className="px-4 py-3 text-right text-gray-700">${row.cpl.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">${row.costPerCall.toFixed(2)}</td>
                  <td className="px-4 py-3 text-right text-gray-700">{row.closeRate.toFixed(2)}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
