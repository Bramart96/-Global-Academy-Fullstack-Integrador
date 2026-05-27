
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import React, {useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Presentation from "@/components/Presentation"
const SwipeCards = dynamic(() => import("@/components/Cards"), { ssr: false });
import Footer from "@/components/Footer";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
import { ThemeProvider } from "@/contexts/ThemeContext";
import TestimoniosSection from "@/components/TestimoniosSection";
import { CarritoProvider } from "@/contexts/CarritoContext";
import CardsCarrito from "@/components/CardsCarrito";

 
export default function Home () {
  const [showCards, setShowCards] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
     
      <ThemeProvider>
        
        <Presentation />
        <CarritoProvider>
          <Navbar /> 
        {showCards && <SwipeCards />}
        <TestimoniosSection />
        </CarritoProvider>
        <Footer />
        
    </ThemeProvider>
    
    </>
  );
}
