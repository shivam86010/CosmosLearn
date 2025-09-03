// import { Button } from "../Components/UI/Button";
// import { Atom, Brain, Dna, Globe, Microscope, Telescope, Heart, Zap,ArrowRight,Play,  BookOpen,Users} from "lucide-react";

// const Explore = () => {
//   const subjects = [
//     {
//       title: "Astronomy",
//       description: "Explore the cosmos from planets to galaxies",
//       icon: Telescope,
//       color: "cosmic",
//       modules: [
//         "Solar System Explorer",
//         "Galaxy Formation",
//         "Black Holes & Physics",
//         "Stellar Evolution"
//       ],
//       level: "Beginner to Advanced",
//       duration: "2-4 hours per module"
//     },
//     {
//       title: "Biology", 
//       description: "Journey through life from cells to ecosystems",
//       icon: Dna,
//       color: "accent",
//       modules: [
//         "Human Anatomy 3D",
//         "Cell Structure & Function", 
//         "Ecosystem Dynamics",
//         "Genetic Engineering"
//       ],
//       level: "All Levels",
//       duration: "1-3 hours per module"
//     },
//     {
//       title: "Chemistry",
//       description: "Visualize molecules and chemical reactions",
//       icon: Atom,
//       color: "nebula",
//       modules: [
//         "Molecular Structures",
//         "Chemical Bonding",
//         "Reaction Mechanisms",
//         "Periodic Table 3D"
//       ],
//       level: "Intermediate",
//       duration: "1-2 hours per module"
//     },
//     {
//       title: "Physics",
//       description: "Experience forces and motion in 3D space",
//       icon: Zap,
//       color: "primary",
//       modules: [
//         "Quantum Mechanics",
//         "Electromagnetic Fields",
//         "Relativity Theory",
//         "Wave Physics"
//       ],
//       level: "Advanced",
//       duration: "2-5 hours per module"
//     }
//   ];

//   const features = [
//     {
//       icon: Globe,
//       title: "360° Exploration",
//       description: "Rotate, zoom, and inspect every detail"
//     },
//     {
//       icon: Brain,
//       title: "Adaptive Learning",
//       description: "AI adjusts to your learning pace"
//     },
//     {
//       icon: Users,
//       title: "Collaborative",
//       description: "Learn with classmates in real-time"
//     },
//     {
//       icon: BookOpen,
//       title: "Rich Content",
//       description: "Thousands of interactive models"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-4 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
//           <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
//         </div>
        
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
//               <span className="text-cosmic">Start</span>
//               <br />
//               <span className="text-foreground">Exploring</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
//               Dive into interactive 3D learning experiences across multiple scientific disciplines. Choose your subject and begin your cosmic learning journey.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {features?.map((feature, index) => (
//                 <div key={feature.title} className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
//                   <feature.icon className="w-4 h-4 text-primary" />
//                   <span className="text-sm font-medium">{feature.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Subject Cards */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             {subjects.map((subject, index) => (
//               <div key={subject.title} className="rounded-lg bg-card text-card-foreground shadow-sm p-8 group hover:shadow-xl transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/20" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="flex items-start gap-6">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-${subject.color} flex items-center justify-center flex-shrink-0`}>
//                     <subject.icon className="w-8 h-8 text-primary-foreground" />
//                   </div>
                  
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-3">
//                       <h3 className="text-2xl font-bold">{subject.title}</h3>
//                       <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{subject.level}</span>
//                     </div>
                    
//                     <p className="text-muted-foreground mb-4">{subject.description}</p>
                    
//                     <div className="mb-4">
//                       <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Learning Modules:</h4>
//                       <div className="grid grid-cols-2 gap-2">
//                         {subject.modules.map((module) => (
//                           <div key={module} className="text-sm text-muted-foreground flex items-center gap-2">
//                             <div className="w-1.5 h-1.5 bg-primary rounded-full" />
//                             {module}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center justify-between mb-6">
//                       <div className="text-xs text-muted-foreground">
//                         <div className="flex items-center gap-2">
//                           <Microscope className="w-3 h-3" />
//                           {subject.duration}
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="flex gap-3">
//                       <Button variant="cosmic" className="flex-1 group" asChild>
//                         <a href={`/learning?subject=${subject.title.toLowerCase()}`}>
//                           <Play className="w-4 h-4 mr-2" />
//                           Start Learning
//                           <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                         </a>
//                       </Button>
//                       <Button variant="outline" size="icon">
//                         <Heart className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Learning Path Section */}
//       <section className="py-16 px-4 bg-gradient-subtle">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-cosmic">Your Learning Path</span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
//               Personalized learning journeys that adapt to your pace and interests. Track progress, earn achievements, and unlock advanced content.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Choose Your Subject",
//                 description: "Select from astronomy, biology, chemistry, or physics"
//               },
//               {
//                 step: "02", 
//                 title: "Interactive Exploration",
//                 description: "Manipulate 3D models and conduct virtual experiments"
//               },
//               {
//                 step: "03",
//                 title: "Test Your Knowledge", 
//                 description: "Complete quizzes and challenges to reinforce learning"
//               }
//             ].map((step, index) => (
//               <div key={step.step} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
//                 <div className="text-6xl font-bold text-cosmic/20 mb-4">{step.step}</div>
//                 <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
//                 <p className="text-muted-foreground">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             <span className="text-cosmic">Ready to Begin?</span>
//           </h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Start your free trial and experience the future of interactive learning.
//           </p>
//           <Button variant="cosmic" size="lg" className="text-lg px-10 py-4" asChild>
//             <a href="/trial">
//               Start Free Trial
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </a>
//           </Button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Explore;



