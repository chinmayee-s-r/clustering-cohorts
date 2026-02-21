import { useNavigate } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { step: 1, title: "Rajesh signs up as a Member", desc: "He runs a festival lighting business in Delhi with strong Oct–Nov peaks.", link: "/member/login" },
  { step: 2, title: "Seasonal profile analyzed", desc: "CLUSTERING identifies his 2.9x peak-to-offseason ratio and ₹42L working capital gap.", link: "/member/insights" },
  { step: 3, title: "Joins the Diwali Retail Cohort", desc: "Grouped with 11 similar seasonal SMEs for aggregated ₹5Cr demand.", link: "/member/cohorts/diwali" },
  { step: 4, title: "Partners bid on the cohort", desc: "6 verified lenders compete — offering seasonal EMI structures.", link: "/member/offers" },
  { step: 5, title: "Rajesh picks the best offer", desc: "Suryodaya NBFC at 13.9% with moratorium + step-up EMI. Off-season stress reduced 42%.", link: "/member/emi-simulator" },
  { step: 6, title: "Loan disbursed, seasonal EMI begins", desc: "₹18,500/month during low season, ₹1,35,000 during peak — aligned to real cash flow.", link: "/member/loan-dashboard" },
];

export default function DemoStory() {
  const navigate = useNavigate();
  const { setRole } = useRole();

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <span className="text-xl font-bold"><span className="text-accent">●</span> CLUSTERING</span>
          <Button variant="ghost" onClick={() => navigate("/")}>← Back to Home</Button>
        </div>
      </nav>
      <div className="mx-auto max-w-3xl px-4 py-12 space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Rajesh's Journey</h1>
          <p className="text-muted-foreground mt-2">How a seasonal retailer gets financing that fits his cash-flow cycle</p>
        </div>
        {steps.map((s) => (
          <Card key={s.step} className="hover:border-accent/40 transition-colors">
            <CardContent className="p-6 flex items-start gap-5">
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                {s.step}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={() => { setRole("member"); navigate(s.link); }}>
                View <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
