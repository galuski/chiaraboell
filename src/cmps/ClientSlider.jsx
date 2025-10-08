import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css"; // ⚠️ חשוב: theme לפני slick
import "slick-carousel/slick/slick.css";

import clientsData from "../data/clientsData.json";
import { PreviewClient } from "./PreviewClient";

export default function ClientSlider() {
  const { clients } = clientsData;
  const sliderRef = useRef(null);

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
        settings: { slidesToShow: 1 }, // 👈 במובייל – רק אחד
      },
    ],
  };

  useEffect(() => {
    // 👇 מאלץ את slick לחשב מחדש את ה-breakpoints
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {clients.map((client, idx) => (
        <PreviewClient key={idx} client={client} />
      ))}
    </Slider>
  );
}