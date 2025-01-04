"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import OndasAnimation from "@/src/components/OndasAnimation";

function HomePage() {
  const container = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null); // Para manejar `requestAnimationFrame`
  const currentScrollRef = useRef(0); // Valor actual animado
  const [targetScroll, setTargetScroll] = useState(0); // Valor objetivo

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Limitar el desplazamiento para no sobrepasar los bordes
  const clampScroll = useCallback((value: number) => {
    const maxScroll =
      (container.current?.scrollWidth || 0) - window.innerWidth;
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
          className="flex w-[300vw] min-h-screen transition-transform ease-linear"
          ref={container}
        >
          <section className="panel w-[100vw] pl-20" style={{backgroundImage: 'url(fondo.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            {/* DIV CENTRADO */}
            <div className="text-white text-3xl h-full ml-[10rem] flex justify-center flex-col relative gap-4 w-fit">
              {/* MY NAME */}
              <h1 className="absolute top-[calc(3.33333vh)] text-3xl text-black bg-white py-2 px-4 font-extralight" style={{letterSpacing: '6px'}}> <span className="font-semibold">Kevin</span> Rivas</h1>
              {/* TEXTO IMPORTANTE */}
              <div className="pl-4 border-l-2 border-white">
                <div className="space-y-2">
                  <h1 className="">Hi There!</h1>
                  <h1 className="font-semibold text-5xl">I am just a Developer</h1>
                  <h1>I make the complex simple.</h1>
                </div>
                <div className="mt-6">
                  <button className="bg-[#ea2845] text-xl py-2 px-4 rounded-sm">Contac me</button>
                </div>
              </div>
            </div>
          </section>

          <section className="panel w-screen relative h-screen flex">
            {/* ANIMACION */}
            <OndasAnimation className="absolute top-[30%] left-0 w-screen -z-20 transition-transform ease-linear" canvasRef={canvasRef}/>
            <div className="inline-flex items-center justify-center h-full w-80 relative">
              <h1 className="absolute top-0 left-10 text-[8vh] font-semibold">Myself</h1>
              <div className="ml-10 pl-5 border-l-2 border-black">
                <p>
                You can view my artworks here.
                <br />
                Click or tap on each artwork to see it in full size.
                </p>
              </div>
            </div>

            <div className="flex flex-1 ">
              <div className="w-[95%] md:w-[80%] h-[80vh] md:h-[60vh] mx-auto my-auto md:flex gap-6">
                {/* IMAGE */}
                <div className="md:w-[40%] relative">
                  <img src="./yo.jpg" alt="Kevin Rivas" className="object-cover h-full"/>
                </div>
                {/* CONTENIDO */}
                <div className="md:w-[60%]">
                  {/* INFORMACION */}
                  <div className="border-b border-black pb-8 space-y-4">
                    <h1 className="font-bold text-lg">Who am I?</h1>
                    <p className="font-extralight text-[5vh] " style={{lineHeight: '1.1'}}>I'm Kevin Rivas, a Software Ingeniere</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem aut et odit amet consequuntur nulla a esse aliquid illo eum quo voluptas quibusdam corporis repellendus ipsam, distinctio voluptate expedita!  quibusdam corporis repellendus ipsam, distinctio voluptate expedita!</p>
                  </div>
                  {/* DATOS PERSONALES */}
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="spacey-2">
                      <p className="flex gap-4"><span className="font-semibold">Name:</span> Kevin Rivas</p>
                      <p className="flex gap-4"><span className="font-semibold">Age:</span> 22</p>
                    </div>
                    <div className="spacey-2">
                    <p className="flex gap-4"><span className="font-semibold">Estudios:</span> Ingenieria de Sistemas</p>
                    <p className="flex gap-4"><span className="font-semibold">Email:</span> kevinabril093@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="panel w-[100vw]">
            <h1>Otro contenido</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default HomePage;


/* 

const {contextSafe} = useGSAP({scope: container})

const scrollHorizontal = contextSafe(() => {
      let panels = gsap.utils.toArray('.panel');
  
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + container.current?.offsetWidth,
        }
      })
    })

*/