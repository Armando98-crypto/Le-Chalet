"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { IMAGES, ONLINE_STORE_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center">
      <div className="absolute inset-0">
        {/* Foto real: restaurante Le Chalet, Estrada da Tundavala (fonte LNL, 2025) */}
        <Image
          src={IMAGES.hero}
          alt="Restaurante Le Chalet com vista para a paisagem verdejante da Serra N'Tandavala"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="section-container relative z-10 mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="mb-4 font-serif text-xl italic text-accent sm:text-2xl">
            O melhor encontra-se aqui
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl">
            Le Chalet — O Sabor Autêntico de Angola
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/90 sm:text-xl">
            Queijos raclette e Gouda da Queijaria Serra N&apos;Tandavala, enchidos
            artesanais e gastronomia suíço-angolana na Estrada da Tundavala,
            Lubango
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button href="#contacto" variant="accent" size="lg">
              Fazer Reserva
            </Button>
            <Button href="#menu" variant="outline" size="lg">
              Ver Menu
            </Button>
            <Button href={ONLINE_STORE_LINK} variant="secondary" size="lg" external>
              Comprar Online
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
