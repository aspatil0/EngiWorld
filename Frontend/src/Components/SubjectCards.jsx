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
      className="animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${index * 120 + 400}ms` }}
      onClick={onClick}
    >
      <div
        className="
          group
          relative
          bg-white
          border
          border-gray-200
          rounded-3xl
          shadow-md
          hover:shadow-xl
          hover:-translate-y-2
          transition-all
          duration-300
          flex
          flex-col
          items-center
          justify-between
          gap-4
          w-52
          sm:w-56
          md:w-64
          min-h-[250px]
          sm:min-h-[270px]
          md:min-h-[290px]
          p-6
        "
      >
        {/* Subject Icon */}
        <div className="w-20 h-20 rounded-full bg-[#FFF5F5] flex items-center justify-center text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
          📖
        </div>

        {/* Subject Name */}
        <h3 className="text-lg font-bold text-gray-800 text-center transition-colors duration-300 group-hover:text-[#FF6B6B]">
          {title}
        </h3>

        {/* Code & Semester */}
        {(code || semester) && (
          <p className="text-sm text-[#FF6B6B] font-medium bg-[#FFF5F5] px-3 py-1 rounded-full">
            {code}
            {code && semester ? " • " : ""}
            {semester && `Semester ${semester}`}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-sm text-gray-500 text-center leading-6">
            {description}
          </p>
        )}

        {/* Stats */}
        <div className="w-full border-t border-gray-200 pt-5 flex justify-around">

          <div className="text-center">
            <p className="text-xl font-bold text-[#FF6B6B]">
              {pyqCount}
            </p>
            <p className="text-xs text-gray-500">
              PYQs
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-[#FF6B6B]">
              {resourcesCount}
            </p>
            <p className="text-xs text-gray-500">
              Notes
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-[#FF6B6B]">
              {unitsCount}
            </p>
            <p className="text-xs text-gray-500">
              Units
            </p>
          </div>

        </div>

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
            transition-all
            duration-300
            group-hover:w-2/3
          "
        />

      </div>
    </div>
  );
}

export default SubjectCard;
