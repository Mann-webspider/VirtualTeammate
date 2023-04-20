import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Interaction from "@/components/Interaction";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";



export default function Home() {
  return (
    <main className="">
      <Navbar/> 
      <Hero/>
      <Features/>
      <Interaction/>
      <Service/>
    </main>
  );
}
