import ProfilePage from "views/ProfilePage/ProfilePage.js";
import AcademicBackground from "views/AcademicBackground/AcademicBackground.js";
import Skills from "views/Skills/Skills.js";
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
        path: "/background",
        name: "Background",
        component: AcademicBackground,
    },
    {
        path: "/projects",
        name: "Projects",
        component: Home,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Home,
    },

];

export default routes;