// import { useEffect, useRef, useState } from "react";
// import { Button } from "../Components/UI/Button";
// import { 
//   Atom, Brain, Dna, Globe, Microscope, Telescope, 
//   Heart, Zap, ArrowRight, Play, BookOpen, Users 
// } from "lucide-react";

// const Explore = () => {
//   const containerRef = useRef(null);
//   const subjectCardRefs = useRef([]);
//   const [bgHue, setBgHue] = useState(260);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
//   const subjects = [
//     {
//       title: "Astronomy",
//       description: "Explore the cosmos from planets to galaxies",
//       icon: Telescope,
//       color: "cosmic",
//       modules: [
//         "Solar System Explorer",
//         "Galaxy Formation",
//         "Black Holes & Physics",
//         "Stellar Evolution"
//       ],
//       level: "Beginner to Advanced",
//       duration: "2-4 hours per module"
//     },
//     {
//       title: "Biology", 
//       description: "Journey through life from cells to ecosystems",
//       icon: Dna,
//       color: "accent",
//       modules: [
//         "Human Anatomy 3D",
//         "Cell Structure & Function", 
//         "Ecosystem Dynamics",
//         "Genetic Engineering"
//       ],
//       level: "All Levels",
//       duration: "1-3 hours per module"
//     },
//     {
//       title: "Chemistry",
//       description: "Visualize molecules and chemical reactions",
//       icon: Atom,
//       color: "nebula",
//       modules: [
//         "Molecular Structures",
//         "Chemical Bonding",
//         "Reaction Mechanisms",
//         "Periodic Table 3D"
//       ],
//       level: "Intermediate",
//       duration: "1-2 hours per module"
//     },
//     {
//       title: "Physics",
//       description: "Experience forces and motion in 3D space",
//       icon: Zap,
//       color: "primary",
//       modules: [
//         "Quantum Mechanics",
//         "Electromagnetic Fields",
//         "Relativity Theory",
//         "Wave Physics"
//       ],
//       level: "Advanced",
//       duration: "2-5 hours per module"
//     }
//   ];

//   const features = [
//     {
//       icon: Globe,
//       title: "360° Exploration",
//       description: "Rotate, zoom, and inspect every detail"
//     },
//     {
//       icon: Brain,
//       title: "Adaptive Learning",
//       description: "AI adjusts to your learning pace"
//     },
//     {
//       icon: Users,
//       title: "Collaborative",
//       description: "Learn with classmates in real-time"
//     },
//     {
//       icon: BookOpen,
//       title: "Rich Content",
//       description: "Thousands of interactive models"
//     }
//   ];

//   // Handle mouse movement for 3D effect on subject cards
//   useEffect(() => {
//     const handleCardMouseMove = (e, card, index) => {
//       if (card) {
//         const rect = card.getBoundingClientRect();
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;
        
//         const centerX = rect.width / 2;
//         const centerY = rect.height / 2;
        
//         // Increased rotation for more dramatic effect
//         const rotateX = ((y - centerY) / centerY) * 15; // Increased from 5 to 15
//         const rotateY = ((x - centerX) / centerX) * -15; // Increased from 5 to 15
        
//         // Calculate background hue based on rotation
//         const hueRotation = 260 + (rotateY * 3); // Increased multiplier for more color change
//         const currentHue = Math.min(320, Math.max(200, hueRotation));
        
//         card.style.transform = `
//           perspective(1000px)
//           rotateX(${rotateX}deg)
//           rotateY(${rotateY}deg)
//           scale3d(1.03, 1.03, 1.03)
//         `;
        
//         // Update background and border colors based on rotation
//         const subjectColor = `hsl(${currentHue}, 85%, 65%)`;
//         const borderColor = `hsl(${(currentHue + 40) % 360}, 91%, 60%)`;
        
//         // Create gradient background that changes with rotation
//         card.style.background = `
//           linear-gradient(
//             ${135 + rotateY * 2}deg, 
//             ${subjectColor}15, 
//             ${borderColor}10,
//             hsl(${(currentHue + 80) % 360}, 85%, 60%)05
//           )
//         `;
        
//         // Enhanced border with gradient that changes with rotation
//         card.style.borderImage = `
//           linear-gradient(
//             ${45 + rotateY * 2}deg, 
//             ${subjectColor}80, 
//             ${borderColor}60,
//             hsl(${(currentHue + 80) % 360}, 85%, 60%)40
//           ) 1
//         `;
        
//         // Update icon background
//         const icon = card.querySelector('.subject-icon');
//         if (icon) {
//           icon.style.background = `
//             linear-gradient(
//               ${135 + rotateY * 2}deg, 
//               ${subjectColor}, 
//               ${borderColor}
//             )
//           `;
          
