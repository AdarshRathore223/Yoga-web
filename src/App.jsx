import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Explore from "./Components/Explore";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="font relative">
      {/* Navbar */}
      <div className="fixed top-0 w-full z-30 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        <Navbar />
      </div>

      <div className="relative">
        {/* Hero (front) */}
        <div className="relative h-screen z-20 flex items-center justify-center">
          <Hero />
        </div>

        {/* Explore (background) */}
        <div className="sticky inset-0 z-10">
          <Explore />
        </div>
      </div>

      {/* Footer */}
      <div className="relative -z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
