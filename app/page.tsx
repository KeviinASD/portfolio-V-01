"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import OndasAnimation from "@/src/components/OndasAnimation";

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

function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null); // Para manejar `requestAnimationFrame`
  const currentScrollRef = useRef(0); // Valor actual animado
  const [targetScroll, setTargetScroll] = useState(0); // Valor objetivo

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Limitar el desplazamiento para no sobrepasar los bordes
  const clampScroll = useCallback((value: number) => {
    const maxScroll = (container.current?.scrollWidth || 0) - window.innerWidth;
    return Math.max(0, Math.min(value, maxScroll));
  }, []);

  // Animar el desplazamiento suavemente
  const animateScroll = useCallback(() => {
    const currentScroll = currentScrollRef.current;
    const difference = targetScroll - currentScroll;
    if (Math.abs(difference) < 0.5) {
      currentScrollRef.current = targetScroll; // Detener en el objetivo
    } else {
      currentScrollRef.current += difference * 0.1; // Suavizar con interpolación
    }

    /* ANIMACION DEL CONTENEDOR */
    if (container.current) {
      container.current.style.transform = `translate3d(-${currentScrollRef.current}px, 0, 0)`;
    }

    /* ANIMACION DEL CANVAS */
    if (canvasRef.current) {
      if (currentScrollRef.current >= window.innerWidth) {
        const canvasOffset = currentScrollRef.current - window.innerWidth;
        canvasRef.current.style.transform = `translate3d(${canvasOffset}px, 0, 0)`;
      } else {
        canvasRef.current.style.transform = `translate3d(0, 0, 0)`;
      }
    }

    if (Math.abs(difference) >= 0.5) {
      animationFrameRef.current = requestAnimationFrame(animateScroll); // Continuar animación
    }
  }, [targetScroll]);

  // Actualizar objetivo de scroll al mover la rueda
  const handleWheel = (e: any) => {
    const newTarget = clampScroll(targetScroll + e.deltaY);
    setTargetScroll(newTarget);
  };

  // Iniciar la animación cuando cambia el objetivo
  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animateScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animateScroll]);

  return (
    <>
      <div
        className="slider relative overflow-hidden w-full"
        onWheel={handleWheel} // Manejar el desplazamiento horizontal
      >
        <div
          className="flex w-[200vw] min-h-screen transition-transform ease-linear"
          ref={container}
        >
          <section
            className="panel panel-first w-[100vw] pl-20 bg-[#020a13] z-30 relative"
            style={{
              /* backgroundImage: 'url(fondo.png)',  */ backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* DIV CENTRADO */}
            <div className="max-w-[540px] md:max-w-[960px] px-4 mx-auto h-full">
              <div className="text-white flex items-center justify-center h-full">
                <div className="w-10/12 space-y-6">
                  <h1 className="text-4xl font-bold">I'M KEVIN RIVAS</h1>
                  <p className="text-[#c6c6c6]">
                    ¡Hi! Soy Ingeniero de Sistemas, estudiante y autodidacta apasionado por la programación y la creación de soluciones creativas. Mi experiencia abarca el desarrollo fullstack, con un sólido conocimiento en patrones de diseño, programación orientada a objetos y funcional. Soy un entusiasta de la inteligencia artificial, explorando constantemente su potencial para transformar ideas en realidades innovadoras. Además, tengo experiencia en hackathons, destacándome al obtener el primer puesto en el reto Turismo Inteligente de la AYNI Hackathon APEC PERÚ 2024, organizado por la Asociación de Peruanos en Silicon Valley.
                  </p>
                  <br />
                  <p className="text-[#c6c6c6]">
                    Scroll to See More About Me
                    <svg
                      className="forward-left fill-white inline-block"
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                    </svg>
                  </p>
                  <div className="flex">
                    <a
                      href="https://www.linkedin.com/in/keviinrivas/"
                      target="_blank"
                      className=""
                    >
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://github.com/KeviinASD"
                      target="_blank"
                      className="ml-4"
                    >
                      <svg
                        className="fill-white "
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel w-screen relative h-screen flex z-30 ">
            {/* ANIMACION */}
            {/* <OndasAnimation className="absolute top-[30%] left-0 w-screen -z-20 transition-transform ease-linear" canvasRef={canvasRef}/> */}
            <div className="inline-flex items-center justify-center h-full w-80 relative">
              <h1 className="absolute top-0 left-10 text-[8vh] font-semibold text-secondary">
                Myself
              </h1>
              <div className="ml-10 pl-5 border-l-2 border-[#a0a0a0]">
                <p>
                  Soy un apasionado por la tecnologia y la innovación.
                  <br />
                  Me gusta aprender cosas nuevas y compartir lo que se.
                </p>
              </div>
            </div>

            <div className="flex flex-1 lg:px-[10vw] ">
              <div>
                <h1 className="font-bold text-secondary mt-[15vh] text-5xl">
                  About Me.
                </h1>
                <article className="space-y-2 mt-[5vh]">
                  <ul className="timeline pl-4 relative">
                    {
                      aboutMe.map((item, index) => (
                        <li className="space-y-1 mt-2 mb-7" key={index}>
                          <div className="flex justify-between">
                            <a
                              target="_blank"
                              href={item.web}
                              className="font-bold text-lg hover:border-accent-gray border-b border-transparent transition"
                            >
                              {item.title}
                            </a>
                            <a
                              target="_blank"
                              href={item.web}
                              className="font-bold text-lg border-b border-accent-gray"
                            >
                              {item.nameWeb}
                            </a>
                          </div>
                          <p className="block">
                            {item.descripcion}
                          </p>
                        </li>
                      ))
                    }
                  </ul>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;
