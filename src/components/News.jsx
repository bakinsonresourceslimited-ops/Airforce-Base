import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, TrendingUp } from "lucide-react";
import NewsDetailModal from "@/components/NewsDetailModal";

const News = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const newsItems = [
    {
      title: "Defense Academy Graduates 500 Officers in Prestigious Ceremony",
      excerpt: "The latest graduating class represents the largest cohort in academy history, with officers commissioned across all branches of the armed forces.",
      date: "September 12, 2025",
      category: "Graduation",
      featured: true,
      readTime: "3 min read"
    },
    {
      title: "New Cybersecurity Research Center Opens",
      excerpt: "State-of-the-art facility will focus on emerging threats in digital warfare and defensive technologies.",
      date: "September 10, 2025",
      category: "Research",
      featured: false,
      readTime: "2 min read"
    },
    {
      title: "International Defense Summit Hosted at Academy",
      excerpt: "Military leaders from 25 nations gather to discuss global security challenges and collaborative defense strategies.",
      date: "September 8, 2025",
      category: "Events",
      featured: false,
      readTime: "4 min read"
    },
    {
      title: "Academy Receives Excellence Award for Innovation",
      excerpt: "Recognition for outstanding contributions to military education and defense technology advancement.",
      date: "September 5, 2025",
      category: "Awards",
      featured: false,
      readTime: "2 min read"
    },
    {
      title: "New Partnership with International Universities",
      excerpt: "Exchange programs established with leading military academies worldwide to enhance global perspectives.",
      date: "September 3, 2025",
      category: "Partnerships",
      featured: false,
      readTime: "3 min read"
    },
    {
      title: "Advanced Simulation Training Center Unveiled",
      excerpt: "Cutting-edge facility provides immersive training experiences using virtual reality and AI technologies.",
      date: "September 1, 2025",
      category: "Technology",
      featured: false,
      readTime: "3 min read"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Graduation": return "default";
      case "Research": return "secondary";
      case "Events": return "outline";
      case "Awards": return "destructive";
      case "Technology": return "secondary";
      default: return "outline";
    }
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setIsDetailModalOpen(true);
  };

  return (
    <section id="news" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center gap-2 mb-4 animate-slide-in-left">
              <TrendingUp className="h-6 w-6 text-primary animate-pulse-gentle" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Latest News & Updates
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up stagger-1">
              Stay informed with the latest developments, achievements, and events 
              from the Defense Academy community.
            </p>
          </div>

          {/* Featured Article */}
          {newsItems.filter(item => item.featured).map((article, index) => (
            <Card key={index} className="mb-12 shadow-elevated border-2 border-primary/20 hover-lift hover-glow animate-fade-in-scale">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-accent text-accent-foreground animate-pulse-gentle">Featured</Badge>
                  <Badge variant={getCategoryColor(article.category)}>{article.category}</Badge>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight animate-fade-in-up">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed animate-fade-in-up stagger-1">
                  {article.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 animate-fade-in-up stagger-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 animate-pulse-gentle" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button 
                    variant="military" 
                    className="group hover-lift hover-glow"
                    onClick={() => handleArticleClick(article)}
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {newsItems.filter(item => !item.featured).map((article, index) => (
              <Card key={index} className="h-full shadow-professional hover-lift hover-glow transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={getCategoryColor(article.category)} className="text-xs">
                      {article.category}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-semibold text-primary leading-tight group-hover:text-primary-light transition-colors">
                    {article.title}
                  </h4>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <span>{article.readTime}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => handleArticleClick(article)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => {
                // Simulate loading more news
                alert("More news articles would be loaded here. This is a demo implementation.");
              }}
            >
              View All News
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* News Detail Modal */}
      <NewsDetailModal 
        isOpen={isDetailModalOpen} 
        onClose={() => setIsDetailModalOpen(false)}
        article={selectedArticle}
      />
    </section>
  );
};

export default News;