//           // Parallax effect for icons
//           const moveX = (x / rect.width - 0.5) * 10; // Increased from 5 to 10
//           const moveY = (y / rect.height - 0.5) * 10; // Increased from 5 to 10
//           icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.15)`;
//         }
        
//         // Update text colors
//         const title = card.querySelector('.subject-title');
//         if (title) {
//           title.style.color = subjectColor;
//           title.style.textShadow = `0 0 10px ${subjectColor}40, 0 0 20px ${subjectColor}20`;
//         }
        
//         const badge = card.querySelector('.subject-badge');
//         if (badge) {
//           badge.style.background = `
//             linear-gradient(
//               ${135 + rotateY * 2}deg, 
//               ${subjectColor}30, 
//               ${borderColor}20
//             )
//           `;
//           badge.style.borderColor = `${subjectColor}60`;
//           badge.style.color = subjectColor;
//         }
        
//         // Update button colors
//         const button = card.querySelector('.subject-button');
//         if (button) {
//           button.style.background = `
//             linear-gradient(
//               ${135 + rotateY * 2}deg, 
//               ${subjectColor}, 
//               ${borderColor}
//             )
//           `;
//           button.style.boxShadow = `0 0 15px ${subjectColor}50`;
//         }
        
//         const outlineButton = card.querySelector('.subject-outline-button');
//         if (outlineButton) {
//           outlineButton.style.borderColor = `${subjectColor}60`;
//           outlineButton.style.color = subjectColor;
//           outlineButton.style.boxShadow = `0 0 10px ${subjectColor}30`;
//         }
        
//         // Update module dots
//         const modules = card.querySelectorAll('.module-dot');
//         modules.forEach((dot, i) => {
//           dot.style.background = subjectColor;
//           dot.style.boxShadow = `0 0 8px ${subjectColor}`;
//         });
//       }
//     };

//     const handleCardMouseLeave = (card) => {
//       if (card) {
//         card.style.transform = `
//           perspective(1000px)
//           rotateX(0deg)
//           rotateY(0deg)
//           scale3d(1, 1, 1)
//         `;
        
//         // Reset to default colors with smooth transition
//         card.style.transition = 'all 0.5s ease';
//         card.style.background = '';
//         card.style.borderImage = '';
        
//         const icon = card.querySelector('.subject-icon');
//         if (icon) {
//           icon.style.background = '';
//           icon.style.transform = 'translate(0, 0) scale(1)';
//           icon.style.transition = 'all 0.5s ease';
//         }
        
//         const title = card.querySelector('.subject-title');
//         if (title) {
//           title.style.color = '';
//           title.style.textShadow = '';
//           title.style.transition = 'all 0.5s ease';
//         }
        
//         const badge = card.querySelector('.subject-badge');
//         if (badge) {
//           badge.style.background = '';
//           badge.style.borderColor = '';
//           badge.style.color = '';
//           badge.style.transition = 'all 0.5s ease';
//         }
        
//         const button = card.querySelector('.subject-button');
//         if (button) {
//           button.style.background = '';
//           button.style.boxShadow = '';
//           button.style.transition = 'all 0.5s ease';
//         }
        
//         const outlineButton = card.querySelector('.subject-outline-button');
//         if (outlineButton) {
//           outlineButton.style.borderColor = '';
//           outlineButton.style.color = '';
//           outlineButton.style.boxShadow = '';
//           outlineButton.style.transition = 'all 0.5s ease';
//         }
        
//         const modules = card.querySelectorAll('.module-dot');
//         modules.forEach((dot) => {
//           dot.style.background = '';
//           dot.style.boxShadow = '';
//           dot.style.transition = 'all 0.5s ease';
//         });
        
//         // Remove transition after reset
//         setTimeout(() => {
//           card.style.transition = '';
//         }, 500);
//       }
//     };

//     // Add event listeners to all subject cards
//     subjectCardRefs.current.forEach((card, index) => {
//       if (card) {
//         card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card, index));
//         card.addEventListener('mouseleave', () => handleCardMouseLeave(card));
//       }
//     });

//     return () => {
//       // Clean up event listeners
//       subjectCardRefs.current.forEach((card) => {
//         if (card) {
//           card.removeEventListener('mousemove', handleCardMouseMove);
//           card.removeEventListener('mouseleave', handleCardMouseLeave);
//         }
//       });
//     };
//   }, []);

//   // Handle global mouse movement for background effects
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!containerRef.current) return;
      
//       const rect = containerRef.current.getBoundingClientRect();
//       const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
//       const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      
//       setMousePosition({ x, y });
//     };

//     const container = containerRef.current;
//     if (container) {
//       container.addEventListener('mousemove', handleMouseMove);
//     }

//     return () => {
//       if (container) {
//         container.removeEventListener('mousemove', handleMouseMove);
//       }
//     };
//   }, []);

//   // Calculate dynamic colors based on mouse position
//   const getDynamicColor = (baseColor) => {
//     const { x, y } = mousePosition;
    
