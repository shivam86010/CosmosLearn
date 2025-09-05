import { Button } from "../Components/UI/Button";
import { Card } from "../Components/UI/Card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "../Components/UI/Progress";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "../Components/UI/TextArea";
// import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Play, Pause, RotateCcw, Maximize, Volume2,BookOpen,CheckCircle,Star,Minimize,StickyNote,Save,Info,Zap} from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Text, Box, Sphere, Torus, Html } from "@react-three/drei";
import { useState, useRef, useEffect } from "react";
import { Mesh, Vector3 } from "three";

// Planet data for detailed information
const planetData = {
  sun: {
    name: "Sun",
    type: "Star",
    diameter: "1,392,700 km",
    temperature: "5,778 K (surface)",
    composition: "73% Hydrogen, 25% Helium",
    description: "The Sun is the star at the center of our Solar System. It's a nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core."
  },
  mercury: {
    name: "Mercury",
    type: "Terrestrial Planet", 
    diameter: "4,879 km",
    distanceFromSun: "57.9 million km",
    orbitalPeriod: "88 Earth days",
    description: "Mercury is the smallest planet in our solar system and the closest to the Sun. It has extreme temperature variations and no atmosphere."
  },
  venus: {
    name: "Venus",
    type: "Terrestrial Planet",
    diameter: "12,104 km", 
    distanceFromSun: "108.2 million km",
    orbitalPeriod: "225 Earth days",
    description: "Venus is the hottest planet in our solar system due to its thick, toxic atmosphere that traps heat in a runaway greenhouse effect."
  },
  earth: {
    name: "Earth",
    type: "Terrestrial Planet",
    diameter: "12,756 km",
    distanceFromSun: "149.6 million km", 
    orbitalPeriod: "365.25 days",
    description: "Earth is the only known planet with life. It has liquid water, a protective atmosphere, and a magnetic field that shields us from harmful radiation."
  },
  mars: {
    name: "Mars",
    type: "Terrestrial Planet",
    diameter: "6,792 km",
    distanceFromSun: "227.9 million km",
    orbitalPeriod: "687 Earth days", 
    description: "Mars is known as the Red Planet due to iron oxide on its surface. It has the largest volcano and canyon in the solar system."
  },
  jupiter: {
    name: "Jupiter",
    type: "Gas Giant",
    diameter: "142,984 km",
    distanceFromSun: "778.5 million km",
    orbitalPeriod: "11.9 Earth years",
    description: "Jupiter is the largest planet in our solar system. It acts as a cosmic vacuum cleaner, protecting inner planets from asteroids and comets."
  }
};

