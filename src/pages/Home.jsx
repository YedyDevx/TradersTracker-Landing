import {  Element } from 'react-scroll';
import Section1 from "./Sections/Section-1";
import Section2 from "./Sections/Section-2";

const Home = () => {
    return (
        <div className="w-full min-h-screen flex flex-col  items-center bg-gray-200 dark:bg-gray-800">
            <div className="w-full flex flex-col gap-4 pb-16">
                <Element name="home">
                    <Section1 />
                </Element>
                <Element name="newsletter">
                    <Section2 />
                </Element>
                <Element name="plans" className="h-screen bg-yellow-500">
                    
                </Element>
            </div>
        </div>
    );
};

export default Home;
