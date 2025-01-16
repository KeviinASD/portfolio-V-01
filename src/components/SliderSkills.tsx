"use client"

import { useEffect, useRef, useState } from "react";
import { Skill } from "../interfaces/skills";
import { skills } from "../api/data";



const SliderSkills: React.FC<{}> = () => {
    const refSkills = useRef<Record<number, HTMLImageElement | null>>({});
    const refContent = useRef<HTMLDivElement | null>(null)
    const [indexSkill, setIndexSkill] = useState<number>(0)
    const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

    useEffect(()=> {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const index = parseInt(entry.target.getAttribute("data-index") || "0")

                if (entry.isIntersecting) {
                    setIndexSkill(parseInt(entry.target.getAttribute("data-index") || "0"))
                    setIsIntersecting(true)
                } else{
                    const newIndex = index == 0 ? 0 : index - 1;
                    setIndexSkill(newIndex)
                }
            })
        }, {threshold: 1})

        Object.values(refSkills.current).forEach((elemnt)=> {
            if (elemnt) observer.observe(elemnt)
        })

        return () => observer.disconnect()
    }, [])


    return (
        <section className="md:max-w-[1200px] w-full flex gap-8 md:gap-12 relative">
          <div className="w-1/2 flex flex-col items-center justify-center sticky top-0">
            {skills.map((skill, index) => (
                <div className="h-screen min-h-screen sticky top-0 flex items-center" key={index}>
                    <img src={skill.image} alt="" className="w-full object-cover rounded-xl shadow-xl"
                        data-index = {index}
                        ref={(el) => {
                            refSkills.current[index] = el
                        }}
                    />
                </div>
            ))}
          </div>
          <div className="w-1/2 flex items-center h-screen sticky top-0">
            <div className="content space-y-4 fadeBottom"
              ref={refContent}
            >
                <h1 className="font-bold ">{isIntersecting?skills[indexSkill].title: skills[0].title}</h1>
                <p className="">{isIntersecting?skills[indexSkill].description: skills[0].description}</p>
                {
                    skills[indexSkill].frameworks && (
                        <>
                            <h1 className="font-bold">Frameworks</h1>
                            <img src={`https://skillicons.dev/icons?i=${skills[indexSkill].frameworks?.join(",")}`} />
                        </>
                    )
                }
                {
                    skills[indexSkill].tecnologies && (
                        <>
                            <h1 className="font-bold">Tecnologies</h1>
                            <img src={`https://skillicons.dev/icons?i=${skills[indexSkill].tecnologies?.join(",")}`} />
                        </>
                    )
                }
            </div>
          </div>
        </section>
    )
}

export default SliderSkills;