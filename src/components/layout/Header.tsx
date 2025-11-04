import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoUrl from "@assets/Futryx Logo_1762179648239.png";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Join Futryx", path: "/join" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          data-testid="link-home"
          className="flex items-center gap-3 hover-elevate rounded-md px-3 py-2 -mx-3 -my-2"
        >
          <img src={logoUrl} alt="Futryx" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              className={`text-sm font-medium transition-colors hover:text-[#00CFFD] ${
                location === item.path
                  ? "text-white"
                  : "text-white/70"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="outline" size="default" data-testid="button-hire-us">
              Hire Us
            </Button>
          </Link>
          <Link href="/join">
            <Button
              size="default"
              data-testid="button-join-futryx"
              className="bg-gradient-to-r from-[#A020F0] to-[#FF007F] hover:opacity-90 text-white border-none"
            >
              Join Futryx
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover-elevate rounded-md"
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/10">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                className={`py-4 text-base font-medium border-b border-white/10 transition-colors ${
                  location === item.path
                    ? "text-white"
                    : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-6" onClick={() => setMobileMenuOpen(false)}>
              <Link href="/contact">
                <Button variant="outline" size="default" className="w-full" data-testid="button-mobile-hire-us">
                  Hire Us
                </Button>
              </Link>
              <Link href="/join">
                <Button
                  size="default"
                  className="w-full bg-gradient-to-r from-[#A020F0] to-[#FF007F] hover:opacity-90 text-white border-none"
                  data-testid="button-mobile-join-futryx"
                >
                  Join Futryx
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
