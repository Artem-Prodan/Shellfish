
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "../tiltImage/TiltImage.css";

export default function TiltImage({
  src,
  alt = "",
  className = "",

  maxTilt = 15,
  perspective = 1000,
  enableTilt = true,

  wrapperClassName = "",
  wrapperStyle = {},
  wrapperProps = {},

  ...motionProps
}) {
  // mouse motion values
  const imageX = useMotionValue(0);
  const imageY = useMotionValue(0);

  // smooth mouse motion values with Spring
  const mouseXSpring = useSpring(imageX, {
    stiffness: 150,
    damping: 20,
  });
  const mouseYSpring = useSpring(imageY, {
    stiffness: 150,
    damping: 20,
  });

 // rotate transform values
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [maxTilt, -maxTilt]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [0.5, -0.5],
    [maxTilt, -maxTilt]
  );

  // FUNCTION FOR TRACKING MOUSE POSITION RELATIVE TO OBJECT
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPerc = mouseX / rect.width - 0.5;
    const yPerc = mouseY / rect.height - 0.5;

    imageX.set(xPerc);
    imageY.set(yPerc);
  };

// STOP TILTING IF MOUSE LEAVE
  const handleMouseLeave = () => {
    imageX.set(0);
    imageY.set(0);
  };

  return (
      <motion.div
        className={`tilt-image-wrapper ${wrapperClassName}`}
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
          ...wrapperStyle,
        }}
          onMouseMove={enableTilt ? handleMouseMove : undefined}
          onMouseLeave={enableTilt ? handleMouseLeave : undefined}
        {...wrapperProps}
        {...motionProps}
      >
        <motion.img
            src={src}
            alt={alt}
            className={`tilt-image ${className}`}
            style={{
              rotateX: enableTilt ? rotateX : 0,
              rotateY: enableTilt ? rotateY : 0,
              transformStyle: "preserve-3d",
            }}
          />
      </motion.div>
  );
}