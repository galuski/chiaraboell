import { useEffect, useState } from "react";
import { HeroButton } from "./HeroButton";

export function Carousel({ data }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="carousel">
      {data.map((item, idx) => (
        <img
          src={item.src}
          alt={item.alt}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      ))}
      <div className="carousel-content">
        <h1>Model • UGC Creator • Brand Ambassador</h1>
              <HeroButton text="Contact" href="#contact" />
      </div>
    </div>

  );
}