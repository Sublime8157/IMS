// Layout.js
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const Nav = ({ children }) => {
    const navigate = useNavigate();
    const [navBarReveal, setNavBarReveal] = useState(false);
    const toggleNavBar = () => {
        navBarReveal ? setNavBarReveal(false) : setNavBarReveal(true) 
    };
    const [toggleItemChevronIcon, setToggleItemChevronIcon] = useState({});

    const toggleChevronIcon = (item) => {
        setToggleItemChevronIcon((prevState) => ({
                ...prevState,
                [item]: !prevState[item]
        }))
    }

    const [currentRoute, setCurrentRoute] = useState("/dashboard")
    const redirectRoute = (path) => {
        navigate(path);
        setCurrentRoute(path)
    }

    

    return (
        <div className="w-screen h-screen flex flex-row items-center justify-start bg-gray-200">
            {/* Navigation bar */}
            <nav className="relative pt-4 text-white h-full bg-gray-700 fixed shadow-sm w-80" style={{ marginLeft: navBarReveal ? "-320px" : "0", transition: "margin-left 0.4s ease-in-out"  }}>
                <div className="absolute z-40 bottom-2/4 text-black cursor-pointer" style={{ right: "-1rem" }} onClick={toggleNavBar}><ion-icon name={ navBarReveal ? "chevron-forward-outline" : "chevron-back-outline"}></ion-icon></div>
                    <ul className=" flex items-start justify-start flex-col">
                        <li className="flex items-center mb-4 flex-row text-yellow-300 gap-2 text-xs ms-2 font-bold">
                            <ion-icon name="ellipse"></ion-icon>
                            <span>Welcome, user</span>
                        </li>
                        {/* user image */}
                        <li className="w-full flex justify-center mb-4"><img src="../images/user.png" alt="User" width={120}/></li>
                        {/* items */}
                        <li className={`hover:bg-gray-800 ps-8 rounded-sm py-2 w-full flex items-center flex-row cursor-pointer ${currentRoute === "/dashboard" ? "bg-gray-800" : ""}`}>
                            <a onClick={() => redirectRoute("/dashboard")} className="flex items-center gap-2 flex-row items-center w-full">
                                <div><ion-icon name="bar-chart"></ion-icon></div>
                                <div>Dashboard</div>
                            </a> 
                        </li>   
                        <li className={`rounded-sm w-full flex items-start flex-col cursor-pointer`} onClick={() => redirectRoute("/orders")}>
                            <a className={`ps-8 py-2 hover:bg-gray-800 flex items-center gap-2 flex-row items-center w-full ${currentRoute === "/orders" ? "bg-gray-800" : ""}`}>
                                <ion-icon name="cart"></ion-icon>
                                <span>Order</span>
                                <div onClick={() => toggleChevronIcon("order")} className={`mt-2 cursor-pointer ${toggleItemChevronIcon["order"] ? "transformChevron" : ""}`}><ion-icon name="caret-forward-outline"></ion-icon></div>
                            </a>
                            <ul className={`w-full text-sm flex flex-col gap-1 ${toggleItemChevronIcon["order"] ? "" : "hidden"}`}>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><ion-icon name="hourglass-outline"></ion-icon><span>Pending</span></li>
                                <li className="w-full flex items-center flex-row ps-12 gap-1 rounded hover:bg-gray-800 py-1"><ion-icon name="bag-check-outline"></ion-icon><span>Purchased</span></li>
                                <li className="w-full flex items-center flex-row ps-12 gap-1 rounded hover:bg-gray-800 py-1"><ion-icon name="close-circle-outline"></ion-icon><span>Cancelled</span></li>
                                <li className="w-full flex items-center flex-row ps-12 gap-1 rounded hover:bg-gray-800 py-1"><ion-icon name="arrow-undo-outline"></ion-icon><span>Returned</span></li>
                            </ul>
                        </li>
                        <li onClick={() => redirectRoute("/inventory")} className="rounded-sm w-full flex items-center flex-col cursor-pointer" >
                            <a className={`hover:bg-gray-800 ps-8 py-2 flex items-center gap-2 flex-row items-center w-full ${currentRoute === "/inventory" ? "bg-gray-800" : ""}`}>
                                <ion-icon name="cube"></ion-icon>
                                <span>Iventory</span>
                                <div onClick={() => toggleChevronIcon("inventory")} className={`mt-2 cursor-pointer ${toggleItemChevronIcon["inventory"] ? "transformChevron" : ""}`}><ion-icon name="caret-forward-outline"></ion-icon></div>
                            </a>
                            <ul className={`w-full text-sm flex flex-col ${toggleItemChevronIcon["inventory"] ? "" : "hidden"}`}>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><span>Current stocks</span></li>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><span></span></li>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><span></span></li>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><span></span></li>
                                <li className="w-full flex items-center ps-12 flex-row gap-1 rounded py-1 hover:bg-gray-800"><span></span></li>
                            </ul>
                        </li>
                        <li className={`${currentRoute === "/report" ? "bg-gray-800" : ""} hover:bg-gray-800 ps-8 rounded-sm py-2 w-full flex items-center flex-row cursor-pointer`} onClick={() => redirectRoute("/report")}>
                            <div className="flex items-center gap-2 flex-row items-center w-full">
                                <ion-icon name="document"></ion-icon>
                                <span>Report</span>
                                <div  onClick={() => toggleChevronIcon("report")} className={`mt-2 cursor-pointer ${toggleItemChevronIcon["report"] ? "transformChevron" : ""}`}><ion-icon name="caret-forward-outline"></ion-icon></div>
                            </div>
                        </li>
                        <li className={`${currentRoute === "/settings" ? "bg-gray-800" : ""} hover:bg-gray-800 ps-8 rounded-sm py-2 w-full flex items-center flex-row cursor-pointer`} onClick={() => redirectRoute("/settings")}>
                            <div className="flex items-center gap-2 flex-row items-center w-full">
                                <ion-icon name="settings"></ion-icon>
                                <span>Settings</span>
                                <div onClick={() => toggleChevronIcon("settings")} className={`mt-2 cursor-pointer ${toggleItemChevronIcon["settings"] ? "transformChevron" : ""}`}><ion-icon name="caret-forward-outline"></ion-icon></div>
                            </div>
                        </li>
                    </ul>
                    <ul className="absolute bottom-8 hover:bg-gray-800 ps-8 rounded-sm py-2 w-full flex">
                        <li className="flex flex-row items-center gap-2">
                            <ion-icon name="log-out"></ion-icon>
                            <span>Logout</span>
                        </li>
                    </ul>
            </nav>
            {/* views for items  */}
            <div className="w-full flex items-start h-full justify-start overflow-x-hidden">
                {/* Render the child content passed into Layout */}
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Nav;