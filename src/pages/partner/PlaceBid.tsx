import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle } from "lucide-react";

export default function PlaceBid() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <Layout>
        <div className="max-w-lg mx-auto text-center py-16 space-y-4">
          <CheckCircle className="h-16 w-16 text-accent mx-auto" />
          <h1 className="text-3xl font-bold">Bid Submitted</h1>
          <p className="text-muted-foreground">Members will see offers after cohort closes.</p>
          <Button variant="accent" onClick={() => navigate("/partner/bids")}>View My Bids</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-2xl space-y-6">
        <h1 className="text-3xl font-bold">Place Bid – Diwali Retail Cohort 2026</h1>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5"><Label>APR (%)</Label><Input defaultValue="13.9" /></div>
              <div className="space-y-1.5"><Label>Tenure (months)</Label><Input defaultValue="18" /></div>
              <div className="space-y-1.5"><Label>Processing Fee (%)</Label><Input defaultValue="1.25" /></div>
              <div className="space-y-1.5"><Label>Disbursal SLA</Label><Input defaultValue="48–72 hrs" /></div>
              <div className="space-y-1.5"><Label>Max per SME</Label><Input defaultValue="₹90,00,000" /></div>
            </div>
            <div>
              <Label className="mb-2 block">EMI Models Supported</Label>
              <div className="flex gap-4">
                {["Moratorium","Step-up","Peak-linked"].map(m=>(
                  <label key={m} className="flex items-center gap-2 text-sm"><Checkbox defaultChecked={m!=="Peak-linked"} />{m}</label>
                ))}
              </div>
            </div>
            <div className="space-y-1.5"><Label>Notes</Label><Input defaultValue="Bank statement required for last 12 months" /></div>
            <Button variant="accent" size="lg" className="w-full" onClick={() => setSubmitted(true)}>Submit Bid</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
