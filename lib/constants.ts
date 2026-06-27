/**
 * Dados reais do Le Chalet compilados a partir de:
 * - Facebook: https://www.facebook.com/lechaletlubango
 * - Review LNL: https://guialnl.com/2025/01/14/le-chalet-lubango-o-restaurante/
 * - Vivre en Angola / Petit Futé / Guia LNL Lubango
 *
 * Fotos via guialnl.com (autoria LNL — substituir pelas oficiais do Facebook quando disponíveis)
 */

export const WHATSAPP_NUMBER = "244923897770";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ONLINE_STORE_LINK = "https://www.lechalet.store/";
export const FACEBOOK_LINK = "https://www.facebook.com/lechaletlubango";
export const INSTAGRAM_LINK = "https://www.instagram.com/lechaletlubango";
export const EMAIL = "queijo@serra-ntandavala-ao.com";

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Menu", href: "#menu" },
  { label: "Locais", href: "#locais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", href: FACEBOOK_LINK },
  { label: "Instagram", href: INSTAGRAM_LINK },
] as const;

/** Fotos reais em public/images/ — origem: Facebook + review LNL (2025) */
export const IMAGES = {
  hero: "/images/hero.jpg",
  sobre: "/images/sobre.jpg",
  og: "/images/hero.jpg",
  logo: "/images/logo.jpg",
} as const;

export const GALLERY_IMAGES = [
  {
    src: "/images/sobre.jpg",
    alt: "Tábua de queijos e enchidos Le Chalet",
    span: "row-span-2",
  },
  {
    src: "/images/hero.jpg",
    alt: "Restaurante Le Chalet com vista para a serra",
    span: "",
  },
  {
    src: "/images/galeria-2.jpg",
    alt: "Prato signature no Le Chalet Lubango",
    span: "",
  },
  {
    src: "/images/galeria-3.jpg",
    alt: "Ambiente interior do restaurante",
    span: "",
  },
  {
    src: "/images/galeria-1.jpg",
    alt: "Esplanada Le Chalet rodeada de verde",
    span: "row-span-2",
  },
  {
    src: "/images/galeria-4.jpg",
    alt: "Detalhe gastronómico Le Chalet",
    span: "",
  },
  {
    src: "/images/galeria-5.jpg",
    alt: "Produtos artesanais da queijaria",
    span: "",
  },
  {
    src: "/images/galeria-6.jpg",
    alt: "Café Le Chalet na Estrada da Tundavala",
    span: "",
  },
  {
    src: "/images/galeria-7.jpg",
    alt: "Experiência gastronómica com vista",
    span: "",
  },
  {
    src: "/images/galeria-8.jpg",
    alt: "Queijos e produtos da Serra N'Tandavala",
    span: "",
  },
] as const;

export const LOCATIONS = [
  {
    name: "Lubango",
    type: "Restaurante + Loja + Café",
    address: "Bairro da Mapunda, Estrada da Tundavala, Lubango, Huíla",
    note: "Na rota para a Tundavala, após o Pululukwa Resort",
    hours: "Ter–Dom: 09h00 – 22h00 (fechado à segunda-feira)",
    phone: "+244 923 897 770",
    email: EMAIL,
    mapUrl:
      "https://maps.google.com/?q=Le+Chalet+Estrada+da+Tundavala+Lubango+Angola",
  },
  {
    name: "Viana",
    type: "Loja + Café",
    address:
      "Estrada direito de Calumbo, perto da vila e do Hospital Ana Paula, em frente à Jembas Assistência Técnica",
    note: "Aberto desde novembro de 2018",
    hours: "Ter–Dom (fechado à segunda-feira, dia inteiro)",
    phone: "+244 930 282 736",
    email: EMAIL,
    mapUrl:
      "https://maps.google.com/?q=Le+Chalet+Viana+Calumbo+Luanda+Angola",
  },
  {
    name: "Luanda — Torres Dipanda",
    type: "Loja",
    address:
      "Av. Ho Chi Minh, Edifício Torres Dipanda, Largo da Independência / Primeiro de Maio, bairro Villa Alice",
    note: "Entrada no ângulo traseiro do edifício — não visível da rua principal",
    hours: "Seg–Sex: 08h00 – 19h00 · Sáb: 08h00 – 16h00",
    phone: "+244 931 915 544 / +244 944 171 752",
    email: EMAIL,
    mapUrl:
      "https://maps.google.com/?q=Torres+Dipanda+Le+Chalet+Luanda+Angola",
  },
] as const;

