
import { Rotate3D, Layers, ChartBar, Zap, Users, BookOpen } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Rotate3D,
      title: "Interactive 3D Models",
      description: "Rotate, zoom, and explore complex structures from every angle. From atoms to galaxies, see science come alive.",
      gradient: "from-primary to-cosmic-purple"
    },
    {
      icon: Layers,
      title: "Multi-Modal Learning",
      description: "Seamless transitions between 3D visualizations and analytical charts. Visual and data-driven understanding combined.",
      gradient: "from-accent to-nebula-green"
    },
    {
      icon: ChartBar,
      title: "Real-Time Analytics",
      description: "Click any object to reveal detailed data, graphs, and contextual information. Numbers meet visualization.",
      gradient: "from-stellar-pink to-cosmic-purple"
    },
    {
      icon: Zap,
      title: "Instant Feedback",
      description: "Hover highlights, smooth animations, and responsive interactions make learning feel natural and engaging.",
      gradient: "from-nebula-green to-primary"
    },
    {
      icon: Users,
      title: "Collaborative Spaces",
      description: "Share discoveries, bookmark states, and learn together in virtual environments that bring classrooms to life.",
      gradient: "from-cosmic-purple to-stellar-pink"
    },
    {
      icon: BookOpen,
      title: "Curriculum Aligned",
      description: "Content designed with educators for astronomy, biology, physics, and chemistry across all learning levels.",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="explore" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-cosmic">Why Choose</span>
            <br />
            <span className="text-foreground">Interactive Learning?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional textbooks show you what to think. Our platform shows you how to explore, 
            discover, and understand complex concepts through hands-on interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-lg border bg-card text-card-foreground shadow-sm  p-8 bg-card/50 backdrop-blur-sm border-border hover:shadow-stellar transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};