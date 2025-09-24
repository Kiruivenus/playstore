"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { SearchIcon, MicIcon, ArrowBackIcon } from "./Icons"

interface SearchBarProps {
  showBackButton?: boolean
  initialQuery?: string
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  showBackButton = false,
  initialQuery = "",
  placeholder = "Search Apps & Games",
}) => {
  const [query, setQuery] = useState(initialQuery)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      const searchQuery = query.toLowerCase().trim()
      if (searchQuery.includes("i&m") || searchQuery.includes("iandm") || searchQuery.includes("i and m")) {
        router.push(`/search/results?q=${encodeURIComponent(query)}`)
      } else {
        // For other queries, show placeholder results
        router.push(`/search/results?q=${encodeURIComponent(query)}`)
      }
    }
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="flex items-center gap-3 p-4 bg-background">
      {showBackButton && (
        <button onClick={handleBack} className="p-2 text-foreground hover:text-accent transition-colors">
          <ArrowBackIcon className="w-6 h-6" />
        </button>
      )}

      <form onSubmit={handleSubmit} className="flex-1">
        <div className="relative flex items-center bg-card rounded-full px-4 py-3 border border-border">
          <SearchIcon className="w-5 h-5 text-muted mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent text-foreground placeholder-muted outline-none text-sm"
          />
          <button type="button" className="ml-3 text-muted hover:text-foreground transition-colors">
            <MicIcon className="w-5 h-5" />
          </button>
        </div>
      </form>

      <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
        <span className="text-xs font-bold text-black">👤</span>
      </div>
    </div>
  )
}

export default SearchBar
