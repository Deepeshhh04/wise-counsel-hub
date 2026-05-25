import {
  MessageSquare,
  Bookmark,
  Clock,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";

import LawyerCard from "@/components/LawyerCard";
import { PageTransition } from "@/components/PageTransition";

interface QueryItem {
  id: number;
  queryText: string;
  category: string;
  timestamp: string;
}

const savedAnswers = [
  {
    id: 1,
    title: "NI Act Section 138 – Cheque Bounce",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Hindu Marriage Act – Divorce Provisions",
    date: "1 day ago",
  },
];

const DashboardPage = () => {
  const { data: recentQueries = [] } = useQuery<QueryItem[]>({
    queryKey: ["recentQueries"],
    queryFn: async () => {
      return [
        {
          id: 101,
          queryText:
            "What are the legal consequences of cheque bounce?",
          category: "Criminal",
          timestamp: new Date().toISOString(),
        },
      ];
    },
  });

  const recommendedLawyers = [
    {
      id: 1,
      name: "Adv. Priya Sharma",
      experience: "12 years",
      specialization: "Criminal",
      rating: 4.8,
      city: "New Delhi",
      state: "Delhi",
      verified: true,
    },
    {
      id: 2,
      name: "Adv. Rajesh Kumar",
      experience: "8 years",
      specialization: "Family",
      rating: 4.5,
      city: "Mumbai",
      state: "Maharashtra",
      verified: true,
    },
  ];

  return (
    <PageTransition className="p-4 md:p-8 space-y-10 max-w-7xl mx-auto relative overflow-hidden bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-4xl font-black text-navy">
            Aapka <span className="text-primary">Dashboard</span>
          </h1>

          <p className="text-navy/50 mt-1 text-lg font-medium">
            Welcome back to NyayaSetu
          </p>
        </div>

        <div className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border shadow">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

          <span className="text-sm font-bold text-navy/80 uppercase tracking-widest">
            System Online
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Total Queries",
            value: "20",
            sub: "+12% this month",
            icon: MessageSquare,
          },
          {
            label: "Verified Lawyers",
            value: "6",
            sub: "Active across India",
            icon: ShieldCheck,
          },
          {
            label: "Resolved Cases",
            value: "15",
            sub: "Community supported",
            icon: CheckCircle,
          },
          {
            label: "Avg. Response",
            value: "2.4s",
            sub: "Fast AI processing",
            icon: Clock,
          },
        ].map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-7">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-muted">
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>

              <p className="text-4xl font-black tracking-tighter">
                {stat.value}
              </p>

              <p className="text-sm font-bold mt-1">
                {stat.label}
              </p>

              <div className="mt-4 pt-4 border-t flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">
                  {stat.sub}
                </span>

                <ArrowRight className="w-4 h-4 opacity-40" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommended Lawyers */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black">
            Recommended Experts
          </h2>

          <Button variant="ghost" asChild>
            <Link to="/lawyers">
              View All Experts
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedLawyers.map((lawyer) => (
            <LawyerCard
              key={lawyer.id}
              {...lawyer}
            />
          ))}
        </div>
      </div>

      {/* Recent Queries */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>
            Consultation History
          </CardTitle>

          <Button variant="outline" asChild>
            <Link to="/chat">New Chat</Link>
          </Button>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {recentQueries.map((q) => (
              <div
                key={q.id}
                className="flex items-center justify-between p-4 border rounded-xl"
              >
                <div>
                  <p className="font-bold">
                    {q.queryText}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDistanceToNow(
                      new Date(q.timestamp),
                      { addSuffix: true }
                    )}
                  </p>
                </div>

                <Badge>{q.category}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Saved Answers */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Answers</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {savedAnswers.map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-3 p-3 rounded-lg border"
            >
              <Bookmark className="w-4 h-4 text-yellow-500" />

              <div>
                <p className="font-medium">
                  {a.title}
                </p>

                <p className="text-xs text-muted-foreground">
                  {a.date}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageTransition>
  );
};

export default DashboardPage;