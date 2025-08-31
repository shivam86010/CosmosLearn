import { Button } from "../Components/UI/Button";
import { Atom, Users, Zap, Target, Globe, Heart } from "lucide-react";

const About = () => {
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
              <span className="text-cosmic">About</span>
              <br />
              <span className="text-foreground">CosmosLearn</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              We're revolutionizing education through immersive 3D learning experiences that make complex concepts tangible, interactive, and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-cosmic">Our Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Traditional learning often relies on static textbooks and 2D diagrams that fail to capture the dynamic nature of scientific concepts. We believe that knowledge should be interactive, explorable, and engaging.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CosmosLearn transforms abstract ideas into tangible 3D experiences where students can rotate planets, explore cellular structures, and manipulate atomic models with their own hands.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center bg-gradient-subtle border-cosmic/20">
                <Target className="w-12 h-12 text-cosmic mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Targeted Learning</h3>
                <p className="text-sm text-muted-foreground">Personalized experiences for every learning style</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center bg-gradient-subtle border-accent/20">
                <Zap className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Interactive</h3>
                <p className="text-sm text-muted-foreground">Hands-on exploration drives deeper understanding</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center bg-gradient-subtle border-nebula/20">
                <Globe className="w-12 h-12 text-nebula mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-sm text-muted-foreground">Quality education available anywhere</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center bg-gradient-subtle border-primary/20">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Passion-Driven</h3>
                <p className="text-sm text-muted-foreground">Making learning enjoyable and memorable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-subtle">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cosmic">Our Team</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A passionate team of educators, developers, and designers united by the vision of transforming how we learn and understand the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Education Officer",
                description: "Former NASA educator with 15+ years in immersive learning",
                icon: Users
              },
              {
                name: "Alex Rodriguez",
                role: "Lead 3D Developer", 
                description: "WebGL expert specializing in real-time 3D visualizations",
                icon: Atom
              },
              {
                name: "Maya Patel",
                role: "UX Research Director",
                description: "Cognitive scientist focused on learning experience design",
                icon: Zap
              }
            ]?.map((member, index) => (
              <div key={member.name} className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center animate-fade-in-up bg-card/50 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-cosmic rounded-full flex items-center justify-center mx-auto mb-4">
                  <member.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-cosmic font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-cosmic">Our Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing the boundaries of educational technology"
              },
              {
                title: "Accessibility", 
                description: "Making quality education available to learners everywhere"
              },
              {
                title: "Excellence",
                description: "Delivering exceptional learning experiences that inspire"
              },
              {
                title: "Community",
                description: "Building connections between learners, educators, and knowledge"
              }
            ]?.map((value, index) => (
              <div key={value.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-semibold mb-3 text-cosmic">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-cosmic text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help us shape the future of education and make learning an adventure.
          </p>
          <Button variant="glass" size="lg" className="text-lg px-10 py-4">
            Get Started Today
          </Button>
        </div>
      </section>

    </div>
  );
};

export default About;