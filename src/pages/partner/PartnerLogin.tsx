import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

export default function PartnerLogin() {
  const navigate = useNavigate();
  const { setRole } = useRole();
  const [email, setEmail] = useState("amit@suryodaya.com");
  const [institution, setInstitution] = useState("Suryodaya NBFC");

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl font-bold mb-1"><span className="text-accent">●</span> CLUSTERING</div>
          <CardTitle className="text-xl">Partner Login</CardTitle>
          <CardDescription>Sign in to your lending partner account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Work Email</Label>
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
          </div>
          <div className="space-y-2">
            <Label>Password</Label>
            <Input type="password" defaultValue="••••••••" />
          </div>
          <div className="space-y-2">
            <Label>Institution</Label>
            <select className="w-full rounded-md border bg-background px-3 py-2 text-sm" value={institution} onChange={(e) => setInstitution(e.target.value)}>
              {["Suryodaya NBFC", "HDFC Bank", "NeoCapital Finance", "Kotak SME", "Axis SME", "Bajaj Finance"].map((i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
          </div>
          <Button variant="default" className="w-full" size="lg" onClick={() => { setRole("partner"); navigate("/partner/dashboard"); }}>
            Login as Partner
          </Button>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-accent" /> Verified Partner Access
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
