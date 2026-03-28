import { MessageSquare, Bookmark, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const recentQueries = [
  { id: 1, question: "What are the legal consequences of cheque bounce?", date: "2 hours ago", category: "Criminal" },
  { id: 2, question: "How to file for divorce in India?", date: "1 day ago", category: "Family" },
  { id: 3, question: "What are tenant rights under Rent Control Act?", date: "3 days ago", category: "Property" },
];

const savedAnswers = [
  { id: 1, title: "NI Act Section 138 – Cheque Bounce", date: "2 hours ago" },
  { id: 2, title: "Hindu Marriage Act – Divorce Provisions", date: "1 day ago" },
];

const DashboardPage = () => (
  <div className="p-4 md:p-6 space-y-6 max-w-5xl mx-auto">
    <div>
      <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
      <p className="text-sm text-muted-foreground mt-1">Your legal assistant overview</p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { label: "Total Queries", value: "24", icon: MessageSquare, color: "text-primary" },
        { label: "Saved Answers", value: "8", icon: Bookmark, color: "text-legal-gold" },
        { label: "This Week", value: "5", icon: Clock, color: "text-accent" },
      ].map((stat) => (
        <Card key={stat.label}>
          <CardContent className="flex items-center gap-4 p-5">
            <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Recent Queries */}
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-lg font-display">Recent Queries</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <Link to="/chat" className="gap-1">View all <ArrowRight className="w-3.5 h-3.5" /></Link>
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentQueries.map((q) => (
          <div key={q.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{q.question}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{q.date}</p>
            </div>
            <Badge variant="secondary" className="ml-3 shrink-0">{q.category}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>

    {/* Saved Answers */}
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-display">Saved Answers</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {savedAnswers.map((a) => (
          <div key={a.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
            <Bookmark className="w-4 h-4 text-legal-gold shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{a.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default DashboardPage;
