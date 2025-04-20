import Hero from "../components/Hero";
import Header from "../components/Header";
import Products from "../components/Products";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";

const HomePage = () => {
    return (
        <div className="bg-black">
            <Header />
            <main>
                <Hero />
                <Products />
                <Stats />
                <Testimonials />
                <Pricing />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;