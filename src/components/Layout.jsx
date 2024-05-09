import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex justify-start items-start w-full">
                <div className="w-52">
                    <Sidebar />
                </div>
                <div className="w-full ml-7">{children}</div>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
