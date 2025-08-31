import { Tabs, TabsContent, TabsList, TabsTrigger } from "../Components/UI/Tab";
import { QuizInterface } from "../Components/Study/QuizInterface";
import { FlashcardInterface } from "../Components/Study/FlashCardInterFace";
import { StudyTimer } from "../Components/Study/StudyTimer";
import { NotesTaking } from "../Components/Study/NotesTaking";
import { DiscussionForum } from "../Components/Social/DiscussionForum";
// import { StudyGroups } from "@/components/social/StudyGroups";
// import { ProductivityTools } from "@/components/productivity/ProductivityTools";
import { BookOpen, Users, Clock, MessageSquare, Target, PenTool, Zap } from "lucide-react";

const StudyTools = () => {
  return (
    <div className="min-h-screen bg-gradient-stellar">
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cosmic mb-4">
            Interactive Study Tools
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enhance your learning with our comprehensive suite of interactive tools, social features, and productivity utilities.
          </p>
        </div>

        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Quiz
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Cards
            </TabsTrigger>
            <TabsTrigger value="timer" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Timer
            </TabsTrigger>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <PenTool className="w-4 h-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Forum
            </TabsTrigger>
            <TabsTrigger value="groups" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Groups
            </TabsTrigger>
            <TabsTrigger value="productivity" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Tools
            </TabsTrigger>
          </TabsList>

          <TabsContent value="quiz">
            <QuizInterface />
          </TabsContent>
          
          <TabsContent value="flashcards">
            <FlashcardInterface />
          </TabsContent>
          
          <TabsContent value="timer">
            <StudyTimer />
          </TabsContent>
          
          <TabsContent value="notes">
            <NotesTaking />
          </TabsContent>
          
          <TabsContent value="forum">
            <DiscussionForum />
          </TabsContent>
          
          {/* <TabsContent value="groups">
            <StudyGroups />
          </TabsContent> */}
          
          {/* <TabsContent value="productivity">
            <ProductivityTools />
          </TabsContent> */}
        </Tabs>
      </main>

    </div>
  );
};

export default StudyTools;