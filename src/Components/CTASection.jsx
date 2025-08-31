import { Button } from "../Components/UI/Button";
import { ArrowRight, Sparkles, Users } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-lg font-semibold tracking-wide text-primary">
              Join the Revolution
            </span>
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-cosmic">Ready to</span>
            <br />
            <span className="text-foreground">Transform</span>
            <br />
            <span className="text-nebula">Learning?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students and educators who are already experiencing 
            the future of interactive education. Start your cosmic learning journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              variant="cosmic" 
              size="lg" 
              className="group animate-scale-in glow-effect text-lg px-10 py-4"
              asChild
            >
              <a href="/trial">
                <Users className="w-6 h-6 mr-3" />
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="animate-scale-in text-lg px-10 py-4"
              style={{ animationDelay: '0.2s' }}
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic mb-2">30-Day</div>
              <div className="text-muted-foreground">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-nebula-green mb-2">Cancel</div>
              <div className="text-muted-foreground">Anytime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};