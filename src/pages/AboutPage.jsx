import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import { StarsBackground } from "../design/StarsBackground";
const AboutPage = () => {
    return (
        <div className="relative top-[5rem]">
            <StarsBackground />
            <Header />
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;