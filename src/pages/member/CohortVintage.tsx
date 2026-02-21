import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Bell } from "lucide-react";

export default function CohortVintage() {
  return (
    <Layout>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold">Diwali Retail Cohort 2026 – Delhi (Batch 1)</h1>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Vintage Status</span><Badge variant="success">Active</Badge></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Cohort Purpose</span><span className="font-medium">Pre-season inventory financing</span></div>
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Vintage Grade</span><Badge variant="accent">A (broad band)</Badge></div>
            </CardContent>
          </Card>
          <Card className="border-accent/20 bg-accent/5">
            <CardContent className="p-5 flex items-start gap-3">
              <Bell className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Next Cohort Forming</p>
                <p className="text-sm text-muted-foreground mt-1">Diwali Retail Cohort 2027 — early access opens in June</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-muted bg-muted/50">
          <CardContent className="p-4 flex items-start gap-3">
            <Shield className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Individual member performance is never visible to other members. Vintage grade reflects aggregate cohort health only.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
