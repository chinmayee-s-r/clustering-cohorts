import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bids = [
  { name: "Diwali Retail Cohort 2026 – Delhi (Batch 1)", status: "Submitted", detail: "Awaiting closure", variant: "info" as const },
  { name: "Wedding Services Cohort 2026 – NCR", status: "Submitted", detail: "Shortlisted", variant: "success" as const },
  { name: "Monsoon Agri Inputs – Haryana", status: "Draft", detail: "Incomplete", variant: "warning" as const },
];

export default function MyBids() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">My Bids</h1>
        <div className="space-y-4">
          {bids.map((b) => (
            <Card key={b.name}>
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="font-medium">{b.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{b.detail}</p>
                </div>
                <Badge variant={b.variant}>{b.status}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
