"use client"

import type React from "react"
import { useRouter, usePathname } from "next/navigation"
import { GamepadIcon, GridIcon, SearchIcon } from "./Icons"

const BottomNavigation: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path === "/search" && pathname.startsWith("/search")) return true
    return false
  }

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
      <div className="flex items-center justify-around py-2">
        <button
          onClick={() => router.push("/")}
          className="flex flex-col items-center py-2 px-4 text-muted hover:text-foreground transition-colors"
        >
          <GamepadIcon className="w-6 h-6 mb-1" />
          <span className="text-xs">Games</span>
        </button>

        <button
          onClick={() => router.push("/")}
          className={`flex flex-col items-center py-2 px-4 transition-colors ${
            isActive("/") ? "text-accent" : "text-muted hover:text-foreground"
          }`}
        >
          <GridIcon className="w-6 h-6 mb-1" />
          <span className="text-xs">Apps</span>
          {isActive("/") && <div className="w-8 h-0.5 bg-accent rounded-full mt-1" />}
        </button>

        <button
          onClick={() => router.push("/search")}
          className={`flex flex-col items-center py-2 px-4 transition-colors ${
            isActive("/search") ? "text-accent" : "text-muted hover:text-foreground"
          }`}
        >
          <SearchIcon className="w-6 h-6 mb-1" />
          <span className="text-xs">Search</span>
          {isActive("/search") && <div className="w-8 h-0.5 bg-accent rounded-full mt-1" />}
        </button>
      </div>
    </div>
  )
}

export default BottomNavigation
