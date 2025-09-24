"use client"

import type React from "react"
import SearchBar from "../components/SearchBar"
import CategoryGrid from "../components/CategoryGrid"
import AppRow from "../components/AppRow"
import { MoreVertIcon } from "../components/Icons"

const SearchPage: React.FC = () => {
  const gameCategories = [
    { name: "Action", icon: "🚁", color: "#f44336" },
    { name: "Simulation", icon: "🎮", color: "#4caf50" },
    { name: "Puzzle", icon: "🧩", color: "#2196f3" },
    { name: "Adventure", icon: "🕰️", color: "#ff9800" },
    { name: "Racing", icon: "🏁", color: "#9c27b0" },
    { name: "Role Playing", icon: "⚔️", color: "#00bcd4" },
    { name: "Strategy", icon: "🏛️", color: "#4caf50" },
    { name: "Sports", icon: "🏀", color: "#e91e63" },
    { name: "Card", icon: "🃏", color: "#9c27b0" },
    { name: "Board", icon: "♟️", color: "#4caf50" },
  ]

  const appCategories = [
    { name: "Entertainment", icon: "🎬", color: "#9c27b0" },
    { name: "Social", icon: "👥", color: "#f44336" },
    { name: "Productivity", icon: "📋", color: "#2196f3" },
    { name: "Communication", icon: "💬", color: "#4caf50" },
    { name: "Music & Audio", icon: "🎵", color: "#ff9800" },
    { name: "Photography", icon: "📷", color: "#e91e63" },
    { name: "Shopping", icon: "🛍️", color: "#4caf50" },
    { name: "Education", icon: "🎓", color: "#2196f3" },
    { name: "Art & Design", icon: "🎨", color: "#4caf50" },
    { name: "Personalisation", icon: "⚙️", color: "#9c27b0" },
    { name: "Weather", icon: "☀️", color: "#ff9800" },
    { name: "Beauty", icon: "💄", color: "#2196f3" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SearchBar />

      {/* Explore Games */}
      <CategoryGrid title="Explore games" categories={gameCategories} columns={2} />

      {/* Sponsored Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm text-muted">Sponsored • Suggested for you</h2>
          <MoreVertIcon className="w-5 h-5 text-muted" />
        </div>

        <div className="bg-card rounded-xl p-4">
          <AppRow
            icon="/fbs-trading-broker-logo-green.jpg"
            name="FBS – Trading Broker"
            developer="FBS.com – Trade with Your Trusted Online Broker"
            category="Finance"
            subcategory="Stock"
            rating={4.3}
            size="17 MB"
          />
          <div className="flex items-center gap-2 mt-2 text-xs text-muted">
            <span>📥 10M+</span>
          </div>
        </div>
      </div>

      {/* Explore Apps */}
      <CategoryGrid title="Explore apps" categories={appCategories} columns={2} />
    </div>
  )
}

export default SearchPage
