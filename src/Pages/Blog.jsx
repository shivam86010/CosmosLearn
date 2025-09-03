// import { useState } from "react";
// import { Button } from "../Components/UI/Button";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";
// import { Calendar, Clock, User, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const Blog = () => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const featuredPost = {
//     id: "future-space-education",
//     title: "The Future of Space Education: How 3D Visualization is Revolutionizing Learning",
//     excerpt: "Discover how immersive 3D experiences are transforming the way students understand complex astronomical concepts, from planetary motion to stellar evolution.",
//     author: "Dr. Sarah Chen",
//     date: "March 15, 2024",
//     readTime: "8 min read",
//     category: "Education Technology",
//     image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//   };

//   const blogPosts = [
//     {
//       id: "orbital-mechanics-simulations",
//       title: "Understanding Orbital Mechanics Through Interactive Simulations",
//       excerpt: "Learn how our new orbital mechanics simulator helps students grasp the complexities of space flight and planetary motion.",
//       author: "Prof. Michael Rodriguez",
//       date: "March 12, 2024",
//       readTime: "6 min read",
//       category: "Astronomy",
//       image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
//     },
//     {
//       id: "accessible-stem-education",
//       title: "Building Accessible STEM Education for All",
//       excerpt: "Our commitment to making advanced scientific education available to students regardless of their background or location.",
//       author: "Lisa Thompson",
//       date: "March 8, 2024",
//       readTime: "5 min read",
//       category: "Accessibility",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       id: "solar-system-science",
//       title: "The Science Behind Our Solar System Simulation",
//       excerpt: "A deep dive into the physics and mathematics that power our real-time solar system visualization.",
//       author: "Dr. James Park",
//       date: "March 5, 2024",
//       readTime: "10 min read",
//       category: "Technology",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       id: "student-success-stories",
//       title: "Student Success Stories: From Confusion to Cosmic Understanding",
//       excerpt: "Real stories from students who transformed their understanding of physics through our interactive learning platform.",
//       author: "Emma Wilson",
//       date: "March 1, 2024",
//       readTime: "7 min read",
//       category: "Student Stories",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       id: "ai-educational-content",
//       title: "Integrating AI in Educational Content Creation",
//       excerpt: "How we're using artificial intelligence to create personalized learning experiences for each student.",
//       author: "Dr. Alex Kumar",
//       date: "February 28, 2024",
//       readTime: "9 min read",
//       category: "AI & Education",
//       image: "/api/placeholder/400/200"
//     },
//     {
//       id: "psychology-immersive-learning",
//       title: "The Psychology of Immersive Learning",
//       excerpt: "Research insights into why 3D and VR experiences create deeper, more lasting educational impact.",
//       author: "Dr. Rachel Green",
//       date: "February 25, 2024",
//       readTime: "8 min read",
//       category: "Learning Psychology",
//       image: "/api/placeholder/400/200"
//     }
//   ];

//   const categories = ["All", "Education Technology", "Astronomy", "Technology", "Student Stories", "AI & Education", "Learning Psychology", "Accessibility"];

//   const filteredPosts = activeCategory === "All" 
//     ? blogPosts 
//     : blogPosts.filter(post => post.category === activeCategory);

//   return (
//     <div className="min-h-screen bg-background">
      
//       <main className="pt-24 pb-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Hero Section */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
//               CosmosLearn Blog
//             </h1>
//             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//               Insights, research, and stories from the frontier of educational technology and space science.
//             </p>
//           </div>

