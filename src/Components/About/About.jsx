import "./About.css";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import test1 from "../../assets/images/test1.png";
import test2 from "../../assets/images/test2.png";
import test3 from "../../assets/images/test3.png";
import test4 from "../../assets/images/test4.png";


const images = [test2, test1, test3, test4];

export default function About() {
  const [frontIndex, setFrontIndex] = useState(1);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setFrontIndex((current)=>(current + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  },[]);

  function getPosition(index){
  if (index === frontIndex){
    return "center";
  }
  if(index === (frontIndex - 1 + images.length) % images.length){
    return "left";
  }
  if(index === (frontIndex + 1) % images.length){
    return "right";
  }
  return "back";
}

const variants = {
  center: {
    x: ["40%", "3%", "-2%"],
    y: "-50%",
    scale: [0.8, 1.15, 1],
    rotateY: [-25, 20, 0],
    rotateZ: [0, 1.6, 0],
    skewX: [30, -3, 0],
    filter: [
      "brightness(0.35)",
      "brightness(0.8)",
      "brightness(1)"
    ],
    opacity: 1,
    zIndex: 3,

    // TILT CARD EFFECT

  },

  left: {
    x: "-40%",
    y: "-50%",
    scale: [1, 0.8, 0.85],
    rotateY: [10, 60, 25],
    rotateZ: [0, 1, -3],
    skewX: -3,
    filter: "brightness(0.35)",
    opacity: 1,
    zIndex: 2,
  },

  right: {
    x: "40%",
    y: "-50%",
    scale: [0.55, 0.7, 0.85],
    rotateZ: [0, 1, 3],
    rotateY: [0, 60, -25],
    skewX: 3,
    filter: "brightness(0.35)",
    opacity: 1,
    zIndex: 2,
  },

  back: {
    x: "0%",
    y: "-50%",
    scale: 0.55,
    rotateZ: 0,
    rotateY: 0,
    skewX: 0,
    filter: "brightness(0.2)",
    opacity: 0,
    zIndex: 1,
  },
};

// TILT VARIABLES
// mouse motion values
 const imageX = useMotionValue(0);
 const imageY = useMotionValue(0);
 // smooth mouse motion values
 const mouseXspring = useSpring(imageX);
 const mouseYspring = useSpring(imageY);
 // rotate transform values
 const rotateX = useTransform(
    mouseYspring,
    [-0.5, 0.5],
    [12, -12]
  );
 const rotateY = useTransform(
    mouseXspring,
    [0.5, -0.5],
    [12, -12]
  );

 // FUNCTION FOR TRACKING MOUSE POSITION RELATIVE TO OBJECT
const handleMouseMove = (e)=>{
  const rect = e.target.getBoundingClientRect();

  const width = rect.width;
  const height = rect.height;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const xPerc = mouseX / width - 0.5;
  const yPerc = mouseY / height - 0.5;

  imageX.set(xPerc);
  imageY.set(yPerc);
}
// STOP TILTING IF MOUSE LEAVE
const handleMouseLeave = () => {
  imageX.set(0);
  imageY.set(0);
};

  return (
    <section id="about" className="about">
      <div className="container about__box">

        <div className="about__info">
          <h2 className="about__title">
            Our Shellfish story
          </h2>

          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa
            amet orci odio mi tortor quam. Eleifend lectus faucibus arcu
            cursus maecenas quis sit. Sit aliquet ultrices pellentesque lacus
            suspendisse felis rhoncus mauris.
          </p>

          <Link to="/about" className="about__button">
            View
          </Link>
        </div>

        <div className="about__images">

          {images.map((image, index) => {
            const position = getPosition(index);

            return (
              <motion.img
                onMouseMove={(e)=>{
                  if(position === "center"){
                    handleMouseMove(e);
                  }
                }}
                onMouseLeave={handleMouseLeave}

                //TILT EFFECT FOR CENTER IMAGE
                style={{
                  rotateX: position === "center" ? rotateX : 0,
                  rotateY: position === "center" ? rotateY : 0,
                }}

                //ANIMATION
                key={image}
                className="about__image"
                src={image}
                alt="Shellfish"
                initial={false}
                variants={variants}
                animate={position}
                transition={{
                  duration: 0.85,
                   ease: [0.1, 0, 0.5, 1],
                }}
              />
            );
          })}

        </div>

      </div>
    </section>
  );
}