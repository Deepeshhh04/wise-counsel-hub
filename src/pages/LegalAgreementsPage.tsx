import { FileText, Download, Eye, ArrowRight, ShieldCheck, Briefcase, Home, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const agreements = [
  {
    id: 1,
    title: "Residential Rental Agreement",
    description: "Standard agreement for renting a residential property between a landlord and tenant.",
    category: "Property",
    icon: Home,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    id: 2,
    title: "Employment Contract",
    description: "Agreement outlining terms and conditions between an employer and an employee.",
    category: "Corporate",
    icon: Briefcase,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    id: 3,
    title: "Non-Disclosure Agreement (NDA)",
    description: "Legal contract to protect confidential information shared between parties.",
    category: "Corporate",
    icon: ShieldCheck,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    id: 4,
    title: "Service Level Agreement (SLA)",
    description: "Agreement defining the level of service expected from a service provider.",
    category: "Service",
    icon: Users,
    color: "bg-green-500/10 text-green-600",
  },
];

const LegalAgreementsPage = () => {
  return (
    <PageTransition className="p-4 md:p-6 space-y-8 max-w-6xl mx-auto min-h-[calc(100vh-4rem)]">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-card to-accent/10 p-8 border border-primary/20 shadow-sm">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2 relative z-10">
          Legal <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Agreements</span>
        </h1>
        <p className="text-muted-foreground relative z-10 text-lg">Browse and download legally valid agreement templates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {agreements.map((agreement, index) => (
          <motion.div
            key={agreement.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/40 bg-card/60 backdrop-blur overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-xl ${agreement.color} mb-2`}>
                    <agreement.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="font-medium">{agreement.category}</Badge>
                </div>
                <CardTitle className="text-xl font-display mt-2 group-hover:text-primary transition-colors">
                  {agreement.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed mt-1">
                  {agreement.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> PDF / DOCX</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Legally Verified</span>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-0">
                <Button variant="outline" size="sm" className="flex-1 gap-2 border-primary/20 hover:bg-primary/5">
                  <Eye className="w-4 h-4" /> Preview
                </Button>
                <Button size="sm" className="flex-1 gap-2 shadow-md hover:shadow-primary/20">
                  <Download className="w-4 h-4" /> Download
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-muted/30 rounded-2xl p-8 text-center border border-dashed border-border/60">
        <h3 className="text-lg font-semibold text-foreground">Need a Custom Agreement?</h3>
        <p className="text-muted-foreground text-sm mt-1 max-w-md mx-auto">Our verified lawyers can help you draft a personalized legal agreement tailored to your specific needs.</p>
        <Button variant="link" className="mt-4 gap-1 text-primary font-semibold" asChild>
          <a href="/lawyers">Connect with a Lawyer <ArrowRight className="w-4 h-4" /></a>
        </Button>
      </div>
    </PageTransition>
  );
};

export default LegalAgreementsPage;
