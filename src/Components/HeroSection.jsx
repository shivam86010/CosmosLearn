import { Button } from "./UI/Button";
import { Play, ArrowRight, Sparkles } from "lucide-react";
// import heroImage from "./assets/hero-cosmic-learning.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${''})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 rounded-full bg-gradient-cosmic opacity-20 blur-sm" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent to-nebula-green opacity-15 blur-md" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-12 h-12 rounded-full bg-stellar-pink opacity-25 blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
            <span className="text-lg font-semibold tracking-wide text-primary">
              The Future of Learning
            </span>
            <Sparkles className="w-6 h-6 text-primary animate-glow-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-cosmic">Interactive</span>
            <br />
            <span className="text-foreground">3D Learning</span>
            <br />
            <span className="text-nebula">Experience</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Explore complex concepts through immersive 3D visualizations. 
            Rotate planets, dissect anatomy, manipulate atoms — learning has never been this engaging.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="cosmic" 
              size="lg" 
              className="group animate-scale-in glow-effect"
              style={{ animationDelay: '0.3s' }}
              asChild
            >
              <a href="/explore">
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Start Exploring
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="glass" 
              size="lg" 
              className="animate-scale-in"
              style={{ animationDelay: '0.5s' }}
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          {[
            { number: "100+", label: "3D Models" },
            { number: "50K+", label: "Students" },
            { number: "95%", label: "Engagement Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-cosmic mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};