import { Button } from "../Components/UI/Button";
import { Card } from "../Components/UI/Card";
import { Input } from "../Components/UI/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Globe, Heart, Atom, Calculator, Brain, Microscope, Dna, Zap } from "lucide-react";

export default function Subjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const subjects = [
    {
      id: "human-biology",
      icon: Heart,
      title: "Human Biology",
      description: "Explore human anatomy, physiology, and cellular processes through immersive 3D models.",
      category: "life-science",
      modules: 12,
      difficulty: "Beginner",
      duration: "8 hours",
      students: 3420,
      color: "from-red-500 to-pink-600"
    },
    {
      id: "astronomy",
      icon: Globe,
      title: "Astronomy",
      description: "Journey through space to explore planets, stars, galaxies, and cosmic phenomena.",
      category: "physical-science",
      modules: 15,
      difficulty: "Beginner",
      duration: "12 hours",
      students: 4567,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: "chemistry",
      icon: Atom,
      title: "Chemistry",
      description: "Manipulate atoms and molecules to understand chemical reactions and bonding.",
      category: "physical-science",
      modules: 18,
      difficulty: "Intermediate",
      duration: "14 hours",
      students: 2890,
      color: "from-green-500 to-teal-600"
    },
    {
      id: "physics",
      icon: Calculator,
      title: "Physics",
      description: "Visualize forces, energy, and quantum mechanics through interactive simulations.",
      category: "physical-science",
      modules: 20,
      difficulty: "Intermediate",
      duration: "16 hours",
      students: 3156,
      color: "from-orange-500 to-yellow-600"
    },
    {
      id: "neuroscience",
      icon: Brain,
      title: "Neuroscience",
      description: "Dive deep into the brain and nervous system to understand consciousness and cognition.",
      category: "life-science",
      modules: 10,
      difficulty: "Advanced",
      duration: "10 hours",
      students: 1234,
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: "microbiology",
      icon: Microscope,
      title: "Microbiology",
      description: "Explore the microscopic world of bacteria, viruses, and cellular structures.",
      category: "life-science",
      modules: 8,
      difficulty: "Intermediate",
      duration: "6 hours",
      students: 1876,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: "genetics",
      icon: Dna,
      title: "Genetics",
      description: "Unravel the secrets of DNA, heredity, and genetic engineering.",
      category: "life-science",
      modules: 14,
      difficulty: "Advanced",
      duration: "11 hours",
      students: 987,
      color: "from-pink-500 to-rose-600"
    },
    {
      id: "engineering",
      icon: Zap,
      title: "Engineering",
      description: "Design, build, and test engineering solutions through hands-on 3D projects.",
      category: "engineering",
      modules: 16,
      difficulty: "Intermediate",
      duration: "13 hours",
      students: 2543,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const categories = [
    { id: "all", label: "All Subjects" },
    { id: "life-science", label: "Life Sciences" },
    { id: "physical-science", label: "Physical Sciences" },
    { id: "engineering", label: "Engineering" }
  ];

  const filteredSubjects = subjects.filter(subject => {
    const matchesSearch = subject.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         subject.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || subject.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-nebula">Explore All</span>
            <br />
            <span className="text-foreground">Subjects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Discover the universe of knowledge through immersive 3D learning experiences. 
            From the microscopic to the cosmic, every subject comes alive.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search subjects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  size="sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSubjects.map((subject) => (
              <Card key={subject.id} className="p-6 hover:shadow-cosmic transition-all duration-300 group overflow-hidden relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${subject.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <subject.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {subject.title}
                      </h3>
                      <span variant="outline" className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ">
                        {subject.difficulty}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {subject.description}
                  </p>
                  
                  <div className="flex justify-between text-sm text-muted-foreground mb-6">
                    <span>{subject.modules} modules</span>
                    <span>{subject.duration}</span>
                    <span>{subject.students.toLocaleString()} students</span>
                  </div>
                  
                  <Link to={`/subject/${subject.id}`}>
                    <Button className="w-full group/btn">
                      Explore Subject
                      <span className="ml-auto group-hover/btn:translate-x-1 transition-transform">→</span>
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredSubjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No subjects found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}