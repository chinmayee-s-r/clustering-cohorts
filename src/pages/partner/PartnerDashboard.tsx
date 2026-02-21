import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Clock, IndianRupee } from "lucide-react";

const stats = [
  { label: "Cohorts Open for Bidding", value: "3", icon: Users },
  { label: "Bids Submitted", value: "5", icon: FileText },
  { label: "Pending Decisions", value: "2", icon: Clock },
  { label: "Total Pipeline", value: "₹18.4Cr", icon: IndianRupee },
];

const cohorts = [
  { name: "Diwali Retail Cohort 2026 – Delhi (Batch 1)", demand: "₹5Cr target", filled: "84%", close: "24 Feb 2026", tickets: "₹40L–₹90L", id: "diwali" },
  { name: "Wedding Services Cohort 2026 – NCR (Batch 2)", demand: "₹3Cr target", filled: "62%", close: "10 Mar 2026", tickets: "₹20L–₹50L", id: "wedding" },
  { name: "Monsoon Agri Inputs – Haryana (Batch 1)", demand: "₹4Cr target", filled: "48%", close: "15 Mar 2026", tickets: "₹30L–₹70L", id: "monsoon" },
];

export default function PartnerDashboard() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Partner Dashboard</h1>
        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center"><s.icon className="h-4 w-4 text-muted-foreground" /></div>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                <p className="text-2xl font-bold">{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card>
          <CardHeader><CardTitle className="text-base">Open Cohorts</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {cohorts.map((c) => (
              <div key={c.id} className="flex items-center justify-between py-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <div className="flex gap-4 text-xs text-muted-foreground mt-1">
                    <span>{c.demand} · {c.filled} filled</span>
                    <span>Close: {c.close}</span>
                    <span>Tickets: {c.tickets}</span>
                  </div>
                </div>
                <Button variant="accent" size="sm" onClick={() => navigate("/partner/cohorts/diwali")}>Review & Bid</Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
