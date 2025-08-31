import { useState } from "react";
import { Button } from "../Components/UI/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    id: "future-space-education",
    title: "The Future of Space Education: How 3D Visualization is Revolutionizing Learning",
    excerpt: "Discover how immersive 3D experiences are transforming the way students understand complex astronomical concepts, from planetary motion to stellar evolution.",
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Education Technology",
    image: "/api/placeholder/800/400"
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
      image: "/api/placeholder/400/200"
    },
    {
      id: "accessible-stem-education",
      title: "Building Accessible STEM Education for All",
      excerpt: "Our commitment to making advanced scientific education available to students regardless of their background or location.",
      author: "Lisa Thompson",
      date: "March 8, 2024",
      readTime: "5 min read",
      category: "Accessibility",
      image: "/api/placeholder/400/200"
    },
    {
      id: "solar-system-science",
      title: "The Science Behind Our Solar System Simulation",
      excerpt: "A deep dive into the physics and mathematics that power our real-time solar system visualization.",
      author: "Dr. James Park",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "/api/placeholder/400/200"
    },
    {
      id: "student-success-stories",
      title: "Student Success Stories: From Confusion to Cosmic Understanding",
      excerpt: "Real stories from students who transformed their understanding of physics through our interactive learning platform.",
      author: "Emma Wilson",
      date: "March 1, 2024",
      readTime: "7 min read",
      category: "Student Stories",
      image: "/api/placeholder/400/200"
    },
    {
      id: "ai-educational-content",
      title: "Integrating AI in Educational Content Creation",
      excerpt: "How we're using artificial intelligence to create personalized learning experiences for each student.",
      author: "Dr. Alex Kumar",
      date: "February 28, 2024",
      readTime: "9 min read",
      category: "AI & Education",
      image: "/api/placeholder/400/200"
    },
    {
      id: "psychology-immersive-learning",
      title: "The Psychology of Immersive Learning",
      excerpt: "Research insights into why 3D and VR experiences create deeper, more lasting educational impact.",
      author: "Dr. Rachel Green",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Learning Psychology",
      image: "/api/placeholder/400/200"
    }
  ];

  const categories = ["All", "Education Technology", "Astronomy", "Technology", "Student Stories", "AI & Education", "Learning Psychology", "Accessibility"];

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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

          {/* Featured Post */}
          <section className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-cosmic"></div>
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors mb-4">{featuredPost.category}</span>
                  <h2 className="text-3xl font-bold text-cosmic mb-4">{featuredPost.title}</h2>
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
                    <Button variant="cosmic">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
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
                >
                  {category}
                </Button>
              ))}
            </div>
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link key={index} to={`/blog/${post.id}`}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="h-48 bg-gradient-cosmic rounded-t-lg"></div>
                  <CardHeader>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors w-fit mb-2">{post.category}</span>
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
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription */}
          <section>
            <Card className="bg-gradient-cosmic text-primary-foreground border-0">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-lg mb-6 opacity-90">
                  Get the latest insights on educational technology and space science delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <Button variant="glass">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Blog;