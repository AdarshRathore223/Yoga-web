import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="relative font">
      {/* Navbar */}
      <div className="fixed top-0 w-full z-30 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contributors" element={<Contributors />} />
      </Routes>

      {/* Footer */}
      <div className="relative -z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
