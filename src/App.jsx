import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import OurTeam from "./components/OurTeam";
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
              <OurTeam />
            </div>
          }
        />

        {/* DemoLe Page Route */}
        
      </Routes>
    </>
  );
};

export default App;
