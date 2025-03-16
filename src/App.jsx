import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Header from "./components/Header";
import OurTeam from "./components/OurTeam";
import { Paragraph1 } from "./components/Manifesto";
import { Paragraph2 } from "./components/Manifesto";
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
              <Paragraph1 />
              <Paragraph2 />
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
