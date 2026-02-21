import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RoleProvider } from "@/contexts/RoleContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MemberLogin from "./pages/member/MemberLogin";
import MemberDashboard from "./pages/member/MemberDashboard";
import MemberProfile from "./pages/member/MemberProfile";
import UploadFinancials from "./pages/member/UploadFinancials";
import SeasonalityInsights from "./pages/member/SeasonalityInsights";
import CohortDiscovery from "./pages/member/CohortDiscovery";
import CohortDetail from "./pages/member/CohortDetail";
import CohortWaitingRoom from "./pages/member/CohortWaitingRoom";
import OffersComparison from "./pages/member/OffersComparison";
import EMISimulator from "./pages/member/EMISimulator";
import Confirmation from "./pages/member/Confirmation";
import LoanDashboard from "./pages/member/LoanDashboard";
import CohortVintage from "./pages/member/CohortVintage";
import PartnerLogin from "./pages/partner/PartnerLogin";
import PartnerDashboard from "./pages/partner/PartnerDashboard";
import CohortReview from "./pages/partner/CohortReview";
import PlaceBid from "./pages/partner/PlaceBid";
import MyBids from "./pages/partner/MyBids";
import Portfolio from "./pages/partner/Portfolio";
import DemoStory from "./pages/DemoStory";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <RoleProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/member/login" element={<MemberLogin />} />
            <Route path="/member/dashboard" element={<MemberDashboard />} />
            <Route path="/member/profile" element={<MemberProfile />} />
            <Route path="/member/upload" element={<UploadFinancials />} />
            <Route path="/member/insights" element={<SeasonalityInsights />} />
            <Route path="/member/cohorts" element={<CohortDiscovery />} />
            <Route path="/member/cohorts/diwali" element={<CohortDetail />} />
            <Route path="/member/cohorts/diwali/waiting" element={<CohortWaitingRoom />} />
            <Route path="/member/offers" element={<OffersComparison />} />
            <Route path="/member/emi-simulator" element={<EMISimulator />} />
            <Route path="/member/confirmation" element={<Confirmation />} />
            <Route path="/member/loan-dashboard" element={<LoanDashboard />} />
            <Route path="/member/vintage" element={<CohortVintage />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/dashboard" element={<PartnerDashboard />} />
            <Route path="/partner/cohorts/diwali" element={<CohortReview />} />
            <Route path="/partner/bid" element={<PlaceBid />} />
            <Route path="/partner/bids" element={<MyBids />} />
            <Route path="/partner/portfolio" element={<Portfolio />} />
            <Route path="/demo-story" element={<DemoStory />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RoleProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
