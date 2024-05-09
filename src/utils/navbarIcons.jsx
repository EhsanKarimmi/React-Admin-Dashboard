import { HiOutlineSearch } from "react-icons/hi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard, RxEnterFullScreen } from "react-icons/rx";
export const navbarIcons = [
    {
        title: "Search",
        icon: <HiOutlineSearch />,
    },
    {
        title: "Dashboard",
        icon: <RxDashboard />,
    },
    {
        title: "FullScreen",
        icon: <RxEnterFullScreen />,
    },
    {
        title: "Notifications",
        icon: <IoNotificationsOutline />,
    },
    {
        title: "Settings",
        icon: <IoSettingsOutline />,
    },
];
