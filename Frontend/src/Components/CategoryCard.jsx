import React from "react";

function CategoryCard({ title, emoji, description, onClick, index = 0 }) {
  return (
    <div
      className="animate-fade-in-up cursor-pointer group"
      style={{ animationDelay: `${index * 120 + 400}ms` }}
      onClick={onClick}
    >
      <div
        className="
          relative
          bg-white
          border border-gray-200
          rounded-3xl
          shadow-md
          w-40 h-48
          sm:w-36 sm:h-44 sm:p-4
          md:w-44 md:h-52 md:p-6
          p-6
          flex flex-col items-center justify-center gap-4
          flex-shrink md:flex-shrink-0
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        {/* Icon */}
        <div
          className="
            w-16 h-16
            sm:w-18 sm:h-18
            md:w-20 md:h-20
            rounded-full
            bg-[#FFF5F5]
            flex items-center justify-center
            transition-all duration-300
            group-hover:bg-[#FFE5E5]
            group-hover:scale-105
          "
        >
          <span className="text-3xl sm:text-4xl md:text-4xl transition-transform duration-300 group-hover:scale-110">
            {emoji}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center transition-colors duration-300 group-hover:text-[#FF6B6B]">
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            {description}
          </p>
        )}

        {/* Bottom Accent */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            rounded-full
            bg-[#FF6B6B]
            transition-all duration-300
            group-hover:w-2/3
          "
        />
      </div>
    </div>
  );
}

export default CategoryCard;