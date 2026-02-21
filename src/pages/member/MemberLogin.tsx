import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MemberLogin() {
  const navigate = useNavigate();
  const { setRole } = useRole();
  const [phone, setPhone] = useState("9876543210");
  const [otp, setOtp] = useState("1234");
  const [business, setBusiness] = useState("Rajesh Light House Traders");

  const handleLogin = () => {
    setRole("member");
    navigate("/member/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="text-2xl font-bold mb-1">
            <span className="text-accent">●</span> CLUSTERING
          </div>
          <CardTitle className="text-xl">Member Login</CardTitle>
          <CardDescription>Sign in with your mobile number</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Mobile Number</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter mobile number" />
          </div>
          <div className="space-y-2">
            <Label>OTP</Label>
            <Input value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
          </div>
          <div className="space-y-2">
            <Label>Business Name</Label>
            <Input value={business} onChange={(e) => setBusiness(e.target.value)} />
          </div>
          <Button variant="accent" className="w-full" size="lg" onClick={handleLogin}>
            Login as Member
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Demo mode: No real OTP. Your data is stored for this demo only.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
