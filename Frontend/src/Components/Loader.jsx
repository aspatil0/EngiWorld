function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#FFF5F5]">

      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="relative">

          {/* Outer Ring */}
          <div className="w-24 h-24 rounded-full border-[6px] border-[#FFE5E5]"></div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 w-24 h-24 rounded-full border-[6px] border-transparent border-t-[#FF6B6B] border-r-[#FF8A80] animate-spin"></div>

        </div>

        {/* Logo */}
        <h1 className="mt-8 text-4xl font-bold text-[#FF6B6B] tracking-wide">
          EngiWorld
        </h1>

        {/* Subtitle */}
        <p className="mt-2 text-gray-500 text-lg">
          Engineering Made Simple
        </p>

        {/* Loading Dots */}
        <div className="flex gap-3 mt-8">

          <span className="w-3 h-3 rounded-full bg-[#FF6B6B] animate-bounce"></span>

          <span
            className="w-3 h-3 rounded-full bg-[#FF8A80] animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>

          <span
            className="w-3 h-3 rounded-full bg-[#FF6B6B] animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>

        </div>

      </div>

    </div>
  );
}

export default Loader;