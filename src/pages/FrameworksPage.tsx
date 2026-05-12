import { useNavigate, useParams } from "react-router-dom";
import {
  Briefcase,
  ShieldCheck,
  Home,
  Pencil,
  Handshake,
  Users2,
  ArrowLeft,
  FileText,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const agreements = [
  {
    slug: "employment-agreement",
    title: "Employment Agreement",
    description: "Define terms between employer and employee, including role, compensation, and confidentiality.",
    icon: Briefcase,
  },
  {
    slug: "non-disclosure-agreement",
    title: "Non-Disclosure Agreement (NDA)",
    description: "Protect confidential information shared between parties during business discussions.",
    icon: ShieldCheck,
  },
  {
    slug: "rental-agreement",
    title: "Rental Agreement",
    description: "Standard lease contract between landlord and tenant covering rent, duration, and terms.",
    icon: Home,
  },
  {
    slug: "freelance-contract",
    title: "Freelance Contract",
    description: "Set scope, deliverables, and payment terms between a freelancer and a client.",
    icon: Pencil,
  },
  {
    slug: "service-agreement",
    title: "Service Agreement",
    description: "Outline services provided, timelines, and obligations between provider and client.",
    icon: Handshake,
  },
  {
    slug: "partnership-agreement",
    title: "Partnership Agreement",
    description: "Establish roles, profit sharing, and responsibilities between business partners.",
    icon: Users2,
  },
];

export const FrameworksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-display font-bold text-foreground">
          Legal Agreement Frameworks
        </h1>
        <p className="text-muted-foreground mt-2">
          Access commonly used legal agreements and templates.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {agreements.map((a) => (
          <Card
            key={a.slug}
            className="group border-border/60 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <CardContent className="p-6 flex flex-col h-full space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <a.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1.5">
                <h3 className="font-semibold text-foreground text-lg leading-snug">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {a.description}
                </p>
              </div>
              <Button
                className="w-full mt-2"
                onClick={() => navigate(`/frameworks/${a.slug}`)}
              >
                Open Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const FrameworkDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const agreement = agreements.find((a) => a.slug === slug);

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">
      <Button variant="ghost" onClick={() => navigate("/frameworks")} className="gap-2">
        <ArrowLeft className="w-4 h-4" /> Back to Frameworks
      </Button>

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              {agreement ? <agreement.icon className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <h1 className="text-2xl font-display font-bold text-foreground">
              {agreement?.title ?? "Template"}
            </h1>
          </div>
          <p className="text-muted-foreground">
            {agreement?.description ?? "Template details coming soon."}
          </p>
          <div className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground bg-muted/30">
            Template preview and download will be available here. Connect your backend to load the full document.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrameworksPage;
