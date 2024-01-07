import Contact from "@/components/home/contact";
import Services from "@/components/home/services";
import SlideshowSection from "@/components/home/slideshow";

export default function Home() {
  return (
    <main className="relative flex max-w-screen min-h-screen overflow-x-hidden flex-col items-center justify-center">
      <SlideshowSection />
      <Services />
      <Contact />
    </main>
  );
}
