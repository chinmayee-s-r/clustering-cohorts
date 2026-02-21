import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Check, AlertCircle, Minus } from "lucide-react";

const uploads = [
  { name: "Bank Statements (Last 12 months)", format: "PDF/CSV", status: "not_uploaded" as const },
  { name: "GST Summary (GSTR-1 / GSTR-3B)", format: "PDF", status: "uploaded" as const },
  { name: "ITR Summary", format: "PDF", status: "not_uploaded" as const },
  { name: "Sales Ledger / Invoices", format: "PDF/Excel", status: "optional" as const },
];

const statusConfig = {
  uploaded: { label: "Uploaded", icon: Check, variant: "success" as const },
  not_uploaded: { label: "Not uploaded", icon: AlertCircle, variant: "destructive" as const },
  optional: { label: "Optional", icon: Minus, variant: "secondary" as const },
};

export default function UploadFinancials() {
  const navigate = useNavigate();
  const [consented, setConsented] = useState(false);

  return (
    <Layout>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold">Upload Financials</h1>
        <p className="text-muted-foreground">Upload your documents to generate a seasonal cash-flow profile and join eligible cohorts.</p>

        <div className="space-y-4">
          {uploads.map((u) => {
            const cfg = statusConfig[u.status];
            return (
              <Card key={u.name}>
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-muted flex items-center justify-center">
                      <Upload className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{u.name}</p>
                      <p className="text-xs text-muted-foreground">{u.format}</p>
                    </div>
                  </div>
                  <Badge variant={cfg.variant}>
                    <cfg.icon className="h-3 w-3 mr-1" />
                    {cfg.label}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="border-accent/30 bg-accent/5">
          <CardContent className="p-5 flex items-start gap-3">
            <Checkbox
              id="consent"
              checked={consented}
              onCheckedChange={(v) => setConsented(v === true)}
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
              I consent to share my standardized underwriting packet with verified Partners for bidding. My data will not be visible to other cohort members.
            </label>
          </CardContent>
        </Card>

        <Button variant="accent" size="lg" onClick={() => navigate("/member/insights")}>
          Analyze Seasonality
        </Button>
      </div>
    </Layout>
  );
}
