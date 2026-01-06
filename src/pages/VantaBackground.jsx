import React, { useEffect, useRef } from "react";

export default function VantaBackground({ children }) {
  const ref = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    effectRef.current = window.VANTA.TOPOLOGY({
      el: ref.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0
    });

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return (
    <div ref={ref} className="vantaRoot">
      <div className="vantaContent">{children}</div>
    </div>
  );
}
