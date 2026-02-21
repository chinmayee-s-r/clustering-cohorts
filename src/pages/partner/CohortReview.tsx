import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip, ResponsiveContainer, Cell } from "recharts";

const seasonData = [
  { month: "Mar", value: 6 }, { month: "Apr", value: 5.5 }, { month: "May", value: 6.2 },
  { month: "Jun", value: 7 }, { month: "Jul", value: 8.5 }, { month: "Aug", value: 9.8 },
  { month: "Sep", value: 11 }, { month: "Oct", value: 19 }, { month: "Nov", value: 17 },
  { month: "Dec", value: 10 }, { month: "Jan", value: 7 }, { month: "Feb", value: 6 },
];

export default function CohortReview() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Review Cohort: Diwali Retail Cohort 2026 – Delhi (Batch 1)</h1>
        <div className="grid md:grid-cols-3 gap-4">
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Aggregate Demand</p><p className="text-2xl font-bold">₹4.2Cr</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Members</p><p className="text-2xl font-bold">10/12</p></CardContent></Card>
          <Card><CardContent className="p-5"><p className="text-xs text-muted-foreground">Doc Completeness</p><p className="text-2xl font-bold">87%</p></CardContent></Card>
        </div>
        <Card>
          <CardHeader><CardTitle className="text-base">Aggregate Seasonality Pattern</CardTitle></CardHeader>
          <CardContent>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={seasonData} barSize={28}>
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <RTooltip />
                  <Bar dataKey="value" radius={[4,4,0,0]}>
                    {seasonData.map((e,i) => <Cell key={i} fill={e.month==="Oct"||e.month==="Nov"?"hsl(166,72%,40%)":"hsl(215,20%,75%)"} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-base">Ticket Band Distribution</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            {[{band:"₹40L–₹55L",count:4},{band:"₹55L–₹70L",count:3},{band:"₹70L–₹90L",count:3}].map(b=>(
              <div key={b.band} className="flex justify-between text-sm py-1 border-b last:border-0">
                <span>{b.band}</span><Badge variant="secondary">{b.count} SMEs</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex gap-3">
          <Button variant="outline">Download Sample SUP (PDF)</Button>
          <Button variant="accent" size="lg" onClick={() => navigate("/partner/bid")}>Place Bid</Button>
        </div>
      </div>
    </Layout>
  );
}
