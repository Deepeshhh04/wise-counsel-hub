import {
  Star,
  MapPin,
  Briefcase,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

interface LawyerCardProps {
  name: string;
  experience: string;
  specialization: string;
  rating: number;
  city: string;
  state: string;
  verified?: boolean;
  profilePhotoUrl?: string;
}

const LawyerCard = ({
  name,
  experience,
  specialization,
  rating,
  city,
  state,
  verified,
  profilePhotoUrl,
}: LawyerCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{
      type: "spring",
      stiffness: 300,
      damping: 20,
    }}
  >
    <Card className="group transition-all duration-300 border-border/60 bg-card/40 backdrop-blur-md overflow-hidden relative shadow-premium hover:shadow-2xl hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-6 space-y-6 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary font-bold text-xl shadow-inner border border-primary/10 overflow-hidden"
            >
              {profilePhotoUrl ? (
                <img
                  src={profilePhotoUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                name
                  .replace(/^Adv\.\s+/i, "")
                  .charAt(0)
              )}
            </motion.div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {name}
                </h3>

                {verified && (
                  <div className="relative group/badge">
                    <ShieldCheck className="w-5 h-5 text-secondary animate-pulse-slow" />

                    <div className="absolute inset-0 bg-secondary blur-lg opacity-20 animate-pulse" />

                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-secondary text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover/badge:opacity-100 transition-opacity pointer-events-none uppercase tracking-tighter">
                      Verified
                    </div>
                  </div>
                )}
              </div>

              <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider opacity-70">
                {experience} Experience
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-legal-gold/10 px-3 py-1.5 rounded-xl text-legal-gold border border-legal-gold/20 shadow-sm">
            <Star className="w-3.5 h-3.5 fill-current" />

            <span className="text-sm font-black tracking-tighter">
              {rating}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 py-1">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
            <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary/60" />
            </div>

            <span className="font-medium text-xs truncate">
              {specialization}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-sm text-muted-foreground/80">
            <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary/60" />
            </div>

            <span className="font-medium text-xs truncate">
              {city}, {state}
            </span>
          </div>
        </div>

        <Button className="w-full h-11 rounded-xl gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-100 transition-all font-bold text-sm elegant-button">
          <Phone className="w-3.5 h-3.5" />
          Connect Now
        </Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default LawyerCard;