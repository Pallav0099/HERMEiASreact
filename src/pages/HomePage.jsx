import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Products from "../components/Products";
import Footer from "../components/Footer";
const HomePage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Products />
            <Footer />
        </div>
    );
};

export default HomePage;