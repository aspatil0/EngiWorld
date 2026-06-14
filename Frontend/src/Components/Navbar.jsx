import React from "react";

function Navbar() {
    return (
        <nav className="w-full bg-white border-b border-border px-8 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
            <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-sm">EW</span>
                </div>
                <span className="text-xl font-bold text-text-heading">
                    EngiWorld
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-text-body font-medium text-sm">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#" className="hover:text-primary transition-colors">Explore</a>
                <a href="#" className="hover:text-primary transition-colors">Resources</a>
                <a href="#" className="hover:text-primary transition-colors">About</a>
            </div>

            <div className="flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all cursor-pointer">
                    Sign In
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
