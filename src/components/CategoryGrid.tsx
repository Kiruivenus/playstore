import type React from "react"

interface CategoryItem {
  name: string
  icon: string
  color: string
}

interface CategoryGridProps {
  title: string
  categories: CategoryItem[]
  columns?: number
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ title, categories, columns = 2 }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-medium text-foreground mb-4">{title}</h2>
      <div className={`grid grid-cols-${columns} gap-3`}>
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-4 hover:bg-card-hover transition-colors cursor-pointer ripple"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">{category.name}</span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-lg"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryGrid
