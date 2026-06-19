function SubjectCard({
    title,
    code,
    semester,
    description,
    pyqCount = 0,
    resourcesCount = 0,
    unitsCount = 0,
    onClick,
    index = 0,
}) {
    return (
        <div
            className="animate-fade-in-up cursor-pointer group"
            style={{ animationDelay: `${index * 120 + 400}ms` }}
            onClick={onClick}
        >
            <div className="glass-card relative rounded-2xl flex flex-col items-center justify-between gap-4
                            w-52 sm:w-56 md:w-64
                            min-h-[250px] sm:min-h-[270px] md:min-h-[290px]
                            p-5 sm:p-6
                            transition-all duration-500 ease-out
                            hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,107,107,0.2)]
                            hover:border-primary/30
                            active:scale-95">


                <h3 className="text-sm sm:text-lg font-bold text-text-heading
                             transition-colors duration-300 group-hover:text-primary">
                    {title}
                </h3>

                {(code || semester) && (
                    <p className="text-xs font-medium text-text-muted">
                        {code}
                        {code && semester ? " | " : ""}
                        {semester && `Sem ${semester}`}
                    </p>
                )}

                {description && (
                    <p className="text-xs text-text-muted text-center leading-relaxed">
                        {description}
                    </p>
                )}
                <div className="flex items-center justify-center gap-4 mt-3 border-t border-border/50 p-4 w-full">
                    {pyqCount > 0 && (
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-primary">{pyqCount}</span>
                            <span className="text-[10px] text-text-muted font-medium">PYQs</span>
                        </div>
                    )}
                    {resourcesCount > 0 && (
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-primary">{resourcesCount}</span>
                            <span className="text-[10px] text-text-muted font-medium">Notes</span>
                        </div>
                    )}
                    {unitsCount > 0 && (
                        <div className="flex flex-col items-center">
                            <span className="text-sm font-bold text-primary">{unitsCount}</span>
                            <span className="text-[10px] text-text-muted font-medium">Units</span>
                        </div>
                    )}
                </div>

                {/* Hover bottom accent bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                              w-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light
                              transition-all duration-500
                              group-hover:w-2/3" />
            </div>
        </div>
    )
}

export default SubjectCard;
