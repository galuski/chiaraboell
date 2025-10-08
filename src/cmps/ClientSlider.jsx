import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clientsData from "../data/clientsData.json";
import { PreviewClient } from "./PreviewClient";

export default function ClientSlider() {
  const { clients } = clientsData;
  const sliderRef = useRef(null);

  // קובע כמה קלפים להראות לפי רוחב המסך בפועל
  const getSlidesToShow = () => {
    const w = window.innerWidth;
    if (w < 768) return 1;
    if (w < 1050) return 2;
    return 3;
  };

  const [slidesToShow, setSlidesToShow] = useState(() => getSlidesToShow());

  useEffect(() => {
    const onResize = () => {
      const next = getSlidesToShow();
      setSlidesToShow(prev => (prev === next ? prev : next));
    };
    window.addEventListener("resize", onResize);
    // ריצה מידית ליתר ביטחון (מכשירי מובייל אמיתיים)
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow,          // 👈 נשלט ע"י ה־state
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    // בלי responsive – אנחנו שולטים ידנית
  };

  return (
    // key מכריח רה־איניט בכל שינוי כמות השקופיות
    <Slider key={slidesToShow} ref={sliderRef} {...settings}>
      {clients.map((client, idx) => (
        <PreviewClient key={idx} client={client} />
      ))}
    </Slider>
  );
}