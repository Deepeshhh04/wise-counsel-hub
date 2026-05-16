<<<<<<< HEAD
import { MessageSquare, Bookmark, Clock, ArrowRight, ShieldAlert, CheckCircle, XCircle, ShieldCheck } from "lucide-react";
=======
import { MessageSquare, Bookmark, Clock, ArrowRight } from "lucide-react";
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { toast } from "sonner";
import LawyerCard from "@/components/LawyerCard";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

interface QueryItem {
  id: number;
  queryText: string;
  category: string;
  timestamp: string;
}

interface VerificationItem {
  id: number;
  name: string;
  email: string;
  barCouncilId: string;
  documentUrl: string;
  status: string;
  submittedAt: string;
}
=======

const recentQueries = [
  { id: 1, question: "What are the legal consequences of cheque bounce?", date: "2 hours ago", category: "Criminal" },
  { id: 2, question: "How to file for divorce in India?", date: "1 day ago", category: "Family" },
  { id: 3, question: "What are tenant rights under Rent Control Act?", date: "3 days ago", category: "Property" },
];
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b

const savedAnswers = [
  { id: 1, title: "NI Act Section 138 – Cheque Bounce", date: "2 hours ago" },
  { id: 2, title: "Hindu Marriage Act – Divorce Provisions", date: "1 day ago" },
];

