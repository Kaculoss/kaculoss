import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Footer,
  Hero,
  Hero3D,
  Navbar,
  Tech,
  Works,
} from "@/components";
import { StarsCanvas } from "@/components/canvas";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
        <Hero3D />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </div>
  );
}
