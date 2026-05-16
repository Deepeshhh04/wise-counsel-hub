import { useState, useEffect } from "react";
import { Search, MapPin, Filter, Star, ShieldCheck, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LawyerCard from "@/components/LawyerCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { useQuery } from "@tanstack/react-query";

const states = ["Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "Punjab", "Gujarat", "West Bengal"];
const cities: Record<string, string[]> = {
  Delhi: ["New Delhi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore"],
  "Tamil Nadu": ["Chennai", "Coimbatore"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar"],
  Gujarat: ["Ahmedabad", "Surat"],
  "West Bengal": ["Kolkata"],
};
const caseTypes = ["Criminal", "Civil", "Family", "Corporate", "Property", "Tax"];

const LawyerConnectPage = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCase, setSelectedCase] = useState<string>("");
  const [search, setSearch] = useState("");

  const mockLawyers = [
    {
      id: 1,
      name: "Adv. Priya Sharma",
      experience: "12 years",
      specialization: "Criminal",
      rating: 4.8,
      city: "Delhi",
      state: "Delhi",
      image: "",
    },

    {
      id: 2,
      name: "Adv. Rajesh Kumar",
      experience: "8 years",
      specialization: "Family",
      rating: 4.5,
      city: "Mumbai",
      state: "Maharashtra",
      image: "",
    },

    {
      id: 3,
      name: "Adv. Ananya Reddy",
      experience: "15 years",
      specialization: "Corporate",
      rating: 4.9,
      city: "Bangalore",
      state: "Karnataka",
      image: "",
    },

    {
      id: 4,
      name: "Adv. Vikram Sinha",
      experience: "10 years",
      specialization: "Cyber",
      rating: 4.7,
      city: "Pune",
      state: "Maharashtra",
      image: "",
    },

    {
      id: 5,
      name: "Adv. Sneha Kapoor",
      experience: "7 years",
      specialization: "Property",
      rating: 4.6,
      city: "Chandigarh",
      state: "Punjab",
      image: "",
    },

    {
      id: 6,
      name: "Adv. Arjun Mehta",
      experience: "9 years",
      specialization: "Tax",
      rating: 4.8,
      city: "Ahmedabad",
      state: "Gujarat",
      image: "",
    }
  ];

  const { data: fetchedLawyers, isLoading } = useQuery({
    queryKey: ['approvedLawyers'],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/api/lawyer-verification/approved");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      return data;
    },
    initialData: mockLawyers,
  });

  const lawyers = mockLawyers;
  const filteredLawyers = lawyers.filter((l: any) => {
    if (selectedState && l.state && l.state !== selectedState) return false;

    if (selectedCity && l.city && l.city !== selectedCity) return false;

    if (
      selectedCase &&
      l.specialization &&
      l.specialization !== selectedCase
    )
      return false;

    if (
      search &&
      l.name &&
      !l.name.toLowerCase().includes(search.toLowerCase())
    )
      return false;

    return true;
  });

  return (
    <PageTransition className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto min-h-[calc(100vh-4rem)] relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <ShieldCheck className="w-40 h-40 text-white" />
        </div>
        <div className="relative z-10 space-y-4 max-w-2xl">
          <Badge className="bg-saffron text-white border-none px-3 py-1 mb-2">Connect with Experts</Badge>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">
            Find the Right <span className="text-saffron">Legal Counsel</span>
          </h1>
          <p className="text-[#0B1C3F] text-base md:text-lg">Access India's premier network of verified legal professionals, specialized in various domains.</p>
        </div>
      </div>

      {/* Filters Bar */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex flex-col lg:flex-row gap-4 p-4 rounded-2xl bg-card/60 backdrop-blur-md border border-border/40 shadow-lg sticky top-4 z-20"
      >
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input placeholder="Search by name, expertise..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="pl-10 h-12 rounded-xl bg-white text-[#0B1C3F] border border-[#D6D3D1]" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Select value={selectedState} onValueChange={(v) => { setSelectedState(v); setSelectedCity(""); }}>
            <SelectTrigger className="w-[140px] h-12 rounded-xl bg-white border border-[#D6D3D1] text-[#0B1C3F]"><SelectValue placeholder="State" /></SelectTrigger>
            <SelectContent>{states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
            <SelectTrigger className="w-[140px] h-12 rounded-xl bg-white border border-[#D6D3D1] text-[#0B1C3F]"><SelectValue placeholder="City" /></SelectTrigger>
            <SelectContent>{(cities[selectedState] || []).map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
          </Select>
          <Select value={selectedCase} onValueChange={setSelectedCase}>
            <SelectTrigger className="w-[140px] h-12 rounded-xl bg-white border border-[#D6D3D1] text-[#0B1C3F]"><SelectValue placeholder="Expertise" /></SelectTrigger>
          </Select>
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl hover:bg-primary/5" onClick={() => { setSearch(""); setSelectedState(""); setSelectedCity(""); setSelectedCase(""); }}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredLawyers.map((lawyer: any, index: number) => (
            <motion.div
              key={lawyer.id || lawyer.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: index * 0.05 }}
            >
              <LawyerCard {...lawyer} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredLawyers.length === 0 && !isLoading && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="empty-state-container py-20">
          <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center mb-6">
            <Search className="w-10 h-10 text-primary/30" />
          </div>
          <h2 className="text-2xl font-bold">No Experts Found</h2>
          <p className="text-muted-foreground max-w-md mx-auto">We couldn't find any lawyers matching your filters. Try adjusting your search criteria.</p>
          <Button variant="outline" className="mt-6 rounded-xl px-8" onClick={() => { setSearch(""); setSelectedState(""); setSelectedCity(""); setSelectedCase(""); }}>Reset Filters</Button>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default LawyerConnectPage;
