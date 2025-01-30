"use client";

import { useRef, useState } from "react";

function AnimastionPage() {
  const container = useRef(null);

  return (
    <section ref={container} className='flex h-screen items-center justify-center relative'>
        <h1 className="font-bold text-3xl">Animation Page</h1>
    </section>
  )
}

export default AnimastionPage