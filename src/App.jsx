import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DemoLe from "./pages/DemoLe";
import Page from "./pages/page";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/DemoLe" element={<DemoLe />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </>
  );
};

export default App;
