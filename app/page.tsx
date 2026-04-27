"use client";

import {
  DollarSign,
  Users,
  Phone,
  CheckCircle,
  Target,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { KPICard } from "@/components/kpi-card";
import { AdSpendVsLeadsChart } from "@/components/ad-spend-vs-leads-chart";
import { CPLTrendChart } from "@/components/cpl-trend-chart";
import { ConversionFunnel } from "@/components/conversion-funnel";
import { LeadSourceChart } from "@/components/lead-source-chart";
import { MonthlyPerformanceTable } from "@/components/monthly-performance-table";
import { TopCampaignsTable } from "@/components/top-campaigns-table";
import { WeeklyPerformanceTable } from "@/components/weekly-performance-table";
import { NotesSection } from "@/components/notes-section";
import { dashboardData } from "@/lib/dashboard-data";

export default function Dashboard() {
  const { kpis, adSpendVsLeads, cplTrend, conversionFunnel, leadSource, monthlyPerformance, topCampaigns, weeklyPerformance, notes, month, lastUpdated } = dashboardData;

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-1">MARKETING KPI DASHBOARD</h1>
          <p className="text-gray-300">Monthly Overview</p>
        </div>
      </header>

      {/* Top Controls */}
      <div className="bg-white border-b border-gray-200 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-600 mb-1">Month</label>
              <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white">
                <option>{month}</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-xs font-semibold text-gray-600 mb-1">Client / Account</label>
              <select className="px-3 py-2 border border-gray-300 rounded text-sm bg-white">
                <option>Painfree Planning</option>
              </select>
            </div>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p className="font-semibold">Last Updated:</p>
            <p>{lastUpdated}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 mb-8">
          <KPICard
            icon={<DollarSign size={24} />}
            label="TOTAL AD SPEND"
            value={`$${kpis.totalAdSpend.value.toLocaleString()}`}
            vsLastMonth={kpis.totalAdSpend.vsLastMonth}
            trend={kpis.totalAdSpend.trend}
          />
          <KPICard
            icon={<Users size={24} />}
            label="TOTAL LEADS"
            value={kpis.totalLeads.value.toLocaleString()}
            vsLastMonth={kpis.totalLeads.vsLastMonth}
            trend={kpis.totalLeads.trend}
          />
          <KPICard
            icon={<Phone size={24} />}
            label="TOTAL CALLS"
            value={kpis.totalCalls.value}
            vsLastMonth={kpis.totalCalls.vsLastMonth}
            trend={kpis.totalCalls.trend}
          />
          <KPICard
            icon={<CheckCircle size={24} />}
            label="QUALIFIED CALLS"
            value={kpis.qualifiedCalls.value}
            vsLastMonth={kpis.qualifiedCalls.vsLastMonth}
            trend={kpis.qualifiedCalls.trend}
          />
          <KPICard
            icon={<Target size={24} />}
            label="CPL (Cost per Lead)"
            value={`$${kpis.cpl.value.toFixed(2)}`}
            vsLastMonth={kpis.cpl.vsLastMonth}
            trend={kpis.cpl.trend}
          />
          <KPICard
            icon={<TrendingUp size={24} />}
            label="COST PER CALL"
            value={`$${kpis.costPerCall.value.toFixed(2)}`}
            vsLastMonth={kpis.costPerCall.vsLastMonth}
            trend={kpis.costPerCall.trend}
          />
          <KPICard
            icon={<TrendingDown size={24} />}
            label="CLOSE RATE"
            value={`${kpis.closeRate.value.toFixed(2)}%`}
            vsLastMonth={kpis.closeRate.vsLastMonth}
            trend={kpis.closeRate.trend}
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <AdSpendVsLeadsChart data={adSpendVsLeads} />
          </div>
          <div>
            <CPLTrendChart data={cplTrend} />
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <ConversionFunnel data={conversionFunnel} />
          </div>
          <div className="lg:col-span-2">
            <LeadSourceChart data={leadSource} />
          </div>
        </div>

        {/* Monthly Performance Table */}
        <div className="mb-6">
          <MonthlyPerformanceTable data={monthlyPerformance} />
        </div>

        {/* Tables Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <TopCampaignsTable data={topCampaigns} />
          <WeeklyPerformanceTable data={weeklyPerformance} />
        </div>

        {/* Notes Section */}
        <div>
          <NotesSection notes={notes} />
        </div>
      </div>
    </main>
  );
}
