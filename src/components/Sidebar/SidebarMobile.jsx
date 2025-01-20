"use client"
import { VscChromeClose } from "react-icons/vsc";
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const SidebarMobile = ({ isOpen, setIsOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: 'Inicio', to: 'home' },
        { name: 'Lista de Espera', to: 'newsletter' },
        { name: 'Plan', to: 'plans' },
    ];

    return (
        <>
            {/* Overlay */}
            <div 
                onClick={() => setIsOpen(false)}
                className={`
                    lg:hidden
                    fixed inset-0 bg-black/50 backdrop-blur-sm
                    transition-all duration-700 ease-in-out
                    ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
                    z-40
                `}
            />
            {/* Sidebar */}
            <aside 
                className={`
                    lg:hidden
                    fixed top-0 h-full w-[250px] 
                    bg-white dark:bg-gray-800 shadow-xl
                    transition-all duration-700 ease-in-out transform
                    ${mounted ? (isOpen 
                        ? 'right-0 translate-x-0 opacity-100' 
                        : 'right-0 translate-x-full opacity-0'
                    ) : 'right-0 translate-x-full'}
                    z-50
                `}
            >
                <div className="p-6 h-full flex flex-col gap-8 text-slate-900 dark:text-white bg-gradient-to-l from-[#9e9e9e] to-[#eaeaea] dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black shadow-lg rounded-lg">
                    <div className="text-2xl font-semibold flex flex-row items-center gap-4">
                        <VscChromeClose
                        onClick={() => setIsOpen(false)}
                        className="text-3xl cursor-pointer hover:text-red-500 transition-colors"
                        />
                        <div>Menu</div>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="w-full text-center cursor-pointer px-6 py-2 rounded-xl text-lg font-semibold bg-white dark:bg-yellow-500 hover:bg-[#fdbf22] hover:text-black shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
                        >
                            {item.name}
                        </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SidebarMobile;