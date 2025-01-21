import {  Element } from 'react-scroll';
import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/Header/HeaderMobile"
import Section1 from "./Sections/Section-1";
import Section2 from "./Sections/Section-2";
import Section3 from "./Sections/Section-3";
import Section4 from "./Sections/Section-4";
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header/>
            <HeaderMobile/>
            <div className="flex flex-col items-center">
                <div className="w-full flex flex-col">
                    <Element name="home">
                        <Section1 />
                    </Element>
                    <Element name="newsletter">
                        <Section2 />
                    </Element>
                    <Section3/>
                    <Element name="plans">
                        <Section4/>
                    </Element>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};

export default Home;
