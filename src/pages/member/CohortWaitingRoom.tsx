import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Check, Clock, Bell, Info } from "lucide-react";

const steps = [
  { label: "Forming", status: "done" },
  { label: "Closed", status: "pending" },
  { label: "Partner Bidding", status: "pending" },
  { label: "Offers Released", status: "pending" },
];

export default function CohortWaitingRoom() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold">You've Joined Diwali Retail Cohort 2026 – Delhi (Batch 1)</h1>

        {/* Timeline */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col items-center flex-1">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-2 ${
                    s.status === "done" ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {s.status === "done" ? <Check className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                  </div>
                  <span className={`text-xs font-medium text-center ${s.status === "done" ? "text-accent" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="absolute" />
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Cohort Progress</span>
                <span className="font-semibold">₹4.2Cr / ₹5Cr (84%)</span>
              </div>
              <Progress value={84} className="h-3" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-info/30 bg-info/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Info className="h-5 w-5 text-info flex-shrink-0 mt-0.5" />
            <p className="text-sm">Cohort closes when target is reached or on 24 Feb 2026 — whichever comes first.</p>
          </CardContent>
        </Card>

        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-4 flex items-start gap-3">
            <Bell className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Update: 2 new members joined today. Now at 88%.</p>
              <p className="text-xs text-muted-foreground mt-1">Cohort is filling fast — partner bidding will begin soon.</p>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <Button variant="outline" size="lg" disabled>View Offers</Button>
              </span>
            </TooltipTrigger>
            <TooltipContent>Available after bidding completes</TooltipContent>
          </Tooltip>

          <Button variant="accent" size="lg" onClick={() => navigate("/member/offers")}>
            Demo: Mark Cohort as Closed →
          </Button>
        </div>
      </div>
    </Layout>
  );
}
