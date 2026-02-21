import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function Portfolio() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Total Exposure</p><p className="text-2xl font-bold">₹1.8Cr</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Active SMEs</p><p className="text-2xl font-bold">3</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Repayment Health</p><p className="text-2xl font-bold text-success">98.2%</p></CardContent></Card>
        </div>
        <Card>
          <CardHeader><CardTitle className="text-base">Diwali Retail Cohort 2026 – Exposure</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "SME #1 (Festival Retail)", amount: "₹72L", health: 100 },
              { name: "SME #2 (Wholesale Lighting)", amount: "₹60L", health: 95 },
              { name: "SME #3 (Gift & Décor)", amount: "₹48L", health: 100 },
            ].map((s) => (
              <div key={s.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="font-semibold">{s.amount}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={s.health} className="flex-1 h-2" />
                  <Badge variant={s.health === 100 ? "success" : "warning"} className="text-xs">{s.health}%</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Upcoming Collections</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {[
              { date: "05 Sep 2026", amount: "₹55,500", note: "3 SMEs – Moratorium EMIs" },
              { date: "05 Oct 2026", amount: "₹1,56,000", note: "3 SMEs – Ramp-up EMIs" },
            ].map((c) => (
              <div key={c.date} className="flex justify-between text-sm py-2 border-b last:border-0">
                <div><p className="font-medium">{c.date}</p><p className="text-xs text-muted-foreground">{c.note}</p></div>
                <span className="font-semibold">{c.amount}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
