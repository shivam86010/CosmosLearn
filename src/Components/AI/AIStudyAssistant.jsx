import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../UI/Card';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Bot, User, Send, Sparkles, BookOpen, Calculator, Lightbulb, History } from 'lucide-react';



export function AIStudyAssistant() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: "Hi! I'm your AI study assistant. I can help you with explanations, solve problems, clarify concepts, and provide motivation. What would you like to learn about today?",
      sender: 'ai',
      timestamp: new Date(),
      category: 'motivation'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef(null);

  const quickPrompts = [
    { text: "Explain quantum physics", icon: Sparkles, category: 'explanation' },
    { text: "Help me solve math problems", icon: Calculator, category: 'problem-solving' },
    { text: "Study tips for better memory", icon: Lightbulb, category: 'concept' },
    { text: "What should I study next?", icon: BookOpen, category: 'motivation' }
  ];

  const handleSendMessage = (messageContent) => {
    const content = messageContent || input.trim();
    if (!content) return;

    const userMessage = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        {
          content: "Great question! Let me break this down for you step by step...",
          category: 'explanation' as const
        },
        {
          content: "I'd be happy to help you solve this problem. Here's my approach...",
          category: 'problem-solving' as const
        },
        {
          content: "This is an important concept to understand. Here are the key points...",
          category: 'concept' as const
        },
        {
          content: "You're doing great! Keep up the excellent work. Here's what I suggest...",
          category: 'motivation' as const
        }
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        content: randomResponse.content,
        sender: 'ai',
        timestamp: new Date(),
        category: randomResponse.category
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'explanation': return 'bg-blue-100 text-blue-800';
      case 'problem-solving': return 'bg-green-100 text-green-800';
      case 'concept': return 'bg-purple-100 text-purple-800';
      case 'motivation': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-5 w-5" />
          AI Study Assistant
          <Badge variant="secondary" className="ml-auto">Online</Badge>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Quick Prompts */}
        <div className="grid grid-cols-2 gap-2">
          {quickPrompts.map((prompt, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(prompt.text)}
              className="h-auto p-2 text-xs flex flex-col items-center gap-1"
            >
              <prompt.icon className="h-3 w-3" />
              <span className="text-center">{prompt.text}</span>
            </Button>
          ))}
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`max-w-[80%] space-y-1 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{message.timestamp.toLocaleTimeString()}</span>
                    {message.category && (
                      <Badge variant="secondary" className={`text-xs ${getCategoryColor(message.category)}`}>
                        {message.category}
                      </Badge>
                    )}
                  </div>
                </div>

                {message.sender === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-3 justify-start">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Ask me anything about your studies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            disabled={!input.trim() || isTyping}
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}