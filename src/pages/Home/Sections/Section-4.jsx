import { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const Section4 = () => {

    const [selectedPlan, setSelectedPlan] = useState(false);
    return (
        <div className="w-full  flex flex-col items-center justify-center py-12 gap-6 bg-black">
            <div className="flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-yellow-500 ">Suscripción</div>
                <div className="text-md font-medium text-gray-900 dark:text-gray-100">
                    Escoge el tiempo que funcione más para ti.
                </div>
            </div>
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => setSelectedPlan(!selectedPlan)}
                    className="w-72 h-12 relative bg-white dark:bg-gray-800 rounded-full cursor-pointer shadow-md"
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
            <div className="w-64 h-96 py-4 px-5  flex flex-col justify-between items-center bg-gray-100 rounded-2xl shadow-md shadow-gray-500">
                <div className="w-full flex flex-col items-center gap-4">
                    <div className="flex flex-col items-center">
                        <div className="text-xl font-bold">Mes</div>
                        <div className=" flex flex-row items-center gap-2">
                            <div className="text-3xl font-bold">$7.18</div>
                            <div className="text-xl font-medium">/ mes</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-start">
                        <div className="flex flex-row items-center gap-2">
                            <BsCheckCircleFill className="text-black" />
                            <div className="text-sm font-semibold">Acceso a todas las funciones</div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <BsCheckCircleFill className="text-black" />
                            <div className="text-sm font-semibold">Acceso a todas las funciones</div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <BsCheckCircleFill className="text-black" />
                            <div className="text-sm font-semibold">Acceso a todas las funciones</div>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <BsCheckCircleFill className="text-black" />
                            <div className="text-sm font-semibold">Acceso a todas las funciones</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center px-5">
                    <button className="w-full h-12 bg-yellow-500 rounded-full text-white font-medium">
                        Obtener ahora
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Section4;