//     // Different color transformations based on base color
//     switch(baseColor) {
//       case 'cosmic':
//         return `hsl(${280 + x * 30}, 85%, ${65 + y * 15}%)`; // Increased multipliers
//       case 'accent':
//         return `hsl(${180 + x * 30}, 85%, ${65 + y * 15}%)`; // Increased multipliers
//       case 'nebula':
//         return `hsl(${330 + x * 30}, 85%, ${65 + y * 15}%)`; // Increased multipliers
//       case 'primary':
//         return `hsl(${220 + x * 30}, 85%, ${65 + y * 15}%)`; // Increased multipliers
//       default:
//         return `hsl(${280 + x * 30}, 85%, ${65 + y * 15}%)`; // Increased multipliers
//     }
//   };

//   // Calculate background gradient based on mouse position
//   const dynamicGradient = `
//     radial-gradient(
//       circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
//       ${getDynamicColor('cosmic')}30, 
//       ${getDynamicColor('nebula')}20, 
//       ${getDynamicColor('accent')}10
//     ),
//     linear-gradient(
//       ${135 + mousePosition.x * 45}deg,
//       ${getDynamicColor('cosmic')}15,
//       ${getDynamicColor('primary')}10,
//       transparent 50%
//     )
//   `;

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-screen overflow-hidden cosmic-bg transition-all duration-500"
//       style={{ background: dynamicGradient }}
//     >
//       {/* Animated cosmic particles */}
//       <div className="cosmic-particles">
//         {[...Array(40)].map((_, i) => (
//           <div 
//             key={i}
//             className="particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${10 + Math.random() * 10}s`,
//               background: getDynamicColor(i % 2 === 0 ? 'cosmic' : 'nebula'),
//               width: `${2 + Math.random() * 3}px`,
//               height: `${2 + Math.random() * 3}px`,
//               opacity: 0.7 + Math.random() * 0.3
//             }}
//           />
//         ))}
//       </div>
      
//       {/* Hero Section */}
//       <section className="pt-24 pb-16 px-4 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div 
//             className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float opacity-80 transition-all duration-1000"
//             style={{ 
//               background: getDynamicColor('cosmic'),
//               transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
//             }}
//           />
//           <div 
//             className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl animate-float opacity-80 transition-all duration-1000"
//             style={{ 
//               background: getDynamicColor('accent'),
//               animationDelay: '3s',
//               transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
//             }}
//           />
//         </div>
        
//         <div className="max-w-6xl mx-auto text-center relative z-10">
//           <div className="animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-500">
//               <span style={{ 
//                 color: getDynamicColor('cosmic'),
//                 textShadow: `0 0 20px ${getDynamicColor('cosmic')}80`
//               }}>
//                 Start
//               </span>
//               <br />
//               <span className="text-foreground">Exploring</span>
//             </h1>
            
//             <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-500">
//               Dive into interactive 3D learning experiences across multiple scientific disciplines. Choose your subject and begin your cosmic learning journey.
//             </p>

//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {features?.map((feature, index) => (
//                 <div 
//                   key={feature.title} 
//                   className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border animate-fade-in-up transition-all duration-500 hover:scale-110"
//                   style={{ 
//                     animationDelay: `${index * 0.1}s`,
//                     borderColor: `${getDynamicColor('cosmic')}60`,
//                     background: `linear-gradient(135deg, ${getDynamicColor('cosmic')}20, ${getDynamicColor('primary')}10)`,
//                     transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
//                   }}
//                 >
//                   <feature.icon 
//                     className="w-4 h-4 transition-all duration-500" 
//                     style={{ color: getDynamicColor('primary') }} 
//                   />
//                   <span className="text-sm font-medium">{feature.title}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Subject Cards with Enhanced 3D Effect */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-8">
//             {subjects.map((subject, index) => {
//               const subjectColor = getDynamicColor(subject.color);
//               return (
//                 <div 
//                   key={subject.title} 
//                   ref={el => subjectCardRefs.current[index] = el}
//                   className="rounded-xl bg-card text-card-foreground shadow-lg p-8 group hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-2 relative overflow-hidden cursor-pointer"
//                   style={{ 
//                     animationDelay: `${index * 0.1}s`,
//                     transformStyle: 'preserve-3d',
//                     border: '2px solid transparent',
//                     background: `linear-gradient(135deg, ${subjectColor}15, ${subjectColor}05)`,
//                     boxShadow: `0 10px 30px ${subjectColor}20`
//                   }}
//                 >
//                   {/* Animated background element */}
//                   <div 
//                     className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
//                     style={{ background: subjectColor }}
//                   />
                  
//                   <div className="flex items-start gap-6 relative z-10">
//                     <div 
//                       className="subject-icon w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
//                       style={{ 
//                         background: `linear-gradient(135deg, ${subjectColor}, ${getDynamicColor('primary')})`,
//                         boxShadow: `0 0 20px ${subjectColor}50`
//                       }}
//                     >
//                       <subject.icon className="w-8 h-8 text-primary-foreground" />
//                     </div>
                    
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-3">
//                         <h3 
//                           className="subject-title text-2xl font-bold transition-all duration-500"
//                           style={{ color: subjectColor }}
//                         >
//                           {subject.title}
//                         </h3>
//                         <span 
//                           className="subject-badge inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-500"
//                           style={{ 
//                             borderColor: `${subjectColor}60`,
//                             background: `${subjectColor}20`,
//                             color: subjectColor
//                           }}
//                         >
//                           {subject.level}
//                         </span>
//                       </div>
                      
