import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (window.scrollY < 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [location, showButton]);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return { goToTop, showButton };
}
