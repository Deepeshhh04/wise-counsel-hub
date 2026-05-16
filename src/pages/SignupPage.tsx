import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Mail, Lock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
<<<<<<< HEAD
import { PageTransition } from "@/components/PageTransition";
=======
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

<<<<<<< HEAD
  const handleSignup = async (e: React.FormEvent) => {
=======
  const handleSignup = (e: React.FormEvent) => {
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
    e.preventDefault();
    if (!name || !email || !password) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
<<<<<<< HEAD
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role: "LAWYER" }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(errorText || "Signup failed");
      }

      const userData = await res.json();
      localStorage.setItem("nyaya_user", JSON.stringify(userData));

      toast({
        title: "Success",
        description: "Account created successfully!",
      });
      // FORCED REDIRECT TO VERIFICATION
      setTimeout(() => {
        navigate("/verify-lawyer");
      }, 500);
    } catch (error: any) {
      toast({ title: "Signup Error", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition className="min-h-screen flex items-center justify-center bg-navy px-4 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saffron/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <Card className="w-full max-w-md shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-white/10 bg-navy/80 backdrop-blur-2xl relative z-10 rounded-[40px] overflow-hidden">
        <CardHeader className="text-center space-y-4 p-10 pb-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron via-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/20">
            <Scale className="w-8 h-8 text-slate-800" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-black text-slate-800 tracking-tight">Get Started</h1>
            <p className="text-slate-800/40 text-xs font-bold uppercase tracking-[0.2em] mt-2">Join the NyayaSetu Network</p>
=======
    if (password.length < 6) {
      toast({ title: "Password must be at least 6 characters", variant: "destructive" });
      return;
    }
    setLoading(true);
    // Placeholder: POST /api/auth/signup
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Account created successfully!" });
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-xl border-border/50">
        <CardHeader className="text-center space-y-3 pb-2">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-primary flex items-center justify-center">
            <Scale className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold text-foreground">Create Account</h1>
            <p className="text-sm text-muted-foreground mt-1">Get started with NyayaSetu today</p>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
          </div>
        </CardHeader>

        <form onSubmit={handleSignup}>
<<<<<<< HEAD
          <CardContent className="space-y-5 px-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-slate-800/60 font-bold text-xs uppercase tracking-widest ml-1">Full Name</Label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800/20 group-focus-within:text-saffron transition-colors" />
                <Input id="name" placeholder="Rajesh Kumar" value={name} onChange={(e) => setName(e.target.value)} className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-saffron/50 focus:ring-saffron/20 rounded-2xl transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-800/60 font-bold text-xs uppercase tracking-widest ml-1">Work Email</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800/20 group-focus-within:text-saffron transition-colors" />
                <Input id="email" type="email" placeholder="rajesh@law.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-saffron/50 focus:ring-saffron/20 rounded-2xl transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-800/60 font-bold text-xs uppercase tracking-widest ml-1">Security Key</Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-800/20 group-focus-within:text-saffron transition-colors" />
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/10 focus:border-saffron/50 focus:ring-saffron/20 rounded-2xl transition-all" />
=======
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="name" placeholder="Your full name" value={name} onChange={(e) => setName(e.target.value)} className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="password" type="password" placeholder="Min 6 characters" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-9" />
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
              </div>
            </div>
          </CardContent>

<<<<<<< HEAD
          <CardFooter className="flex flex-col gap-6 p-10 pt-8">
            <Button type="submit" className="w-full h-14 gap-3 shadow-2xl shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-1 transition-all rounded-2xl font-black bg-saffron text-navy hover:bg-saffron/90" disabled={loading}>
              {loading ? "Authenticating..." : "Create Account"}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </Button>
            <p className="text-sm tetext-slate-800/40 font-bold">
              Already a member?{" "}
              <Link to="/login" className="text-saffron hover:text-slate-800 transition-all">Sign in here</Link>
=======
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full gap-2" disabled={loading}>
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </Button>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
            </p>
          </CardFooter>
        </form>
      </Card>
<<<<<<< HEAD
    </PageTransition>
=======
    </div>
>>>>>>> fc503b4f63079e3e8d2fad1629e4041345ff030b
  );
};

export default SignupPage;
