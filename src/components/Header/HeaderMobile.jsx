import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import SidebarMobile from "../Sidebar/SidebarMobile";
import ThemeChange from "../ThemeChange/ThemeChange";
import logo from "../../assets/logo-sin-fondo.png";

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="lg:hidden w-full h-14 flex justify-between items-center px-5 shadow-md shadow-gray-300 bg-gray-100 dark:bg-gray-900 ">
                <div className="">
                    <img className="w-[40px] h-[40px]" src={logo} alt="logo" />
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="w-[60px]">
                        <ThemeChange />
                    </div>
                    <IoMenu onClick={() => setIsOpen(!isOpen)} className="text-4xl cursor-pointer text-gray-500 dark:text-gray-300" />
                </div>
            </div>
            {isOpen && <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
    )
}

export default HeaderMobile;
