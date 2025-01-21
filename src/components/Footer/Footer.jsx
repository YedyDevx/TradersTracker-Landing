import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import google from "../../assets/play-store-logo.png";
import ImgPhone from "../../assets/16.png";
import ImgFooter from "../../assets/logo-footer.svg";

const Footer = () => {  
    const navItems = [
        { name: 'Inicio', to: 'home' },
        { name: 'Lista de Espera', to: 'newsletter' },
        { name: 'Plan', to: 'plans' },
    ];
    
    return (
        <div className="w-full px-6 py-4 xl:px-0 xl:py-0  xl:pt-4  bg-gradient-to-l from-gray-300 to-gray-100 flex justify-center items-center dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
            <div className="w-[1300px] xl:max-h-64 flex flex-col lg:flex-row  justify-between items-center">
                <div className="flex flex-col items-center gap-5">
                    <img src={ImgFooter} alt="Logo Footer" className="rounded-2xl w-80" />
                    <div className="hidden flex-col items-center  gap-5 lg:flex">
                        <div className="flex gap-5 text-3xl">
                            <FaInstagram className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                            <FaXTwitter className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                            <FaYoutube className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                        </div>
                        <div className="dark:text-gray-100">© 2025 Traders Tracker. All rights reserved.</div>
                    </div>
                </div>
                <div className="flex flex-col items-center py-4 lg-py-0 gap-3">
                    <div className="font-bold text-xl dark:text-yellow-500">Explora</div>
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:font-semibold hover:text-yellow-500  transition-all duration-500 ease-in-out dark:text-gray-100 dark:hover:text-yellow-500"
                        >
                            {item.name}
                        </ScrollLink>
                    ))}
                    <RouterLink to="/terms" className="text-center cursor-pointer hover:font-bold hover:text-yellow-500 transition-all duration-500 ease-in-out dark:text-gray-100 dark:hover:text-yellow-500">
                        Términos y Condiciones
                    </RouterLink>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="font-bold text-xl text-center dark:text-yellow-500">Descargalo</div>
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-[150px] xl:w-[200px] h-12 xl:h-14 rounded-full flex flex-row items-center justify-center bg-gradient-to-l from-white to-gray-300 shadow-md shadow-gray-600  cursor-pointer">
                            <div className="w-[146px] xl:w-[196px] h-[44px] xl:h-[52px] rounded-full flex  gap-2 items-center justify-center bg-gradient-to-l from-gray-200 to-gray-50  hover:opacity-80 cursor-pointer">
                                <FaApple className="text-4xl text-zinc-900"  />
                                <div className="text-sm font-bold text-zinc-800 xl:text-lg">App Store</div>
                            </div>
                        </div>
                        <div className="w-[150px] xl:w-[200px] h-12 xl:h-14 rounded-full flex flex-row items-center justify-center bg-gradient-to-l from-white to-gray-300 shadow-md shadow-gray-600  cursor-pointer">
                            <div className="w-[146px] xl:w-[196px] h-[44px] xl:h-[52px] rounded-full flex  items-center justify-center bg-gradient-to-l from-gray-200 to-gray-50  hover:opacity-80 cursor-pointer">
                                <img className="w-[35px] h-[35px] xl:w-[45px] xl:h-[45px]" src={google} alt="google" />
                                <div className="text-sm font-bold text-zinc-800 xl:text-lg">Google Play</div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-5  lg:hidden">
                            <div className="flex gap-5 text-3xl">
                                <FaInstagram className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                                <FaXTwitter className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                                <FaYoutube className="text-zinc-800 hover:text-yellow-500 cursor-pointer dark:text-yellow-500 dark:hover:text-gray-100" />
                            </div>
                            <div className="dark:text-gray-100">© 2025 Traders Tracker.</div>
                            <div className="dark:text-gray-100">All rights reserved.</div>
                        </div>
                    </div>
                </div>
                <img src={ImgPhone} alt="Phone" className="w-[315px] relative top-[-50px]  hidden xl:flex"/>
            </div>
        </div>
    );
};

export default Footer;
