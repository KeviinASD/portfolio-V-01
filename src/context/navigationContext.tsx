"use client"
import React, { createContext, useContext, useEffect, useState } from "react"
import { PagesEnum } from "../enums/pages";
import { useParams, useSearchParams, usePathname } from "next/navigation";

type NavigationContextType = {
  currentPage: PagesEnum;
  setCurrentPage: (page: PagesEnum) => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null)

export const NavigationProvider = ({children}: Readonly<{children: React.ReactNode}>) => {
    const path = usePathname()
    const [currentPage, setCurrentPage] = useState<PagesEnum>(PagesEnum.ABOUT)

    useEffect(() => {
        const firstPath = path.split('/')[1] || ""
        const page = Object.values(PagesEnum).find(page => page === firstPath)
        setCurrentPage(page? page : PagesEnum.ABOUT)
    }, [path])

    return (
        <NavigationContext.Provider value={{
            currentPage,
            setCurrentPage
        }}>
           {children}
        </NavigationContext.Provider>
    )
}

export const useNavigation = () => {
    const context = useContext(NavigationContext)
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider')
    }
    return context
}