import { Button } from "../Components/UI/Button";
import { Calendar, Clock, User, ArrowLeft, Share2, Heart } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data - in a real app, this would come from an API
  const post = {
    title: "The Future of Space Education: How 3D Visualization is Revolutionizing Learning",
    content: `
      <p>Space education has undergone a remarkable transformation in recent years, thanks to advances in 3D visualization technology. What once required expensive equipment and specialized facilities can now be experienced by anyone with a computer or mobile device.</p>
      
      <h2>The Challenge of Traditional Space Education</h2>
      <p>Traditional space education often relied on textbooks, 2D diagrams, and static images to convey complex astronomical concepts. Students struggled to understand the three-dimensional nature of space, orbital mechanics, and the relative scales of celestial objects.</p>
      
      <h2>Enter 3D Visualization</h2>
      <p>Modern 3D visualization technologies have changed everything. Students can now:</p>
      <ul>
        <li>Explore the solar system from any perspective</li>
        <li>Manipulate time to see orbital mechanics in action</li>
        <li>Experience accurate scale representations</li>
        <li>Interact with complex physics simulations</li>
      </ul>
      
      <h2>Real-World Impact</h2>
      <p>Our research shows that students using 3D visualization tools demonstrate:</p>
      <ul>
        <li>45% better retention of astronomical concepts</li>
        <li>60% improvement in spatial reasoning skills</li>
        <li>Increased engagement and interest in STEM careers</li>
      </ul>
      
      <h2>The Future</h2>
      <p>As virtual reality and augmented reality technologies continue to evolve, we're entering an era where students will be able to literally walk through the cosmos, experiencing space exploration firsthand without leaving the classroom.</p>
      
      <p>The future of space education is not just about teaching facts—it's about inspiring the next generation of explorers, scientists, and innovators who will push the boundaries of human knowledge and capabilities.</p>
    `,
    author: "Dr. Sarah Chen",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Education Technology",
    image: "/api/placeholder/800/400"
  };

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">{post.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic mb-6">{post.title}</h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <Button variant="outline" size="sm">
                <Heart className="w-4 h-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="h-64 md:h-96 bg-gradient-cosmic rounded-lg mb-8"></div>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="text-foreground [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-cosmic [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-6 [&>ul]:mb-6 [&>li]:mb-2"
            />
          </article>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-card rounded-lg border">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-cosmic rounded-full"></div>
              <div>
                <h3 className="text-xl font-bold text-cosmic mb-2">{post.author}</h3>
                <p className="text-muted-foreground">
                  Dr. Sarah Chen is a leading researcher in educational technology and space science visualization. 
                  She has published over 50 papers on immersive learning experiences and holds a PhD in Astrophysics from MIT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;