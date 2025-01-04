"use client"

import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "gsap"

interface NavigationContextType {
    title: string,
    href: string,
    selected: boolean,
    onClick?: () => void
}

const NewLinked: React.FC<NavigationContextType> = ({title, href, selected, onClick}) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { contextSafe } = useGSAP({scope: buttonRef});
    const router = useRouter()
    useEffect(() => {
        if (buttonRef.current) {
            const styles = window.getComputedStyle(buttonRef.current, '::before');
            const contentWidth = parseFloat(styles.width || '0');
            buttonRef.current.dataset.beforeWidth = contentWidth.toString();
        }
        handleMouseLeave()
    }, [selected])

    const handleMouseEnter = contextSafe(() => {
        gsap.to(buttonRef.current, {
            x: selected? 0: parseFloat(buttonRef.current?.dataset.beforeWidth || '0'),
            duration: 0.4,
            fontWeight: 700,
            ease: 'power2.out'
        })
    })

    const handleMouseLeave = contextSafe(() => {
        gsap.to(buttonRef.current, {
            x: 0,
            duration: 0.4,
            fontWeight: selected? 700:200,
            ease: 'power2.out'
        })
    })

    const handleOnClick = async () => {
        if (onClick) await onClick()
        
        router.push(href)
    }

    return (
        <button ref={buttonRef} onClick={handleOnClick}
            className={`${selected?'text-[#ccc] font-bold':`hover:before:opacity-100`} relative text-[30px] before:content-['->'] before:text-[30px] before:absolute before:left-0 before:top-0 before:translate-x-[-100%] before:opacity-0 before:transition-opacity before:duration-[0.4s] before:ease-in-out`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {title}
        </button>
    )
}

export default NewLinked