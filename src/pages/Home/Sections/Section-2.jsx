import { CgArrowLongRight } from "react-icons/cg";
import { motion } from "framer-motion";
import useCountdown from "../../../hooks/useCountdown";
import ImgDescuento from "../../../assets/img-descuento.svg";
import ImgAlerta from "../../../assets/img-alerta.svg";

const Section2 = () => {
    const targetDate = new Date('2025-02-19T23:59:59');
    const { days, hours, minutes, seconds } = useCountdown(targetDate);
    
    return (
        <motion.div
            id="/newsletter"
            className="relative w-full xl:h-[620px] 2xl:h-[650px] flex flex-col gap-8 py-10 bg-gradient-to-l from-[#dadada] to-white dark:bg-gradient-to-l dark:from-[#0f0f0f] dark:to-[#0f0f0f] overflow-hidden"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div class="absolute top-[-120px] right-[-100px] xl:right-16 w-32 xl:w-32 h-[500px] bg-gradient-to-l from-[#9e9e9e] to-[#eaeaea]  transform -rotate-45  shadow-[-30px_0_55px_#b2b2b2] dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black dark:shadow-black"/>
            <div class="absolute bottom-[-150px] left-[-120px] xl:left-16 w-32 h-[600px] bg-gradient-to-l from-[#9e9e9e] to-[#eaeaea] transform -rotate-45  shadow-[-30px_0_55px_#b2b2b2] dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black dark:shadow-black"/>

            <motion.img 
                src={ImgDescuento}
                alt="Descuento"
                className="hidden lg:flex absolute lg:w-56 lg:h-54 xl:w-80 xl:h-80 2xl:w-[350px] 2xl:h-[350px] bottom-28 2xl:left-80"
                animate={{
                y: ['0px', '-15px', '0px'], // Movimiento hacia arriba y abajo
                rotate: [0, 5, 0], // Rotación ligera
                }}
                transition={{
                duration: 2, // Duración de la animación
                ease: 'easeInOut', // Efecto de suavizado
                repeat: Infinity, // Repetir infinitamente
                }}
            />

            <motion.img 
                src={ImgAlerta}
                alt="Alerta"
                className="hidden lg:flex absolute lg:w-56 lg:h-54 xl:w-72 xl:h-72 bottom-32 2xl:w-[340px] 2xl:h-[340px] right-5 2xl:right-80"
                animate={{
                y: ['0px', '-15px', '0px'], // Movimiento hacia arriba y abajo
                rotate: [0, 5, 0], // Rotación ligera
                }}
                transition={{
                duration: 2, // Duración de la animación
                ease: 'easeInOut', // Efecto de suavizado
                repeat: Infinity, // Repetir infinitamente
                }}
            />

            <div className="flex flex-col text-center lg:gap-4 px-10 z-10">
                <motion.div
                    className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-extrabold text-zinc-900 dark:text-gray-200"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    Se de los primeros en obtener la APP
                </motion.div>
                <div 
                    className="text-3xl sm:text-3xl lg:text-5xl 2xl:text-5xl font-extrabold text-yellow-500" 
                    style={{ textShadow: '1px 3px 3px rgba(0, 0, 0, 0.2)' }}
                >
                    nuestro LANZAMIENTO en:
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 lg:gap-4 xl:gap-8 2xl:gap-12 xl:py-5 2xl:py-8 z-10">
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold italic text-zinc-900 dark:text-gray-200">{days}</div>
                    <div 
                        className="text-md lg:text-lg xl:text-2xl 2xl:text-3xl font-bold italic text-yellow-500"
                        style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)' }}
                    >
                        Dias
                    </div>
                </div>
                <div className="bg-zinc-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-28 2xl:h-32"></div>
                <div className="flex flex-col items-center px-2">
                    <div className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold italic text-zinc-900 dark:text-gray-200">{hours}</div>
                    <div 
                        className="text-md lg:text-lg xl:text-2xl 2xl:text-3xl font-bold italic text-yellow-500"
                        style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)' }}
                    >
                        Horas
                    </div>
                </div>
                <div className="bg-zinc-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-28 2xl:h-32"></div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold italic text-zinc-900 dark:text-gray-200">{minutes}</div>
                    <div 
                        className="text-md lg:text-lg xl:text-2xl 2xl:text-3xl font-bold italic text-yellow-500"
                        style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)' }}
                    >
                        Minutos
                    </div>
                </div>
                <div className="bg-zinc-900 dark:bg-gray-200 w-[2px] h-14 lg:h-16 xl:h-28 2xl:h-32"></div>
                <div className="flex flex-col items-center">
                    <div className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold italic text-zinc-900 dark:text-gray-200">{seconds}</div>
                    <div 
                        className="text-md lg:text-lg xl:text-2xl 2xl:text-3xl font-bold italic text-yellow-500"
                        style={{ textShadow: '1px 2px 2px rgba(0, 0, 0, 0.2)' }}>
                        Segundos
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center px-8 xl:py-5 gap-3 z-10">
                <div className="flex flex-col xl:flex-row justify-center items-center gap-4 lg:pb-2 ">
                    <input 
                        type="text" 
                        placeholder="Correo Electronico" 
                        className="w-full max-w-md px-5 py-3 rounded-full text-lg font-semibold outline-none shadow-md shadow-gray-400 border-[1px] border-gray-200 focus:border-[#fdbf22] focus:ring-2 focus:ring-[#fdbf22] placeholder-gray-500 placeholder:text-base placeholder:font-medium dark:bg-black dark:shadow-black dark:shadow-lg dark:placeholder-[#fdbf22] dark:border-[#1d1d1d] dark:text-gray-200 transition-all duration-300 ease-in-out"
                    />
                    <button className="w-full max-w-md xl:w-36 bg-yellow-500 text-black px-5 py-3 rounded-full flex flex-row justify-center items-center gap-2 hover:text-gray-100 shadow-[inset_0_-4px_10px_rgba(0,0,0,0.4)] dark:shadow-black dark:shadow-[inset_0_-4px_10px_rgba(0,0,0,0.8)] transition-all duration-500 ease-in-out">
                        <div className="text-lg font-semibold"> Enviar</div>
                        <CgArrowLongRight className="text-xl" />
                    </button>
                </div>
                <div className="text-center text-md lg:text-lg xl:text-xl leading-5 xl:pt-5 text-gray-900  dark:text-gray-200">
                    Registrate para desbloquear Features de la App
                </div>
            </div>
        </motion.div>
    );
};

export default Section2;
