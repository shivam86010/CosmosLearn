import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../UI/Card";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Textarea } from "../UI/TextArea";
import { Avatar, AvatarFallback, AvatarImage } from "../UI/Avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../UI/Tab";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/Select";
import { MessageSquare, Heart, Reply, Search, PlusCircle, TrendingUp, Clock, Users } from "lucide-react";


const initialPosts = [
  {
    id: 1,
    title: "Need help with calculus derivatives",
    content: "I'm struggling with the chain rule in calculus. Can someone explain it in simple terms with examples?",
    author: "Sarah Chen",
    authorAvatar: "",
    subject: "Mathematics",
    tags: ["calculus", "derivatives", "help"],
    likes: 12,
    replies: 5,
    createdAt: new Date("2024-01-20"),
    isLiked: false
  },
  {
    id: 2,
    title: "Great explanation of photosynthesis!",
    content: "Found this amazing video that breaks down photosynthesis step by step. Really helped me understand the light and dark reactions.",
    author: "Mike Johnson",
    authorAvatar: "",
    subject: "Biology",
    tags: ["biology", "photosynthesis", "resource"],
    likes: 28,
    replies: 8,
    createdAt: new Date("2024-01-22"),
    isLiked: true
  },
  {
    id: 3,
    title: "Study group for organic chemistry",
    content: "Looking for people to form a study group for organic chemistry. We're planning to meet twice a week online.",
    author: "Emma Davis",
    authorAvatar: "",
    subject: "Chemistry",
    tags: ["chemistry", "study-group", "collaboration"],
    likes: 15,
    replies: 12,
    createdAt: new Date("2024-01-23"),
    isLiked: false
  }
];

const initialReplies = [
  {
    id: 1,
    postId: 1,
    content: "The chain rule is basically (f(g(x)))' = f'(g(x)) × g'(x). Think of it as unwrapping layers of a function!",
    author: "Alex Smith",
    authorAvatar: "",
    likes: 8,
    createdAt: new Date("2024-01-20"),
    isLiked: false
  },
  {
    id: 2,
    postId: 1,
    content: "I found Khan Academy's videos on the chain rule really helpful. They use visual examples that make it click.",
    author: "Priya Patel",
    authorAvatar: "",
    likes: 5,
    createdAt: new Date("2024-01-21"),
    isLiked: true
  }
];

