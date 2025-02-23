import Navbar from "../components/Navbar"
import { gsap } from "gsap";
import { useEffect } from "react";
function Home(){

  useEffect(() => {
    gsap.from(".hero", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

    return (
      <main>
        <Navbar/>
        <div className="particle-container">
        {/* <ParticlesBackground /> */}
        </div>
        <div className="hero">
        <div className="pink-gradient"></div>
        <div className="blue-gradient"></div>
        <div className="white-gradient"></div>
          <h1>Find My Stuff</h1>
          <a href="/find">
            <button style={{ fontWeight: 600 }}>Find item</button>
          </a>
        </div>
        {/* <About /> */}
      </main>
    );
} 
export default Home; 