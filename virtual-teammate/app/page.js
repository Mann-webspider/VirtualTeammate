"use client"
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Interaction from "@/components/Interaction";
import Navbar from "../components/Navbar";
import Service from "@/components/Service";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";



export default function Home() {
  
  return (
    
    
    <ThemeProvider>


    <main className="p-0 m-0 box-border">
      <Navbar/> 
      <Hero/>
      <Features/>
      <Service/>
      <Faqs/>
      <Interaction/>
      <Contact/>
      <Footer/>
    </main>
    </ThemeProvider>
    
    
    
  );
}


