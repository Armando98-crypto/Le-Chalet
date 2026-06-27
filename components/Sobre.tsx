"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Award, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/constants";

const badges = [
  {
    icon: Leaf,
    title: "Produção Própria",
    description: "Queijaria Serra N'Tandavala a 1.985 m de altitude",
  },
  {
    icon: Award,
    title: "Sabores Suíços",
    description: "Raclette, Gouda, Tilsit e queijo do Mestre artesanais",
  },
  {
    icon: Heart,
    title: "Desde 2010",
    description: "Chalet alpin com lareira e vista para a serra",
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          slogan="O melhor encontra-se aqui"
          title="Sobre Nós"
          subtitle="Da Queijaria Serra N'Tandavala à mesa — com alma suíça e coração angolano"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed text-primary/80">
              Fundado por empreendedores suíços, o Le Chalet abriu em Lubango em
              2010 na rota da Tundavala — um refúgio alpin onde se produz
              queijo raclette, Gouda, iogurtes, natas, manteiga, leite fresco
              pasteurizado e enchidos curados directamente na Fazenda Serra
              N&apos;Tandavala.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-primary/80">
              O restaurante, no piso inferior da esplanada com enormes janelas
              de vidro e vista para a paisagem verdejante, serve tábuas de
              queijos e enchidos, raclette, borrego grelhado, bifes e petiscos
              confeccionados com produtos nacionais de excelência. A marca é
              hoje referência em Angola, com lojas em Lubango, Viana, Luanda,
              Namibe e Lobito.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 sm:mx-0">
                    <badge.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary">
                    {badge.title}
                  </h3>
                  <p className="mt-1 text-sm text-primary/70">{badge.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
          >
            {/* Foto real: tábua de queijos e enchidos Le Chalet (fonte LNL) */}
            <Image
              src={IMAGES.sobre}
              alt="Tábua de queijos e enchidos artesanais Le Chalet"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
