"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import {Mulish} from "next/font/google";
import Image from "next/image";
import OndasAnimation from "@/src/components/OndasAnimation";
import Home from "@/src/ui/Home";

const mulish = Mulish({
  style: "normal",
  weight: ["400", "600", "700", "800", "900", "1000"],
  subsets: ["latin"],
});

interface IAboutMe {
  title: string;
  descripcion: string;
  nameWeb?: string;
  web?: string;
}

const aboutMe: IAboutMe[] = [
  {
    title: "Engineering",
    descripcion: "Soy Ingeniero de Sistemas en constante aprendizaje, siempre buscando nuevas formas de resolver problemas complejos con tecnología. Mi dedicación a la ingeniería se refleja en mi pasión por aprender y aplicar los conocimientos adquiridos en proyectos reales.",
    nameWeb: "View LinkedIn",
    web: "https://www.linkedin.com/in/keviinrivas/"
  },
  {
    title: "Data Structure And Algorithm",
    descripcion: "Tengo un fuerte dominio de estructuras de datos y algoritmos, fundamentales para desarrollar soluciones eficientes y optimizadas. Me especializo en aplicar estos conocimientos para mejorar el rendimiento de aplicaciones y resolver problemas de manera efectiva.",
    nameWeb: "View GitHub",
    web: "https://github.com/KeviinASD"
  },
  {
    title: "Learning Something Great",
    descripcion: "We continue learning every day.",
    nameWeb: "Currently Learning",
  },
]


function Homee() {
  return (
    <section className={`pl-20 home ${mulish.className}`}>
      <Home />
    </section>
  )
}

export default Homee;
