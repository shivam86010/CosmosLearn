import { useState } from "react";
import { Card, CardContent } from "../UI/Card";
import { Button } from "../UI/Button";
import { Progress } from "../UI/Progress";
import { RotateCcw, ChevronLeft, ChevronRight, FlipVertical, Shuffle } from "lucide-react";

const flashcards = [
  {
    id: 1,
    subject: "Biology",
    front: "What is photosynthesis?",
    back: "The process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of sugar."
  },
  {
    id: 2,
    subject: "Chemistry",
    front: "What is the chemical formula for water?",
    back: "H₂O - Two hydrogen atoms bonded to one oxygen atom."
  },
  {
    id: 3,
    subject: "Physics",
    front: "What is the speed of light in a vacuum?",
    back: "299,792,458 meters per second (approximately 3.00 × 10⁸ m/s)."
  },
  {
    id: 4,
    subject: "Mathematics",
    front: "What is the Pythagorean theorem?",
    back: "In a right triangle, the square of the hypotenuse equals the sum of squares of the other two sides: a² + b² = c²"
  },
  {
    id: 5,
    subject: "Chemistry",
    front: "What is an ionic bond?",
    back: "A chemical bond formed between atoms when electrons are transferred from one atom to another, creating charged ions."
  }
];

export const FlashcardInterface = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studiedCards, setStudiedCards] = useState(new Set());
  const [difficulty, setDifficulty] = useState({});

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % flashcards.length);
    setIsFlipped(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + flashcards.length) % flashcards.length);
    setIsFlipped(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped) {
      setStudiedCards(new Set([...studiedCards, currentCard]));
    }
  };

  const markDifficulty = (level) => {
    setDifficulty({ ...difficulty, [currentCard]: level });
    nextCard();
  };

  const resetSession = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    setStudiedCards(new Set());
    setDifficulty({});
  };

  const shuffleCards = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(randomIndex);
    setIsFlipped(false);
  };

  const progress = (studiedCards.size / flashcards.length) * 100;
  const card = flashcards[currentCard];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Progress and Controls */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            {card.subject}
           </span>

          <span className="text-sm text-muted-foreground">
            {currentCard + 1} of {flashcards.length}
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={shuffleCards}>
            <Shuffle className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={resetSession}>
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Study Progress</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Flashcard */}
      <div className="relative h-80">
        <Card 
          className={`absolute inset-0 cursor-pointer transition-all duration-500 ${
            isFlipped ? 'transform rotate-y-180' : ''
          }`}
          onClick={flipCard}
        >
          <CardContent className="h-full flex items-center justify-center p-8">
            <div className="text-center space-y-4">
              {!isFlipped ? (
                <>
                  <div className="text-lg font-semibold">Question</div>
                  <div className="text-xl">{card.front}</div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <FlipVertical className="w-4 h-4" />
                    <span className="text-sm">Click to reveal answer</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-lg font-semibold text-cosmic">Answer</div>
                  <div className="text-lg leading-relaxed">{card.back}</div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation and Difficulty */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={prevCard}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>

        {isFlipped && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => markDifficulty('easy')}
              className="text-nebula-green border-nebula-green hover:bg-nebula-green/10"
            >
              Easy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => markDifficulty('medium')}
              className="text-stellar-pink border-stellar-pink hover:bg-stellar-pink/10"
            >
              Medium
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => markDifficulty('hard')}
              className="text-destructive border-destructive hover:bg-destructive/10"
            >
              Hard
            </Button>
          </div>
        )}

        <Button variant="outline" onClick={nextCard}>
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Study Statistics */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-cosmic">{studiedCards.size}</div>
              <div className="text-sm text-muted-foreground">Studied</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-nebula-green">
                {Object.values(difficulty).filter(d => d === 'easy').length}
              </div>
              <div className="text-sm text-muted-foreground">Easy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-stellar-pink">
                {Object.values(difficulty).filter(d => d === 'medium').length}
              </div>
              <div className="text-sm text-muted-foreground">Medium</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-destructive">
                {Object.values(difficulty).filter(d => d === 'hard').length}
              </div>
              <div className="text-sm text-muted-foreground">Hard</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};