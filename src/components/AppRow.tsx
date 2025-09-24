"use client"

import type React from "react"
import { StarIcon, CheckIcon } from "./Icons"

interface AppRowProps {
  icon: string
  name: string
  developer?: string
  category?: string
  subcategory?: string
  rating?: number
  size?: string
  ageRating?: string
  installed?: boolean
  showInstallButton?: boolean
  showOpenButton?: boolean
  onOpenClick?: () => void
  onClick?: () => void
}

const AppRow: React.FC<AppRowProps> = ({
  icon,
  name,
  developer,
  category,
  subcategory,
  rating,
  size,
  ageRating,
  installed = false,
  showInstallButton = false,
  showOpenButton = false,
  onOpenClick,
  onClick,
}) => {
  return (
    <div
      className="flex items-center gap-3 p-4 hover:bg-card-hover rounded-lg transition-colors cursor-pointer ripple my-3"
      onClick={onClick}
    >
      <div className="w-16 h-16 bg-card rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={icon || "/placeholder.svg?height=64&width=64&query=app icon"}
          alt={name}
          className="w-full h-full object-cover app-icon-large"
          loading="eager"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-foreground text-base truncate">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-0.5">
          {developer && <span>{developer}</span>}
          {category && (
            <>
              {developer && <span>•</span>}
              <span>{category}</span>
            </>
          )}
          {subcategory && (
            <>
              <span>•</span>
              <span>{subcategory}</span>
            </>
          )}
        </div>

        {installed && (
          <div className="flex items-center gap-1 mt-1">
            <CheckIcon className="w-3 h-3 text-green-500" />
            <span className="text-sm text-green-500">Installed</span>
          </div>
        )}

        <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
          {rating && (
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4" />
              <span>{rating}</span>
            </div>
          )}
          {ageRating && <span>{ageRating}</span>}
          {size && <span>{size}</span>}
        </div>
      </div>

      {showInstallButton && (
        <button className="px-6 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors">
          Install
        </button>
      )}

      {showOpenButton && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onOpenClick?.()
          }}
          className="px-6 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Open
        </button>
      )}
    </div>
  )
}

export default AppRow
