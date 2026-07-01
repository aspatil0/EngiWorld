import React from "react";

function DepartmentCard({ id, title, icon, tag, description, onClick, index = 0 }) {
    return (
        <div
            className="animate-fade-in-up cursor-pointer group"
            style={{ animationDelay: `${index * 100 + 300}ms` }}
            onClick={onClick}
        >
            <div className="glass-card-premium ripple-container rounded-2xl p-5
                            glow-border neon-glow-hover
                            transition-all duration-500
                            hover:-translate-y-2 hover:scale-[1.03]
                            cursor-pointer relative overflow-hidden
                            min-w-[200px]">

                <div className="absolute inset-0 rounded-2xl opacity-0
                                group-hover:opacity-100 transition-opacity duration-500
                                bg-gradient-to-br from-primary/8 to-transparent pointer-events-none" />

                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full
                                 text-[10px] font-bold bg-primary/15 text-primary
                                 border border-primary/25 tracking-wide">
                    {tag}
                </span>

                
                <div className="w-14 h-14 rounded-2xl mb-4
                                bg-gradient-to-br from-primary/20 to-primary/5
                                flex items-center justify-center
                                transition-all duration-500
                                group-hover:shadow-[0_0_16px_rgba(255,107,107,0.4)]
                                group-hover:scale-110">
                    <span className="text-3xl transition-transform duration-500
                                     group-hover:rotate-[15deg] group-hover:scale-110">
                        {icon}
                    </span>
                </div>

                
                <h3 className="text-base font-bold text-text-heading mb-1
                               group-hover:text-primary transition-colors duration-300">
                    {title}
                </h3>

                
                <p className="text-[11px] text-text-muted leading-relaxed">{description}</p>

               
                <div className="absolute left-0 top-1/2 -translate-y-1/2
                                w-0.5 h-0 bg-gradient-to-b from-primary to-primary-light
                                group-hover:h-2/3 transition-all duration-500 rounded-full" />
            </div>
        </div>
    );
}

export default DepartmentCard;