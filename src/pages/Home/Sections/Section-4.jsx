import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import ImgLigth from "../../../assets/bg-ligth.svg";
import ImgBox from "../../../assets/box.svg";
import ImgTime from "../../../assets/time.svg";
import ImgBook from "../../../assets/book.svg";
import ImgPesa from "../../../assets/pesa.svg";

const MotionLink = motion.a;

const benefitsVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const priceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut"
    }
  }
};

const Section4 = () => {
  const [selectedPlan, setSelectedPlan] = useState(false);

  const monthlyPrice = 7.18;
  const annualPrice = (monthlyPrice * 10).toFixed(2);

  const planDetails = {
    monthly: {
      price: monthlyPrice,
      title: "Mes",
      priceText: "/ mes",
      benefits: [
        "Hábitos ilimitados",
        "Recordatorios avanzados (Basados en tu ubicación y horario)",
        "Modo Monje",
        "Calendario / Journal Trade",
        "Proximamente integración de Apple Health",
        "Proximamente integraciones de calendario (Apple y Google)",
      ],
      link: "https://www.facebook.com",
    },
    annual: {
      price: annualPrice,
      title: "Año",
      priceText: "/ año",
      benefits: [
        "Hábitos ilimitados",
        "Recordatorios avanzados (Basados en tu ubicación y horario)",
        "Modo Monje",
        "Calendario / Journal Trade",
        "Proximamente integración de Apple Health",
        "Proximamente integraciones de calendario (Apple y Google)",
      ],
      link: "https://www.youtube.com",
    },
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center py-12 gap-6 bg-black">
      
      <motion.img 
        src={ImgBox}
        alt="Descuento"
        className="hidden xl:flex absolute xl:w-[450px] 2xl:w-[600px] top-50 2xl:top-[-80px] xl:left-[-15px] 2xl:left-[-20px] z-20 overflow-hidden"
        animate={{
        y: ['6px', '10px', '6px'], // Movimiento hacia arriba y abajo
        rotate: [0, 2, 0], // Rotación ligera
        }}
        transition={{
        duration: 2, // Duración de la animación
        ease: 'easeInOut', // Efecto de suavizado
        repeat: Infinity, // Repetir infinitamente
        }}
      />
      <motion.img 
        src={ImgPesa}
        alt="Descuento"
        className="hidden xl:flex absolute xl:w-[400px] 2xl:w-[600px] bottom-32 2xl:bottom-20 right-2 2xl:right-10 z-20 overflow-hidden"
        animate={{
        y: ['0px', '5px', '0px'], // Movimiento hacia arriba y abajo
        rotate: [0, 2, 0], // Rotación ligera
        }}
        transition={{
        duration: 2, // Duración de la animación
        ease: 'easeInOut', // Efecto de suavizado
        repeat: Infinity, // Repetir infinitamente
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full dark:bg-gray-800">
        <img
          src={ImgLigth}
          alt="bg-ligth"
          className="w-full h-full object-cover dark:invert dark:contrast-125"
        />
      </div>
      <div className="flex flex-col items-center justify-center relative z-10">
        <motion.img 
          src={ImgBook}
          alt="Alerta"
          className="hidden xl:flex absolute xl:w-36 2xl:w-52 top-10 -left-44 xl:-left-72 z-20"
          animate={{
          y: ['0px', '-10px', '0px'], // Movimiento hacia arriba y abajo
          rotate: [15, 3, 15], // Rotación ligera
          }}
          transition={{
          duration: 2, // Duración de la animación
          ease: 'easeInOut', // Efecto de suavizado
          repeat: Infinity, // Repetir infinitamente
          }}
        />
        <motion.img 
          src={ImgTime}
          alt="Descuento"
          className="hidden xl:flex absolute xl:w-64 2xl:w-[350px] top-1 -right-44 xl:-right-96 z-20"
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold md:text-4xl lg:text-5xl text-yellow-500"
          style={{ textShadow: "1px 3px 3px rgba(0, 0, 0, 0.2)" }}
        >
          Suscripción
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md font-medium sm:text-2xl md:xt-xl lg:text-2xl text-gray-900 dark:text-gray-100 pt-3 px-10 lg:px-0 text-center"
        >
          Escoge el tiempo que funcione más para ti.
        </motion.div>
      </div>
      <div className="flex items-center gap-4 z-10">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          onClick={() => setSelectedPlan(!selectedPlan)}
          className="w-72 h-12 relative bg-white dark:bg-[#1d1d1d] rounded-full cursor-pointer shadow-md overflow-hidden"
        >
          <motion.div
            className="absolute top-1 h-10 bg-yellow-500 rounded-full"
            initial={false}
            animate={{
              left: selectedPlan ? "124px" : "4px",
              width: selectedPlan ? "160px" : "128px",
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30,
              bounce: 0.25
            }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex">
            <motion.span
              animate={{
                color: !selectedPlan ? "#111827" : "#4B5563",
              }}
              className="flex-1 flex items-center justify-center font-medium"
            >
              Mensual
            </motion.span>
            <motion.span
              animate={{
                color: selectedPlan ? "#111827" : "#4B5563",
              }}
              className="flex-1 flex items-center justify-center font-medium pr-2.5"
            >
              Anual
              {selectedPlan && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="ml-1 text-xs font-medium text-gray-900"
                >
                  2 meses gratis
                </motion.span>
              )}
            </motion.span>
          </div>
        </motion.button>
      </div>

      <div className="z-10 w-72 sm:w-72 md:w-80 lg:w-96 h-[460px] md:h-[460px] lg:h-[600px] xl:h-[580px] relative perspective">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlan ? "annual" : "monthly"}
            initial={{ 
              opacity: 0,
              rotateY: selectedPlan ? 90 : -90,
              scale: 0.9
            }}
            animate={{ 
              opacity: 1,
              rotateY: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.6
              }
            }}
            exit={{ 
              opacity: 0,
              rotateY: selectedPlan ? -90 : 90,
              scale: 0.9,
              transition: {
                duration: 0.4
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="w-full h-full flex flex-col justify-between py-4 px-5 text-gray-50 dark:text-black bg-gradient-to-l from-[#1d1d1d] to-black rounded-[32px] shadow-md shadow-zinc-600 dark:bg-gradient-to-l dark:from-[#aeaeae] dark:to-white">
              <div className="w-full flex flex-col items-center gap-4">
                <motion.div 
                  className="flex flex-col items-center"
                  variants={priceVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="text-3xl font-bold lg:text-4xl">
                    {selectedPlan ? planDetails.annual.title : planDetails.monthly.title}
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <div className="text-3xl font-bold">
                      ${selectedPlan ? planDetails.annual.price : planDetails.monthly.price}
                    </div>
                    <div className="text-lg font-medium sm:text-xl lg:text-2xl">
                      {selectedPlan ? planDetails.annual.priceText : planDetails.monthly.priceText}
                    </div>
                  </div>
                  {selectedPlan && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-green-600 font-medium sm:text-base md:text-lg lg:text-xl"
                    >
                      2 meses gratis
                    </motion.div>
                  )}
                </motion.div>
                <div className="w-full flex flex-col justify-start gap-2">
                  {(selectedPlan ? planDetails.annual : planDetails.monthly).benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      custom={idx}
                      variants={benefitsVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-row items-center gap-4"
                    >
                      <BsCheckCircleFill className="text-white dark:text-black text-xl lg:text-3xl xl:text-3xl 2xl:text-4xl" />
                      <div className="text-sm font-semibold lg:text-lg flex-1">
                        {benefit}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <MotionLink
                  href={selectedPlan ? planDetails.annual.link : planDetails.monthly.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: 0.5,
                      duration: 0.4
                    }
                  }}
                  className="w-full h-12 bg-yellow-500 rounded-full text-white font-semibold hover:bg-yellow-400 hover:text-black transition-colors shadow-[inset_0_-4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center"
                >
                  Obtener ahora
                </MotionLink>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section4;