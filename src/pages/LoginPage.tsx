import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Scale, Mail, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PageTransition } from "@/components/PageTransition";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error("Invalid email or password");
      }

      const userData = await res.json();
      localStorage.setItem("nyaya_user", JSON.stringify(userData));
      
      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error: any) {
      toast({ title: "Login Failed", description: error.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition className="min-h-screen flex items-center justify-center bg-navy px-4 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-saffron/5 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

      <Card className="w-full max-w-md shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-white/10 bg-navy/80 backdrop-blur-2xl relative z-10 rounded-[40px] overflow-hidden">
        <CardHeader className="text-center space-y-4 p-10 pb-4">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-saffron to-navy flex items-center justify-center shadow-2xl shadow-primary/20 border border-white/10">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-black text-white tracking-tight">Welcome Back</h1>
            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mt-2">NyayaSetu Secure Login</p>
          </div>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-6 px-10">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Identity</Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-saffron transition-colors" />
                <Input id="email" type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-saffron/40 focus:ring-0 rounded-2xl transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Secret Key</Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-saffron transition-colors" />
                <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="h-14 pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-saffron/40 focus:ring-0 rounded-2xl transition-all" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-6 p-10 pt-8">
            <Button type="submit" className="w-full h-14 gap-3 shadow-2xl shadow-saffron/10 hover:shadow-saffron/30 hover:-translate-y-1 transition-all rounded-2xl font-black bg-white text-navy hover:bg-saffron hover:text-navy" disabled={loading}>
              {loading ? "Decrypting..." : "Access Dashboard"}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </Button>
            <p className="text-sm text-white/40 font-bold">
              New here?{" "}
              <Link to="/signup" className="text-saffron hover:text-white transition-all">Create Identity</Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </PageTransition>
  );
};

export default LoginPage;
