import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Calendar, CreditCard, Users } from "lucide-react";

const stats = [
  { label: "Outstanding", value: "₹58,92,000", icon: IndianRupee, color: "text-foreground" },
  { label: "Next Payment", value: "05 Sep 2026", icon: Calendar, color: "text-info" },
  { label: "Next EMI", value: "₹18,500", icon: CreditCard, color: "text-accent" },
  { label: "Payment Method", value: "Partner Auto-debit", icon: CreditCard, color: "text-muted-foreground" },
];

export default function LoanDashboard() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Loan Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center">
                    <s.icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">Upcoming Schedule</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            {[
              { date: "05 Sep 2026", amount: "₹18,500", type: "Moratorium EMI" },
              { date: "05 Oct 2026", amount: "₹52,000", type: "Ramp-up EMI" },
              { date: "05 Nov 2026", amount: "₹1,35,000", type: "Peak Step-up EMI" },
              { date: "05 Dec 2026", amount: "₹1,35,000", type: "Peak Step-up EMI" },
              { date: "05 Jan 2027", amount: "₹64,000", type: "Standard EMI" },
            ].map((p) => (
              <div key={p.date} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="text-sm font-medium">{p.date}</p>
                  <p className="text-xs text-muted-foreground">{p.type}</p>
                </div>
                <span className="font-semibold">{p.amount}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-4 flex items-center gap-3">
            <Users className="h-5 w-5 text-accent" />
            <div>
              <Badge variant="accent" className="mb-1">Cohort Member</Badge>
              <p className="text-sm">Member of: Diwali Retail Cohort 2026 – Delhi (Batch 1)</p>
            </div>
            <Button variant="accent-outline" size="sm" className="ml-auto" onClick={() => navigate("/member/vintage")}>
              View Cohort Vintage
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
