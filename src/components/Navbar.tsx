"use client"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap";
import { useNavigation } from "../context/navigationContext";
import { PagesEnum } from "../enums/pages";
import NewLinked from "./NewLinked";


function Navbar() {

  const container = useRef<HTMLDivElement>(null);
  const openNavBarButton = useRef<HTMLDivElement>(null);
  const xPixel: number = 80;
  const {contextSafe} = useGSAP({scope: container})
  const {currentPage} = useNavigation()


  const closeNavBar = contextSafe(() => {
    gsap.to('.siteNavi_bg', {
      delay: 0.2,
      xPercent: -100,
      x: xPixel,
      duration: 0.6,
      ease: 'power3'
    })

    gsap.to('.siteNavi_pages', {
      x: -20,
      duration: 0.2,
      opacity: 0,
      ease: 'power3',
    })

    gsap.to('.closeButton', {
      duration: 0.2,
      opacity: 0,
      ease: 'power3'
    })

    gsap.to(openNavBarButton.current, {
      delay: 0.5,
      duration: 0.2,
      opacity: 1,
      x: 0,
      ease: 'power3'
    })
    
    container.current?.classList.add('hidden-site')
    openNavBarButton.current?.classList.remove('hidden-site')
  })

  const openNavBar = contextSafe(() => {

    gsap.to('.siteNavi_bg', {
      xPercent: 0,
      x: 0,
      duration: 0.6,
      ease: 'power3',
      onComplete: () => {
        
      }
    })

    gsap.to('.siteNavi_pages', {
      x: 0,
      duration: 0.6,
      opacity: 1,
      ease: 'power3',
    })

    gsap.to('.closeButton', {
      delay: 0.3,
      duration: 0.3,
      opacity: 1,
      ease: 'power3'
    })

    gsap.to(openNavBarButton.current, {
      duration: 0.2,
      opacity: 0,
      ease: 'power3',
      onComplete: () => {
        container.current?.classList.remove('hidden-site')
        openNavBarButton.current?.classList.add('hidden-site')
      }
    })

  })
  
  const handleOnClick = async () => {
    closeNavBar()
  }

  
  return (
    <>
      <div className={`fixed top-0 left-0 w-20 h-full z-20 flex flex-col justify-center items-center`} ref={openNavBarButton}>
        <div className="space-y-2 cursor-pointer p-4" onClick={openNavBar}>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
          <div className="w-1 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      <nav className="fixed top-0 left-0 h-full z-10 navcito hidden-site" ref={container}>
        {/* ANIMATION CARGA */}
        <div className="siteNavi_bg absolute left-0 top-0 w-full h-full border-r-2 bg-[#fff] -z-10" style={{transform: 'translate(-100%, 0%) translate(80px, 0px)'}}></div>

        {/* BUTTON */}
        <div className="closeButton opacity-0 absolute top-[calc(3.333333vh-3px)] left-[calc(100%-5.3333vh)] cursor-pointer z-30"
          onClick={closeNavBar}
        >
          <div className="close-buttton w-7 h-7 relative"></div>
        </div>
        <ul className="siteNavi_pages opacity-0 flex flex-col h-[50%] px-[6.6vw] lg:px-[3.3vw] justify-end items-start" style={{transform: 'translate(-20px, 0px)'}}>
          <li className="">
            <NewLinked title="INFO" href="/" selected={currentPage === PagesEnum.HOME} onClick={handleOnClick}/>
          </li>
          <li className="mt-[2vh]">
            <NewLinked title="PROJECTS" href="/projects" selected={currentPage === PagesEnum.PROJECTS} onClick={handleOnClick}/>
          </li>
          <li className="mt-[2vh]">
            <NewLinked title="CONCURSOS" href="/concursos" selected={currentPage === PagesEnum.CONCURSOS} onClick={handleOnClick}/>
          </li>
          <li className="mt-[2vh]">
            <NewLinked title="SKILLS" href="/skills" selected={currentPage === PagesEnum.SKILLS} onClick={handleOnClick}/>
          </li>
        </ul>

        <ul className="siteNavi_pages opacity-0 flex flex-col h-[50%] px-[6.6vw] lg:px-[3.3vw] justify-end items-start pb-[6.6vw] lg:pb-[3.3vw]" style={{transform: 'translate(-20px, 0px)'}}>
          <li>
            <a href="/" className="text-[20px]">Contact</a>
            <p className="mt-2">Copy Email</p>
          </li>
          <li className="mt-[4vh]">
            <a href="/" className="text-[20px]">SNS</a>
            <div className="grid mt-2 grid-flow-col gap-[.5rem] content-start">
              <a href="/" className="">Instagram</a>
              <span>/</span>
              <a href="/" className="">Twitter</a>
              <span>/</span>
              <a href="/" className="">LinkedIn</a>
            </div>
          </li>
          <li className="mt-[4vh]">
            <a href="/" className="text-[20px]">Store</a>
            <div className="grid mt-2 grid-flow-col gap-[.5rem] content-start">
              <a href="/" className="">Linkedin</a>
              <span>/</span>
              <a href="/" className="">GitHub</a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar