import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import clientsData from "../data/clientsData.json";
import { PreviewClient } from "./PreviewClient";

export default function ClientSlider() {
  const { clients } = clientsData;
  const sliderRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3, // ברירת מחדל לשולחן עבודה
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1050,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    // מחכים לרינדור מלא ואז “מכריחים” את slick לחשב שוב
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      setIsReady(true);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return null; // מונע רינדור לפני שהרוחב נמדד

  return (
    <Slider ref={sliderRef} {...settings}>
      {clients.map((client, idx) => (
        <PreviewClient key={idx} client={client} />
      ))}
    </Slider>
  );
}