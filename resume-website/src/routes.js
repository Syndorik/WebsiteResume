import ProfilePage from "views/ProfilePage/ProfilePage.js";
import AcademicBackground from "views/AcademicBackground/AcademicBackground.js";
import Skills from "views/Skills/Skills.js";
import Project from "views/Project/Project.js";
import Contact from "views/Contact/Contact.js";
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
        component: Project,
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },

];

export default routes;
