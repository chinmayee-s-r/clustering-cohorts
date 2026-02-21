import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRole } from "@/contexts/RoleContext";
import { ArrowLeftRight } from "lucide-react";
import { ReactNode } from "react";

const memberLinks = [
  { to: "/member/dashboard", label: "Dashboard" },
  { to: "/member/cohorts", label: "Cohorts" },
  { to: "/member/offers", label: "Offers" },
  { to: "/member/loan-dashboard", label: "Loans" },
  { to: "/member/profile", label: "Profile" },
];

const partnerLinks = [
  { to: "/partner/dashboard", label: "Dashboard" },
  { to: "/partner/cohorts/diwali", label: "Cohorts to Bid" },
  { to: "/partner/bids", label: "My Bids" },
  { to: "/partner/portfolio", label: "Portfolio" },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { role, setRole } = useRole();
  const location = useLocation();
  const navigate = useNavigate();
  const links = role === "member" ? memberLinks : partnerLinks;

  const switchRole = () => {
    if (role === "member") {
      setRole("partner");
      navigate("/partner/dashboard");
    } else {
      setRole("member");
      navigate("/member/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-accent">●</span> CLUSTERING
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname.startsWith(l.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <button
            onClick={switchRole}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeftRight className="h-4 w-4" />
            <span className="hidden sm:inline">Switch Role (Demo)</span>
          </button>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
