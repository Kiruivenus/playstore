"use client"

import type React from "react"
import BottomNavigation from "./BottomNavigation"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="max-w-md mx-auto">
        {children}
        <BottomNavigation />
      </div>
    </div>
  )
}

export default Layout
