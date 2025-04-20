import Header from "../components/Header";
import About from "../components/About";
import Footer from "../components/Footer";
import { StarsBackground } from "../design/StarsBackground";
import Values from "../components/Values";

const AboutPage = () => {
    return (
        <div className="relative top-[5rem] bg-black">
            <StarsBackground />
            <Header />
            <main>
                <About />
                <Values />
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;