export type MenuCategory = "tabuas" | "pratos" | "bebidas";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export const MENU_DATA: Record<
  MenuCategory,
  { label: string; items: MenuItem[] }
> = {
  tabuas: {
    label: "Tábuas de Queijos e Enchidos",
    items: [
      {
        name: "Assiette de Fromages",
        description:
          "Seleção de queijos da Queijaria Serra N'Tandavala — Gouda, raclette, queijo do Mestre",
        price: 7500,
      },
      {
        name: "Tábua Le Chalet",
        description:
          "Queijos artesanais, enchidos curados, mel e compotas — ideal para partilhar",
        price: 12000,
      },
      {
        name: "Tábua Premium N'Tandavala",
        description:
          "Queijos envelhecidos, chouriço caseiro, frutos secos e pão artesanal",
        price: 15000,
      },
    ],
  },
  pratos: {
    label: "Pratos Signature",
    items: [
      {
        name: "Borrego Grelhado da Serra",
        description:
          "Tenro e grelhado no ponto, com arroz de feijão e molho de manteiga, alho e coentros",
        price: 11500,
      },
      {
        name: "Bife ao Alho Le Chalet",
        description: "Bife grelhado com molho de alho — um dos pratos mais pedidos",
        price: 12500,
      },
      {
        name: "Peixe Grelhado (Pungo)",
        description: "Peixe fresco proveniente directamente do Namibe",
        price: 11000,
      },
      {
        name: "Prato do Dia",
        description: "Consultar o menu exposto na entrada e no parque de estacionamento",
        price: 9000,
      },
      {
        name: "Raclette Tradicional",
        description:
          "Queijo raclette derretido com batatas, pepininhos e enchidos da casa",
        price: 20000,
      },
      {
        name: "Petiscos do Lubango",
        description: "Chouriço caseiro, snacks locais e iguarias com produtos nacionais",
        price: 5500,
      },
    ],
  },
  bebidas: {
    label: "Bebidas e Sobremesas",
    items: [
      {
        name: "Cerveja N'Gola",
        description: "A preferida dos visitantes no Lubango",
        price: 800,
      },
      {
        name: "Vinho Tinto Português",
        description: "Carta com predominância de vinhos portugueses — copo ou garrafa",
        price: 2500,
      },
      {
        name: "Sumo Natural de Fruta Local",
        description: "Frutas da estação, preparadas na hora",
        price: 1500,
      },
      {
        name: "Iogurte Natural da Serra",
        description: "Produto fresco da Queijaria Serra N'Tandavala",
        price: 1200,
      },
    ],
  },
};

export const TESTIMONIALS = [
  {
    name: "Israel Campos — LNL",
    rating: 5,
    text: "O borrego grelhado foi o melhor prato de borrego nacional que já comemos em Angola. Tenro, no ponto, com arroz de feijão e molho de manteiga, alho e coentros.",
  },
  {
    name: "Visitante Huíla",
    rating: 5,
    text: "Pegar uma tábua de queijos e enchidos, uma garrafa de vinho e apreciar o cenário verdejante com amigos — uma das melhores experiências do Lubango.",
  },
  {
    name: "Cliente Luanda",
    rating: 5,
    text: "Compro queijos raclette, Gouda e iogurtes na loja das Torres Dipanda. Produtos extra-frescos vindos directamente da fromageria a 1.985 m de altitude.",
  },
  {
    name: "Turista — Petit Futé",
    rating: 5,
    text: "Chalet alpin autêntico com lareira na sala de baixo. Raclette e fondue deliciosas, mesmo em altitude. Queijos e charcutaria com bom vinho português.",
  },
  {
    name: "Família Lubango",
    rating: 5,
    text: "Paragem obrigatória na Estrada da Tundavala desde 2010. O restaurante novo, com enormes janelas de vidro e vista para a serra, tornou o Le Chalet imprescindível.",
  },
] as const;
