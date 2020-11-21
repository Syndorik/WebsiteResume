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
        insideDrawer: false
    },
    {
        path: "/about",
        name: "About",
        component: ProfilePage,
        insideDrawer: false
    },
    {
        path: "/background",
        name: "Background",
        component: AcademicBackground,
        insideDrawer: true
    },
    {
        path: "/projects",
        name: "Projects",
        component: Project,
        insideDrawer: true
    },
    {
        path: "/skills",
        name: "Skills",
        component: Skills,
        insideDrawer: true
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        insideDrawer: false
    },

];

export default routes;
