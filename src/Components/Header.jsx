import { Button } from "./UI/Button";
import { Menu, Atom, Globe, User } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Explore", href: "/explore", icon: Globe },
    { name: "Learning", href: "/learning", icon: Atom },
    { name: "Study Tools", href: "/study-tools", icon: User },
    { name: "Pricing", href: "/pricing", icon: User },
    { name: "Blog", href: "/blog", icon: User },
    { name: "Careers", href: "/careers", icon: User },
    { name: "About", href: "/about", icon: User }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-cosmic flex items-center justify-center">
              <Atom className="w-6 h-6 text-primary-foreground animate-cosmic-rotate" />
            </div>
            <span className="text-xl font-bold text-cosmic">CosmosLearn</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
              >
                <link.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                <span>{link.name}</span>
              </a>
            ))}
            <Button variant="cosmic" size="sm" className="ml-4" asChild>
              <a href="/trial">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/80 backdrop-blur-sm rounded-lg mt-2 border border-border">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </a>
              ))}
              <div className="px-3 pt-2">
                <Button variant="cosmic" size="sm" className="w-full" asChild>
                  <a href="/trial">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};