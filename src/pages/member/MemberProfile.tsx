import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function MemberProfile() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-3xl font-bold">Business Profile</h1>

        <Card>
          <CardHeader><CardTitle>Business Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Legal Name</Label>
                <Input defaultValue="Rajesh Light House Traders" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">GSTIN</Label>
                <Input defaultValue="07ABCDE1234F1Z5" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">PAN</Label>
                <Input defaultValue="ABCDE1234F" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Address</Label>
                <Input defaultValue="Sadar Bazaar, Delhi" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Years in Operation</Label>
                <Input defaultValue="6" readOnly />
              </div>
              <div className="space-y-1.5">
                <Label className="text-muted-foreground text-xs">Employees</Label>
                <Input defaultValue="11" readOnly />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Seasonal Configuration</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Seasonal Business</span>
              <Badge variant="success">ON</Badge>
            </div>
            <div>
              <Label className="text-muted-foreground text-xs">Peak Months</Label>
              <div className="flex gap-2 mt-2">
                <Badge variant="accent">Oct</Badge>
                <Badge variant="accent">Nov</Badge>
              </div>
            </div>
            <div>
              <Label className="text-muted-foreground text-xs">Off-Season Months</Label>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">Jan</Badge>
                <Badge variant="secondary">Feb</Badge>
                <Badge variant="secondary">Mar</Badge>
                <Badge variant="secondary">Apr</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Loan Needs</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Working Capital</span><span className="font-semibold">₹60,00,000</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Term Loan (optional)</span><span className="font-semibold">₹25,00,000</span></div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>Current Obligations</CardTitle></CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between"><span className="text-muted-foreground">Existing OD</span><span className="font-semibold">₹12,00,000 @ 15.5% (limit ₹20L)</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Supplier Credit</span><span className="font-semibold">Net 30 avg ₹8L</span></div>
          </CardContent>
        </Card>

        <Button variant="accent" size="lg" onClick={() => navigate("/member/upload")}>
          Upload Financials
        </Button>
      </div>
    </Layout>
  );
}
