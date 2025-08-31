import { Button } from "../Components/UI/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";
import { Switch } from "../Components/UI/Switch";
import { Check, Star, Users, Building2, Rocket } from "lucide-react";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Explorer",
      description: "Perfect for individual learners",
      icon: Star,
      monthlyPrice: 9,
      annualPrice: 90,
      features: [
        "Access to basic modules",
        "Interactive 3D simulations",
        "Progress tracking",
        "Mobile app access",
        "Community forum access",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Navigator",
      description: "Best for serious students",
      icon: Rocket,
      monthlyPrice: 19,
      annualPrice: 190,
      features: [
        "All Explorer features",
        "Advanced modules & simulations",
        "Personalized learning paths",
        "Offline content access",
        "Priority support",
        "Certificate of completion",
        "Lab experiments",
        "Study groups"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Institution",
      description: "For schools and organizations",
      icon: Building2,
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "All Navigator features",
        "Unlimited student accounts",
        "Admin dashboard",
        "Progress analytics",
        "Custom content creation",
        "Integration support",
        "24/7 phone support",
        "Training sessions",
        "White-label options"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const faqs = [
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 14-day free trial for all paid plans. No credit card required to start."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students with valid .edu email addresses get 50% off all individual plans."
    },
    {
      question: "What's included in the Institution plan?",
      answer: "The Institution plan includes unlimited student accounts, advanced analytics, custom content creation, and dedicated support."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your cosmic learning journey. All plans include our core features with a 14-day free trial.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <span className={`text-sm ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annual
              </span>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-green-100 text-green-800 border-green-200">
                Save 17%
              </span>

            </div>
          </div>

          {/* Pricing Cards */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary text-primary-foreground">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <plan.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                    <div className="mt-6">
                      <span className="text-4xl font-bold text-cosmic">
                        ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-muted-foreground">
                          Billed annually at ${plan.annualPrice}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={plan.popular ? "cosmic" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Enterprise Section */}
          <section className="mb-16">
            <Card className="bg-gradient-cosmic text-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <Users className="w-16 h-16 mx-auto mb-4 opacity-90" />
                <h2 className="text-3xl font-bold mb-4">Enterprise Solutions</h2>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  Need a custom solution for your large organization? We offer tailored packages with dedicated support, custom integrations, and specialized content.
                </p>
                <Button variant="glass" size="lg">
                  Contact Enterprise Team
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold text-cosmic mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Trust Indicators */}
          <section className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
              <div>
                <div className="text-2xl font-bold text-cosmic">10K+</div>
                <div>Active Learners</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cosmic">500+</div>
                <div>Educational Institutions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cosmic">98%</div>
                <div>Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cosmic">24/7</div>
                <div>Support Available</div>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Pricing;