//                       <p className="text-muted-foreground mb-4">{subject.description}</p>
                      
//                       <div className="mb-4">
//                         <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Learning Modules:</h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {subject.modules.map((module) => (
//                             <div 
//                               key={module} 
//                               className="text-sm text-muted-foreground flex items-center gap-2 transition-all duration-500 hover:text-foreground"
//                             >
//                               <div 
//                                 className="module-dot w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover:scale-150"
//                                 style={{ background: subjectColor }}
//                               />
//                               {module}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-between mb-6">
//                         <div className="text-xs text-muted-foreground">
//                           <div className="flex items-center gap-2">
//                             <Microscope className="w-3 h-3" />
//                             {subject.duration}
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="flex gap-3">
//                         <Button 
//                           className="subject-button flex-1 group transition-all duration-500" 
//                           asChild
//                           style={{ 
//                             background: `linear-gradient(135deg, ${subjectColor}, ${getDynamicColor('primary')})`,
//                             boxShadow: `0 0 15px ${subjectColor}50`
//                           }}
//                         >
//                           <a href={`/learning?subject=${subject.title.toLowerCase()}`}>
//                             <Play className="w-4 h-4 mr-2" />
//                             Start Learning
//                             <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                           </a>
//                         </Button>
//                         <Button 
//                           className="subject-outline-button transition-all duration-500" 
//                           variant="outline" 
//                           size="icon"
//                           style={{ 
//                             borderColor: `${subjectColor}60`,
//                             color: subjectColor,
//                             boxShadow: `0 0 10px ${subjectColor}30`
//                           }}
//                         >
//                           <Heart className="w-4 h-4" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Learning Path Section */}
//       <section className="py-16 px-4 bg-gradient-subtle relative overflow-hidden">
//         {/* Animated background elements */}
//         <div 
//           className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
//           style={{ 
//             background: getDynamicColor('cosmic'),
//             transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
//           }}
//         />
//         <div 
//           className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl transition-all duration-1000"
//           style={{ 
//             background: getDynamicColor('accent'),
//             transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
//           }}
//         />
        
//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
//               <span style={{ 
//                 color: getDynamicColor('cosmic'),
//                 textShadow: `0 0 15px ${getDynamicColor('cosmic')}50`
//               }}>
//                 Your Learning Path
//               </span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-500">
//               Personalized learning journeys that adapt to your pace and interests. Track progress, earn achievements, and unlock advanced content.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: "01",
//                 title: "Choose Your Subject",
//                 description: "Select from astronomy, biology, chemistry, or physics"
//               },
//               {
//                 step: "02", 
//                 title: "Interactive Exploration",
//                 description: "Manipulate 3D models and conduct virtual experiments"
//               },
//               {
//                 step: "03",
//                 title: "Test Your Knowledge", 
//                 description: "Complete quizzes and challenges to reinforce learning"
//               }
//             ].map((step, index) => {
//               const stepColor = getDynamicColor(index % 2 === 0 ? 'cosmic' : 'primary');
//               return (
//                 <div 
//                   key={step.step} 
//                   className="text-center animate-fade-in-up p-6 rounded-xl transition-all duration-500 hover:bg-card/50 backdrop-blur-sm"
//                   style={{ 
//                     animationDelay: `${index * 0.1}s`,
//                     border: `1px solid ${stepColor}30`,
//                     background: `linear-gradient(135deg, ${stepColor}15, transparent)`,
//                     transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`
//                   }}
//                 >
//                   <div 
//                     className="text-6xl font-bold mb-4 opacity-20 transition-all duration-500"
//                     style={{ color: stepColor }}
//                   >
//                     {step.step}
//                   </div>
//                   <h3 
//                     className="text-xl font-semibold mb-3 transition-all duration-500"
//                     style={{ color: stepColor }}
//                   >
//                     {step.title}
//                   </h3>
//                   <p className="text-muted-foreground transition-all duration-500">{step.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 px-4 relative">
//         <div 
//           className="absolute inset-0 opacity-15 transition-all duration-1000"
//           style={{
//             background: `
//               radial-gradient(
//                 circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
//                 ${getDynamicColor('cosmic')} 0%, transparent 50%
//               )
//             `
//           }}
//         />
        
//         <div className="max-w-4xl mx-auto text-center animate-fade-in-up relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
//             <span style={{ 
//               color: getDynamicColor('cosmic'),
//               textShadow: `0 0 20px ${getDynamicColor('cosmic')}80`
//             }}>
//               Ready to Begin?
//             </span>
//           </h2>
//           <p className="text-xl text-muted-foreground mb-8 transition-all duration-500">
//             Start your free trial and experience the future of interactive learning.
//           </p>
//           <Button 
//             variant="cosmic" 
//             size="lg" 
//             className="text-lg px-10 py-4 transition-all duration-500 hover:scale-110 glow-effect"
//             style={{ 
//               background: `linear-gradient(135deg, ${getDynamicColor('cosmic')}, ${getDynamicColor('primary')})`,
//               boxShadow: `0 0 25px ${getDynamicColor('cosmic')}70`
//             }}
//             asChild
//           >
//             <a href="/trial">
//               Start Free Trial
//               <ArrowRight className="w-5 h-5 ml-2" />
//             </a>
//           </Button>
//         </div>
//       </section>

