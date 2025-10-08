import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import clientsData from "../data/clientsData.json";
import { PreviewClient } from "./PreviewClient";

export default function ClientSlider() {
  const { clients } = clientsData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // 👈 חובה כדי שיתחיל אוטומטית
    autoplaySpeed: 5000,     // כל 5 שניות
    pauseOnHover: true,
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

  return (
    <Slider {...settings}>
      {clients.map((client, idx) => (
        <PreviewClient key={idx} client={client} />
      ))}
    </Slider>
  );
}