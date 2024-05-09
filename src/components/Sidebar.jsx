import React from "react";
import { Link } from "react-router-dom";
import { sidebarLinks } from "../utils/sidebarLinks";

function Sidebar() {
    return (
        <aside className="w-52 h-full fixed bg-gray-900 text-zinc-100 p-4 pb-20 overflow-y-scroll sidebar-scroll">
            {sidebarLinks.map((group) => {
                return (
                    <div key={group.title}>
                        <h4 className="font-medium text-sm uppercase opacity-50">
                            {group.title}
                        </h4>
                        <ul className="mb-5 ml-1 border-l border-gray-800 ">
                            {group.links.map((link) => {
                                return (
                                    <Link to={link.path} key={link.title}>
                                        <li className="  flex justify-start items-center gap-2 px-3 py-2 ml-1 my-2 rounded-md hover:bg-gray-800 transition-all duration-300">
                                            <span>{link.icon}</span>
                                            <span className="text-sm">{link.title}</span>
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </aside>
    );
}

export default Sidebar;
