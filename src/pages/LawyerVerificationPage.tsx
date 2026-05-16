import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileText, Upload, CheckCircle2, X, User, Briefcase, MapPin, ShieldCheck, ChevronRight, ChevronLeft, Camera } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { PageTransition } from "@/components/PageTransition";
import { motion, AnimatePresence } from "framer-motion";

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
const specializations = ["Criminal", "Civil", "Family", "Corporate", "Property", "Tax"];

const LawyerVerificationPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    barCouncilId: "",
    specialization: "",
    experience: "",
    state: "",
    city: "",
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size exceeds 5MB limit.");
        return;
      }
      setFile(selectedFile);
      toast.success(`Selected document: ${selectedFile.name}`);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setProfilePhoto(selectedFile);
      toast.success("Profile photo selected");
    }
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email)) {
      toast.error("Please fill in your personal details");
      return;
    }
    if (step === 2 && (!formData.barCouncilId || !formData.specialization)) {
      toast.error("Please fill in your professional details");
      return;
    }
    if (step === 3 && (!formData.state || !formData.city)) {
      toast.error("Please select your location");
      return;
    }
    setStep(s => s + 1);
  };

  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload your Bar Council ID document.");
      return;
    }

    setLoading(true);

    try {
      const storedUser = localStorage.getItem("nyaya_user");
      const user = storedUser ? JSON.parse(storedUser) : null;
      const userId = user?.id || "temp_" + Math.random().toString(36).substr(2, 9);

      // Mock upload process
      await new Promise(resolve => setTimeout(resolve, 2000));

      const res = await fetch("http://localhost:8080/api/lawyer-verification/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          documentUrl: "uploads/" + file.name, // Mock URL
          profilePhotoUrl: profilePhoto ? "uploads/" + profilePhoto.name : "",
          userId: userId.toString(),
        }),
      });

      if (!res.ok) throw new Error("Failed to submit verification");

      toast.success("Verification submitted successfully!");
      setStep(5); // Success step
    } catch (error) {
      toast.error("Error submitting verification. Backend might not be reachable.");
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    { id: 1, title: "Personal", icon: User },
    { id: 2, title: "Professional", icon: Briefcase },
    { id: 3, title: "Location", icon: MapPin },
    { id: 4, title: "Documents", icon: FileText },
  ];

  return (
    <PageTransition className="p-4 md:p-8 space-y-10 max-w-2xl mx-auto min-h-screen bg-navy relative overflow-hidden flex flex-col justify-center">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-saffron/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="space-y-3 text-center relative z-10">
        <h1 className="text-4xl font-display font-black text-white tracking-tight">Professional <span className="text-saffron">Verification</span></h1>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">Secure your verified status today</p>
      </div>

      {/* Progress Stepper */}
      <div className="flex justify-between items-center px-6 md:px-12 relative z-10">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#D8D0C4] -translate-y-1/2 z-0" />
        {steps.map((s) => (
          <div key={s.id} className="relative z-10 flex flex-col items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${step >= s.id
                ? "bg-[#E7E1D7] text-slate-700 border border-[#CFC5B4]"
                : "bg-[#F3EEE6] text-slate-400"
                }`}
            >
            </div>
            <span className={`text-[9px] font-black uppercase tracking-widest ${step >= s.id ? "text-saffron" : "text-slate-500"}`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 shadow-3xl relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/5 -mr-16 -mt-16 rounded-full blur-3xl" />
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
              <div className="flex flex-col items-center gap-4 mb-6">
                <div
                  onClick={() => photoInputRef.current?.click()}
                  className="w-24 h-24 rounded-full bg-muted border-2 border-dashed border-primary/20 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-all group overflow-hidden relative"
                >
                  {profilePhoto ? (
                    <img src={URL.createObjectURL(profilePhoto)} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <Camera className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-[10px] text-muted-foreground mt-1">Photo</span>
                    </>
                  )}
                </div>
                <input type="file" ref={photoInputRef} className="hidden" accept="image/*" onChange={handlePhotoChange} />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Full Name</Label>
                  <Input name="name" value={formData.name} onChange={handleChange} placeholder="Adv. Rajesh Kumar" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Email Address</Label>
                  <Input name="email" value={formData.email} onChange={handleChange} placeholder="rajesh@law.com" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5" />
                </div>
              </div>
              <Button onClick={nextStep} className="w-full h-14 rounded-2xl gap-3 bg-saffron text-navy font-black shadow-2xl shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-1 transition-all">Next Step <ChevronRight className="w-5 h-5" /></Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Bar Council ID</Label>
                  <Input name="barCouncilId" value={formData.barCouncilId} onChange={handleChange} placeholder="e.g. MAH/1234/2015" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5" />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Specialization</Label>
                  <Select value={formData.specialization} onValueChange={(v) => setFormData(p => ({ ...p, specialization: v }))}>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5"><SelectValue placeholder="Select Domain" /></SelectTrigger>
                    <SelectContent className="bg-navy border-white/10 text-white backdrop-blur-3xl">
                      {specializations.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Professional Experience (Years)</Label>
                  <Input name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 10" className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5" />
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl gap-2 border-white/10 text-white hover:bg-white/5 font-black"><ChevronLeft className="w-4 h-4" /> Back</Button>
                <Button onClick={nextStep} className="flex-1 h-14 rounded-2xl gap-3 bg-saffron text-navy font-black shadow-2xl shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-1 transition-all">Continue <ChevronRight className="w-5 h-5" /></Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">State of Practice</Label>
                  <Select value={formData.state} onValueChange={(v) => setFormData(p => ({ ...p, state: v, city: "" }))}>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5"><SelectValue placeholder="Select State" /></SelectTrigger>
                    <SelectContent className="bg-navy border-white/10 text-white backdrop-blur-3xl">
                      {states.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">City</Label>
                  <Select value={formData.city} onValueChange={(v) => setFormData(p => ({ ...p, city: v }))} disabled={!formData.state}>
                    <SelectTrigger className="h-14 bg-white/5 border-white/10 text-white rounded-2xl focus:border-saffron/50 transition-all px-5"><SelectValue placeholder="Select City" /></SelectTrigger>
                    <SelectContent className="bg-navy border-white/10 text-white backdrop-blur-3xl">
                      {(cities[formData.state] || []).map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl gap-2 border-white/10 text-white hover:bg-white/5 font-black"><ChevronLeft className="w-4 h-4" /> Back</Button>
                <Button onClick={nextStep} className="flex-1 h-14 rounded-2xl gap-3 bg-saffron text-navy font-black shadow-2xl shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-1 transition-all">Continue <ChevronRight className="w-5 h-5" /></Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
              <div className="space-y-4">
                <Label className="text-white/60 font-black text-[10px] uppercase tracking-widest ml-1">Verification Document (PDF/JPG)</Label>
                {!file ? (
                  <div onClick={() => fileInputRef.current?.click()} className="border-2 border-dashed border-white/10 rounded-[32px] p-16 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-saffron group-hover:scale-110 transition-transform">
                      <Upload className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <p className="text-white font-black text-lg">Upload Bar Council ID</p>
                      <p className="text-white/20 text-xs mt-1 uppercase tracking-widest">Max file size 5MB</p>
                    </div>
                    <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} />
                  </div>
                ) : (
                  <div className="flex items-center justify-between p-6 rounded-[24px] bg-white/5 border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-saffron text-navy flex items-center justify-center shadow-lg">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-white font-bold truncate max-w-[150px]">{file.name}</p>
                        <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Document Ready</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setFile(null)} className="h-10 w-10 text-destructive hover:bg-destructive/10 rounded-xl"><X className="w-5 h-5" /></Button>
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" onClick={prevStep} className="flex-1 h-14 rounded-2xl gap-2 border-white/10 text-white hover:bg-white/5 font-black"><ChevronLeft className="w-4 h-4" /> Back</Button>
                <Button onClick={handleSubmit} disabled={loading} className="flex-1 h-14 rounded-2xl gap-3 bg-saffron text-navy font-black shadow-2xl shadow-saffron/20 hover:shadow-saffron/40 hover:-translate-y-1 transition-all">
                  {loading ? "Decrypting..." : "Finalize & Submit"} <ShieldCheck className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-4 py-8">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold">Application Received!</h2>
              <p className="text-muted-foreground">Your verification request has been submitted. We'll notify you via email once approved.</p>
              <Button asChild className="h-12 rounded-xl px-8"><a href="/dashboard">Go to Dashboard</a></Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default LawyerVerificationPage;
