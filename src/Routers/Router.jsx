import {
    createBrowserRouter,
} from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Home/Home";
import Error from "../components/Error";
import Designation from "../Pages/Designation";
import { path } from "framer-motion/client";
import { elements } from "chart.js";
import Projects from "../Pages/Projects";
import ProjectDetails from "../Pages/ProjectDetails";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import Contact from "../Pages/Contacts";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/designation",
                element: Designation,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/skill",
                element: <Skills></Skills>,
            },
            {
                path: "/education",
                element: <Education></Education>,
            },
            {
                path: "/project",
                element: <Projects></Projects>
            },
            {
                path: "/project/:id",
                element: <ProjectDetails></ProjectDetails>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },

        ]
    },
]);

export default router;











