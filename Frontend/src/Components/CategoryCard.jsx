import React from "react"

function CategoryCard({ title, emoji, description, onClick, index = 0 }) {
    return (
        <div
            className="animate-fade-in-up cursor-pointer group"
            style={{ animationDelay: `${index * 120 + 400}ms` }}
            onClick={onClick}
        >
                <div className="glass-card relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3
                                w-40 h-48 p-2
                sm:w-36 sm:h-44 sm:p-4 
                md:w-44 md:h-52 md:p-6
                
                flex-shrink md:flex-shrink-0
                            transition-all duration-500 ease-out
                            hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,107,107,0.2)]
                            hover:border-primary/30
                            active:scale-95">

                {/* Gradient circle behind icon */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full
                                bg-gradient-to-br from-primary/10 to-primary/5
                                flex items-center justify-center
                                transition-all duration-500
                            group-hover:from-primary/20 group-hover:to-primary-light/15
                                group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                        <span className="text-3xl sm:text-4xl md:text-4xl transition-transform duration-500 group-hover:scale-110">
                            {emoji}
                        </span>
                    </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-text-heading
                            transition-colors duration-300 group-hover:text-primary">
                    {title}
                </h3>

                {/* Description */}
                {description && (
                    <p className="text-xs text-text-muted text-center leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Hover bottom accent bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                            w-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light
                            transition-all duration-500
                            group-hover:w-2/3" />
            </div>
        </div>
    )
}

export default CategoryCard;