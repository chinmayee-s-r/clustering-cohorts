import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Users, Calendar } from "lucide-react";

const cohorts = [
  {
    id: "diwali",
    name: "Diwali Retail Cohort 2026 – Delhi (Batch 1)",
    type: "Industry (Festival Retail)",
    target: "₹5Cr",
    filled: 84,
    filledAmt: "₹4.2Cr",
    members: "10/12",
    rate: "13.7%–14.6%",
    repayment: "Moratorium + Step-up",
    close: "24 Feb 2026",
    recommended: true,
  },
  {
    id: "wedding",
    name: "Wedding Services Cohort 2026 – NCR (Batch 2)",
    type: "Industry (Wedding Services)",
    target: "₹3Cr",
    filled: 62,
    filledAmt: "₹1.86Cr",
    members: "7/12",
    rate: "14.4%–15.3%",
    repayment: "Step-up",
    close: "10 Mar 2026",
    recommended: false,
  },
  {
    id: "monsoon",
    name: "Monsoon Agri Inputs Cohort 2026 – Haryana (Batch 1)",
    type: "Industry (Agriculture)",
    target: "₹4Cr",
    filled: 48,
    filledAmt: "₹1.92Cr",
    members: "6/12",
    rate: "13.9%–15.0%",
    repayment: "Moratorium till harvest",
    close: "15 Mar 2026",
    recommended: false,
  },
  {
    id: "open",
    name: "Open Working Capital Cohort – Q1 2026",
    type: "Open",
    target: "₹6Cr",
    filled: 55,
    filledAmt: "₹3.3Cr",
    members: "9/15",
    rate: "14.8%–16.2%",
    repayment: "Standard EMI",
    close: "28 Feb 2026",
    recommended: false,
  },
];

export default function CohortDiscovery() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Eligible Cohorts</h1>
          <div className="flex gap-2 text-sm">
            <Badge variant="outline" className="cursor-pointer">All Types</Badge>
            <Badge variant="outline" className="cursor-pointer">Closing Soon</Badge>
          </div>
        </div>

        <div className="space-y-4">
          {cohorts.map((c) => (
            <Card key={c.id} className={c.recommended ? "border-accent/40 bg-accent/5" : ""}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-2">
                      <h3 className="text-lg font-bold">{c.name}</h3>
                      {c.recommended && (
                        <Tooltip>
                          <TooltipTrigger>
                            <Badge variant="accent" className="text-xs flex-shrink-0">
                              <Info className="h-3 w-3 mr-1" />Recommended
                            </Badge>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            Matches your peak months (Oct–Nov), loan window (Jul–Sep), and ticket size band (₹40L–₹90L).
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                      <span>Type: {c.type}</span>
                      <span>Target: {c.target}</span>
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> {c.members}</span>
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {c.close}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={c.filled} className="flex-1 h-2 max-w-xs" />
                      <span className="text-sm font-medium">{c.filledAmt} ({c.filled}%)</span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <Badge variant="secondary">Rate: {c.rate}</Badge>
                      <Badge variant="info">{c.repayment}</Badge>
                    </div>
                  </div>
                  <Button
                    variant={c.recommended ? "accent" : "outline"}
                    onClick={() => navigate(c.id === "diwali" ? "/member/cohorts/diwali" : "#")}
                    className="flex-shrink-0"
                  >
                    View Cohort
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
