"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { LOCATIONS } from "@/lib/constants";

export default function Locais() {
  return (
    <section id="locais" className="section-padding bg-white/40">
      <div className="section-container">
        <SectionHeading
          title="Os Nossos Locais"
          subtitle="Lubango, Viana e Luanda — além de Namibe e Lobito"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex h-full flex-col">
                <span className="inline-block w-fit rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                  {location.type}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-semibold text-primary">
                  {location.name}
                </h3>

                <div className="mt-4 flex items-start gap-2 text-primary/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm">{location.address}</p>
                    {"note" in location && location.note && (
                      <p className="mt-1 text-xs italic text-primary/50">
                        {location.note}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2 text-primary/70">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm">{location.hours}</p>
                </div>

                <div className="mt-3 flex items-start gap-2 text-primary/70">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <p className="text-sm">{location.phone}</p>
                </div>

                <div className="mt-auto pt-6">
                  <Button
                    href={location.mapUrl}
                    variant="outline"
                    size="sm"
                    external
                    className="w-full border-primary/30 text-primary hover:bg-primary/5"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver no mapa
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
