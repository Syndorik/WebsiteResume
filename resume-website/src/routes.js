import ProfilePage from "views/ProfilePage/ProfilePage.js";
import AcademicBackground from "views/AcademicBackground/AcademicBackground.js";
import Home from "views/Home/Home.js";

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: ProfilePage,
    },
    {
        path: "/academic-background",
        name: "Academic Background",
        component: AcademicBackground,
    },
    {
        path: "/professional-background",
        name: "Professional Background",
        component: Home,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Home,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Home,
    },

];

export default routes;
