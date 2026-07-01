import React, { useState } from "react";

function CategoryCard({ title, emoji, description, onClick, index = 0 }) {
    const [rippleList, setRippleList] = useState([]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now() + Math.random();

        setRippleList((prev) => [...prev, { id, x, y }]);

        setTimeout(() => {
            setRippleList((prev) => prev.filter((r) => r.id !== id));
        }, 600);

        if (onClick) onClick();
    };

    return (
        <div
            className="animate-fade-in-up cursor-pointer group relative
                       glass-card-premium ripple-container rounded-2xl
                       glow-border neon-glow-hover
                       flex flex-col items-center justify-center gap-3
                       w-40 h-48
                       sm:w-36 sm:h-44
                       md:w-44 md:h-52
                       flex-shrink-0
                       transition-all duration-500 ease-out
                       hover:-translate-y-3 hover:scale-[1.04]
                       active:scale-95"
            style={{ animationDelay: `${index * 120 + 400}ms` }}
            onClick={handleClick}
        >
            {rippleList.map((r) => (
                <span
                    key={r.id}
                    className="ripple-wave"
                    style={{ left: r.x, top: r.y }}
                />
            ))}

            <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full
                            bg-gradient-to-br from-primary/20 to-primary/5
                            flex items-center justify-center
                            transition-all duration-500
                            group-hover:from-primary/30 group-hover:to-primary-light/20
                            group-hover:scale-110
                            group-hover:shadow-[0_0_20px_rgba(255,107,107,0.4)]">
                <span className="text-3xl sm:text-4xl md:text-4xl transition-transform duration-500
                                 group-hover:rotate-12 group-hover:scale-110">
                    {emoji}
                </span>
            </div>

            
            <h3 className="text-lg sm:text-xl font-bold text-text-heading
                           transition-colors duration-300 group-hover:text-primary">
                {title}
            </h3>

            {description && (
                <p className="text-xs text-text-muted text-center leading-relaxed px-2">
                    {description}
                </p>
            )}

            {/* Hover bottom accent bar */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                            w-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light
                            transition-all duration-500
                            group-hover:w-2/3" />
        </div>
    );
}

export default CategoryCard;