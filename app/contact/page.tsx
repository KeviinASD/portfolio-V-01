"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import gsap from "gsap";

function AnimastionPage() {
  const container = useRef(null);
  const [open, setOpen] = useState<boolean>(false)

  const { contextSafe } = useGSAP({scope: container});

  const onClick = contextSafe(() => {
    setOpen(!open)
    gsap.to('.pov', {
      duration: 1,
      x: open ? 0 : 100,
      y: open ? 0 : 100,
      scale: open ? 1 : 2,
    })
  })

  return (
    <section ref={container} className='flex h-screen items-center justify-center relative'>
        <h1 className="font-bold text-3xl">Animation Page</h1>
    </section>
  )
}

export default AnimastionPage