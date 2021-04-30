import React from "react";

function getWindowDimensions() {
  
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = React.useState(undefined);

  React.useEffect(() => {
    function handleResize() {
      const { innerWidth: width, innerHeight: height } = window;
      setWindowDimensions({ width, height });
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}