import { NAV_LINKS, LOCATIONS, EMAIL, FACEBOOK_LINK } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl font-bold">Le Chalet</p>
            <p className="mt-3 text-sm italic text-accent">
              O melhor encontra-se aqui
            </p>
            <p className="mt-4 text-sm text-background/70">
              Queijaria Serra N&apos;Tandavala · Produção artesanal a 1.985 m de
              altitude · Restaurante, café e lojas em Angola desde 2010.
            </p>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-accent hover:underline"
            >
              facebook.com/lechaletlubango
            </a>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold">Links Rápidos</h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif text-lg font-semibold">Contactos</h4>
            <p className="mt-2 text-sm text-background/60">{EMAIL}</p>
            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              {LOCATIONS.map((loc) => (
                <div key={loc.name}>
                  <p className="font-medium text-accent">{loc.name}</p>
                  <p className="mt-1 text-sm text-background/70">{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Le Chalet · Queijaria Serra N&apos;Tandavala. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
