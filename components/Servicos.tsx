"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, ShoppingBag, Sparkles } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Restaurante & Café (Lubango)",
    description:
      "Estrada da Tundavala — raclette, fondue, borrego grelhado, bifes e petiscos com vista panorâmica. Menu do dia exposto na entrada e no parque de estacionamento.",
  },
  {
    icon: ShoppingBag,
    title: "Lojas de Produtos",
    description:
      "Raclette, Gouda, baby Gouda, queijo do Mestre, Tilsit, queijo de cabra, iogurtes, natas, manteiga, leite fresco, chouriço, enchidos, mel, ovos e produtos bio.",
  },
  {
    icon: Sparkles,
    title: "Experiências",
    description:
      "Tábuas de queijos e enchidos com vinho português na esplanada, noites de raclette, visitas à fromageria (mediante informação no local) e encomendas online.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="section-padding bg-white/40">
      <div className="section-container">
        <SectionHeading
          title="O Que Oferecemos"
          subtitle="Cinco pontos de venda em Angola — do Lubango às Torres Dipanda em Luanda"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/20">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mt-3 leading-relaxed text-primary/70">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
