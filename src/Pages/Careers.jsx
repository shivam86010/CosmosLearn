import { useState } from "react";
import { Button } from "../Components/UI/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Components/UI/Card";
import { MapPin, Clock, Users, Rocket, Brain, Code } from "lucide-react";
// import CareerApplicationForm from "@/components/CareerApplicationForm";

const Careers = () => {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setApplicationOpen(true);
  };

  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build intuitive and engaging user interfaces for our educational platform using React and modern web technologies.",
      requirements: ["5+ years React experience", "TypeScript expertise", "3D graphics knowledge (Three.js)", "Education sector experience preferred"],
      icon: Code
    },
    {
      title: "Educational Content Designer",
      department: "Content",
      location: "Remote",
      type: "Full-time",
      description: "Create immersive educational experiences and curriculum for space science and physics modules.",
      requirements: ["Educational background in STEM", "Curriculum development experience", "3D modeling skills", "Passion for space exploration"],
      icon: Brain
    },
    {
      title: "3D Graphics Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Develop stunning 3D visualizations and simulations for our interactive learning platform.",
      requirements: ["Strong Three.js/WebGL experience", "Mathematics background", "Graphics programming", "Portfolio of 3D projects"],
      icon: Rocket
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Unlimited PTO",
    "Learning and development budget",
    "Remote-first culture",
    "Latest equipment and tools"
  ];

  return (
    <div className="min-h-screen bg-background">
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-cosmic mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Help us revolutionize education by making complex scientific concepts accessible through immersive 3D experiences.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4" />
                <span>Mission Driven</span>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cosmic mb-8 text-center">Open Positions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <job.icon className="w-8 h-8 text-primary" />
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">{job.type}</span>
                    </div>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx}>• {req}</li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      className="w-full" 
                      variant="cosmic"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-16">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold text-cosmic mb-8 text-center">Why Join CosmosLearn?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="bg-gradient-cosmic text-primary-foreground border-0">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
                <p className="text-lg mb-6 opacity-90">
                  We're always looking for passionate individuals who share our vision of transforming education.
                </p>
                <Button variant="glass" size="lg">
                  Send Us Your Resume
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      
      {/* <CareerApplicationForm
        open={applicationOpen}
        onOpenChange={setApplicationOpen}
        jobTitle={selectedJob}
      /> */}
    </div>
  );
};

export default Careers;