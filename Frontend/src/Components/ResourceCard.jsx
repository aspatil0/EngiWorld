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
            <div className="glass-card relative rounded-2xl p-6 flex flex-col items-center justify-center gap-3">
                <div
                    className="rounded-full p-3"
                    style={{ backgroundColor: style.bg, color: style.color }}
                >
                    {style.icon}
                </div>

                <p>{type}</p>
                <h3>{title}</h3>

                {description && <p>{description}</p>}
                {meta && <p>{meta}</p>}
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
