import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SelectYear from "../Pages/SelectYear/SelectYear";
import SelectDepartment from "../Pages/SelectDepartment/SelectDepartment";
import Home from "../Pages/Home/Home";
import Info from "../Pages/Info/Info";
import PYQ from "../Pages/PYQ/PYQ";
import Syllabus from "../Pages/Syllabus/Syllabus";
import Resources from "../Pages/Resources/Resources";
import Profile from "../Pages/Profile/Profile";
import ContactUs from "../Pages/ContactUs/ContactUs";

export default function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<SelectYear />} />
            <Route path="/select-department/:year" element={<SelectDepartment />} />

            <Route path="/:year" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="info" element={<Info />} />
                <Route path="pyq" element={<PYQ />} />
                <Route path="syllabus" element={<Syllabus />} />
                <Route path="resources" element={<Resources />} />
                <Route path="profile" element={<Profile />} />
                <Route path="contactus" element={<ContactUs />} />
            </Route>

            <Route path="/:year/:department" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="info" element={<Info />} />
                <Route path="pyq" element={<PYQ />} />
                <Route path="syllabus" element={<Syllabus />} />
                <Route path="resources" element={<Resources />} />
                <Route path="profile" element={<Profile />} />
                <Route path="contactus" element={<ContactUs />} />
            </Route>
        </Routes>
    );
}
