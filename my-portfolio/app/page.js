import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import Skills from "@/components/Skills";

export default function HomePage() {
  return (
    <main className="max-w-screen-xl w-full mx-auto px-1.5">
      
      
      <div className="mt-20 h-[1000px]">
        <Header />
        <Contacts />
        <About />
        <Skills />
      </div>
    </main>
  );
}
