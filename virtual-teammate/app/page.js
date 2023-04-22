"use client"
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Interaction from "@/components/Interaction";
import Navbar from "../components/Navbar";
import Service from "@/components/Service";
import { ThemeProvider } from "@material-tailwind/react";



export default function Home() {
  
  return (
    
    
    <ThemeProvider>


    <main className="p-0 m-0 box-border">
      <Navbar/> 
      <Hero/>
      <Features/>
      <Interaction/>
      <Service/>
      <Faqs/>
    </main>
    </ThemeProvider>
    
    
    
  );
}


