import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Info } from "lucide-react";

export default function Confirmation() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <div className="py-8">
          <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Offer Selected!</h1>
          <p className="text-muted-foreground mt-2">Your loan application is being processed</p>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base text-left">Loan Summary</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-left">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Selected Partner</span><span className="font-semibold">Suryodaya NBFC</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Rate (APR)</span><span className="font-semibold">13.9%</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Tenure</span><span className="font-semibold">18 months</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">EMI Structure</span><span className="font-semibold">Moratorium + Step-up</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Processing Fee</span><span className="font-semibold">1.25%</span></div>
          </CardContent>
        </Card>

        <Card className="border-muted bg-muted/50">
          <CardContent className="p-4 flex items-start gap-3 text-left">
            <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              The loan contract is executed directly between you and the Partner (Suryodaya NBFC). CLUSTERING does not handle funds and does not set interest rates. Individual liability applies — no cross-default within cohorts.
            </p>
          </CardContent>
        </Card>

        <Button variant="accent" size="lg" onClick={() => navigate("/member/loan-dashboard")}>
          Go to Loan Dashboard
        </Button>
      </div>
    </Layout>
  );
}
