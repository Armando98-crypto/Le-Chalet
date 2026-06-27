"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Facebook, Instagram, Send, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  WHATSAPP_LINK,
  SOCIAL_LINKS,
  EMAIL,
  ONLINE_STORE_LINK,
  FORM_ENDPOINT,
} from "@/lib/constants";

interface FormData {
  nome: string;
  contacto: string;
  mensagem: string;
}

const initialForm: FormData = { nome: "", contacto: "", mensagem: "" };

type FormStatus =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success" }
  | { type: "error"; message: string };

function validate(data: FormData): string | null {
  if (!data.nome.trim()) return "O nome é obrigatório.";
  if (!data.contacto.trim()) return "O contacto é obrigatório.";
  if (!data.mensagem.trim()) return "A mensagem é obrigatória.";
  if (data.mensagem.trim().length < 10)
    return "A mensagem deve ter pelo menos 10 caracteres.";
  return null;
}

export default function Contacto() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validate(form);
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus({ type: "error", message: data.error ?? "Erro ao enviar." });
        return;
      }

      setStatus({ type: "success" });
      setForm(initialForm);
    } catch {
      setStatus({
        type: "error",
        message: "Serviço indisponível — contacte-nos via WhatsApp (+244 923 897 770) ou visite a loja online.",
      });
    }
  };

  return (
    <section id="contacto" className="section-padding bg-secondary">
      <div className="section-container">
        <SectionHeading
          light
          slogan="O melhor encontra-se aqui"
          title="Visite-nos ou Encomende Agora"
          subtitle="Restaurante na Tundavala ou encomendas online para Luanda e arredores"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl bg-background/95 p-6 shadow-xl sm:p-8"
          >
            <h3 className="font-serif text-2xl font-semibold text-primary">
              Envie-nos uma mensagem
            </h3>
            <p className="mt-2 text-sm text-primary/70">
              Reservas e encomendas — ou contacte directamente via WhatsApp (
              +244 923 897 770).
            </p>

            {status.type === "success" ? (
              <div className="mt-8 rounded-lg bg-secondary/10 p-6 text-center">
                <p className="font-medium text-secondary">
                  Obrigado! A sua mensagem foi recebida.
                </p>
                <p className="mt-2 text-sm text-primary/70">
                  Para resposta imediata, contacte-nos via WhatsApp ou visite a
                  loja online.
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {status.type === "error" && (
                  <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
                    {status.message}
                  </div>
                )}
                <div>
                  <label htmlFor="nome" className="mb-1 block text-sm font-medium text-primary">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="contacto" className="mb-1 block text-sm font-medium text-primary">
                    Contacto
                  </label>
                  <input
                    type="text"
                    id="contacto"
                    name="contacto"
                    value={form.contacto}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent"
                    placeholder="Telefone ou e-mail"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="mb-1 block text-sm font-medium text-primary">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-primary/20 bg-white px-4 py-3 text-primary outline-none transition-colors focus:border-accent"
                    placeholder="Reserva para o restaurante, encomenda de queijos..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={status.type === "loading"}
                >
                  {status.type === "loading" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {status.type === "loading" ? "A enviar..." : "Enviar Mensagem"}
                </Button>
              </div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center gap-6"
          >
            <div className="rounded-2xl border border-background/20 bg-background/10 p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-semibold text-background">
                Prefere falar connosco?
              </h3>
              <p className="mt-3 text-background/80">
                WhatsApp Lubango: +244 923 897 770 · E-mail: {EMAIL}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={WHATSAPP_LINK}
                  variant="accent"
                  size="lg"
                  external
                  className="w-full sm:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Lubango
                </Button>
                <Button
                  href={ONLINE_STORE_LINK}
                  variant="outline"
                  size="lg"
                  external
                  className="w-full border-background/40 sm:w-auto"
                >
                  Loja Online
                </Button>
              </div>

              <div className="mt-8 border-t border-background/20 pt-6">
                <p className="mb-4 text-sm font-medium text-background/90">
                  Siga-nos — @lechaletlubango
                </p>
                <div className="flex gap-4">
                  <a
                    href={SOCIAL_LINKS[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-accent hover:text-primary"
                    aria-label="Facebook Le Chalet Lubango"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS[1].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-background/10 text-background transition-colors hover:bg-accent hover:text-primary"
                    aria-label="Instagram Le Chalet Lubango"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