//           {/* Featured Post */}
//           <section className="mb-16">
//             <Card className="overflow-hidden hover:shadow-xl transition-shadow">
//               <div className="md:flex">
//                 <div className="md:w-1/2">
//                   <div className="h-64 md:h-full bg-gradient-cosmic"></div>
//                 </div>
//                 <div className="md:w-1/2 p-8">
//                   <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors mb-4">{featuredPost.category}</span>
//                   <h2 className="text-3xl font-bold text-cosmic mb-4">{featuredPost.title}</h2>
//                   <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
//                   <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
//                     <div className="flex items-center gap-2">
//                       <User className="w-4 h-4" />
//                       <span>{featuredPost.author}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4" />
//                       <span>{featuredPost.date}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Clock className="w-4 h-4" />
//                       <span>{featuredPost.readTime}</span>
//                     </div>
//                   </div>
//                   <Link to={`/blog/${featuredPost.id}`}>
//                     <Button variant="cosmic">
//                       Read More
//                       <ArrowRight className="w-4 h-4 ml-2" />
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </Card>
//           </section>

//           {/* Categories Filter */}
//           <section className="mb-8">
//             <div className="flex flex-wrap gap-2 justify-center">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={category === activeCategory ? "cosmic" : "outline"}
//                   size="sm"
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </section>

