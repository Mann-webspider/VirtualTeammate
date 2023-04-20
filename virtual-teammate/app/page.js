import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Interaction from "@/components/Interaction";
import Navbar from "@/components/Navbar";



export default function Home() {
  return (
    <main className="">
      <Navbar/> 
      <Hero/>
      <Features/>
      <Interaction/>
    </main>
  );
}
