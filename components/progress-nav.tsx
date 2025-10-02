"use client"

import { Check, Lock } from "lucide-react"

interface Section {
  id: number
  title: string
}

interface ProgressNavProps {
  sections: Section[]
  currentSection: number
  completedSections: number[]
  onNavigate: (sectionId: number) => void
}

export default function ProgressNav({ sections, currentSection, completedSections, onNavigate }: ProgressNavProps) {
  const isUnlocked = (sectionId: number) => {
    return sectionId === 0 || completedSections.includes(sectionId - 1) || completedSections.includes(sectionId)
  }

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
      {sections.map((section) => {
        const unlocked = isUnlocked(section.id)
        const completed = completedSections.includes(section.id)
        const active = currentSection === section.id

        return (
          <div key={section.id} className="relative group">
            <button
              onClick={() => unlocked && onNavigate(section.id)}
              disabled={!unlocked}
              className={`w-4 h-4 rounded-full transition-all duration-500 ${
                active
                  ? "bg-primary scale-150 shadow-lg shadow-primary/50"
                  : completed
                    ? "bg-accent scale-125"
                    : unlocked
                      ? "bg-muted hover:scale-125"
                      : "bg-muted/30 cursor-not-allowed"
              }`}
            >
              {completed && !active && (
                <Check className="w-3 h-3 text-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
              {!unlocked && (
                <Lock className="w-2 h-2 text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              )}
            </button>

            <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <div className="glass px-4 py-2 rounded-lg">
                <p className="text-sm font-medium">{section.title}</p>
                <p className="text-xs text-muted-foreground">
                  {completed ? "Completed" : active ? "Current" : unlocked ? "Available" : "Locked"}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
