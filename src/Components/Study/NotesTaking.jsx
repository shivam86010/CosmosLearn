import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../UI/Card";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Textarea } from "../UI/TextArea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/Tab";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/Select";
import { PlusCircle, Search, BookOpen, Tag, Calendar, Trash2, Edit3, Save, SpaceIcon } from "lucide-react";

const initialNotes = [
  {
    id: 1,
    title: "Newton's Laws of Motion",
    content: "First Law: An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.\n\nSecond Law: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. F = ma\n\nThird Law: For every action, there is an equal and opposite reaction.",
    subject: "Physics",
    tags: ["mechanics", "laws", "forces"],
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: 2,
    title: "Photosynthesis Process",
    content: "Photosynthesis is the process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water.\n\n6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂\n\nTwo main stages:\n1. Light-dependent reactions (in thylakoids)\n2. Calvin cycle (in stroma)",
    subject: "Biology",
    tags: ["plants", "energy", "chemistry"],
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-22")
  }
];

export const NotesTaking = () => {
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    subject: "",
    tags: ""
  });

  const subjects = Array.from(new Set(notes.map(note => note.subject)));
  const allTags = Array.from(new Set(notes.flatMap(note => note.tags)));

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSubject = selectedSubject === "all" || note.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const createNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) return;

    const note = {
      id: Date.now(),
      title: newNote.title,
      content: newNote.content,
      subject: newNote.subject || "General",
      tags: newNote.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setNotes([note, ...notes]);
    setNewNote({ title: "", content: "", subject: "", tags: "" });
    setSelectedNote(note);
  };

  const updateNote = () => {
    if (!selectedNote) return;

    const updatedNotes = notes.map(note =>
      note.id === selectedNote.id
        ? { ...selectedNote, updatedAt: new Date() }
        : note
    );
    setNotes(updatedNotes);
    setIsEditing(false);
  };

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId));
    if (selectedNote?.id === noteId) {
      setSelectedNote(null);
    }
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[800px]">
      {/* Notes List */}
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              My Notes
            </CardTitle>
            <CardDescription>
              Organize your study notes and knowledge
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search and Filter */}
            <div className="space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search notes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Notes List */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto">
              {filteredNotes.map(note => (
                <div
                  key={note.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedNote?.id === note.id ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedNote(note)}
                >
                  <div className="font-medium truncate">{note.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {note.subject} • {formatDate(note.updatedAt)}
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {note.tags.slice(0, 2).map(tag => (
                      <span key={tag}  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                        {tag}
                      </span>
                    ))}
                    {note.tags.length > 2 && (
                      <span  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs">
                        +{note.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Note Editor */}
      <div className="lg:col-span-2">
        <Tabs defaultValue={selectedNote ? "view" : "create"} className="h-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="create">Create Note</TabsTrigger>
            <TabsTrigger value="view" disabled={!selectedNote}>
              {selectedNote ? "View/Edit" : "Select a Note"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="create" className="mt-4">
            <Card className="h-[720px]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PlusCircle className="w-5 h-5" />
                  Create New Note
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Note title..."
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    placeholder="Subject (e.g., Physics)"
                    value={newNote.subject}
                    onChange={(e) => setNewNote({ ...newNote, subject: e.target.value })}
                  />
                  <Input
                    placeholder="Tags (comma separated)"
                    value={newNote.tags}
                    onChange={(e) => setNewNote({ ...newNote, tags: e.target.value })}
                  />
                </div>

                <Textarea
                  placeholder="Write your notes here..."
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  className="min-h-[400px] resize-none"
                />

                <Button onClick={createNote} className="w-full btn-cosmic">
                  <Save className="w-4 h-4 mr-2" />
                  Save Note
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="view" className="mt-4">
            {selectedNote && (
              <Card className="h-[720px]">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        {isEditing ? (
                          <Input
                            value={selectedNote.title}
                            onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
                            className="text-lg font-semibold"
                          />
                        ) : (
                          selectedNote.title
                        )}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">{selectedNote.subject}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(selectedNote.updatedAt)}
                        </span>
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {isEditing ? (
                        <Button onClick={updateNote} size="sm" className="btn-cosmic">
                          <Save className="w-4 h-4" />
                        </Button>
                      ) : (
                        <Button onClick={() => setIsEditing(true)} variant="outline" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        onClick={() => deleteNote(selectedNote.id)}
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mt-3">
                    {selectedNote.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80  gap-1">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      value={selectedNote.content}
                      onChange={(e) => setSelectedNote({ ...selectedNote, content: e.target.value })}
                      className="min-h-[400px] resize-none"
                    />
                  ) : (
                    <div className="prose prose-sm max-w-none">
                      {selectedNote.content.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-3 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};