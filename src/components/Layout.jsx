import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                <Sidebar />
                <div>{children}</div>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
