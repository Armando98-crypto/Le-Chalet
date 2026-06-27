"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, IMAGES } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-[5%]">
      <nav
        className={`flex w-full max-w-[90vw] items-center justify-between rounded-nav px-4 py-3 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled
            ? "border border-primary/10 bg-background/95 shadow-lg backdrop-blur-md"
            : "border border-white/20 bg-primary/80 shadow-md backdrop-blur-md"
        }`}
      >
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src={IMAGES.logo}
            alt="Le Chalet Lubango"
            width={40}
            height={40}
            className="rounded-full border border-white/30 object-cover"
          />
          <span
            className={`font-serif text-xl font-bold tracking-wide sm:text-2xl ${
              scrolled ? "text-primary" : "text-background"
            }`}
          >
            Le Chalet
          </span>
        </a>

        <ul className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-primary/80" : "text-background/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href="#contacto"
            variant={scrolled ? "primary" : "accent"}
            size="sm"
          >
            Reservar
          </Button>
        </div>

        <button
          type="button"
          className={`lg:hidden ${scrolled ? "text-primary" : "text-background"}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-[5%] right-[5%] top-[calc(100%+0.5rem)] rounded-nav border border-primary/10 bg-background/98 p-6 shadow-xl backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-lg font-medium text-primary hover:text-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  href="#contacto"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Fazer Reserva
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