//       <style jsx>{`
//         .cosmic-bg {
//           position: relative;
//           transition: all 0.5s ease;
//         }
        
//         .cosmic-particles {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           z-index: 0;
//         }
        
//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           animation: float-particle linear infinite;
//         }
        
//         @keyframes float-particle {
//           0% {
//             transform: translateY(0) translateX(0) rotate(0deg);
//             opacity: 0;
//           }
//           10% {
//             opacity: 0.8;
//           }
//           90% {
//             opacity: 0.8;
//           }
//           100% {
//             transform: translateY(-100vh) translateX(100px) rotate(360deg);
//             opacity: 0;
//           }
//         }
        
//         .bg-gradient-subtle {
//           background: linear-gradient(135deg, var(--card) 0%, var(--card) 50%, transparent 100%);
//         }
        
//         .glow-effect {
//           position: relative;
//           overflow: hidden;
//         }
        
//         .glow-effect::before {
//           content: '';
//           position: absolute;
//           top: -2px;
//           left: -2px;
//           right: -2px;
//           bottom: -2px;
//           z-index: -1;
//           background: inherit;
//           filter: blur(15px);
//           opacity: 0.7;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Explore;



import { useEffect, useRef, useState } from "react";
import { Button } from "../Components/UI/Button";
import { 
  Atom, Brain, Dna, Globe, Microscope, Telescope, 
  Heart, Zap, ArrowRight, Play, BookOpen, Users 
} from "lucide-react";

