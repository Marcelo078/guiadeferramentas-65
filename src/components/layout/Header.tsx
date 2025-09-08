import { Button } from "@/components/ui/enhanced-button";
import { Calculator, Calendar, Wrench, Laptop, Home, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Início", icon: Home },
    { href: "/ferramentas", label: "Ferramentas", icon: Calculator },
    { href: "/reviews", label: "Reviews", icon: Wrench },
    { href: "/notebooks", label: "Notebooks", icon: Laptop },
    { href: "/parceiros", label: "Parceiros", icon: Users },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-gradient-hero flex items-center justify-center">
            <Calculator className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Portal Brasileiro</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Button
                key={item.href}
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                asChild
              >
                <Link to={item.href} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <Calendar className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;