import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
            </div>
          }
        />

        {/* DemoLe Page Route */}
        
      </Routes>
    </>
  );
};

export default App;
