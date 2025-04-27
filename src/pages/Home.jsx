import Hero from "../Components/Hero";
import Explore from "../Components/Explore";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
