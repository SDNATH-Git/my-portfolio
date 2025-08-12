import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";


const Homelayout = () => {
    return (
        <div className=" text-white bg-gradient-to-r from-gray-800  to-gray-950 ">

            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Homelayout;






