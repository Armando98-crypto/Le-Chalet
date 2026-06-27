"use client";

"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Lightbox from "@/components/Lightbox";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = GALLERY_IMAGES.map((img) => ({ src: img.src, alt: img.alt }));

  const open = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);
  const navigate = useCallback(
    (index: number) => setLightboxIndex(index),
    [],
  );

  return (
    <section id="galeria" className="section-padding bg-white/40">
      <div className="section-container">
        <SectionHeading
          title="Galeria de Fotos"
          subtitle="Imagens reais do Le Chalet em Lubango — fonte: review LNL"
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => open(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl text-left ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.button>
          ))}
        </div>

        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={close}
            onNavigate={navigate}
          />
        )}
      </div>
    </section>
  );
}
