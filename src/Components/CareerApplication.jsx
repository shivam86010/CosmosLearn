import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, ArrowRight, Upload, CheckCircle, X } from "lucide-react";

const CareerApplicationForm = ({ open, onOpenChange, jobTitle }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      currentRole: "",
      experience: "",
      skills: "",
      portfolio: "",
      coverLetter: "",
      availability: "",
      salaryExpectation: "",
      references: ""
    }
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Application submitted:", data);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      reset();
      onOpenChange(false);
    }, 3000);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">First Name</label>
                <input
                  className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.firstName ? 'border-destructive' : 'border-border'}`}
                  placeholder="John"
                  {...register("firstName", { required: "First name is required" })}
                />
                {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-foreground">Last Name</label>
                <input
                  className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.lastName ? 'border-destructive' : 'border-border'}`}
                  placeholder="Doe"
                  {...register("lastName", { required: "Last name is required" })}
                />
                {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName.message}</p>}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Email</label>
              <input
                type="email"
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.email ? 'border-destructive' : 'border-border'}`}
                placeholder="john@example.com"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Phone Number</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.phone ? 'border-destructive' : 'border-border'}`}
                placeholder="+1 (555) 123-4567"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Location</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.location ? 'border-destructive' : 'border-border'}`}
                placeholder="City, State"
                {...register("location", { required: "Location is required" })}
              />
              {errors.location && <p className="text-destructive text-xs mt-1">{errors.location.message}</p>}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Current Role</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.currentRole ? 'border-destructive' : 'border-border'}`}
                placeholder="Senior Software Engineer"
                {...register("currentRole", { required: "Current role is required" })}
              />
              {errors.currentRole && <p className="text-destructive text-xs mt-1">{errors.currentRole.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Years of Experience</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.experience ? 'border-destructive' : 'border-border'}`}
                placeholder="5+ years"
                {...register("experience", { required: "Experience is required" })}
              />
              {errors.experience && <p className="text-destructive text-xs mt-1">{errors.experience.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Key Skills</label>
              <textarea
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.skills ? 'border-destructive' : 'border-border'}`}
                placeholder="React, TypeScript, Three.js..."
                {...register("skills", { required: "Skills are required" })}
              />
              {errors.skills && <p className="text-destructive text-xs mt-1">{errors.skills.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Portfolio/GitHub URL</label>
              <input
                className="w-full p-2 border border-border rounded-md bg-input text-foreground"
                placeholder="https://github.com/username"
                {...register("portfolio")}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Resume</label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center bg-input/50">
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to upload or drag and drop your resume
                </p>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Cover Letter</label>
              <textarea
                className={`w-full p-2 border rounded-md min-h-32 bg-input text-foreground ${errors.coverLetter ? 'border-destructive' : 'border-border'}`}
                placeholder="Tell us why you're interested in this role..."
                {...register("coverLetter", { required: "Cover letter is required" })}
              />
              {errors.coverLetter && <p className="text-destructive text-xs mt-1">{errors.coverLetter.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Availability</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.availability ? 'border-destructive' : 'border-border'}`}
                placeholder="Immediate / 2 weeks notice"
                {...register("availability", { required: "Availability is required" })}
              />
              {errors.availability && <p className="text-destructive text-xs mt-1">{errors.availability.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">Salary Expectation</label>
              <input
                className={`w-full p-2 border rounded-md bg-input text-foreground ${errors.salaryExpectation ? 'border-destructive' : 'border-border'}`}
                placeholder="$120,000 - $150,000"
                {...register("salaryExpectation", { required: "Salary expectation is required" })}
              />
              {errors.salaryExpectation && <p className="text-destructive text-xs mt-1">{errors.salaryExpectation.message}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1 text-foreground">References</label>
              <textarea
                className="w-full p-2 border border-border rounded-md bg-input text-foreground"
                placeholder="Professional references (optional)"
                {...register("references")}
              />
            </div>
          </div>
        );
    }
  };

  if (!open) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-card rounded-lg p-6 w-full max-w-md border border-border">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-nebula-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-primary mb-2">Application Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for applying for the {jobTitle} position. We'll review your application and get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-border relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-muted-foreground" />
        </button>
        
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground">Apply for {jobTitle}</h2>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="border border-border rounded-lg p-4 bg-popover">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-foreground">
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Experience & Skills"}
                {currentStep === 3 && "Application Details"}
              </h3>
            </div>
            <div>
              {renderStep()}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="flex items-center px-4 py-2 border border-border rounded-md text-foreground bg-card hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </button>
            
            {currentStep < totalSteps ? (
              <button 
                type="button" 
                className="flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                onClick={nextStep}
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            ) : (
              <button 
                type="submit" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerApplicationForm;