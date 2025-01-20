import { motion } from "framer-motion";
import BgImg from "../../../assets/img-bg-section3.svg";
import MacImg from "../../../assets/mac.svg";
import ImgPhone from "../../../assets/16.png";

const Section3 = () => {
    return (
        <div className="w-full bg-gray-100 flex flex-col lg:flex-row dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
            <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row w-full">
                <div className="w-full lg:w-[450px] bg-gray-100 flex flex-col justify-center dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
                    <div className="text-2xl xl:text-3xl 2xl:text-4xl text-center flex flex-col font-extrabold p-5 ">
                        <span className="text-black dark:text-gray-50">
                            TRANSFORMA TUS HÁBITOS
                        </span>
                        <span 
                            className="text-[#fdbf22]"
                            style={{ textShadow: '1px 3px 3px rgba(0, 0, 0, 0.2)' }}
                        >
                            TRANSFORMA TUS RESULTADOS
                        </span>
                    </div>
                    <img src={ImgPhone} alt="Phone" className="w-8/12 md:w-8/12 lg:w-[355px] 2xl:w-[300px] mx-auto" />
                </div>
                <div className="flex-1 bg-gray-100 xl:border-x xl:border-gray-300 dark:border-black dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
                    <div className="h-96 hidden lg:flex">
                        <img src={BgImg} alt="Imagen" className=" w-full h-full object-cover object-center" />
                    </div>
                    <div className="text-lg xl:text-xl text-center lg:py-8 px-4 lg:px-8 dark:text-gray-50">
                        <div className="flex p-4 rounded-xl lg:bg-transparent shadow-lg lg:shadow-none  dark:shadow-zinc-950 lg:dark:shadow-none">
                            <p>
                                <strong>Traders Tracker</strong> es la App diseñada para impulsarte a superar tus barreras y alcanzar fácilmente los objetivos y hábitos que antes creías fuera de tu alcance.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center lg:hidden">
                        <motion.img 
                            src={MacImg} 
                            alt="Mac" 
                            className="w-8/12 md:w-6/12 lg:w-60 py-5"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section3;
