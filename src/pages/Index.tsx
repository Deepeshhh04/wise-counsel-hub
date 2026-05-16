import { Link } from "react-router-dom";
import {
  Scale,
  MessageSquare,
  Users,
  Shield,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageSquare,
    title: "AI Legal Chat",
    description:
      "Get instant answers to your legal questions in multiple languages",
  },
  {
    icon: Users,
    title: "Lawyer Connect",
    description:
      "Find and connect with verified lawyers across India",
  },
  {
    icon: Shield,
    title: "Trusted Information",
    description:
      "AI-powered responses backed by Indian legal references",
  },
];

const Index = () => {
  return (
    <PageTransition className="min-h-[75vh] relative overflow-hidden">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 bg-[#F5F1E8] text-white sticky top-0 z-50 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-500 flex items-center justify-center shadow-lg">
            <Scale className="w-6 h-6 text-white" />
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight">
              NyayaSetu
            </h1>
            <p className="text-xs text-gray-300 tracking-widest uppercase">
              Bharat Legal AI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            asChild
          >
            <Link to="/login">Sign In</Link>
          </Button>

          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6"
            asChild
          >
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">

          <Badge className="mb-8 bg-white/10 text-orange-300 border border-orange-300/30 px-6 py-2 text-sm tracking-widest uppercase">
            🇮🇳 Bharat's AI Legal Assistant
          </Badge>
          <div className="absolute inset-0 -z-10">
            <img
              src="/hero-lawyer.jpg"
              alt="Legal Background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[#F5F1EA]/55"></div>
          </div>

          <motion.h1

            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-4xl md:text-6xl font-black tracking-tight leading-tight"
          >
            <span className="text-[#0B1C3F] drop-shadow-lg">
              Justice.
              <br />
              Simplified for India.
            </span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
          >
            AI-powered legal guidance, lawyer verification,
            multilingual assistance, and verified legal experts —
            all in one intelligent platform.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">

            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-7 text-lg rounded-2xl shadow-2xl"
              asChild
            >
              <Link to="/chat">
                Consult AI
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F5F1E8] px-10 py-7 text-lg rounded-2xl"
              asChild
            >
              <Link to="/lawyers">
                Find Verified Lawyers
              </Link>
            </Button>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {features.map((feature) => (
              <Card
                key={feature.title}
                className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-10">

                  <div className="w-16 h-16 rounded-2xl bg-[#F5F1E8] text-white flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-black text-[#F5F1E8] mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                </CardContent>
              </Card>
            ))}

          </div>
        </div>
      </section>

      {/* WHY NYAYASETU */}
      <section className="bg-[#F5F1E8] py-24 px-6 text-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <Badge className="bg-orange-500 text-white px-6 py-2 mb-6">
              Why Choose Us
            </Badge>

            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              India's Trusted
              <span className="text-orange-400"> Legal Ecosystem</span>
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                icon: ShieldCheck,
                title: "Verified Lawyers",
                desc: "Every lawyer is verified through Bar Council validation.",
              },
              {
                icon: Zap,
                title: "AI Powered",
                desc: "Fast intelligent legal assistance using advanced AI.",
              },
              {
                icon: Globe,
                title: "Indian Languages",
                desc: "Support for multiple Indian regional languages.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 transition-all"
              >

                <div className="w-16 h-16 rounded-2xl bg-orange-500 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-black mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-16 border-t">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-[#F5F1E8] flex items-center justify-center">
              <Scale className="text-white w-7 h-7" />
            </div>
          </div>

          <h3 className="text-3xl font-black text-[#F5F1E8]">
            NyayaSetu
          </h3>

          <p className="text-gray-500 mt-4 text-lg">
            Bridging citizens and justice using AI.
          </p>

          <div className="flex justify-center gap-8 mt-8 text-sm font-semibold text-gray-500">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>

        </div>
      </footer>
    </PageTransition >
  );
};

export default Index;

