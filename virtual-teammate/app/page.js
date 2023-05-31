"use client"
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Interaction from "@/components/Interaction";
import NavbarU from "../components/NavbarU";
import Service from "@/components/Service";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Process from "@/components/Process";
import How from "@/components/How";



export default function Home() {
  
  return (
    
    
    <ThemeProvider>


    <main className=" overflow-hidden">
      <NavbarU/> 
      <Hero/>
      <Interaction/>
      <Features/>
      <Service/>
      <About/>
      {/* <How/> */}
      <Process/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </main>
    </ThemeProvider>
    
    
    
  );
}