const Explore = () => {
  const containerRef = useRef(null);
  const subjectCardRefs = useRef([]);
  const [bgHue, setBgHue] = useState(260);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  // Handle mouse movement for 3D effect on subject cards
  useEffect(() => {
    const handleCardMouseMove = (e, card, index) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Increased rotation for more dramatic effect
        const rotateX = ((y - centerY) / centerY) * 15;
        const rotateY = ((x - centerX) / centerX) * -15;
        
        // Calculate background hue based on rotation
        const hueRotation = 260 + (rotateY * 3);
        const currentHue = Math.min(320, Math.max(200, hueRotation));
        
        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(1.03, 1.03, 1.03)
        `;
        
        // Update background and border colors based on rotation
        const subjectColor = `hsl(${currentHue}, 85%, 65%)`;
        const borderColor = `hsl(${(currentHue + 40) % 360}, 91%, 60%)`;
        
        // Create gradient background that changes with rotation
        card.style.background = `
          linear-gradient(
            ${135 + rotateY * 2}deg, 
            ${subjectColor}15, 
            ${borderColor}10,
            hsl(${(currentHue + 80) % 360}, 85%, 60%)05
          )
        `;
        
        // FIXED: Set border color directly instead of borderImage
        card.style.borderColor = `${subjectColor}60`;
        card.style.boxShadow = `
          0 0 0 1px ${subjectColor}30,
          0 10px 30px ${subjectColor}20,
          0 0 20px ${subjectColor}15 inset
        `;
        
        // Update icon background
        const icon = card.querySelector('.subject-icon');
        if (icon) {
          icon.style.background = `
            linear-gradient(
              ${135 + rotateY * 2}deg, 
              ${subjectColor}, 
              ${borderColor}
            )
          `;
          
          // Parallax effect for icons
          const moveX = (x / rect.width - 0.5) * 10;
          const moveY = (y / rect.height - 0.5) * 10;
          icon.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.15)`;
        }
        
        // Update text colors
        const title = card.querySelector('.subject-title');
        if (title) {
          title.style.color = subjectColor;
          title.style.textShadow = `0 0 10px ${subjectColor}40, 0 0 20px ${subjectColor}20`;
        }
        
        const badge = card.querySelector('.subject-badge');
        if (badge) {
          badge.style.background = `
            linear-gradient(
              ${135 + rotateY * 2}deg, 
              ${subjectColor}30, 
              ${borderColor}20
            )
          `;
          badge.style.borderColor = `${subjectColor}60`;
          badge.style.color = subjectColor;
        }
        
        // Update button colors
        const button = card.querySelector('.subject-button');
        if (button) {
          button.style.background = `
            linear-gradient(
              ${135 + rotateY * 2}deg, 
              ${subjectColor}, 
              ${borderColor}
            )
          `;
          button.style.boxShadow = `0 0 15px ${subjectColor}50`;
        }
        
        const outlineButton = card.querySelector('.subject-outline-button');
        if (outlineButton) {
          outlineButton.style.borderColor = `${subjectColor}60`;
          outlineButton.style.color = subjectColor;
          outlineButton.style.boxShadow = `0 0 10px ${subjectColor}30`;
        }
        
        // Update module dots
        const modules = card.querySelectorAll('.module-dot');
        modules.forEach((dot, i) => {
          dot.style.background = subjectColor;
          dot.style.boxShadow = `0 0 8px ${subjectColor}`;
        });
      }
    };

    const handleCardMouseLeave = (card) => {
      if (card) {
        card.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale3d(1, 1, 1)
        `;
        
        // Reset to default colors with smooth transition
        card.style.transition = 'all 0.5s ease';
        card.style.background = '';
        card.style.borderColor = '';
        card.style.boxShadow = '';
        
        const icon = card.querySelector('.subject-icon');
        if (icon) {
          icon.style.background = '';
          icon.style.transform = 'translate(0, 0) scale(1)';
          icon.style.transition = 'all 0.5s ease';
        }
        
        const title = card.querySelector('.subject-title');
        if (title) {
          title.style.color = '';
          title.style.textShadow = '';
          title.style.transition = 'all 0.5s ease';
        }
        
        const badge = card.querySelector('.subject-badge');
        if (badge) {
          badge.style.background = '';
          badge.style.borderColor = '';
          badge.style.color = '';
          badge.style.transition = 'all 0.5s ease';
        }
        
        const button = card.querySelector('.subject-button');
        if (button) {
          button.style.background = '';
          button.style.boxShadow = '';
          button.style.transition = 'all 0.5s ease';
        }
        
        const outlineButton = card.querySelector('.subject-outline-button');
        if (outlineButton) {
          outlineButton.style.borderColor = '';
          outlineButton.style.color = '';
          outlineButton.style.boxShadow = '';
          outlineButton.style.transition = 'all 0.5s ease';
        }
        
        const modules = card.querySelectorAll('.module-dot');
        modules.forEach((dot) => {
          dot.style.background = '';
          dot.style.boxShadow = '';
          dot.style.transition = 'all 0.5s ease';
        });
        
        // Remove transition after reset
        setTimeout(() => {
          card.style.transition = '';
        }, 500);
      }
    };

    // Add event listeners to all subject cards
    subjectCardRefs.current.forEach((card, index) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card, index));
        card.addEventListener('mouseleave', () => handleCardMouseLeave(card));
      }
    });

    return () => {
      // Clean up event listeners
      subjectCardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mousemove', handleCardMouseMove);
          card.removeEventListener('mouseleave', handleCardMouseLeave);
        }
      });
    };
  }, []);

  // Handle global mouse movement for background effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      
      setMousePosition({ x, y });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Calculate dynamic colors based on mouse position
  const getDynamicColor = (baseColor) => {
    const { x, y } = mousePosition;
    
    // Different color transformations based on base color
    switch(baseColor) {
      case 'cosmic':
        return `hsl(${280 + x * 30}, 85%, ${65 + y * 15}%)`;
      case 'accent':
        return `hsl(${180 + x * 30}, 85%, ${65 + y * 15}%)`;
      case 'nebula':
        return `hsl(${330 + x * 30}, 85%, ${65 + y * 15}%)`;
      case 'primary':
        return `hsl(${220 + x * 30}, 85%, ${65 + y * 15}%)`;
      default:
        return `hsl(${280 + x * 30}, 85%, ${65 + y * 15}%)`;
    }
  };

  // Calculate background gradient based on mouse position
  const dynamicGradient = `
    radial-gradient(
      circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
      ${getDynamicColor('cosmic')}30, 
      ${getDynamicColor('nebula')}20, 
      ${getDynamicColor('accent')}10
    ),
    linear-gradient(
      ${135 + mousePosition.x * 45}deg,
      ${getDynamicColor('cosmic')}15,
      ${getDynamicColor('primary')}10,
      transparent 50%
    )
  `;

  return (
    <div 
      ref={containerRef}
      className="min-h-screen overflow-hidden cosmic-bg transition-all duration-500"
      style={{ background: dynamicGradient }}
    >
      {/* Animated cosmic particles */}
      <div className="cosmic-particles">
        {[...Array(40)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              background: getDynamicColor(i % 2 === 0 ? 'cosmic' : 'nebula'),
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              opacity: 0.7 + Math.random() * 0.3
            }}
          />
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-float opacity-80 transition-all duration-1000"
            style={{ 
              background: getDynamicColor('cosmic'),
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
            }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-3xl animate-float opacity-80 transition-all duration-1000"
            style={{ 
              background: getDynamicColor('accent'),
              animationDelay: '3s',
              transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`
            }}
          />
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight transition-all duration-500">
              <span style={{ 
                color: getDynamicColor('cosmic'),
                textShadow: `0 0 20px ${getDynamicColor('cosmic')}80`
              }}>
                Start
              </span>
              <br />
              <span className="text-foreground">Exploring</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-500">
              Dive into interactive 3D learning experiences across multiple scientific disciplines. Choose your subject and begin your cosmic learning journey.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features?.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border animate-fade-in-up transition-all duration-500 hover:scale-110"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    borderColor: `${getDynamicColor('cosmic')}60`,
                    background: `linear-gradient(135deg, ${getDynamicColor('cosmic')}20, ${getDynamicColor('primary')}10)`,
                    transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
                  }}
                >
                  <feature.icon 
                    className="w-4 h-4 transition-all duration-500" 
                    style={{ color: getDynamicColor('primary') }} 
                  />
                  <span className="text-sm font-medium">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subject Cards with Enhanced 3D Effect */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => {
              const subjectColor = getDynamicColor(subject.color);
              return (
                <div 
                  key={subject.title} 
                  ref={el => subjectCardRefs.current[index] = el}
                  className="rounded-xl bg-card text-card-foreground shadow-lg p-8 group hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-2 relative overflow-hidden cursor-pointer"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transformStyle: 'preserve-3d',
                    borderColor: `${subjectColor}40`,
                    background: `linear-gradient(135deg, ${subjectColor}15, ${subjectColor}05)`,
                    boxShadow: `0 10px 30px ${subjectColor}20`
                  }}
                >
                  {/* Animated background element */}
                  <div 
                    className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: subjectColor }}
                  />
                  
                  <div className="flex items-start gap-6 relative z-10">
                    <div 
                      className="subject-icon w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${subjectColor}, ${getDynamicColor('primary')})`,
                        boxShadow: `0 0 20px ${subjectColor}50`
                      }}
                    >
                      <subject.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 
                          className="subject-title text-2xl font-bold transition-all duration-500"
                          style={{ color: subjectColor }}
                        >
                          {subject.title}
                        </h3>
                        <span 
                          className="subject-badge inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-500"
                          style={{ 
                            borderColor: `${subjectColor}60`,
                            background: `${subjectColor}20`,
                            color: subjectColor
                          }}
                        >
                          {subject.level}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{subject.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Learning Modules:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {subject.modules.map((module) => (
                            <div 
                              key={module} 
                              className="text-sm text-muted-foreground flex items-center gap-2 transition-all duration-500 hover:text-foreground"
                            >
                              <div 
                                className="module-dot w-1.5 h-1.5 rounded-full transition-all duration-500 group-hover:scale-150"
                                style={{ background: subjectColor }}
                              />
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
                        <Button 
                          className="subject-button flex-1 group transition-all duration-500" 
                          asChild
                          style={{ 
                            background: `linear-gradient(135deg, ${subjectColor}, ${getDynamicColor('primary')})`,
                            boxShadow: `0 0 15px ${subjectColor}50`
                          }}
                        >
                          <a href={`/learning?subject=${subject.title.toLowerCase()}`}>
                            <Play className="w-4 h-4 mr-2" />
                            Start Learning
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                        <Button 
                          className="subject-outline-button transition-all duration-500" 
                          variant="outline" 
                          size="icon"
                          style={{ 
                            borderColor: `${subjectColor}60`,
                            color: subjectColor,
                            boxShadow: `0 0 10px ${subjectColor}30`
                          }}
                        >
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-16 px-4 bg-gradient-subtle relative overflow-hidden">
        {/* Animated background elements */}
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{ 
            background: getDynamicColor('cosmic'),
            transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{ 
            background: getDynamicColor('accent'),
            transform: `translate(${-mousePosition.x * 30}px, ${-mousePosition.y * 30}px)`
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
              <span style={{ 
                color: getDynamicColor('cosmic'),
                textShadow: `0 0 15px ${getDynamicColor('cosmic')}50`
              }}>
                Your Learning Path
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto transition-all duration-500">
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
            ].map((step, index) => {
              const stepColor = getDynamicColor(index % 2 === 0 ? 'cosmic' : 'primary');
              return (
                <div 
                  key={step.step} 
                  className="text-center animate-fade-in-up p-6 rounded-xl transition-all duration-500 hover:bg-card/50 backdrop-blur-sm"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    border: `1px solid ${stepColor}30`,
                    background: `linear-gradient(135deg, ${stepColor}15, transparent)`,
                    transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`
                  }}
                >
                  <div 
                    className="text-6xl font-bold mb-4 opacity-20 transition-all duration-500"
                    style={{ color: stepColor }}
                  >
                    {step.step}
                  </div>
                  <h3 
                    className="text-xl font-semibold mb-3 transition-all duration-500"
                    style={{ color: stepColor }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground transition-all duration-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 relative">
        <div 
          className="absolute inset-0 opacity-15 transition-all duration-1000"
          style={{
            background: `
              radial-gradient(
                circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%, 
                ${getDynamicColor('cosmic')} 0%, transparent 50%
              )
            `
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-500">
            <span style={{ 
              color: getDynamicColor('cosmic'),
              textShadow: `0 0 20px ${getDynamicColor('cosmic')}80`
            }}>
              Ready to Begin?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 transition-all duration-500">
            Start your free trial and experience the future of interactive learning.
          </p>
          <Button 
            variant="cosmic" 
            size="lg" 
            className="text-lg px-10 py-4 transition-all duration-500 hover:scale-110 glow-effect"
            style={{ 
              background: `linear-gradient(135deg, ${getDynamicColor('cosmic')}, ${getDynamicColor('primary')})`,
              boxShadow: `0 0 25px ${getDynamicColor('cosmic')}70`
            }}
            asChild
          >
            <a href="/trial">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <style jsx>{`
        .cosmic-bg {
          position: relative;
          transition: all 0.5s ease;
        }
        
        .cosmic-particles {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }
        
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: float-particle linear infinite;
        }
        
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .bg-gradient-subtle {
          background: linear-gradient(135deg, var(--card) 0%, var(--card) 50%, transparent 100%);
        }
        
        .glow-effect {
          position: relative;
          overflow: hidden;
        }
        
        .glow-effect::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          z-index: -1;
          background: inherit;
          filter: blur(15px);
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
};

export default Explore;