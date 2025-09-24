"use client"

import type React from "react"
import { useSearchParams } from "next/navigation"
import SearchBar from "../components/SearchBar"
import AppRow from "../components/AppRow"
import { MoreVertIcon, ArrowForwardIcon } from "../components/Icons"
import appConfig from "../config/app-config.json"

const SearchResultsPage: React.FC = () => {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const isIandMSearch =
    query.toLowerCase().includes("i&m") ||
    query.toLowerCase().includes("iandm") ||
    query.toLowerCase().includes("i and m")

  const handleOpenIandM = () => {
    window.open(appConfig.externalLinks["i&m"], "_blank")
  }

  const handleOpenMPesa = () => {
    window.open(appConfig.externalLinks.mpesa, "_blank")
  }

  if (!isIandMSearch) {
    return (
      <div className="min-h-screen bg-background">
        <SearchBar showBackButton={true} initialQuery={query} />
        <div className="p-4">
          <div className="text-center py-8">
            <p className="text-muted">No results found for "{query}"</p>
            <p className="text-sm text-muted mt-2">Try searching for "i&m bank" to see the demo results</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SearchBar showBackButton={true} initialQuery={query} />

      {/* Sponsored Results */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm text-muted">Sponsored</h2>
          <MoreVertIcon className="w-5 h-5 text-muted" />
        </div>

        <div className="space-y-4">
          <AppRow
            icon="/mpesa-icon.png"
            name="M-PESA"
            developer="Safaricom PLC"
            category="Finance"
            subcategory="Bank and online banking"
            installed={true}
            showOpenButton={true}
            onOpenClick={handleOpenMPesa}
          />

          <AppRow
            icon="/iam-bank-icon.png"
            name="I&M OTG Personal KE"
            installed={true}
            showOpenButton={true}
            onOpenClick={handleOpenIandM}
          />
        </div>

        {/* App Details */}
        <div className="flex items-center justify-between py-4 border-b border-border">
          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="flex items-center gap-1 text-foreground font-medium">
                <span>3.9</span>
                <span className="text-yellow-400">★</span>
              </div>
              <div className="text-muted text-xs">1K reviews</div>
            </div>

            <div className="text-center">
              <div className="bg-card px-2 py-1 rounded text-foreground text-xs">3+</div>
              <div className="text-muted text-xs mt-1">Rated for 3+</div>
            </div>

            <div className="text-center">
              <div className="text-foreground font-medium">500K+</div>
              <div className="text-muted text-xs">Downloads</div>
            </div>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="py-4">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0">
                <img
                  src={`/mobile-banking-app-screenshot-.jpg?height=300&width=180&query=mobile banking app screenshot ${i}`}
                  alt={`Screenshot ${i}`}
                  className="w-32 h-56 rounded-lg object-cover bg-card"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-muted py-2">
          I&M App offers you a safe, secure and convenient mobile banking experience
        </p>
      </div>

      {/* Related to Search */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm text-muted">Sponsored • Related to your search</h2>
          <MoreVertIcon className="w-5 h-5 text-muted" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { name: "KCB Mobile", rating: "4.5", icon: "/kcb-bank-logo-green.jpg" },
            { name: "Branch: Loans & Mobile Banking", rating: "4.5", icon: "/branch-app-logo-blue.jpg" },
            { name: "Mukuru: Send Money Transfers", rating: "4.4", icon: "/mukuru-logo-orange.jpg" },
            { name: "Linker", rating: "3.5", icon: "/linker-app-logo-blue.jpg" },
          ].map((app, index) => (
            <div key={index} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 bg-card rounded-2xl mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={app.icon || "/placeholder.svg"}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="w-16">
                <p className="text-xs text-foreground font-medium truncate">{app.name}</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <span className="text-xs text-muted">{app.rating}</span>
                  <span className="text-yellow-400 text-xs">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* You Might Also Like */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-foreground">You might also like</h2>
          <ArrowForwardIcon className="w-5 h-5 text-muted" />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { name: "Snapchat", icon: "/snapchat-logo-yellow-ghost.jpg" },
            { name: "WhatsApp", icon: "/whatsapp-logo-green.jpg" },
            { name: "Microsoft Teams", icon: "/microsoft-teams-logo-blue.jpg" },
            { name: "Uber", icon: "/uber-logo-black-white.jpg" },
          ].map((app, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="w-20 h-20 bg-card rounded-2xl mb-2 flex items-center justify-center overflow-hidden">
                <img
                  src={app.icon || "/placeholder.svg"}
                  alt={app.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResultsPage
