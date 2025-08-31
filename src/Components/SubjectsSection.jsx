
import { Button } from "../Components/UI/Button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Heart, Atom, Calculator } from "lucide-react";

export const SubjectsSection = () => {
  const subjects = [
    {
      icon: Globe,
      title: "Astronomy",
      description: "Explore the solar system, rotate planets, and discover orbital mechanics through interactive cosmic journeys.",
      color: "from-blue-500 to-purple-600",
      features: ["Solar System Explorer", "Orbital Mechanics", "Stellar Evolution", "Galaxy Formation"]
    },
    {
      icon: Heart,
      title: "Human Biology",
      description: "Dissect anatomy layer by layer, watch organs function, and understand life at the cellular level.",
      color: "from-red-500 to-pink-600",
      features: ["3D Anatomy Models", "Organ Systems", "Cellular Biology", "Physiological Processes"]
    },
    {
      icon: Atom,
      title: "Chemistry",
      description: "Manipulate molecular structures, witness chemical reactions, and explore atomic interactions in 3D space.",
      color: "from-green-500 to-teal-600",
      features: ["Molecular Modeling", "Chemical Reactions", "Periodic Table 3D", "Atomic Structure"]
    },
    {
      icon: Calculator,
      title: "Physics",
      description: "Visualize forces, energy, and motion through interactive simulations that make abstract concepts tangible.",
      color: "from-orange-500 to-yellow-600",
      features: ["Force Visualization", "Wave Mechanics", "Thermodynamics", "Quantum Physics"]
    }
  ];

  return (
    <section id="subjects" className="py-24 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-nebula">Subjects That</span>
            <br />
            <span className="text-foreground">Come Alive</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From the vastness of space to the intricacies of atoms, explore every domain of science 
            through immersive 3D experiences designed for deep understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className="rounded-lg border bg-card text-card-foreground shadow-sm  p-8 bg-card/80 backdrop-blur-sm border-border hover:shadow-cosmic transition-all duration-500 group animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${subject.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <subject.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {subject.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {subject.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {subject.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/50" />
                      {feature}
                    </div>
                  ))}
                </div>

                <Link to={`/subject/${subject.title.toLowerCase().replace(' ', '-')}`}>
                  <Button 
                    variant="ghost" 
                    className="group/btn text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-semibold"
                  >
                    Explore {subject.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/subjects">
            <Button variant="stellar" size="lg" className="glow-effect">
              Browse All Subjects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};