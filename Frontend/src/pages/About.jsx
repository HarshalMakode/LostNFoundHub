import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import { useEffect } from "react";


function About(){
    
  useEffect(() => {
    gsap.from("#about", {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);
    return (
   <>
      <Navbar/>
      <section id="about">
        
        <h1 className="lfh1">About Us</h1>
        <div className="pink-gradient"></div>
        <div className="blue-gradient"></div>
        <div className="white-gradient"></div>
        <p className="about-desc">
        At FindMyStuff, we know how distressing it can be to lose something valuable—whether it’s a cherished keepsake, an important document, or a beloved pet. That’s why we’ve created a dedicated platform to help you report, track, and recover lost items with ease.

Our mission is simple: to connect people and lost belongings by providing a centralized, community-driven lost-and-found system. By working together, we can improve the chances of reuniting lost items with their rightful owners.

Join our community today and help make lost-and-found stress-free and efficient!
        </p>
        <footer>
            <p>Copyright &copy; 2025</p>
        </footer>
      </section>
      </>
    );
}
export default About;