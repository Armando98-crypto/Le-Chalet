import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Servicos from "@/components/Servicos";
import Menu from "@/components/Menu";
import Locais from "@/components/Locais";
import Depoimentos from "@/components/Depoimentos";
import Galeria from "@/components/Galeria";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Menu />
        <Locais />
        <Depoimentos />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
