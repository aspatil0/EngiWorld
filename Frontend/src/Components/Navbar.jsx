import { Link, useParams } from "react-router-dom";

function Navbar() {
    const { year, department } = useParams();
    const basePath = department ? `/${year}/${department}` : `/${year}`;

    return (
        <nav className="w-full bg-white border-b border-border shadow-sm px-8 py-4 flex items-center justify-between fixed top-0 left-0 z-50">
            <div className="hidden md:flex items-center gap-8 text-text-body font-medium text-sm">
                <Link to={basePath} className="font-bold hover:text-primary transition-colors">Home</Link>
                <Link to={`${basePath}/info`} className="font-bold hover:text-primary transition-colors ">Info</Link>
                <Link to={`${basePath}/contactus`} className="font-bold hover:text-primary transition-colors">Contact Us</Link>
                <Link to={`${basePath}/profile`} className="font-bold hover:text-primary transition-colors ">Profile</Link>
            </div>
        </nav>
    );
}

export default Navbar;
