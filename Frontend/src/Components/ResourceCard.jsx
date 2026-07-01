import {
    FaBookOpen,
    FaFilePdf,
    FaLink,
    FaQuestionCircle,
    FaVideo,
} from "react-icons/fa";


function ResourceCard({
    title,
    description,
    type,
    meta,
    href,
    onClick,
    index = 0,
    disabled = false,
}) {
    const getResourcesStyle = (type) => {
        switch (type?.toLowerCase()) {
        case "pdf":
            return { icon: <FaFilePdf size={20} />, color: "#EF4444", bg: "#FEF2F2" };

        case "video":
            return { icon: <FaVideo size={20} />, color: "#8B5CF6", bg: "#F5F3FF" };

        case "link":
            return { icon: <FaLink size={20} />, color: "#3B82F6", bg: "#EFF6FF" };

        case "pyq":
            return { icon: <FaQuestionCircle size={20} />, color: "#F59E0B", bg: "#FFFBEB" };

        default:
            return { icon: <FaBookOpen size={20} />, color: "#10B981", bg: "#ECFDF5" };
        }
    };

    const style = getResourcesStyle(type);
    const normalizedType = type?.toLowerCase();
    const isDownloadable =
        normalizedType === "pdf" ||
        normalizedType === "pyq" ||
        href?.toLowerCase().endsWith(".pdf");

    const content = (
        <div
            className={`animate-fade-in-up group ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
            style={{ animationDelay: `${index * 120 + 400}ms` }}
        >
            <div className="glass-card relative rounded-2xl flex flex-col items-center justify-between gap-4
                            w-52 sm:w-56 md:w-64
                            min-h-[250px] sm:min-h-[270px] md:min-h-[290px]
                            p-5 sm:p-6
                            transition-all duration-500 ease-out
                            hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(255,107,107,0.2)]
                            hover:border-primary/30
                            active:scale-95">
                <div
                    className="rounded-full p-3.5 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: style.bg, color: style.color }}
                >
                    {style.icon}
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
                    {type}
                </span>
                
                <h3 className="text-sm sm:text-base font-bold text-text-heading text-center line-clamp-2 transition-colors duration-300 group-hover:text-primary">
                    {title}
                </h3>

                {description && (
                    <p className="text-xs text-text-body text-center line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                )}
                
                {meta && (
                    <span className="text-[10px] sm:text-xs font-semibold text-primary/80 bg-primary/5 px-2.5 py-0.5 rounded-full mt-1">
                        {meta}
                    </span>
                )}
            </div>
        </div>
    );

    if (disabled) {
        return (
            <button
                type="button"
                className="w-full border-0 bg-transparent p-0 text-left"
                disabled
            >
                {content}
            </button>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                className="block w-full text-left no-underline"
                download={isDownloadable ? true : undefined}
                target={isDownloadable ? undefined : "_blank"}
                rel={isDownloadable ? undefined : "noopener noreferrer"}
            >
                {content}
            </a>
        );
    }

    return (
        <button
            type="button"
            className="w-full border-0 bg-transparent p-0 text-left"
            onClick={onClick}
        >
            {content}
        </button>
    );
}

export default ResourceCard;
