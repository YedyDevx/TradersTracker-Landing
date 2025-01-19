import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import ImgLigth from "../../../assets/bg-ligth.svg";

const Section4 = () => {
    const [selectedPlan, setSelectedPlan] = useState(false);

    const monthlyPrice = 7.18;
    const annualPrice = (monthlyPrice * 10).toFixed(2); // 12 meses - 2 meses gratis = 10 meses

    return (
        <div className=" relative w-full flex flex-col items-center justify-center py-12 gap-6 bg-black">
            <div className="absolute top-0 left-0 w-full h-full bg-gray-200 dark:bg-gray-800 ">
                <img src={ImgLigth} alt="bg-ligth" className="w-full h-full object-cover  dark:invert dark:contrast-125" />
            </div>
            <div className="flex flex-col items-center justify-center relative z-10">
                <div className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-yellow-500">Suscripción</div>
                <div className="text-md font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-gray-900 dark:text-gray-100">
                    Escoge el tiempo que funcione más para ti.
                </div>
            </div>
            <div className="flex items-center gap-4 z-10">
                <button 
                    onClick={() => setSelectedPlan(!selectedPlan)}
                    className="w-72 h-12 relative bg-white dark:bg-gray-800 rounded-full cursor-pointer shadow-md "
                >
                    <div 
                        className={`absolute top-1 h-10 w-32 bg-yellow-500 rounded-full transition-all duration-300 ease-in-out ${
                            selectedPlan ? 'left-[124px] w-40' : 'left-1'
                        }`}
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex">
                        <span className={`flex-1 flex items-center justify-center font-medium ${
                            !selectedPlan ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                            Mensual
                        </span>
                        <span className={`flex-1 flex items-center justify-center font-medium pr-2.5 ${
                            selectedPlan ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                            Anual
                            {selectedPlan && <span className="ml-1 text-xs font-medium text-gray-900">2 meses gratis</span>}
                        </span>
                    </div>
                </button>
            </div>

            {/* Card Container */}
            <div className="z-10 w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px]  h-96 sm:h-[410px] md:h-[460px] lg:h-[600px] xl:h-[700px]  relative [perspective:1000px]">
                {/* Card */}
                <div 
                    className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${
                        selectedPlan ? '[transform:rotateY(180deg)]' : ''
                    }`}
                    style={{ 
                        transformOrigin: 'center',
                        WebkitBackfaceVisibility: 'hidden',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {/* Front - Monthly */}
                    <div className="absolute w-full h-full flex flex-col justify-between py-4 px-5 bg-gray-100 rounded-2xl shadow-md shadow-gray-500"
                        style={{ 
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'translateZ(1px)',
                            WebkitTransform: 'translateZ(1px)'
                        }}
                    >
                        <div className="w-full flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <div className="text-xl font-bold sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl">Mes</div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl">${monthlyPrice}</div>
                                    <div className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">/ mes</div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-start gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl">Acceso a todas las funciones</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="w-full h-12 bg-yellow-500 rounded-full text-white font-medium hover:bg-yellow-600 transition-colors">
                                Obtener ahora
                            </button>
                        </div>
                    </div>

                    {/* Back - Annual */}
                    <div className="absolute w-full h-full flex flex-col justify-between py-4 px-5 bg-gray-100 rounded-2xl shadow-md shadow-gray-500"
                        style={{ 
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg) translateZ(1px)',
                            WebkitTransform: 'rotateY(180deg) translateZ(1px)'
                        }}
                    >
                        <div className="w-full flex flex-col items-center gap-4">
                            <div className="flex flex-col items-center">
                                <div className="text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">Año</div>
                                <div className="flex flex-row items-center gap-2">
                                    <div className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl ">${annualPrice}</div>
                                    <div className="text-xl font-medium sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">/ año</div>
                                </div>
                                <div className="text-sm text-green-600 font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">2 meses gratis</div>
                            </div>
                            <div className="w-full flex flex-col justify-start gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <BsCheckCircleFill className="text-black sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl" />
                                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-2xl xl:text-3xl ">Acceso a todas las funciones</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center">
                            <button className="w-full h-12 bg-yellow-500 rounded-full text-white font-medium hover:bg-yellow-600 transition-colors">
                                Obtener ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section4;