import "./neon.scss";
import { useEffect, useRef } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const Neon = ({ children }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) {
      cursorRef.current = neonCursor({
        el: document.getElementById("app"),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
      });
    }
    return () => {};
  }, []);

  return <div id="app">{children}</div>;
};

export default Neon;
