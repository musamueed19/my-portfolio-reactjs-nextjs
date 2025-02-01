import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-1.5">
      
      
      <div className="mt-20">
        <Header />
        <Contacts />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
