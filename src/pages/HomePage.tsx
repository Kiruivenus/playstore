"use client"

import type React from "react"
import AppRow from "../components/AppRow"
import InterestChips from "../components/InterestChips"
import { MoreVertIcon } from "../components/Icons"
import appConfig from "../config/app-config.json"

const HomePage: React.FC = () => {
  const interests = ["Social", "Communication", "Finance", "Productivity", "Video players & editors"]

  return (
    <div className="min-h-screen bg-background ml-2">
      {/* Top Navigation */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-6">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                fill="#4285f4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34a853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#fbbc05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#ea4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </div>
          <div className="flex gap-6">
            <button className="text-accent font-medium border-b-2 border-accent pb-2 text-base">For you</button>
            <button className="text-foreground hover:text-accent transition-colors text-base">Top charts</button>
            <button className="text-foreground hover:text-accent transition-colors text-base">Children</button>
            <button className="text-foreground hover:text-accent transition-colors text-base">Categories</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-6 h-6 bg-card rounded-full flex items-center justify-center">
              <span className="text-xs">✓</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white">4</span>
            </div>
          </div>
          <div className="w-6 h-6 text-muted">🔔</div>
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-black">👤</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="p-4">
        <div className="relative bg-gradient-to-br from-teal-600 to-blue-800 rounded-2xl overflow-hidden">
          <div className="absolute top-3 left-3">
            <span className="bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {appConfig.heroContent.updateLabel}
            </span>
          </div>
          <img
            src="/chess-characters-duolingo-game-illustration.jpg"
            alt="Chess characters"
            className="w-full h-48 object-cover"
          />
          <div className="absolute bottom-4 left-4">
            <h1 className="text-white text-2xl font-bold">{appConfig.heroContent.title}</h1>
          </div>
        </div>
      </div>

      {/* Duolingo App Row */}
      <div className="px-4">
        <AppRow
          icon="/duolingo-owl-mascot-green.jpg"
          name={appConfig.apps.duolingo.name}
          developer={appConfig.apps.duolingo.developer}
          rating={appConfig.apps.duolingo.rating}
          ageRating={appConfig.apps.duolingo.ageRating}
          showInstallButton={true}
        />
      </div>

      {/* Sponsored Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base text-muted-foreground">Sponsored • Suggested for you</h2>
          <MoreVertIcon className="w-5 h-5 text-muted-foreground" />
        </div>

        <div className="space-y-4">
          <AppRow
            icon="/chatgpt-openai-logo-black-white.jpg"
            name={appConfig.apps.chatgpt.name}
            category={appConfig.apps.chatgpt.category}
            subcategory={appConfig.apps.chatgpt.subcategory}
            installed={appConfig.apps.chatgpt.installed}
          />

          <AppRow
            icon="/fbs-trading-broker-logo-green.jpg"
            name={appConfig.apps.fbs.name}
            category={appConfig.apps.fbs.category}
            subcategory={appConfig.apps.fbs.subcategory}
            rating={appConfig.apps.fbs.rating}
            size={appConfig.apps.fbs.size}
          />

          <AppRow
            icon="/expertoption-trading-logo-blue-chart.jpg"
            name={appConfig.apps.expertoption.name}
            category={appConfig.apps.expertoption.category}
            subcategory={appConfig.apps.expertoption.subcategory}
            rating={appConfig.apps.expertoption.rating}
            size={appConfig.apps.expertoption.size}
          />
        </div>
      </div>

      {/* Interest Chips */}
      <InterestChips interests={interests} />
    </div>
  )
}

export default HomePage
