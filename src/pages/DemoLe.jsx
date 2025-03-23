import DemoLeHero from "../components/DemoLeHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import DemoLeProductDescription from "../components/DemoLeProductDescription";
const DemoLe = () => {
    return (
        <div>
            <Header />
            <DemoLeHero />
            <DemoLeProductDescription />
            <Footer />
        </div>
    );
};

export default DemoLe;