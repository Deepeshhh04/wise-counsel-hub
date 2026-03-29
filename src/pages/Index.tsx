import { Link } from "react-router-dom";
import { Scale, MessageSquare, Users, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: MessageSquare, title: "AI Legal Chat", description: "Get instant answers to your legal questions in multiple languages" },
  { icon: Users, title: "Lawyer Connect", description: "Find and connect with verified lawyers across India" },
  { icon: Shield, title: "Trusted Information", description: "AI-powered responses backed by Indian legal references" },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Nav */}
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-card">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
          <Scale className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-xl text-foreground">NyayaSetu</span>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" asChild><Link to="/login">Sign In</Link></Button>
        <Button asChild><Link to="/signup">Get Started</Link></Button>
      </div>
    </nav>

    {/* Hero */}
    <section className="max-w-4xl mx-auto text-center px-6 pt-20 pb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
        <Scale className="w-4 h-4" />
        Multilingual Legal AI Assistant
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
        Your AI-Powered
        <br />
        <span className="text-primary">Legal Companion</span>
      </h1>
      <p className="text-lg text-muted-foreground mt-5 max-w-2xl mx-auto leading-relaxed">
        Get instant legal information in your language, connect with verified lawyers, and navigate India's legal system with confidence.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
        <Button size="lg" className="gap-2 text-base px-8" asChild>
          <Link to="/chat">Start Chatting <ArrowRight className="w-4 h-4" /></Link>
        </Button>
        <Button size="lg" variant="outline" className="gap-2 text-base px-8" asChild>
          <Link to="/lawyers">Find a Lawyer</Link>
        </Button>
      </div>
    </section>

    {/* Features */}
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((f) => (
          <Card key={f.title} className="border-border/50 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 space-y-3">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t py-6 text-center text-xs text-muted-foreground">
      © 2026 NyayaSetu. AI-generated legal information, not legal advice.
    </footer>
  </div>
);

export default Index;