//           {/* Blog Posts Grid */}
//           <section className="mb-16">
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredPosts.map((post, index) => (
//                 <Link key={index} to={`/blog/${post.id}`}>
//                   <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
//                   <div className="h-48 bg-gradient-cosmic rounded-t-lg"></div>
//                   <CardHeader>
//                     <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors w-fit mb-2">{post.category}</span>
//                     <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
//                     <CardDescription>{post.excerpt}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                       <div className="flex items-center gap-1">
//                         <User className="w-3 h-3" />
//                         <span>{post.author}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-3 h-3" />
//                         <span>{post.date}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-3 h-3" />
//                         <span>{post.readTime}</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//                 </Link>
//               ))}
//             </div>
//           </section>

//           {/* Newsletter Subscription */}
//           <section>
//             <Card className="bg-gradient-cosmic text-primary-foreground border-0">
//               <CardContent className="p-8 text-center">
//                 <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
//                 <p className="text-lg mb-6 opacity-90">
//                   Get the latest insights on educational technology and space science delivered to your inbox.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//                   <input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
//                   />
//                   <Button variant="glass">
//                     Subscribe
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </section>
//         </div>
//       </main>

//     </div>
//   );
// };

// export default Blog;


import { useState, useRef, useEffect } from "react";
import { Button } from "../Components/UI/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredCardRef = useRef(null);
  const blogCardRefs = useRef([]);
  const newsletterCardRef = useRef(null);
  const [bgHue, setBgHue] = useState(260); // Initial purple hue

  const featuredPost = {
    id: "future-space-education",
    title: "The Future of Space Education: How 3D Visualization is Revolutionizing Learning",
    excerpt: "Discover how immersive 3D experiences are transforming the way students understand complex astronomical concepts, from planetary motion to stellar evolution.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Education Technology",
    image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  };

  const blogPosts = [
    {
      id: "orbital-mechanics-simulations",
      title: "Understanding Orbital Mechanics Through Interactive Simulations",
      excerpt: "Learn how our new orbital mechanics simulator helps students grasp the complexities of space flight and planetary motion.",
      author: "Prof. Michael Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Astronomy",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "accessible-stem-education",
      title: "Building Accessible STEM Education for All",
      excerpt: "Our commitment to making advanced scientific education available to students regardless of their background or location.",
      author: "Lisa Thompson",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "solar-system-science",
      title: "The Science Behind Our Solar System Simulation",
      excerpt: "A deep dive into the physics and mathematics that power our real-time solar system visualization.",
      author: "Dr. James Park",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "student-success-stories",
      title: "Student Success Stories: From Confusion to Cosmic Understanding",
      excerpt: "Real stories from students who transformed their understanding of physics through our interactive learning platform.",
      author: "Emma Wilson",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Student Stories",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "ai-educational-content",
      title: "Integrating AI in Educational Content Creation",
      excerpt: "How we're using artificial intelligence to create personalized learning experiences for each student.",
      author: "Dr. Alex Kumar",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "AI & Education",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "psychology-immersive-learning",
      title: "The Psychology of Immersive Learning",
      excerpt: "Research insights into why 3D and VR experiences create deeper, more lasting educational impact.",
      author: "Dr. Rachel Green",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Learning Psychology",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  const categories = ["All", "Education Technology", "Astronomy", "Technology", "Student Stories", "AI & Education", "Learning Psychology", "Accessibility"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Handle mouse movement for 3D effect on featured card
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (featuredCardRef.current) {
        const rect = featuredCardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 8;
        const rotateY = ((x - centerX) / centerX) * -8;
        
        // Calculate border gradient angle based on mouse position
        const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) + 90;
        
        // Calculate background hue based on rotation
        const hueRotation = 260 + (rotateY * 2);
        setBgHue(Math.min(320, Math.max(200, hueRotation)));
        
        featuredCardRef.current.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(1.02, 1.02, 1.02)
        `;
        
        // Update border gradient based on mouse position
        featuredCardRef.current.style.setProperty('--gradient-angle', `${angle}deg`);
        
        // Update background gradient based on rotation
        featuredCardRef.current.style.background = `
          linear-gradient(
            var(--gradient-angle), 
            hsl(${bgHue}, 85%, 65%), 
            hsl(${(bgHue + 40) % 360}, 91%, 60%), 
            hsl(${(bgHue + 80) % 360}, 85%, 60%)
          )
        `;
        
        // Parallax effect for the image
        const image = featuredCardRef.current.querySelector('.featured-image');
        if (image) {
          const moveX = (x / rect.width - 0.5) * 10;
          const moveY = (y / rect.height - 0.5) * 10;
          image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        }
      }
    };

    const handleMouseLeave = () => {
      if (featuredCardRef.current) {
        featuredCardRef.current.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale3d(1, 1, 1)
        `;
        
        // Reset border gradient
        featuredCardRef.current.style.setProperty('--gradient-angle', '135deg');
        featuredCardRef.current.style.background = `
          linear-gradient(135deg, hsl(260, 85%, 65%), hsl(217, 91%, 60%), hsl(187, 85%, 60%))
        `;
        
        // Reset background hue
        setBgHue(260);
        
        // Reset image position
        const image = featuredCardRef.current.querySelector('.featured-image');
        if (image) {
          image.style.transform = 'translate(0, 0) scale(1)';
        }
      }
    };

    const card = featuredCardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [bgHue]);

  // Handle mouse movement for 3D effect on blog cards and newsletter card
  useEffect(() => {
    const handleCardMouseMove = (e, card) => {
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * 5;
        const rotateY = ((x - centerX) / centerX) * -5;
        
        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale3d(1.02, 1.02, 1.02)
        `;
        
        // Parallax effect for images in blog cards
        const image = card.querySelector('.blog-image');
        if (image) {
          const moveX = (x / rect.width - 0.5) * 5;
          const moveY = (y / rect.height - 0.5) * 5;
          image.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
        }
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
        
        // Reset image position
        const image = card.querySelector('.blog-image');
        if (image) {
          image.style.transform = 'translate(0, 0) scale(1)';
        }
      }
    };

    // Add event listeners to all blog cards
    blogCardRefs.current.forEach((card) => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleCardMouseMove(e, card));
        card.addEventListener('mouseleave', () => handleCardMouseLeave(card));
      }
    });

    // Add event listener to newsletter card
    if (newsletterCardRef.current) {
      newsletterCardRef.current.addEventListener('mousemove', (e) => handleCardMouseMove(e, newsletterCardRef.current));
      newsletterCardRef.current.addEventListener('mouseleave', () => handleCardMouseLeave(newsletterCardRef.current));
    }

    return () => {
      // Clean up event listeners
      blogCardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener('mousemove', handleCardMouseMove);
          card.removeEventListener('mouseleave', handleCardMouseLeave);
        }
      });
      
      if (newsletterCardRef.current) {
        newsletterCardRef.current.removeEventListener('mousemove', handleCardMouseMove);
        newsletterCardRef.current.removeEventListener('mouseleave', handleCardMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
              CosmosLearn Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, research, and stories from the frontier of educational technology and space science.
            </p>
          </div>

          {/* Featured Post with 3D Effect */}
          <section className="mb-16">
            <div 
              ref={featuredCardRef}
              className="overflow-hidden transition-all duration-300 ease-out cursor-pointer relative rounded-xl p-1"
              style={{
                transformStyle: 'preserve-3d',
                transition: 'transform 0.3s ease, background 0.5s ease',
                background: 'linear-gradient(135deg, hsl(260, 85%, 65%), hsl(217, 91%, 60%), hsl(187, 85%, 60%))',
                '--gradient-angle': '135deg'
              }}
            >
              <div className="md:flex bg-card rounded-xl border-0 relative z-10 h-full">
                <div className="md:w-1/2 relative overflow-hidden">
                  <div 
                    className="featured-image h-64 md:h-full w-full bg-cover bg-center transition-transform duration-500 ease-out"
                    style={{
                      backgroundImage: `url(${featuredPost.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Overlay gradient that changes with rotation */}
                    <div 
                      className="absolute inset-0 transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(45deg, hsl(${bgHue}, 85%, 65%, 0.3), hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.2))` 
                      }}
                    ></div>
                    
                    {/* 3D Floating Elements - colors change with rotation */}
                    <div 
                      className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full blur-xl animate-float-1"
                      style={{ background: `hsl(${bgHue}, 85%, 65%, 0.3)` }}
                    ></div>
                    <div 
                      className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full blur-xl animate-float-2"
                      style={{ background: `hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.3)` }}
                    ></div>
                    <div 
                      className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full blur-xl animate-float-3"
                      style={{ background: `hsl(${(bgHue + 80) % 360}, 85%, 60%, 0.3)` }}
                    ></div>
                    
                    {/* Central 3D Sphere - changes color with rotation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-24 h-24">
                        <div 
                          className="absolute inset-0 rounded-full animate-pulse"
                          style={{ background: `linear-gradient(to bottom right, hsl(${bgHue}, 85%, 65%), hsl(${(bgHue + 40) % 360}, 91%, 60%))` }}
                        ></div>
                        <div 
                          className="absolute inset-3 rounded-full opacity-70 animate-pulse delay-1000"
                          style={{ background: `linear-gradient(to top left, hsl(${bgHue}, 85%, 65%), hsl(${(bgHue + 40) % 360}, 91%, 60%))` }}
                        ></div>
                        <div 
                          className="absolute inset-6 rounded-full animate-pulse delay-2000"
                          style={{ background: `hsl(${bgHue}, 85%, 65%, 0.4)` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8" style={{ transform: 'translateZ(20px)' }}>
                  <span 
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors mb-4"
                    style={{ 
                      background: `hsl(${bgHue}, 85%, 65%, 0.1)`,
                      color: `hsl(${bgHue}, 85%, 65%)`,
                      borderColor: `hsl(${bgHue}, 85%, 65%, 0.3)`
                    }}
                  >
                    {featuredPost.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: `hsl(${bgHue}, 85%, 65%)` }}>
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button 
                      className="glow-effect group relative overflow-hidden transition-all duration-300"
                      style={{ 
                        background: `linear-gradient(to right, hsl(${bgHue}, 85%, 65%), hsl(${(bgHue + 40) % 360}, 91%, 60%))`,
                        border: 'none'
                      }}
                    >
                      <span className="relative z-10">Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2 relative z-10" />
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(to right, hsl(${(bgHue + 20) % 360}, 85%, 65%), hsl(${(bgHue + 60) % 360}, 91%, 60%))` }}
                      ></div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Filter */}
          <section className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === activeCategory ? "cosmic" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="relative overflow-hidden group transition-all duration-300"
                >
                  <span className="relative z-10">{category}</span>
                  {category === activeCategory && (
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: `linear-gradient(to right, hsl(${bgHue}, 85%, 65%), hsl(${(bgHue + 40) % 360}, 91%, 60%))` }}
                    ></div>
                  )}
                </Button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid with 3D Effect */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={index} to={`/blog/${post.id}`}>
                  <div 
                    ref={el => blogCardRefs.current[index] = el}
                    className="overflow-hidden transition-all duration-300 ease-out cursor-pointer relative rounded-xl"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden border-border h-full">
                      {/* Hover border effect */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                        style={{ background: `linear-gradient(to right, hsl(${bgHue}, 85%, 65%, 0.1), hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.1))` }}
                      ></div>
                      
                      <div 
                        className="blog-image h-48 rounded-t-lg relative overflow-hidden bg-cover bg-center transition-transform duration-500 ease-out"
                        style={{ 
                          backgroundImage: `url(${post.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        {/* Overlay gradient */}
                        <div 
                          className="absolute inset-0 transition-all duration-300"
                          style={{ background: `linear-gradient(to bottom, transparent, hsl(${bgHue}, 85%, 65%, 0.2))` }}
                        ></div>
                        
                        {/* Mini floating elements */}
                        <div 
                          className="absolute top-4 left-4 w-8 h-8 rounded-full blur-sm animate-float-1"
                          style={{ background: `hsl(${bgHue}, 85%, 65%, 0.3)` }}
                        ></div>
                        <div 
                          className="absolute bottom-4 right-4 w-6 h-6 rounded-full blur-sm animate-float-2"
                          style={{ background: `hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.3)` }}
                        ></div>
                      </div>
                      <CardHeader>
                        <span 
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors w-fit mb-2"
                          style={{ 
                            background: `hsl(${bgHue}, 85%, 65%, 0.1)`,
                            color: `hsl(${bgHue}, 85%, 65%)`,
                            borderColor: `hsl(${bgHue}, 85%, 65%, 0.3)`
                          }}
                        >
                          {post.category}
                        </span>
                        <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription with 3D Effect */}
          <section>
            <div 
              ref={newsletterCardRef}
              className="overflow-hidden transition-all duration-300 ease-out cursor-pointer relative rounded-xl"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <Card 
                className="text-foreground border-border relative overflow-hidden transition-all duration-500"
                style={{ background: `linear-gradient(to right, hsl(${bgHue}, 85%, 65%, 0.1), hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.1))` }}
              >
                {/* Animated background elements */}
                <div 
                  className="absolute top-0 right-0 w-32 h-32 rounded-full -translate-y-16 translate-x-16 blur-xl"
                  style={{ background: `hsl(${bgHue}, 85%, 65%, 0.1)` }}
                ></div>
                <div 
                  className="absolute bottom-0 left-0 w-40 h-40 rounded-full translate-y-16 -translate-x-16 blur-xl"
                  style={{ background: `hsl(${(bgHue + 40) % 360}, 91%, 60%, 0.1)` }}
                ></div>
                
                <CardContent className="p-8 text-center relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Get the latest insights on educational technology and space science delivered to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 backdrop-blur-sm"
                    />
                    <Button 
                      variant="cosmic" 
                      className="glow-effect transition-all duration-300"
                      style={{ background: `linear-gradient(to right, hsl(${bgHue}, 85%, 65%), hsl(${(bgHue + 40) % 360}, 91%, 60%))` }}
                    >
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(15px) rotate(-5deg); }
        }
        
        @keyframes float-3 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(15deg); }
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 8s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 7s ease-in-out infinite; }
        
        /* Custom properties for dynamic gradient */
        :root {
          --gradient-angle: 135deg;
        }
      `}</style>
    </div>
  );
};

export default Blog;