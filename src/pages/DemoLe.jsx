import DemoLeHero from "../components/DemoLeHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import DemoLeProductDescription from "../components/DemoLeProductDescription";
const DemoLe = () => {
    return (
        <div>
            <Header />
            <DemoLeHero />
            <DemoLeProductDescription />
            <Pricing />
            <Footer />
        </div>
    );
};

export default DemoLe;