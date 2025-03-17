import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Products from "./components/Products"
const App = () => {
  return (
    <>
      {/* Routes should be the main container */}
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Hero />
              <Products />
              <About />
            </div>
          }
        />

        {/* DemoLe Page Route */}
        
      </Routes>
    </>
  );
};

export default App;
