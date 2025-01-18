import BgImg from "../../../assets/img-bg-section3.svg";

const Section3 = () => {
    return (
      <div className="w-full h-[500px] bg-gray-100 flex flex-col 2xl:px-96 lg:flex-row dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
        <div className="w-full lg:w-[450px] bg-gray-100 flex flex-col py-6 dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
            <div className="text-2xl xl:text-3xl 2xl:text-4xl text-center flex flex-col font-extrabold">
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
        </div>
        <div className="flex flex-1 flex-col bg-gray-100 border-l-[1px] border-gray-300  dark:border-black dark:bg-gradient-to-l dark:from-[#1d1d1d] dark:to-black">
           <div className="h-96 bg-black">
                <img src={BgImg} alt="Imagen" className="w-full h-full object-cover object-center hidden lg:flex" />
           </div>
           <div className="text-lg xl:text-xl text-center py-5 px-4 lg:px-8 dark:text-gray-50">
                <span className="font-bold">Traders Tracker</span> es la App diseñada para impulsarte a superar tus barreras y alcanzar fácilmente los objetivos y hábitos que antes creías fuera de tu alcance.
           </div>
        </div>
      </div>
    );
};

export default Section3;

  