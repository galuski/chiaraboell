import { useEffect, useState } from "react";
import { Carousel } from "./cmps/Carousel"
import { Header } from "./cmps/Header"

import carouselData from "./data/carousel.json";
import { About } from "./cmps/About";
import { Brands } from "./cmps/Brands";
import { Counter } from "./cmps/Counter";
import { VideoList } from "./cmps/VideoList";
import { ImagesList } from "./cmps/ImagesList";
import { Services } from "./cmps/Services";


function App() {
  const [slides, setSlides] = useState(
    window.innerWidth <= 768 ? carouselData["slides-mobile"] : carouselData.slides
  );

  useEffect(() => {
    const handleResize = () => {
      setSlides(window.innerWidth <= 768 ? carouselData["slides-mobile"] : carouselData.slides);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Carousel data={slides} />
        <About />
        <Counter />
        <Brands />
        <VideoList />
        <ImagesList />
        <Services />
      </main>
    </>
  )
}

export default App
