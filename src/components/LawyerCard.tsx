import { Star, MapPin, Briefcase, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface LawyerCardProps {
  name: string;
  experience: string;
  specialization: string;
  rating: number;
  city: string;
  state: string;
}

const LawyerCard = ({ name, experience, specialization, rating, city, state }: LawyerCardProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-border/60">
    <CardContent className="p-5 space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{experience} experience</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-legal-gold">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Briefcase className="w-3.5 h-3.5" />
          <Badge variant="secondary" className="font-normal">{specialization}</Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-3.5 h-3.5" />
          <span>{city}, {state}</span>
        </div>
      </div>

      <Button className="w-full gap-2" size="sm">
        <Phone className="w-3.5 h-3.5" />
        Contact Lawyer
      </Button>
    </CardContent>
  </Card>
);

export default LawyerCard;
