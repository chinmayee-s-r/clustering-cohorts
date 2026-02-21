import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Check, Shield, Users, Calendar, BarChart3 } from "lucide-react";

const docs = [
  { name: "PAN", status: "done" },
  { name: "GSTIN", status: "done" },
  { name: "12-month bank statement", status: "recommended" },
  { name: "GST summary", status: "recommended" },
  { name: "ITR", status: "optional" },
];

export default function CohortDetail() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Diwali Retail Cohort 2026 – Delhi (Batch 1)</h1>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="accent">Season: Festival Peak (Oct–Nov)</Badge>
            <Badge variant="warning">Cohort Close: 24 Feb 2026</Badge>
            <Badge variant="info">Verified Partners bidding: 6</Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><BarChart3 className="h-4 w-4 text-accent" /> Cohort Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1"><span>Aggregate Demand</span><span className="font-semibold">₹4.2Cr / ₹5Cr</span></div>
                <Progress value={84} className="h-2" />
              </div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Members</span><span className="font-semibold">10/12</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Avg Ticket</span><span className="font-semibold">₹42L–₹85L band</span></div>
              <div className="text-sm">
                <span className="text-muted-foreground">Purpose mix: </span>
                <span>Inventory (72%), Staffing (18%), Marketing (10%)</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> Supported Repayment Structures</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted rounded-lg p-3 text-sm">2-month low EMI (Aug–Sep) + Step-up in Nov–Dec</div>
              <div className="bg-muted rounded-lg p-3 text-sm">Moratorium till Oct (interest accrues)</div>
              <div className="bg-muted rounded-lg p-3 text-sm">Peak-linked EMI (higher in Oct–Dec)</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Required Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {docs.map((d) => (
                <div key={d.name} className="flex items-center justify-between text-sm">
                  <span>{d.name}</span>
                  {d.status === "done" ? (
                    <Badge variant="success"><Check className="h-3 w-3 mr-1" />Done</Badge>
                  ) : (
                    <Badge variant={d.status === "recommended" ? "warning" : "secondary"}>{d.status}</Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-accent/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2"><Shield className="h-4 w-4 text-accent" /> Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No cohort member can see your revenue, margins, loan size, or repayment behavior. Only verified Partners see your anonymized packet — and only after your explicit consent.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-3">
          <Button variant="accent" size="lg" onClick={() => navigate("/member/cohorts/diwali/waiting")}>
            Join Cohort
          </Button>
          <Button variant="outline" size="lg">Save Cohort</Button>
        </div>
      </div>
    </Layout>
  );
}
