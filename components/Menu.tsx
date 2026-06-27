"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { formatPrice } from "@/lib/utils";
import { MENU_DATA, type MenuCategory } from "@/lib/constants";

const tabs: { id: MenuCategory; label: string }[] = [
  { id: "tabuas", label: "Tábuas" },
  { id: "pratos", label: "Pratos Signature" },
  { id: "bebidas", label: "Bebidas & Sobremesas" },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>("tabuas");

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          title="Menu em Destaque"
          subtitle="Preços de referência do restaurante em Lubango — consulte o menu do dia na entrada"
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 sm:px-6 sm:text-base ${
                activeTab === tab.id
                  ? "bg-primary text-background shadow-md"
                  : "bg-white/60 text-primary hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <h3 className="mb-6 text-center font-serif text-2xl font-semibold text-secondary">
              {MENU_DATA[activeTab].label}
            </h3>
            <ul className="space-y-6">
              {MENU_DATA[activeTab].items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 border-b border-primary/10 pb-6 last:border-0 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-primary">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm text-primary/70">{item.description}</p>
                  </div>
                  <span className="mt-2 shrink-0 font-medium text-earth sm:mt-0 sm:pl-4">
                    {/* Preços baseados em review LNL (2025) e Petit Futé */}
                    {formatPrice(item.price)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-sm italic text-primary/60">
          Cardápio sujeito a alterações sazonais · Menu do dia disponível no local
        </p>
      </div>
    </section>
  );
}
