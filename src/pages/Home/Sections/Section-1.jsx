import logo from "../../../assets/logo-con-negro.png";
import google from "../../../assets/play-store-logo.png";
import ImgLigth from "../../../assets/bg-ligth.svg";
import { FaApple } from "react-icons/fa6";
import { useTheme } from "../../../hooks/useTheme";
import { useEffect } from "react";
import Img from "../../../assets/1_1_.png"

const Section1 = () => {
    const { theme } = useTheme();
    useEffect(() => {
        console.log(theme);
    }, [theme]);
    return (
        <div className=" relative w-full xl:h-[620px] 2xl:h-[650px]  py-8 flex flex-col gap-10 lg:gap-20 items-center justify-cente">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800">
                <img src={ImgLigth} alt="bg-ligth" className="w-full h-full object-cover  dark:invert dark:contrast-125" />
            </div>
            <div className="w-full flex flex-col lg:flex-row  items-center justify-center gap-20 relative z-10">
                <div className="max-w-[300px] md:max-w-[400px] xl:max-w-[480px] 2xl:max-w-[560px] flex flex-col items-center justify-center gap-4 relative">
                    <div className="flex flex-col items-center gap-2">
                        <div className="px-5 lg:px-8 text-sm lg:text-base py-1.5 rounded-full bg-gray-50 font-semibold shadow-[inset_0_-4px_10px_rgba(0,0,0,0.4)] shadow-gray-600 mb-4">
                            Únete a una nueva comunidad!
                        </div>
                        <div className="logo-text">
                            <div className="traders text-zinc-900 dark:text-gray-100">Traders</div>
                            <div className="tracker text-yellow-500">Tracker</div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex items-center w-[70px] h-[70px] md:w-[80px] md:h-[80px] xl:w-[90px] xl:h-[90px] 2xl:w-[100px] 2xl:h-[100px]">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="flex md:text-lg xl:text-xl 2xl:text-2xl md:leading-6 text-center font-semibold text-gray-900 dark:text-gray-200">
                            Conviértete en un trader más organizado y efectivo
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex flex-row items-center gap-10">
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
                        </div>
                        <div className="flex flex-col items-center mt-3">
                            <div className="font-bold text-sm xl:text-xl text-gray-900 dark:text-gray-200">Empieza a registrar tus hábitos hoy!</div>
                            <div className="font-bold text-sm xl:text-xl text-[#fdbf22]">¡Descárgalo ya!</div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex w-[450px]  2xl:w-[500px]  items-center justify-center0">
                    <img src={Img} alt="img" className="w-full h-full " />
                </div>
            </div>
        </div>
    );
};

export default Section1;
