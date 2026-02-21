import { useNavigate } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, BarChart3, FileText, ArrowRight, Lock, Eye, UserCheck } from "lucide-react";

const steps = [
  { icon: FileText, title: "Standardize", desc: "Upload financials, get a seasonal cash-flow profile" },
  { icon: Users, title: "Cohort", desc: "Join a group of similar seasonal businesses" },
  { icon: BarChart3, title: "Partner Bids", desc: "Verified lenders bid on your cohort with flexible terms" },
  { icon: ArrowRight, title: "Seasonal EMI", desc: "Pick a plan that matches your revenue peaks" },
];

export default function Landing() {
  const navigate = useNavigate();
  const { setRole } = useRole();

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal nav */}
      <nav className="border-b bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-accent">●</span> CLUSTERING
          </span>
          <Button variant="ghost" onClick={() => navigate("/demo-story")}>View Demo Story</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-20 pb-16 text-center">
        <Badge variant="accent" className="mb-6 text-sm px-4 py-1">Seasonal SME Financing Platform</Badge>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
          Seasonal businesses shouldn't default in the{" "}
          <span className="text-accent">off-season.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          CLUSTERING groups seasonal SMEs into lender-ready cohorts, enabling better pricing and
          repayment plans aligned to real cash-flow cycles.
        </p>
      </section>

      {/* Role Cards */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="relative overflow-hidden border-2 hover:border-accent transition-colors cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Member (Borrower)</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Join a seasonal cohort, compare partner bids, choose an EMI plan that matches your peak months.
              </p>
              <Button
                variant="accent"
                size="lg"
                className="w-full"
                onClick={() => { setRole("member"); navigate("/member/login"); }}
              >
                Continue as Member <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
            <CardContent className="p-8">
              <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">Partner (Lender)</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Access standardized seasonal cohorts, bid on aggregated demand, deploy capital faster with lower underwriting friction.
              </p>
              <Button
                size="lg"
                className="w-full"
                onClick={() => { setRole("partner"); navigate("/partner/login"); }}
              >
                Continue as Partner <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-card border-y">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-4">How it works</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            From seasonal data to disbursement in four simple steps
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="h-16 w-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-sm font-bold text-accent mb-1">Step {i + 1}</div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Promise */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-4 mb-6">
            <Shield className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Privacy Promise</h2>
              <p className="text-muted-foreground">Your data, your control — always.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <Eye className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">No peer businesses can see your revenue, margins, or repayment behavior.</p>
            </div>
            <div className="flex gap-3">
              <Lock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Partners see data only with your explicit consent.</p>
            </div>
            <div className="flex gap-3">
              <UserCheck className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Individual liability preserved — no cross-default within cohorts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Card className="border-2 border-accent/30 bg-accent/5">
          <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <Badge variant="accent" className="mb-3">Live Cohort</Badge>
              <h3 className="text-xl font-bold mb-1">Diwali Retail Cohort 2026 – Delhi (Batch 1)</h3>
              <p className="text-muted-foreground">₹5.4Cr demand · 12 SMEs · Seasonal EMI supported</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button variant="accent-outline" onClick={() => navigate("/demo-story")}>View Demo Story</Button>
              <Button variant="accent" onClick={() => { setRole("member"); navigate("/member/login"); }}>Start Now</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
          CLUSTERING · Hackathon Prototype · Domain 3 – Seasonal Cash Flow Crunch · All data is simulated
        </div>
      </footer>
    </div>
  );
}
