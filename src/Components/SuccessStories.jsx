import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";

import { Button } from "../Components/UI/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../Components/UI/Avatar";
import { Quote, Star, GraduationCap, TrendingUp, Award, Users } from "lucide-react";

const successStories = [
  {
    id: "1",
    name: "Sarah Chen",
    avatar: "/api/placeholder/64/64",
    title: "From Struggling to Stellar",
    achievement: "Improved physics grade from D to A+",
    story: "I was failing physics and considered dropping out. CosmosLearn's 3D visualizations made complex concepts finally click. The orbital mechanics simulator helped me understand gravitational forces in a way textbooks never could.",
    improvementScore: 85,
    timeUsing: "6 months",
    subject: "Physics",
    university: "MIT",
    grade: "A+",
    beforeAfter: {
      before: "D (45%)",
      after: "A+ (96%)"
    }
  },
  {
    id: "2",
    name: "Marcus Johnson",
    title: "Breaking Through Barriers",
    achievement: "Mastered calculus concepts using visual learning",
    story: "As someone with ADHD, traditional learning methods never worked for me. The interactive animations and gamified approach kept me engaged. I went from avoiding math to loving it!",
    improvementScore: 78,
    timeUsing: "4 months",
    subject: "Mathematics",
    university: "Stanford",
    grade: "A-",
    beforeAfter: {
      before: "C- (68%)",
      after: "A- (91%)"
    }
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "From Fear to Fascination",
    achievement: "Overcame chemistry anxiety and aced organic chemistry",
    story: "Chemistry felt like magic I'd never understand. The molecular visualization tools showed me exactly how reactions work. Now I'm pursuing a PhD in biochemistry!",
    improvementScore: 92,
    timeUsing: "8 months",
    subject: "Chemistry",
    university: "Harvard",
    grade: "A+",
    beforeAfter: {
      before: "F (32%)",
      after: "A+ (98%)"
    }
  },
];

const stats = [
  { label: "Students Helped", value: "50K+", icon: Users },
  { label: "Average Improvement", value: "87%", icon: TrendingUp },
  { label: "Success Rate", value: "94%", icon: Award },
  { label: "Universities", value: "500+", icon: GraduationCap }
];

export const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStory((prev) => (prev + 1) % successStories.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextStory = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevStory = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStory((prev) => (prev - 1 + successStories.length) % successStories.length);
      setIsAnimating(false);
    }, 300);
  };

  const story = successStories[currentStory];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real students, real transformations. See how CosmosLearn has helped learners achieve their academic dreams.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover-scale">
              <CardContent className="pt-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-cosmic mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Story */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className={`overflow-hidden transition-all duration-300 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-cosmic p-8 flex flex-col justify-center items-center text-white">
                <Avatar className="w-24 h-24 mb-4 border-4 border-white/20">
                  <AvatarImage src={story.avatar} />
                  <AvatarFallback className="bg-white/10 text-white text-xl">
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold text-center">{story.name}</h3>
                <p className="text-white/80 text-center">{story.university}</p>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{story.subject}</span>
              </div>
              
              <div className="md:w-2/3 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-2xl font-bold text-cosmic mb-2">{story.title}</h4>
                    <p className="text-lg text-primary font-semibold mb-4">{story.achievement}</p>
                    <p className="text-muted-foreground leading-relaxed">{story.story}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Before</div>
                    <div className="font-bold text-destructive">{story.beforeAfter.before}</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">After</div>
                    <div className="font-bold text-primary">{story.beforeAfter.after}</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Improvement</div>
                    <div className="font-bold text-cosmic">+{story.improvementScore}%</div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">Time</div>
                    <div className="font-bold">{story.timeUsing}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button variant="outline" onClick={prevStory} className="rounded-full">
              ←
            </Button>
            
            <div className="flex gap-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentStory ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button variant="outline" onClick={nextStory} className="rounded-full">
              →
            </Button>
          </div>
        </div>

        {/* All Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {successStories.map((story, index) => (
            <Card key={story.id} className="hover-scale cursor-pointer" onClick={() => setCurrentStory(index)}>
              <CardHeader className="text-center">
                <Avatar className="w-16 h-16 mx-auto mb-3">
                  <AvatarImage src={story.avatar} />
                  <AvatarFallback>
                    {story.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{story.name}</CardTitle>
                <CardDescription>{story.university}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-3 mx-auto  w-fit">{story.subject}</span>
                <h4 className="font-semibold text-center mb-2">{story.title}</h4>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span>+{story.improvementScore}%</span>
                  </div>
                  <div className="text-muted-foreground">{story.timeUsing}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-cosmic text-primary-foreground border-0 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of students who have transformed their academic journey with CosmosLearn.
              </p>
              <Button variant="secondary" size="lg">
                Start Your Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};