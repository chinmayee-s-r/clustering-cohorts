import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RTooltip, ResponsiveContainer, Line, ComposedChart, CartesianGrid } from "recharts";
import { AlertTriangle, TrendingDown } from "lucide-react";

const emiData = [
  { month: "Aug '26", emi: 18500, inflow: 910000 },
  { month: "Sep '26", emi: 18500, inflow: 1030000 },
  { month: "Oct '26", emi: 52000, inflow: 1860000 },
  { month: "Nov '26", emi: 135000, inflow: 1620000 },
  { month: "Dec '26", emi: 135000, inflow: 940000 },
  { month: "Jan '27", emi: 64000, inflow: 700000 },
  { month: "Feb '27", emi: 64000, inflow: 640000 },
  { month: "Mar '27", emi: 64000, inflow: 650000 },
  { month: "Apr '27", emi: 64000, inflow: 610000 },
  { month: "May '27", emi: 64000, inflow: 680000 },
  { month: "Jun '27", emi: 64000, inflow: 720000 },
  { month: "Jul '27", emi: 64000, inflow: 800000 },
];

const chartData = emiData.map((d) => ({
  month: d.month.split(" ")[0],
  emi: d.emi / 1000,
  inflow: d.inflow / 10000,
}));

const emiTable = [
  { month: "Aug '26", emi: "₹18,500" },
  { month: "Sep '26", emi: "₹18,500" },
  { month: "Oct '26", emi: "₹52,000" },
  { month: "Nov '26", emi: "₹1,35,000" },
  { month: "Dec '26", emi: "₹1,35,000" },
  { month: "Jan '27", emi: "₹64,000" },
  { month: "Feb '27", emi: "₹64,000" },
  { month: "Mar '27", emi: "₹64,000" },
];

export default function EMISimulator() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">EMI Simulator – Suryodaya NBFC Offer</h1>
          <p className="text-muted-foreground mt-1">Loan: ₹60,00,000 · APR: 13.9% · Tenure: 18 months</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-base">Adjust Parameters</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Moratorium Months</span><span className="font-semibold">2 months</span>
                </div>
                <Slider defaultValue={[2]} max={3} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>0</span><span>3</span></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Step-up Factor</span><span className="font-semibold">1.4x</span>
                </div>
                <Slider defaultValue={[40]} max={60} step={10} />
                <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>1.0x</span><span>1.6x</span></div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-success/30 bg-success/5">
            <CardContent className="p-6 flex flex-col items-center justify-center text-center">
              <TrendingDown className="h-10 w-10 text-success mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Off-Season Stress Reduction</p>
              <p className="text-4xl font-bold text-success">42%</p>
              <p className="text-xs text-muted-foreground mt-2">Compared to fixed EMI structure</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader><CardTitle className="text-base">EMI vs Expected Cash Inflow</CardTitle></CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                  <YAxis yAxisId="left" tick={{ fontSize: 10 }} unit="K" />
                  <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 10 }} unit="×10K" />
                  <RTooltip />
                  <Bar yAxisId="left" dataKey="emi" fill="hsl(166, 72%, 40%)" radius={[4, 4, 0, 0]} name="EMI (₹K)" />
                  <Line yAxisId="right" type="monotone" dataKey="inflow" stroke="hsl(215, 76%, 56%)" strokeWidth={2} name="Inflow (₹×10K)" dot={{ r: 3 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle className="text-base">Monthly EMI Schedule</CardTitle></CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Month</TableHead>
                  <TableHead>EMI Amount</TableHead>
                  <TableHead>Type</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emiTable.map((row) => (
                  <TableRow key={row.month}>
                    <TableCell className="font-medium">{row.month}</TableCell>
                    <TableCell>{row.emi}</TableCell>
                    <TableCell>
                      {row.emi === "₹18,500" ? <Badge variant="info">Moratorium</Badge> :
                       row.emi === "₹1,35,000" ? <Badge variant="accent">Peak Step-up</Badge> :
                       row.emi === "₹52,000" ? <Badge variant="warning">Ramp-up</Badge> :
                       <Badge variant="secondary">Standard</Badge>}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3} className="text-center text-muted-foreground text-sm">
                    … remaining 10 months at ₹64,000/month
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="flex gap-3">
          <Button variant="accent" size="lg" onClick={() => navigate("/member/confirmation")}>Select This Offer</Button>
          <Button variant="outline" size="lg" onClick={() => navigate("/member/offers")}>Back to Offers</Button>
        </div>
      </div>
    </Layout>
  );
}
