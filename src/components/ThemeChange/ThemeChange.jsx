"use client"
import { useState, useEffect } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";

// Script que se ejecuta inmediatamente
const initializeTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  }
};

// Ejecutar antes de que se monte el componente
initializeTheme();

const ThemeChange = () => {
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return savedTheme === 'dark' || (!savedTheme && prefersDark);
        }
        return false;
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');  
        }
    }, [darkMode]);

    // Evitar la hidratación incorrecta
    if (!mounted) {
        return null;
    }

    return (
        <div 
        onClick={() => setDarkMode(!darkMode)} 
        role="switch" 
        aria-checked={darkMode} 
        className="bg-gray-800 dark:bg-yellow-500 w-14 h-7 flex relative rounded-full cursor-pointer transition-colors duration-300 ease-in-out"
        >
            <div className={`w-5 h-5 bg-gray-100 rounded-full absolute top-1 transition-all duration-300 ease-in-out ${darkMode ? "right-1" : "left-1"}`}/>
            <div className={`w-4 h-4 rounded-full absolute top-1 transition-all duration-300 ease-in-out ${darkMode ? "left-2" : "right-2"}`}>
                {!darkMode ? (
                    <IoIosMoon className="text-xl text-white" />
                    ) : (
                    <IoIosSunny className="text-xl text-white" />
                )}
            </div>
        </div>
    );
};

export default ThemeChange;