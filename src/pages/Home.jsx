import Hero from "../Components/Hero";
import Explore from "../Components/Explore";
import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/explore') {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }else{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });  
    }
  }, [location]);
  
  
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
