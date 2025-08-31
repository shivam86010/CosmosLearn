import { Button } from "../Components/UI/Button";
import { Progress } from "../Components/UI/Progress";
import { Play, Clock, BookOpen, Star, Users, CheckCircle,ArrowRight,Telescope,Dna,Atom,Zap} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Learning = () => {
  const [searchParams] = useSearchParams();
  const subject = searchParams.get('subject') || 'astronomy';
  const [moduleProgress, setModuleProgress] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('moduleProgress');
    if (savedProgress) {
      setModuleProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('moduleProgress', JSON.stringify(moduleProgress));
  }, [moduleProgress]);

  const updateProgress = (moduleTitle, progress) => {
    setModuleProgress(prev => ({
      ...prev,
      [moduleTitle]: progress
    }));
  };

  const subjectData = {
    astronomy: {
      title: "Astronomy",
      icon: Telescope,
      color: "cosmic",
      description: "Explore the cosmos from planets to galaxies",
      modules: [
        { title: "Solar System Explorer", duration: "45 min", completed: false, difficulty: "Beginner", id: "solar-system" },
        { title: "Galaxy Formation", duration: "60 min", completed: false, difficulty: "Intermediate", id: "galaxy-formation" },
        { title: "Black Holes & Physics", duration: "90 min", completed: false, difficulty: "Advanced", id: "black-holes" },
        { title: "Stellar Evolution", duration: "75 min", completed: false, difficulty: "Intermediate", id: "stellar-evolution" }
      ]
    },
    biology: {
      title: "Biology",
      icon: Dna,
      color: "accent", 
      description: "Journey through life from cells to ecosystems",
      modules: [
        { title: "Human Anatomy 3D", duration: "50 min", completed: false, difficulty: "Beginner", id: "human-anatomy" },
        { title: "Cell Structure & Function", duration: "40 min", completed: false, difficulty: "Beginner", id: "cell-structure" },
        { title: "Ecosystem Dynamics", duration: "65 min", completed: false, difficulty: "Intermediate", id: "ecosystem-dynamics" },
        { title: "Genetic Engineering", duration: "80 min", completed: false, difficulty: "Advanced", id: "genetic-engineering" }
      ]
    },
    chemistry: {
      title: "Chemistry", 
      icon: Atom,
      color: "nebula",
      description: "Visualize molecules and chemical reactions",
      modules: [
        { title: "Molecular Structures", duration: "35 min", completed: false, difficulty: "Intermediate" },
        { title: "Chemical Bonding", duration: "45 min", completed: false, difficulty: "Intermediate" },
        { title: "Reaction Mechanisms", duration: "70 min", completed: false, difficulty: "Advanced" },
        { title: "Periodic Table 3D", duration: "30 min", completed: false, difficulty: "Beginner" }
      ]
    },
    physics: {
      title: "Physics",
      icon: Zap, 
      color: "primary",
      description: "Experience forces and motion in 3D space",
      modules: [
        { title: "Quantum Mechanics", duration: "120 min", completed: false, difficulty: "Advanced" },
        { title: "Electromagnetic Fields", duration: "90 min", completed: false, difficulty: "Advanced" },
        { title: "Relativity Theory", duration: "100 min", completed: false, difficulty: "Advanced" },
        { title: "Wave Physics", duration: "60 min", completed: false, difficulty: "Intermediate" }
      ]
    }
  };

  const currentSubject = subjectData[subject] || subjectData.astronomy;
  const IconComponent = currentSubject.icon;

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-${currentSubject.color} flex items-center justify-center`}>
              <IconComponent className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-cosmic">{currentSubject.title}</h1>
              <p className="text-lg text-muted-foreground mt-2">{currentSubject.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">{currentSubject.modules.length} Interactive Modules</h3>
              <p className="text-sm text-muted-foreground">Hands-on 3D learning experiences</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Self-Paced Learning</h3>
              <p className="text-sm text-muted-foreground">Learn at your own speed</p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor your advancement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Modules */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Learning Modules</h2>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>2,847 students enrolled</span>
            </div>
          </div>

          <div className="space-y-4">
            {currentSubject.modules.map((module, index) => (
              <div key={module.title} className="rounded-lg border bg-card text-card-foreground shadow-sm  p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-cosmic flex items-center justify-center text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold">{module.title}</h3>
                        <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors
                                ${
                                module.difficulty === "Beginner"
                                    ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                                    : module.difficulty === "Intermediate"
                                    ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                                    : "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                                }
                            `}
                            >
                            {module.difficulty}
                            </span>

                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.duration}
                        </div>
                        {module.completed && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Completed
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="cosmic" 
                    className="group"
                    onClick={() => {
                      const moduleSlug = module.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                      window.location.href = `/module?subject=${subject}&module=${moduleSlug}`;
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {module.completed ? 'Review' : 'Start'}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Progress</span>
                    <span className="text-sm text-muted-foreground">{moduleProgress[module.title] || 0}%</span>
                  </div>
                  <Progress value={moduleProgress[module.title] || 0} className="h-2" />
                  
                  {(moduleProgress[module.title] || 0) > 0 && (
                    <div className="flex gap-2 mt-3">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => updateProgress(module.title, Math.min((moduleProgress[module.title] || 0) + 25, 100))}
                      >
                        Continue Learning
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => updateProgress(module.title, 0)}
                      >
                        Reset Progress
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learning;