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
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // 👈 מפעיל מעבר אוטומטי
    autoplaySpeed: 5000,     // כל 5 שניות
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

  // 👇 טריק שמבטיח רענון תקין ברספונסיביות גם אחרי build
  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(0, true); // מאפס שקופית
      }
    };
    window.addEventListener("resize", handleResize);

    // 👇 מוודא שה־autoplay וה־responsive נרשמים נכון במובייל
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {clients.map((client, idx) => (
        <PreviewClient key={idx} client={client} />
      ))}
    </Slider>
  );
}