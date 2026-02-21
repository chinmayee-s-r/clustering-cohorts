import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, X, Bell, TrendingUp, Target, FileText } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip, ResponsiveContainer, Cell } from "recharts";

const revenueData = [
  { month: "Mar", revenue: 6.5, isPeak: false },
  { month: "Apr", revenue: 6.1, isPeak: false },
  { month: "May", revenue: 6.8, isPeak: false },
  { month: "Jun", revenue: 7.2, isPeak: false },
  { month: "Jul", revenue: 8.0, isPeak: false },
  { month: "Aug", revenue: 9.1, isPeak: false },
  { month: "Sep", revenue: 10.3, isPeak: false },
  { month: "Oct", revenue: 18.6, isPeak: true },
  { month: "Nov", revenue: 16.2, isPeak: true },
  { month: "Dec", revenue: 9.4, isPeak: false },
  { month: "Jan", revenue: 7.0, isPeak: false },
  { month: "Feb", revenue: 6.4, isPeak: false },
];

const checklist = [
  { label: "PAN", done: true },
  { label: "GSTIN", done: true },
  { label: "Bank statement upload", done: false },
  { label: "GST summary upload", done: true },
  { label: "ITR summary", done: false },
];

export default function MemberDashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome, Rajesh Light House Traders</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="accent">Seasonal Pattern: Festival Retail</Badge>
            <Badge variant="secondary">Location: Delhi</Badge>
            <Badge variant="secondary">Business Type: Wholesale + Retail</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Loan Goal */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">Loan Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between"><span className="text-muted-foreground">Working Capital</span><span className="font-semibold">₹60,00,000</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Purpose</span><span className="font-semibold">Pre-season inventory build (Jul–Sep)</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Preferred Tenure</span><span className="font-semibold">18 months</span></div>
            </CardContent>
          </Card>

          {/* Profile Completion */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-warning/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-warning" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                <CardTitle className="text-lg">Profile Completion</CardTitle>
                <span className="text-sm font-bold text-warning">72%</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={72} className="h-2" />
              <div className="space-y-2">
                {checklist.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm">
                    {item.done ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <X className="h-4 w-4 text-destructive" />
                    )}
                    <span className={item.done ? "text-foreground" : "text-muted-foreground"}>{item.label}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" onClick={() => navigate("/member/profile")}>
                Complete Profile
              </Button>
            </CardContent>
          </Card>

          {/* Seasonality Chart */}
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              <div>
                <CardTitle className="text-lg">Seasonality Summary (Last 12 Months)</CardTitle>
                <p className="text-sm text-muted-foreground mt-0.5">Peak months: Oct–Nov · Off-season dip: Jan–Apr</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} barSize={32}>
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} unit="L" />
                    <RTooltip formatter={(v: number) => [`₹${v}L`, "Revenue"]} />
                    <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                      {revenueData.map((entry, i) => (
                        <Cell key={i} fill={entry.isPeak ? "hsl(166, 72%, 40%)" : "hsl(215, 20%, 75%)"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="accent" onClick={() => navigate("/member/cohorts")}>
                  View Eligible Cohorts
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Bell className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Diwali Retail Cohort 2026 – Delhi is 78% filled. Estimated close: 3 days.</p>
              <p className="text-xs text-muted-foreground mt-1">Join now for the best partner bid coverage.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
