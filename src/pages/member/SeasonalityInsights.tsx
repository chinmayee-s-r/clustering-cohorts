import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, TrendingUp, AlertTriangle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip, ResponsiveContainer, Cell, LineChart, Line, CartesianGrid } from "recharts";

const revenueData = [
  { month: "Mar", revenue: 6.5 }, { month: "Apr", revenue: 6.1 }, { month: "May", revenue: 6.8 },
  { month: "Jun", revenue: 7.2 }, { month: "Jul", revenue: 8.0 }, { month: "Aug", revenue: 9.1 },
  { month: "Sep", revenue: 10.3 }, { month: "Oct", revenue: 18.6 }, { month: "Nov", revenue: 16.2 },
  { month: "Dec", revenue: 9.4 }, { month: "Jan", revenue: 7.0 }, { month: "Feb", revenue: 6.4 },
];

const inventoryData = [
  { month: "Mar", value: 3 }, { month: "Apr", value: 3.5 }, { month: "May", value: 5 },
  { month: "Jun", value: 8 }, { month: "Jul", value: 14 }, { month: "Aug", value: 18 },
  { month: "Sep", value: 22 }, { month: "Oct", value: 15 }, { month: "Nov", value: 8 },
  { month: "Dec", value: 5 }, { month: "Jan", value: 3 }, { month: "Feb", value: 3 },
];

const metrics = [
  { label: "Seasonality Strength", value: "High", color: "accent" },
  { label: "Peak-to-offseason ratio", value: "2.9x", color: "accent" },
  { label: "Avg monthly inflow", value: "₹9.1L", color: "info" },
  { label: "Est. pre-season WC gap", value: "₹42L", color: "warning" },
];

export default function SeasonalityInsights() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Your Cash Flow Cycle</h1>

        <div className="grid md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <Card key={m.label}>
              <CardContent className="p-5 text-center">
                <p className="text-xs text-muted-foreground mb-1">{m.label}</p>
                <p className="text-2xl font-bold">{m.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-base">Monthly Revenue Trend (₹ Lakhs)</CardTitle></CardHeader>
            <CardContent>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} barSize={28}>
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <RTooltip formatter={(v: number) => [`₹${v}L`, "Revenue"]} />
                    <Bar dataKey="revenue" radius={[4, 4, 0, 0]}>
                      {revenueData.map((e, i) => (
                        <Cell key={i} fill={e.month === "Oct" || e.month === "Nov" ? "hsl(166, 72%, 40%)" : "hsl(215, 20%, 75%)"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Inventory Build-up Window (₹ Lakhs)</CardTitle></CardHeader>
            <CardContent>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inventoryData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <RTooltip formatter={(v: number) => [`₹${v}L`, "Inventory"]} />
                    <Line type="monotone" dataKey="value" stroke="hsl(166, 72%, 40%)" strokeWidth={2} dot={{ r: 3 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-destructive/30 bg-destructive/5">
          <CardContent className="p-5 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Cash Crunch Risk: Highest probability in Aug–Sep</p>
              <p className="text-xs text-muted-foreground mt-1">During inventory build-up, cash reserves dip significantly while revenue hasn't peaked yet.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-info/30 bg-info/5">
          <CardContent className="p-5 flex items-start gap-3">
            <Info className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm leading-relaxed">
                <strong>Insight:</strong> Traditional fixed EMI from month 1 increases default risk in off-season.
                A seasonal repayment structure is recommended — lower EMIs during Aug–Sep, higher during Oct–Dec peak.
              </p>
            </div>
          </CardContent>
        </Card>

        <Button variant="accent" size="lg" onClick={() => navigate("/member/cohorts")}>
          Browse Eligible Cohorts
        </Button>
      </div>
    </Layout>
  );
}
