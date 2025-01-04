"use client"

import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { useRouter } from "next/router"
import { useNavigation } from "@/src/context/navigationContext"
import { PagesEnum } from "../enums/pages"

function TemplateInitialAnimation() {
  const containerTemplate = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from(containerTemplate.current, {
      xPercent: 100,
      duration: 0.8,
      ease: 'power3',
      onComplete: () => setIsAnimating(false)
    }).to(containerTemplate.current, {
      xPercent: -100,
      duration: 0.8,
      ease: 'power3',
    })

  }, {scope: containerTemplate})

  return (
    <>
    <div className="fixed top-0 w-[100%] min-h-screen" 
        ref={containerTemplate}
        style={{backgroundImage: 'linear-gradient(90deg,#fff0,#fff 10%,#fff 90%,#fff0)', backgroundRepeat: 'no-repeat', backgroundSize: '200% 100%'}}
    >
    </div>
    </>
  )
}


export default TemplateInitialAnimation