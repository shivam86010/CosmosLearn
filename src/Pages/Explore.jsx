import { Button } from "../Components/UI/Button";


import { Atom, Brain, Dna, Globe, Microscope, Telescope, Heart, Zap,ArrowRight,Play,  BookOpen,Users} from "lucide-react";

const Explore = () => {
  const subjects = [
    {
      title: "Astronomy",
      description: "Explore the cosmos from planets to galaxies",
      icon: Telescope,
      color: "cosmic",
      modules: [
        "Solar System Explorer",
        "Galaxy Formation",
        "Black Holes & Physics",
        "Stellar Evolution"
      ],
      level: "Beginner to Advanced",
      duration: "2-4 hours per module"
    },
    {
      title: "Biology", 
      description: "Journey through life from cells to ecosystems",
      icon: Dna,
      color: "accent",
      modules: [
        "Human Anatomy 3D",
        "Cell Structure & Function", 
        "Ecosystem Dynamics",
        "Genetic Engineering"
      ],
      level: "All Levels",
      duration: "1-3 hours per module"
    },
    {
      title: "Chemistry",
      description: "Visualize molecules and chemical reactions",
      icon: Atom,
      color: "nebula",
      modules: [
        "Molecular Structures",
        "Chemical Bonding",
        "Reaction Mechanisms",
        "Periodic Table 3D"
      ],
      level: "Intermediate",
      duration: "1-2 hours per module"
    },
    {
      title: "Physics",
      description: "Experience forces and motion in 3D space",
      icon: Zap,
      color: "primary",
      modules: [
        "Quantum Mechanics",
        "Electromagnetic Fields",
        "Relativity Theory",
        "Wave Physics"
      ],
      level: "Advanced",
      duration: "2-5 hours per module"
    }
  ];

  const features = [
    {
      icon: Globe,
      title: "360° Exploration",
      description: "Rotate, zoom, and inspect every detail"
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "AI adjusts to your learning pace"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Learn with classmates in real-time"
    },
    {
      icon: BookOpen,
      title: "Rich Content",
      description: "Thousands of interactive models"
    }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-cosmic">Start</span>
              <br />
              <span className="text-foreground">Exploring</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Dive into interactive 3D learning experiences across multiple scientific disciplines. Choose your subject and begin your cosmic learning journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features?.map((feature, index) => (
                <div key={feature.title} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subject Cards */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <div key={subject.title} className="rounded-lg bg-card text-card-foreground shadow-sm p-8 group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-${subject.color} flex items-center justify-center flex-shrink-0`}>
                    <subject.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{subject.title}</h3>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{subject.level}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{subject.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Learning Modules:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {subject.modules.map((module) => (
                          <div key={module} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {module}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Microscope className="w-3 h-3" />
                          {subject.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <Button variant="cosmic" className="flex-1 group" asChild>
                        <a href={`/learning?subject=${subject.title.toLowerCase()}`}>
                          <Play className="w-4 h-4 mr-2" />
                          Start Learning
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cosmic">Your Learning Path</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Personalized learning journeys that adapt to your pace and interests. Track progress, earn achievements, and unlock advanced content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose Your Subject",
                description: "Select from astronomy, biology, chemistry, or physics"
              },
              {
                step: "02", 
                title: "Interactive Exploration",
                description: "Manipulate 3D models and conduct virtual experiments"
              },
              {
                step: "03",
                title: "Test Your Knowledge", 
                description: "Complete quizzes and challenges to reinforce learning"
              }
            ].map((step, index) => (
              <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-6xl font-bold text-cosmic/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-cosmic">Ready to Begin?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial and experience the future of interactive learning.
          </p>
          <Button variant="cosmic" size="lg" className="text-lg px-10 py-4" asChild>
            <a href="/trial">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

    </div>
  );
};

export default Explore;