<<<<<<< HEAD
const DashboardPage = () => {
  const { data: recentQueries = [], isLoading: loadingQueries } = useQuery<QueryItem[]>({
    queryKey: ['recentQueries'],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/queries/recent?limit=5");
      if (!res.ok) throw new Error("Failed to fetch queries");
      return res.json();
    },
    initialData: [
      { id: 101, queryText: "What are the legal consequences of cheque bounce?", category: "Criminal", timestamp: new Date(Date.now() - 2 * 3600 * 1000).toISOString() },
      { id: 102, queryText: "How to file for divorce in India?", category: "Family", timestamp: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
      { id: 103, queryText: "What are tenant rights under Rent Control Act?", category: "Property", timestamp: new Date(Date.now() - 72 * 3600 * 1000).toISOString() },
    ]
  });

  const { data: trendingCategories = [], isLoading: loadingTrending } = useQuery<any[]>({
    queryKey: ['trendingQueries'],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/queries/trending?limit=5");
      if (!res.ok) throw new Error("Failed to fetch trending");
      return res.json();
    },
    initialData: [
      ["Criminal", 12],
      ["Family", 8],
      ["Corporate", 5]
    ]
  });

  const { data: pendingVerifications = [], refetch: refetchVerifications, isLoading: loadingVerifications } = useQuery<VerificationItem[]>({
    queryKey: ['pendingVerifications'],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/lawyer-verification/pending");
      if (!res.ok) throw new Error("Failed to fetch verifications");
      return res.json();
    },
    initialData: [
      { id: 1, name: "Adv. Rahul Singh", email: "rahul@law.com", barCouncilId: "D/555/2015", documentUrl: "#", status: "PENDING", submittedAt: new Date(Date.now() - 1 * 3600 * 1000).toISOString() }
    ]
  });

  const handleVerification = async (id: number, status: 'APPROVED' | 'REJECTED') => {
    try {
      const res = await fetch(`http://localhost:8080/api/lawyer-verification/${id}/status?status=${status}`, {
        method: "PUT"
      });
      if (!res.ok) throw new Error("Failed to update status");
      toast.success(`Lawyer verification ${status.toLowerCase()}`);
      refetchVerifications();
    } catch (err) {
      toast.error("Failed to update verification status. Backend might not be running.");
    }
  };

  const mockLawyers = [
    { id: 1, name: "Adv. Priya Sharma", experience: "12 years", specialization: "Criminal", rating: 4.8, city: "New Delhi", state: "Delhi", verified: true },
    { id: 2, name: "Adv. Rajesh Kumar", experience: "8 years", specialization: "Family", rating: 4.5, city: "Mumbai", state: "Maharashtra", verified: true },
    { id: 3, name: "Adv. Ananya Reddy", experience: "15 years", specialization: "Corporate", rating: 4.9, city: "Bangalore", state: "Karnataka", verified: true },
  ];

  const { data: fetchedLawyers, isLoading: loadingLawyers } = useQuery<any[]>({
    queryKey: ['recommendedLawyers'],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/lawyer-verification/approved");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    initialData: mockLawyers
  });

  const recommendedLawyers = fetchedLawyers || mockLawyers;

  return (
    <PageTransition className="p-4 md:p-8 space-y-10 max-w-7xl mx-auto relative overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-saffron/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div>
          <h1 className="text-4xl font-display font-black text-navy tracking-tight">Aapka <span className="text-primary">Dashboard</span></h1>
          <p className="text-navy/50 mt-1 text-lg font-medium">Welcome back to NyayaSetu</p>
        </div>
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-navy/10 shadow-premium">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-sm font-bold text-navy/80 uppercase tracking-widest">System Online</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {[
          { label: "Total Queries", value: "1,284", sub: "+12% this month", icon: MessageSquare, color: "bg-navy text-white" },
          { label: "Verified Lawyers", value: "420", sub: "Active across India", icon: ShieldCheck, color: "bg-white text-navy border-navy/10" },
          { label: "Resolved Cases", value: "856", sub: "Community supported", icon: CheckCircle, color: "bg-white text-navy border-navy/10" },
          { label: "Avg. Response", value: "2.4s", sub: "Fast AI processing", icon: Clock, color: "bg-white text-navy border-navy/10" },
        ].map((stat) => (
          <Card key={stat.label} className={`group hover:-translate-y-2 transition-all duration-500 shadow-premium hover:shadow-2xl relative overflow-hidden rounded-3xl border-none ${stat.color}`}>
            <CardContent className="p-7">
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${stat.color === 'bg-navy text-white' ? 'bg-white/10' : 'bg-navy/5'}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-[10px] uppercase font-black tracking-[0.2em] text-green-500">Live</div>
              </div>
              <p className="text-4xl font-black tracking-tighter text-[#0B1C3F]">{stat.value}</p>
              <p className="text-sm font-bold text-[#0B1C3F] mt-1 uppercase tracking-wider">{stat.label}</p>
              <div className="mt-4 pt-4 border-t border-current/10 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">{stat.sub}</span>
                <ArrowRight className="w-4 h-4 opacity-40 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        <div className="lg:col-span-2 space-y-10">

          {/* RECOMMENDED LAWYERS - RESTORED */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron/10 flex items-center justify-center text-saffron">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-display font-black text-navy">Recommended Experts</h2>
              </div>
              <Button variant="ghost" asChild className="text-primary font-bold hover:bg-primary/5 rounded-xl">
                <Link to="/lawyers">View All Experts <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedLawyers.slice(0, 2).map((lawyer) => (
                <LawyerCard key={lawyer.id} {...lawyer} />
              ))}
            </div>
          </div>

          {/* Recent Queries */}
          <Card className="shadow-2xl border-navy/5 bg-white/60 backdrop-blur-xl rounded-[40px] overflow-hidden border">
            <CardHeader className="flex flex-row items-center justify-between p-8 border-b border-navy/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-display font-black text-navy">Consultation History</CardTitle>
                  <p className="text-sm font-bold text-navy/40 uppercase tracking-widest mt-0.5">Your recent activity</p>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild className="rounded-xl border-navy/10 hover:bg-navy/5 font-bold px-5">
                <Link to="/chat" className="gap-2">New Chat <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              {loadingQueries ? (
                <div className="p-8 space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-16 rounded-2xl bg-navy/5 animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="divide-y divide-navy/5">
                  {recentQueries.map((q) => (
                    <div key={q.id} className="flex items-center justify-between p-8 hover:bg-navy/[0.02] transition-all cursor-pointer group">
                      <div className="flex-1 min-w-0 pr-6">
                        <p className="text-lg font-bold text-navy group-hover:text-primary transition-colors truncate">{q.queryText}</p>
                        <p className="text-xs font-black text-navy/30 mt-2 uppercase tracking-[0.15em] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {formatDistanceToNow(new Date(q.timestamp), { addSuffix: true })}
                        </p>
                      </div>
                      <Badge variant="secondary" className="rounded-xl bg-navy/5 text-navy border-none px-4 py-2 font-black text-[10px] uppercase tracking-widest group-hover:bg-primary group-hover:text-white transition-all">
                        {q.category || 'General'}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Sidebar / Admin */}
        <div className="space-y-10">
          {/* Trending Section */}
          <Card className="shadow-2xl border-navy/5 bg-navy text-white rounded-[40px] overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-saffron" />
                <CardTitle className="text-xl font-display font-black uppercase tracking-tighter">Trending Topics</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-8 pb-8 space-y-5">
              {trendingCategories.map(([cat, count], i) => (
                <div key={cat} className="flex items-center justify-between group cursor-pointer py-1">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-black text-white/20 w-6">0{i + 1}</span>
                    <span className="text-base font-bold group-hover:text-saffron transition-colors">{cat}</span>
                  </div>
                  <Badge className="bg-white/10 text-white/60 hover:bg-white/20 border-none rounded-lg px-2 font-bold text-[10px]">{count} searches</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Admin Section */}
          <Card className="shadow-2xl border-primary/20 bg-primary/5 backdrop-blur-xl rounded-[40px] relative overflow-hidden border">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 -mr-16 -mt-16 rounded-full blur-3xl" />
            <CardHeader className="p-8 pb-4 flex flex-row items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/20">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <CardTitle className="text-2xl font-display font-black text-navy">Admin Panel</CardTitle>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mt-1">Verification Desk</p>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-4 relative z-10">
              <p className="text-sm font-bold text-navy/50 mb-8 leading-relaxed">Review pending professional applications.</p>

              {loadingVerifications ? (
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="h-32 rounded-3xl bg-navy/5 animate-pulse" />
                  ))}
                </div>
              ) : pendingVerifications.length === 0 ? (
                <div className="text-center py-12 rounded-[32px] bg-white/50 border-2 border-dashed border-navy/10">
                  <CheckCircle className="w-14 h-14 text-green-500/20 mx-auto mb-4" />
                  <p className="text-lg font-black text-navy">All Clear</p>
                  <p className="text-xs font-bold text-navy/30 uppercase tracking-widest mt-1">No pending requests</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {pendingVerifications.map((v) => (
                    <motion.div
                      key={v.id}
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-[32px] bg-white border border-navy/5 shadow-premium space-y-5"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-navy font-black text-xl border border-navy/10">
                            {v.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-black text-navy text-base">{v.name}</p>
                            <p className="text-[10px] text-navy/40 font-black uppercase tracking-widest mt-1">{v.barCouncilId}</p>
                          </div>
                        </div>
                        <Badge className="bg-saffron/10 text-saffron hover:bg-saffron/10 border-none px-3 py-1 font-black text-[9px] uppercase tracking-tighter">Review</Badge>
                      </div>

                      <div className="flex gap-3">
                        <Button size="sm" className="flex-1 rounded-2xl bg-green-600 hover:bg-green-700 text-xs font-black h-11 shadow-lg shadow-green-600/20" onClick={() => handleVerification(v.id, 'APPROVED')}>
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1 rounded-2xl border-destructive/20 text-destructive hover:bg-destructive/5 text-xs font-black h-11" onClick={() => handleVerification(v.id, 'REJECTED')}>
                          Reject
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  );
};
=======
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
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b

export default DashboardPage;
