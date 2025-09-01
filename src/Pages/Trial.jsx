
import { Button } from "../Components/UI/Button";
import { Card } from "../Components/UI/Card";
import { Input } from "../Components/UI/Input";
import { Label } from "../Components/UI/Label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../Components/UI/Select";
import { Checkbox } from "../Components/UI/Checkbox";
import { Sparkles, Users, Zap, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";

const Trial = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    agreeToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
  
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
              <span className="text-lg font-semibold tracking-wide text-primary">
                Start Your Journey
              </span>
              <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-cosmic">Free Trial</span>
              <br />
              <span className="text-foreground">30 Days</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Experience the future of learning with full access to our 3D educational platform. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Form */}
            <Card className="p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-cosmic">Get Started Today</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">School/Organization</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    className="mt-1"
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <Select onValueChange={(value) => setFormData({...formData, role: value})}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="teacher">Teacher</SelectItem>
                      <SelectItem value="administrator">Administrator</SelectItem>
                      <SelectItem value="parent">Parent</SelectItem>
                      <SelectItem value="researcher">Researcher</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                 <Checkbox 
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => 
                        setFormData({ ...formData, agreeToTerms: checked === true })
                    }
                    />

                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  variant="cosmic" 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.agreeToTerms}
                >
                  Start Free Trial
                </Button>
              </form>
            </Card>

            {/* Benefits */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Full access to all 3D learning modules",
                  "Interactive astronomy, biology, chemistry, and physics content",
                  "Progress tracking and analytics",
                  "Multi-device synchronization",
                  "24/7 customer support",
                  "Educational resource library"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-cosmic flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="p-4 text-center bg-gradient-subtle border-cosmic/20">
                  <Users className="w-8 h-8 text-cosmic mx-auto mb-2" />
                  <div className="text-2xl font-bold">50,000+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </Card>
                <Card className="p-4 text-center bg-gradient-subtle border-accent/20">
                  <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-cosmic text-primary-foreground">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6" />
                  <h4 className="text-lg font-semibold">30-Day Money-Back Guarantee</h4>
                </div>
                <p className="text-primary-foreground/90">
                  Not satisfied? Cancel anytime within 30 days for a full refund. No questions asked.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Trial;