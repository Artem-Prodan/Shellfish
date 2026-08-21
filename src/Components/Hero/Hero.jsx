import { Link } from "react-router-dom";
import "./Hero.css";
import { useEffect, useRef } from "react";


export default function Hero({setShowHeaderReserve}) {
  const heroButtonRef = useRef(null);

  useEffect(()=>{
    const button = heroButtonRef.current;

    if(!button) return;

    // Observer which tracks when button is visible or not
    const observer = new IntersectionObserver(
      ([entry]) =>{
        // console.log(entry);
        setShowHeaderReserve(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    observer.observe(button);

    return ()=>{
      observer.disconnect();
    };
  }, [setShowHeaderReserve]);

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>It's okay to be <br/>a little Shellfish</h1>

          <a ref={heroButtonRef}
             href="#reservation"
             className="hero__button">
            Reserve
          </a>
        </div>
      </div>
    </section>
  );
}