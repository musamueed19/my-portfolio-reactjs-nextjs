import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Reviews } from "@/components/Reviews";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <>
    <main className="max-w-screen-xl w-full mx-auto px-1.5">
      
      
      <div className="mt-20">
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Reviews />
      </div>
    </main>
    <Footer />
    </>
  );
}