export const DiscussionForum = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [replies, setReplies] = useState(initialReplies);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    subject: "",
    tags: ""
  });
  const [newReply, setNewReply] = useState("");

  const subjects = Array.from(new Set(posts.map(post => post.subject)));

  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesSubject = selectedSubject === "all" || post.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.likes - a.likes;
        case "replies":
          return b.replies - a.replies;
        default:
          return b.createdAt.getTime() - a.createdAt.getTime();
      }
    });

  const toggleLike = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const toggleReplyLike = (replyId) => {
    setReplies(replies.map(reply =>
      reply.id === replyId
        ? { ...reply, likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1, isLiked: !reply.isLiked }
        : reply
    ));
  };

  const createPost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return;

    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: "You",
      authorAvatar: "",
      subject: newPost.subject || "General",
      tags: newPost.tags.split(",").map(tag => tag.trim()).filter(tag => tag),
      likes: 0,
      replies: 0,
      createdAt: new Date(),
      isLiked: false
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", subject: "", tags: "" });
    setShowCreatePost(false);
  };

  const addReply = () => {
    if (!newReply.trim() || !selectedPost) return;

    const reply = {
      id: Date.now(),
      postId: selectedPost.id,
      content: newReply,
      author: "You",
      authorAvatar: "",
      likes: 0,
      createdAt: new Date(),
      isLiked: false
    };

    setReplies([...replies, reply]);
    setPosts(posts.map(post =>
      post.id === selectedPost.id
        ? { ...post, replies: post.replies + 1 }
        : post
    ));
    setNewReply("");
  };

  const formatDate = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return "1 day ago";
    return `${Math.floor(diffInHours / 24)} days ago`;
  };

  const postReplies = replies.filter(reply => reply.postId === selectedPost?.id);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Forum Posts List */}
      <div className="lg:col-span-2 space-y-4">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Discussion Forum
                </CardTitle>
                <CardDescription>
                  Connect with peers and get help with your studies
                </CardDescription>
              </div>
              <Button onClick={() => setShowCreatePost(true)} className="btn-cosmic">
                <PlusCircle className="w-4 h-4 mr-2" />
                New Post
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  {subjects.map(subject => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Recent
                    </span>
                  </SelectItem>
                  <SelectItem value="popular">
                    <span className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Popular
                    </span>
                  </SelectItem>
                  <SelectItem value="replies">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Most Replies
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Posts List */}
            <div className="space-y-3">
              {filteredPosts.map(post => (
                <Card
                  key={post.id}
                  className={`cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedPost?.id === post.id ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setSelectedPost(post)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.authorAvatar} />
                        <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ">{post.subject}</span>
                          <span className="text-sm text-muted-foreground">{formatDate(post.createdAt)}</span>
                        </div>
                        
                        <h3 className="font-semibold mb-1 truncate">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.content}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag}  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors 
focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 ">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleLike(post.id);
                              }}
                              className={`flex items-center gap-1 hover:text-red-500 ${
                                post.isLiked ? 'text-red-500' : ''
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${post.isLiked ? 'fill-current' : ''}`} />
                              {post.likes}
                            </button>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              {post.replies}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Post Details and Replies */}
      <div className="space-y-4">
        {selectedPost ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">{selectedPost.title}</CardTitle>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{selectedPost.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-sm">{selectedPost.author}</div>
                  <div className="text-xs text-muted-foreground">{formatDate(selectedPost.createdAt)}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed">{selectedPost.content}</p>
              
              <div className="flex flex-wrap gap-1">
                {selectedPost.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Replies */}
              <div className="border-t pt-4 space-y-3">
                <h4 className="font-semibold text-sm">Replies ({postReplies.length})</h4>
                
                {postReplies.map(reply => (
                  <div key={reply.id} className="p-3 bg-muted/30 rounded-lg">
                    <div className="flex items-start gap-2 mb-2">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">
                          {reply.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-xs">{reply.author}</span>
                          <span className="text-xs text-muted-foreground">{formatDate(reply.createdAt)}</span>
                        </div>
                        <p className="text-sm mt-1">{reply.content}</p>
                        <button
                          onClick={() => toggleReplyLike(reply.id)}
                          className={`flex items-center gap-1 text-xs mt-1 hover:text-red-500 ${
                            reply.isLiked ? 'text-red-500' : 'text-muted-foreground'
                          }`}
                        >
                          <Heart className={`w-3 h-3 ${reply.isLiked ? 'fill-current' : ''}`} />
                          {reply.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add Reply */}
                <div className="space-y-2">
                  <Textarea
                    placeholder="Write a reply..."
                    value={newReply}
                    onChange={(e) => setNewReply(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <Button onClick={addReply} size="sm" className="btn-cosmic">
                    <Reply className="w-4 h-4 mr-2" />
                    Reply
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent className="p-8 text-center text-muted-foreground">
              <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Select a post to view details and replies</p>
            </CardContent>
          </Card>
        )}

        {/* Create Post Dialog */}
        {showCreatePost && (
          <Card>
            <CardHeader>
              <CardTitle>Create New Post</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                placeholder="Post title..."
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              
              <div className="grid grid-cols-2 gap-2">
                <Input
                  placeholder="Subject"
                  value={newPost.subject}
                  onChange={(e) => setNewPost({ ...newPost, subject: e.target.value })}
                />
                <Input
                  placeholder="Tags (comma separated)"
                  value={newPost.tags}
                  onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
                />
              </div>

              <Textarea
                placeholder="What would you like to discuss?"
                value={newPost.content}
                onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                className="min-h-[120px]"
              />

              <div className="flex gap-2">
                <Button onClick={createPost} className="btn-cosmic flex-1">
                  Create Post
                </Button>
                <Button variant="outline" onClick={() => setShowCreatePost(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};