// Interactive Planet Component
const InteractivePlanet = ({ 
  position, 
  args, 
  color, 
  planetKey, 
  onPlanetClick, 
  children 
}) => {
  const meshRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  return (
    <group>
      <Sphere 
        ref={meshRef}
        args={args} 
        position={position}
        onClick={() => onPlanetClick(planetKey)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial 
          color={color} 
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </Sphere>
      {hovered && (
        <Html position={[position[0], position[1] + args[0] + 0.5, position[2]]}>
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-sm font-medium pointer-events-none">
            {planetData[planetKey]?.name || planetKey}
          </div>
        </Html>
      )}
      {children}
    </group>
  );
};

// Enhanced Solar System Scene with Animation
const SolarSystemScene = ({ speed = 1, onPlanetClick }) => {
  const earthRef = useRef(null);
  const marsRef = useRef(null);
  const mercuryRef = useRef(null);
  const venusRef = useRef(null);
  const jupiterRef = useRef(null);
  const moonRef = useRef(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * speed;
    
    // Animate planetary orbits
    if (mercuryRef.current) {
      mercuryRef.current.position.x = Math.cos(time * 4) * 2;
      mercuryRef.current.position.z = Math.sin(time * 4) * 2;
    }
    
    if (venusRef.current) {
      venusRef.current.position.x = Math.cos(time * 2.5) * 3;
      venusRef.current.position.z = Math.sin(time * 2.5) * 3;
    }
    
    if (earthRef.current) {
      earthRef.current.position.x = Math.cos(time * 1.5) * 4.5;
      earthRef.current.position.z = Math.sin(time * 1.5) * 4.5;
      earthRef.current.rotation.y = time * 10; // Earth rotation
    }
    
    if (moonRef.current && earthRef.current) {
      moonRef.current.position.x = earthRef.current.position.x + Math.cos(time * 8) * 0.8;
      moonRef.current.position.z = earthRef.current.position.z + Math.sin(time * 8) * 0.8;
    }
    
    if (marsRef.current) {
      marsRef.current.position.x = Math.cos(time * 0.8) * 6.5;
      marsRef.current.position.z = Math.sin(time * 0.8) * 6.5;
    }
    
    if (jupiterRef.current) {
      jupiterRef.current.position.x = Math.cos(time * 0.3) * 9;
      jupiterRef.current.position.z = Math.sin(time * 0.3) * 9;
    }
  });
  
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={3} color="#ffeb3b" />
      
      {/* Sun */}
      <InteractivePlanet 
        position={[0, 0, 0]} 
        args={[1]} 
        color="#ffeb3b" 
        planetKey="sun"
        onPlanetClick={onPlanetClick}
      />
      
      {/* Mercury */}
      <InteractivePlanet 
        position={[2, 0, 0]} 
        args={[0.15]} 
        color="#8c7853" 
        planetKey="mercury"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={mercuryRef} />
      </InteractivePlanet>
      
      {/* Venus */}
      <InteractivePlanet 
        position={[3, 0, 0]} 
        args={[0.25]} 
        color="#ffc649" 
        planetKey="venus"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={venusRef} />
      </InteractivePlanet>
      
      {/* Earth */}
      <InteractivePlanet 
        position={[4.5, 0, 0]} 
        args={[0.3]} 
        color="#4fc3f7" 
        planetKey="earth"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={earthRef} />
      </InteractivePlanet>
      
      {/* Moon */}
      <InteractivePlanet 
        position={[5.3, 0, 0]} 
        args={[0.08]} 
        color="#cfd8dc" 
        planetKey="moon"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={moonRef} />
      </InteractivePlanet>
      
      {/* Mars */}
      <InteractivePlanet 
        position={[6.5, 0, 0]} 
        args={[0.2]} 
        color="#ff5722" 
        planetKey="mars"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={marsRef} />
      </InteractivePlanet>
      
      {/* Jupiter */}
      <InteractivePlanet 
        position={[9, 0, 0]} 
        args={[0.8]} 
        color="#d2691e" 
        planetKey="jupiter"
        onPlanetClick={onPlanetClick}
      >
        <mesh ref={jupiterRef} />
      </InteractivePlanet>
      
      {/* Orbital paths */}
      {[2, 3, 4.5, 6.5, 9].map((radius, index) => (
        <Torus key={index} args={[radius, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </Torus>
      ))}
      
      <Text position={[0, 3, 0]} fontSize={0.4} color="white">
        Interactive Solar System
      </Text>
    </>
  );
};

const CellStructureScene = () => {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {/* Cell membrane */}
      <Sphere args={[2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e1f5fe" transparent opacity={0.3} />
      </Sphere>
      
      {/* Nucleus */}
      <Sphere args={[0.8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3f51b5" />
      </Sphere>
      
      {/* Mitochondria */}
      <Box args={[0.3, 0.6, 0.2]} position={[1, 0.5, 0]}>
        <meshStandardMaterial color="#4caf50" />
      </Box>
      <Box args={[0.3, 0.6, 0.2]} position={[-1, -0.5, 0]}>
        <meshStandardMaterial color="#4caf50" />
      </Box>
      
      <Text position={[0, 3, 0]} fontSize={0.4} color="#333">
        Cell Structure & Function
      </Text>
    </>
  );
};

const MolecularScene = () => {
  return (
    <>
      <Environment preset="warehouse" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      
      {/* Water molecule */}
      {/* Oxygen */}
      <Sphere args={[0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f44336" />
      </Sphere>
      
      {/* Hydrogen atoms */}
      <Sphere args={[0.15]} position={[-0.5, 0.3, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.15]} position={[0.5, 0.3, 0]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      
      {/* Bonds */}
      <Box args={[0.02, 0.4, 0.02]} position={[-0.25, 0.15, 0]} rotation={[0, 0, 0.5]}>
        <meshStandardMaterial color="#666" />
      </Box>
      <Box args={[0.02, 0.4, 0.02]} position={[0.25, 0.15, 0]} rotation={[0, 0, -0.5]}>
        <meshStandardMaterial color="#666" />
      </Box>
      
      <Text position={[0, -1.5, 0]} fontSize={0.3} color="#333">
        H₂O - Water Molecule
      </Text>
    </>
  );
};

const QuantumScene = () => {
  return (
    <>
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#9c27b0" />
      
      {/* Electron orbitals */}
      <Torus args={[1, 0.05]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#9c27b0" transparent opacity={0.7} />
      </Torus>
      <Torus args={[1.5, 0.05]} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#2196f3" transparent opacity={0.7} />
      </Torus>
      <Torus args={[2, 0.05]} position={[0, 0, 0]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <meshStandardMaterial color="#4caf50" transparent opacity={0.7} />
      </Torus>
      
      {/* Nucleus */}
      <Sphere args={[0.2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff5722" />
      </Sphere>
      
      <Text position={[0, 3, 0]} fontSize={0.4} color="white">
        Quantum Mechanics
      </Text>
    </>
  );
};

const Module = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const subject = searchParams.get('subject') || 'astronomy';
  const module = searchParams.get('module') || 'solar-system-explorer';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notes, setNotes] = useState('');
  const [speed, setSpeed] = useState(1);
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);

  const moduleData = {
    'solar-system-explorer': {
      title: 'Solar System Explorer',
      subject: 'Astronomy',
      duration: '45 min',
      difficulty: 'Beginner',
      description: 'Journey through our solar system and explore the planets, moons, and other celestial bodies in stunning 3D detail.',
      objectives: [
        'Understand planetary sizes and distances',
        'Learn about orbital mechanics',
        'Explore surface features of planets',
        'Discover moons and their characteristics'
      ],
      scene: (props: any) => <SolarSystemScene {...props} speed={speed} onPlanetClick={setSelectedPlanet} />
    },
    'cell-structure': {
      title: 'Cell Structure & Function',
      subject: 'Biology', 
      duration: '40 min',
      difficulty: 'Beginner',
      description: 'Dive into the microscopic world of cells and discover how these building blocks of life function.',
      objectives: [
        'Identify cellular components',
        'Understand organelle functions',
        'Learn about cell membrane transport',
        'Explore cellular respiration'
      ],
      scene: CellStructureScene
    },
    'molecular-structures': {
      title: 'Molecular Structures',
      subject: 'Chemistry',
      duration: '35 min', 
      difficulty: 'Intermediate',
      description: 'Visualize molecular bonds and structures in 3D to understand chemical behavior.',
      objectives: [
        'Understand chemical bonding',
        'Visualize molecular geometry',
        'Learn about polarity',
        'Explore intermolecular forces'
      ],
      scene: MolecularScene
    },
    'quantum-mechanics': {
      title: 'Quantum Mechanics',
      subject: 'Physics',
      duration: '120 min',
      difficulty: 'Advanced', 
      description: 'Explore the strange world of quantum physics through interactive visualizations.',
      objectives: [
        'Understand wave-particle duality',
        'Learn about electron orbitals',
        'Explore quantum tunneling',
        'Discover quantum entanglement'
      ],
      scene: QuantumScene
    }
  };

  const currentModule = moduleData[module] || moduleData['solar-system-explorer'];
  const SceneComponent = currentModule.scene;

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setProgress(0);
    setIsPlaying(false);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleSaveNotes = () => {
    localStorage.setItem(`notes-${module}`, notes);
    // You can add a toast notification here
  };

  useEffect(() => {
    const savedNotes = localStorage.getItem(`notes-${module}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [module]);

  return (
    <div className="min-h-screen">
      
      {/* Header */}
      <section className="pt-24 pb-6 px-4 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate(`/learning?subject=${subject}`)}
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to {currentModule.subject}
            </Button>
            <Badge variant="secondary">{currentModule.difficulty}</Badge>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentModule.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{currentModule.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Duration: {currentModule.duration}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.8 rating</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    <StickyNote className="w-4 h-4 mr-2" />
                    Notes
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <h4 className="font-medium">Module Notes</h4>
                    <Textarea 
                      placeholder="Take notes about this module..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <Button onClick={handleSaveNotes} size="sm" className="w-full">
                      <Save className="w-4 h-4 mr-2" />
                      Save Notes
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
              
              <Button variant="outline" size="sm" onClick={handleFullscreen}>
                {isFullscreen ? <Minimize className="w-4 h-4 mr-2" /> : <Maximize className="w-4 h-4 mr-2" />}
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={`flex flex-col lg:flex-row ${isFullscreen ? 'fixed inset-0 z-50 bg-background' : 'min-h-[calc(100vh-200px)]'}`}>
        {/* 3D Viewer */}
        <div className="flex-1 relative">
          <div className={`${isFullscreen ? 'absolute inset-0' : 'absolute inset-4'} bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden`}>
            <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              <TooltipProvider>
                <SceneComponent />
              </TooltipProvider>
            </Canvas>
          </div>
          
          {/* Controls Overlay */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <Card className="p-4 backdrop-blur-sm bg-background/90 border-border">
              <div className="flex items-center gap-4">
                <Button variant="cosmic" size="sm" onClick={handlePlayPause}>
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button variant="outline" size="sm" onClick={handleReset}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
                
                {/* Speed Control */}
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <Slider
                    value={[speed]}
                    onValueChange={(value) => setSpeed(value[0])}
                    max={3}
                    min={0.1}
                    step={0.1}
                    className="w-20"
                  />
                  <span className="text-xs min-w-[2rem]">{speed.toFixed(1)}x</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4" />
                  <div className="w-20 h-2 bg-muted rounded-full">
                    <div className="w-3/4 h-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Fullscreen exit button */}
          {isFullscreen && (
            <div className="absolute top-4 right-4">
              <Button variant="glass" size="sm" onClick={handleFullscreen}>
                <Minimize className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className={`lg:w-80 border-l bg-muted/30 ${isFullscreen ? 'hidden' : ''}`}>
          <div className="p-6 space-y-6">
            {/* Progress */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Progress</h3>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Learning Objectives */}
            <div>
              <h3 className="font-semibold mb-3">Learning Objectives</h3>
              <div className="space-y-2">
                {currentModule.objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{objective}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <Card className="p-4">
              <h4 className="font-medium mb-2">How to Interact</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>• Click and drag to rotate the view</p>
                <p>• Scroll to zoom in and out</p>
                <p>• Right-click and drag to pan</p>
                <p>• Use controls below to play simulations</p>
              </div>
            </Card>

            {/* Next Steps */}
            <div>
              <Button className="w-full" variant="cosmic" asChild>
                <a href="/learning">
                  <Play className="w-4 h-4 mr-2" />
                  Continue Learning
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Planet Info Modal */}
      <Dialog open={!!selectedPlanet} onOpenChange={() => setSelectedPlanet(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              {selectedPlanet && planetData[selectedPlanet]?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedPlanet && planetData[selectedPlanet] && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="font-medium text-muted-foreground">Type:</span>
                  <p>{planetData[selectedPlanet].type}</p>
                </div>
                <div>
                  <span className="font-medium text-muted-foreground">Diameter:</span>
                  <p>{planetData[selectedPlanet].diameter}</p>
                </div>
                {planetData[selectedPlanet].distanceFromSun && (
                  <div>
                    <span className="font-medium text-muted-foreground">Distance from Sun:</span>
                    <p>{planetData[selectedPlanet].distanceFromSun}</p>
                  </div>
                )}
                {planetData[selectedPlanet].orbitalPeriod && (
                  <div>
                    <span className="font-medium text-muted-foreground">Orbital Period:</span>
                    <p>{planetData[selectedPlanet].orbitalPeriod}</p>
                  </div>
                )}
              </div>
              <div>
                <span className="font-medium text-muted-foreground">Description:</span>
                <p className="text-sm mt-1 text-foreground/90">{planetData[selectedPlanet].description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {!isFullscreen && "hello"}
    </div>
  );
};

export default Module;