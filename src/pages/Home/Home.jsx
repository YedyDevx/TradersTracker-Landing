import {  Element } from 'react-scroll';
import Section1 from "./Sections/Section-1";
import Section2 from "./Sections/Section-2";
import Section3 from "./Sections/Section-3";
import Section4 from "./Sections/Section-4";

const Home = () => {
    return (
        <div className=" min-h-screen flex flex-col  items-center bg-gray-200 dark:bg-gray-800">
            <div className="w-full flex flex-col">
                <Element name="home">
                    <Section1 />
                </Element>
                <Element name="newsletter">
                    <Section2 />
                </Element>
                <Element name="about">
                    <Section3/>
                </Element>
                <Element name="plans">
                    <Section4/>
                </Element>
            </div>
        </div>
    );
};

export default Home;
