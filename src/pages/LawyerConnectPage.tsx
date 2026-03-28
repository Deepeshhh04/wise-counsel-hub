import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import LawyerCard from "@/components/LawyerCard";

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

const mockLawyers = [
  { name: "Adv. Priya Sharma", experience: "12 years", specialization: "Criminal", rating: 4.8, city: "New Delhi", state: "Delhi" },
  { name: "Adv. Rajesh Kumar", experience: "8 years", specialization: "Family", rating: 4.5, city: "Mumbai", state: "Maharashtra" },
  { name: "Adv. Ananya Reddy", experience: "15 years", specialization: "Corporate", rating: 4.9, city: "Bangalore", state: "Karnataka" },
  { name: "Adv. Sukhwinder Singh", experience: "10 years", specialization: "Civil", rating: 4.6, city: "Chandigarh", state: "Punjab" },
  { name: "Adv. Meera Iyer", experience: "6 years", specialization: "Property", rating: 4.3, city: "Chennai", state: "Tamil Nadu" },
  { name: "Adv. Vikram Patel", experience: "20 years", specialization: "Tax", rating: 4.7, city: "Ahmedabad", state: "Gujarat" },
];

const LawyerConnectPage = () => {
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedCase, setSelectedCase] = useState<string>("");
  const [search, setSearch] = useState("");

  const filteredLawyers = mockLawyers.filter((l) => {
    if (selectedState && l.state !== selectedState) return false;
    if (selectedCity && l.city !== selectedCity) return false;
    if (selectedCase && l.specialization !== selectedCase) return false;
    if (search && !l.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-4 md:p-6 space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-2xl font-display font-bold text-foreground">Find a Lawyer</h1>
        <p className="text-sm text-muted-foreground mt-1">Connect with verified legal professionals across India</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Search by name..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 bg-card" />
        </div>
        <Select value={selectedState} onValueChange={(v) => { setSelectedState(v); setSelectedCity(""); }}>
          <SelectTrigger className="w-full sm:w-[160px] bg-card"><SelectValue placeholder="State" /></SelectTrigger>
          <SelectContent>{states.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={selectedCity} onValueChange={setSelectedCity} disabled={!selectedState}>
          <SelectTrigger className="w-full sm:w-[160px] bg-card"><SelectValue placeholder="City" /></SelectTrigger>
          <SelectContent>{(cities[selectedState] || []).map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
        </Select>
        <Select value={selectedCase} onValueChange={setSelectedCase}>
          <SelectTrigger className="w-full sm:w-[160px] bg-card"><SelectValue placeholder="Case type" /></SelectTrigger>
          <SelectContent>{caseTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
        </Select>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.name} {...lawyer} />
        ))}
      </div>

      {filteredLawyers.length === 0 && (
        <div className="text-center py-16 text-muted-foreground">
          <p className="text-lg font-medium">No lawyers found</p>
          <p className="text-sm mt-1">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
};

export default LawyerConnectPage;
