import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../UI/Card";
import { Button } from "../UI/Button";
import { Progress } from "../UI/Progress";
import { RadioGroup, RadioGroupItem } from "../UI/RadioGroup";
import { Label } from "../UI/Label";
import { CheckCircle, XCircle, RotateCcw, Trophy, Clock } from "lucide-react";

const sampleQuiz = {
  title: "Physics: Motion and Forces",
  description: "Test your understanding of basic mechanics",
  questions: [
    {
      id: 1,
      question: "What is Newton's first law of motion?",
      options: [
        "An object at rest stays at rest unless acted upon by force",
        "Force equals mass times acceleration",
        "For every action there is an equal and opposite reaction",
        "Energy cannot be created or destroyed"
      ],
      correct: 0
    },
    {
      id: 2,
      question: "What is the unit of force in the SI system?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correct: 1
    },
    {
      id: 3,
      question: "What happens to kinetic energy when velocity doubles?",
      options: ["Doubles", "Triples", "Quadruples", "Stays the same"],
      correct: 2
    }
  ]
};

export const QuizInterface = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  const handleAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    
    if (currentQuestion < sampleQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setShowResults(false);
    setTimeLeft(300);
  };

  const score = answers.reduce((acc, answer, index) => {
    return acc + (answer === sampleQuiz.questions[index].correct ? 1 : 0);
  }, 0);

  const progress = ((currentQuestion + (showResults ? 1 : 0)) / sampleQuiz.questions.length) * 100;

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Trophy className="w-16 h-16 text-cosmic-purple" />
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <CardDescription>Here are your results</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-cosmic mb-2">
              {score}/{sampleQuiz.questions.length}
            </div>
            <div className="text-muted-foreground">
              {Math.round((score / sampleQuiz.questions.length) * 100)}% Correct
            </div>
          </div>

          <div className="space-y-4">
            {sampleQuiz.questions.map((question, index) => (
              <div key={question.id} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  {answers[index] === question.correct ? (
                    <CheckCircle className="w-5 h-5 text-nebula-green mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-destructive mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">{question.question}</p>
                    <p className="text-sm text-muted-foreground">
                      Your answer: {question.options[answers[index]]}
                    </p>
                    {answers[index] !== question.correct && (
                      <p className="text-sm text-nebula-green">
                        Correct answer: {question.options[question.correct]}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={resetQuiz} className="w-full btn-cosmic">
            <RotateCcw className="w-4 h-4 mr-2" />
            Retake Quiz
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{sampleQuiz.title}</CardTitle>
            <CardDescription>{sampleQuiz.description}</CardDescription>
          </div>
          <span className=" rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentQuestion + 1} of {sampleQuiz.questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {sampleQuiz.questions[currentQuestion].question}
          </h3>
          
          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          >
            {sampleQuiz.questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={handleAnswer}
            disabled={selectedAnswer === null}
            className="flex-1 btn-cosmic"
          >
            {currentQuestion < sampleQuiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};