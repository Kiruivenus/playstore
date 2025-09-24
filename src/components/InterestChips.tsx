import type React from "react"

interface InterestChipsProps {
  interests: string[]
}

const InterestChips: React.FC<InterestChipsProps> = ({ interests }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-medium text-foreground mb-2">What are you interested in?</h2>
      <p className="text-base text-muted-foreground mb-4">
        Select some items to improve your recommendations across Play
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {interests.map((interest, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-full text-base text-foreground hover:bg-muted transition-colors border border-border"
          >
            <span className="text-lg">+</span>
            {interest}
          </button>
        ))}
      </div>

      <button className="text-accent text-base font-medium">Show more</button>
    </div>
  )
}

export default InterestChips
