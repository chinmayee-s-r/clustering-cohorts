import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info, ShieldCheck } from "lucide-react";

const offers = [
  {
    partner: "Suryodaya NBFC",
    verified: true,
    apr: "13.9%",
    tenure: "18 months",
    emiModel: "Moratorium till Oct + Step-up (Nov–Dec)",
    fee: "1.25%",
    disbursal: "48–72 hrs after e-sign",
    notes: "Requires bank statement for last 12 months",
  },
  {
    partner: "HDFC Bank – SME Growth",
    verified: true,
    apr: "14.4%",
    tenure: "24 months",
    emiModel: "Low EMI Aug–Sep + Higher EMI Oct–Jan",
    fee: "0.85%",
    disbursal: "5–7 business days",
    notes: "",
  },
  {
    partner: "NeoCapital Finance",
    verified: true,
    apr: "14.1%",
    tenure: "18 months",
    emiModel: "Standard EMI (No seasonal flexibility)",
    fee: "1.5%",
    disbursal: "3–5 business days",
    notes: "",
  },
];

export default function OffersComparison() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Partner Offers for Your Cohort</h1>
            <p className="text-muted-foreground mt-1">Compare bids from verified lending partners</p>
          </div>
          <Tooltip>
            <TooltipTrigger>
              <Badge variant="info" className="cursor-help"><Info className="h-3 w-3 mr-1" /> What's seasonal EMI?</Badge>
            </TooltipTrigger>
            <TooltipContent className="max-w-sm">
              Seasonal EMI adjusts your monthly repayment based on your cash-flow cycle — lower payments during off-season, higher during peak revenue months.
            </TooltipContent>
          </Tooltip>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o, i) => (
            <Card key={i} className={i === 0 ? "border-accent/40 ring-2 ring-accent/20" : ""}>
              {i === 0 && <div className="bg-accent text-accent-foreground text-xs font-medium text-center py-1">Best Match</div>}
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{o.partner}</h3>
                  {o.verified && <ShieldCheck className="h-4 w-4 text-accent" />}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">APR</span><span className="font-semibold">{o.apr}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Tenure</span><span className="font-semibold">{o.tenure}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Processing Fee</span><span className="font-semibold">{o.fee}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Disbursal</span><span className="font-semibold">{o.disbursal}</span></div>
                </div>
                <div className="bg-muted rounded-lg p-3 text-sm">
                  <span className="text-xs text-muted-foreground block mb-1">EMI Model</span>
                  {o.emiModel}
                </div>
                {o.notes && <p className="text-xs text-muted-foreground">Note: {o.notes}</p>}
                <Button
                  variant={i === 0 ? "accent" : "outline"}
                  className="w-full"
                  onClick={() => navigate("/member/emi-simulator")}
                >
                  Simulate EMI
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <Card>
          <CardHeader><CardTitle className="text-base">Side-by-Side Comparison</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  {offers.map((o, i) => <TableHead key={i}>{o.partner.split(" – ")[0]}</TableHead>)}
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { f: "APR", k: "apr" },
                  { f: "Tenure", k: "tenure" },
                  { f: "EMI Model", k: "emiModel" },
                  { f: "Processing Fee", k: "fee" },
                  { f: "Disbursal", k: "disbursal" },
                ].map((row) => (
                  <TableRow key={row.f}>
                    <TableCell className="font-medium">{row.f}</TableCell>
                    {offers.map((o, i) => (
                      <TableCell key={i}>{(o as any)[row.k]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
