import { BsPostage } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaRegCalendar, FaRegStickyNote } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { MdOutlineBackup, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiFileList3Line, RiHome2Line } from "react-icons/ri";
import { SiElementary } from "react-icons/si";
import { TbForms, TbLogs } from "react-icons/tb";
export const sidebarLinks = [
    {
        title: "Main",
        links: [
            {
                title: "Home",
                path: "/",
                icon: <RiHome2Line />,
            },
            {
                title: "Profile",
                path: "/profile",
                icon: <CgProfile />,
            },
        ],
    },
    {
        title: "Lists",
        links: [
            {
                title: "Users",
                path: "/users",
                icon: <LuUsers />,
            },
            {
                title: "Products",
                path: "/products",
                icon: <MdOutlineProductionQuantityLimits />,
            },
            {
                title: "Orders",
                path: "/orders",
                icon: <RiFileList3Line />,
            },
            {
                title: "Posts",
                path: "/posts",
                icon: <BsPostage />,
            },
        ],
    },
    {
        title: "General",
        links: [
            {
                title: "Elements",
                path: "/elements",
                icon: <SiElementary />,
            },
            {
                title: "Notes",
                path: "/notes",
                icon: <FaRegStickyNote />,
            },
            {
                title: "Forms",
                path: "/forms",
                icon: <TbForms />,
            },
            {
                title: "Calendar",
                path: "/calendar",
                icon: <FaRegCalendar />,
            },
        ],
    },
    {
        title: "Maintenance",
        links: [
            {
                title: "Settings",
                path: "/settings",
                icon: <IoSettingsOutline />,
            },
            {
                title: "Backups",
                path: "/backups",
                icon: <MdOutlineBackup />,
            },
        ],
    },
    {
        title: "Analytics",
        links: [
            {
                title: "Charts",
                path: "/charts",
                icon: <FaChartColumn />,
            },
            {
                title: "Logs",
                path: "/logs",
                icon: <TbLogs />,
            },
        ],
    },
];
