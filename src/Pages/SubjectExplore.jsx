import { useParams, Link } from "react-router-dom";
import { Button } from "../Components/UI/Button";
import { Card } from "../Components/UI/Card";
import { Progress } from "../Components/UI/Progress";
import { ArrowLeft, Play, Clock, Users, Star, BookOpen } from "lucide-react";

export default function SubjectExplorer() {
  const { subject } = useParams();
  
  const subjectData = {
    "human-biology": {
      title: "Human Biology",
      description: "Explore the intricate systems that make up the human body through immersive 3D experiences.",
      modules: [
        {
          id: 1,
          title: "Cardiovascular System",
          description: "Journey through the heart and blood vessels in stunning 3D detail.",
          duration: "45 min",
          difficulty: "Beginner",
          students: 1234,
          rating: 4.8,
          progress: 0
        },
        {
          id: 2,
          title: "Respiratory System",
          description: "Breathe life into learning with interactive lung exploration.",
          duration: "38 min",
          difficulty: "Beginner",
          students: 987,
          rating: 4.7,
          progress: 0
        },
        {
          id: 3,
          title: "Nervous System",
          description: "Navigate the complex network of neurons and neural pathways.",
          duration: "52 min",
          difficulty: "Intermediate",
          students: 756,
          rating: 4.9,
          progress: 0
        },
        {
          id: 4,
          title: "Digestive System",
          description: "Follow the journey of nutrition through the digestive tract.",
          duration: "41 min",
          difficulty: "Beginner",
          students: 643,
          rating: 4.6,
          progress: 0
        }
      ],
      color: "from-red-500 to-pink-600"
    },
    "astronomy": {
      title: "Astronomy",
      description: "Embark on cosmic journeys to explore the wonders of our universe.",
      modules: [
        {
          id: 1,
          title: "Solar System Tour",
          description: "Visit each planet and discover their unique characteristics.",
          duration: "48 min",
          difficulty: "Beginner",
          students: 2156,
          rating: 4.9,
          progress: 0
        },
        {
          id: 2,
          title: "Stellar Evolution",
          description: "Witness the birth, life, and death of stars across cosmic time.",
          duration: "55 min",
          difficulty: "Intermediate",
          students: 1543,
          rating: 4.8,
          progress: 0
        },
        {
          id: 3,
          title: "Galaxy Formation",
          description: "Explore how galaxies form and evolve over billions of years.",
          duration: "62 min",
          difficulty: "Advanced",
          students: 891,
          rating: 4.7,
          progress: 0
        }
      ],
      color: "from-blue-500 to-purple-600"
    },
    "chemistry": {
      title: "Chemistry",
      description: "Manipulate atoms and molecules in 3D space to understand chemical interactions.",
      modules: [
        {
          id: 1,
          title: "Atomic Structure",
          description: "Explore the building blocks of matter at the atomic level.",
          duration: "43 min",
          difficulty: "Beginner",
          students: 1876,
          rating: 4.8,
          progress: 0
        },
        {
          id: 2,
          title: "Chemical Bonding",
          description: "Visualize how atoms connect to form molecules and compounds.",
          duration: "47 min",
          difficulty: "Intermediate",
          students: 1234,
          rating: 4.7,
          progress: 0
        },
        {
          id: 3,
          title: "Reaction Mechanisms",
          description: "Watch chemical reactions unfold step by step in 3D.",
          duration: "51 min",
          difficulty: "Advanced",
          students: 768,
          rating: 4.9,
          progress: 0
        }
      ],
      color: "from-green-500 to-teal-600"
    },
    "physics": {
      title: "Physics",
      description: "Visualize fundamental forces and phenomena that govern our universe.",
      modules: [
        {
          id: 1,
          title: "Newton's Laws",
          description: "Experience forces and motion in interactive 3D environments.",
          duration: "44 min",
          difficulty: "Beginner",
          students: 1654,
          rating: 4.7,
          progress: 0
        },
        {
          id: 2,
          title: "Wave Mechanics",
          description: "Visualize sound, light, and electromagnetic waves in action.",
          duration: "49 min",
          difficulty: "Intermediate",
          students: 1123,
          rating: 4.8,
          progress: 0
        },
        {
          id: 3,
          title: "Quantum Physics",
          description: "Explore the strange world of quantum mechanics and particles.",
          duration: "58 min",
          difficulty: "Advanced",
          students: 543,
          rating: 4.9,
          progress: 0
        }
      ],
      color: "from-orange-500 to-yellow-600"
    }
  };

const currentSubject = subjectData[subject];


  if (!currentSubject) {
    return (
      <div className="min-h-screen bg-background">

        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Subject Not Found</h1>
          <p className="text-muted-foreground mb-8">The subject you're looking for doesn't exist.</p>
          <Link to="/subjects">
            <Button>Browse All Subjects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card/20">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${currentSubject.color} flex items-center justify-center mb-6`}>
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-nebula">{currentSubject.title}</span>
                <br />
                <span className="text-foreground">Exploration</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {currentSubject.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center rounded-full border  font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-lg px-4 py-2">
                  {currentSubject.modules.length} Modules
                </span>
                <span  className="inline-flex items-center rounded-full border font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-lg px-4 py-2">
                  Interactive 3D
                </span>
                <span className="inline-flex items-center rounded-full border font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-lg px-4 py-2">
                  Self-Paced
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-full h-80 rounded-2xl bg-gradient-to-br ${currentSubject.color} flex items-center justify-center`}>
                <div className="text-white text-center">
                  <BookOpen className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold">3D Learning Environment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Learning Modules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentSubject.modules.map((module) => (
              <Card key={module.id} className="p-6 hover:shadow-cosmic transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <span
                    className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors
                    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
                    ${
                    module.difficulty === "Beginner"
                    ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
                    : module.difficulty === "Intermediate"
                    ? "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    : "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    }`}
                    >
                    {module.difficulty}
                    </span>

                </div>
                
                <p className="text-muted-foreground mb-4">{module.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {module.students.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {module.rating}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress</span>
                    <span>{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
                
                <Link to={`/module/${subject}`}>
                  <Button className="w-full group/btn">
                    <Play className="w-4 h-4 mr-2" />
                    Start Module
                    <span className="ml-auto group-hover/btn:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}