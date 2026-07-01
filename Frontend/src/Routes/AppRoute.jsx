import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import SelectYear from "../Pages/SelectYear/SelectYear";
import SelectDepartment from "../Pages/SelectDepartment/SelectDepartment";
import Home from "../Pages/Home/Home";
import Info from "../Pages/Info/Info";
import PYQ from "../Pages/PYQ/PYQ";
import Syllabus from "../Pages/Syllabus/Syllabus";
import Resources from "../Pages/Resources/Resources";
import ProfileLayout from "../Pages/Profile/Profile";
import ContactUs from "../Pages/ContactUs/ContactUs";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPass from "../Pages/ForgotPass";
import Dashboard from "../Pages/Dashboard";
import ProfileSetup from "../Pages/Profile";

export default function AppRoute() {
    return (
        <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpass" element={<ForgotPass />} />

            {/* Main landing */}
            <Route path="/" element={<Home />} />

            {/* Dashboard & Profile Setup */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile-setup" element={<ProfileSetup />} />

            {/* Year selection */}
            <Route path="/select-year" element={<SelectYear />} />
            <Route path="/select-department/:year" element={<SelectDepartment />} />

            {/* Year layout routes */}
            <Route path="/:year" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="info" element={<Info />} />
                <Route path="pyq" element={<PYQ />} />
                <Route path="syllabus" element={<Syllabus />} />
                <Route path="resources" element={<Resources />} />
                <Route path="profile" element={<ProfileLayout />} />
                <Route path="contactus" element={<ContactUs />} />
            </Route>

            <Route path="/:year/:department" element={<MainLayout />}>
                <Route path="home" element={<Home />} />
                <Route path="info" element={<Info />} />
                <Route path="pyq" element={<PYQ />} />
                <Route path="syllabus" element={<Syllabus />} />
                <Route path="resources" element={<Resources />} />
                <Route path="profile" element={<ProfileLayout />} />
                <Route path="contactus" element={<ContactUs />} />
            </Route>
        </Routes>
    );
}
