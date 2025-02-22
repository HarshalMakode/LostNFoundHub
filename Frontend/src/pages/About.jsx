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
          Welcome to our online community dedicated to helping you find lost
          items and reconnect with cherished possessions. At <span >Lost and Found</span>, we
          understand the heartache and frustration that losing something
          valuable can bring. Whether it's a beloved pet, a sentimental piece of
          jewelry, or a vital piece of equipment, the distress of losing an item
          can be overwhelming. Our mission is simple: to provide a platform
          where people can share information about lost and found items in
          public spaces, fostering a sense of community and support. We firmly
          believe that by coming together, we can increase the chances of
          reuniting lost items with their rightful owners.
        </p>
        <footer>
            <p>Copyright &copy; 2023</p>
        </footer>
      </section>
      </>
    );
}
export default About;