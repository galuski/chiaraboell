import { ServicePreview } from "./ServicePreview"
import penSVG from "./../../public/icons/pen.svg"
import microphoneSVG from "./../../public/icons/microphone.svg"
import packageSVG from "./../../public/icons/package.svg"
import flimSVG from "./../../public/icons/film-slate.svg"
import airplaneSVG from "./../../public/icons/airplane-tilt.svg"
import starSVG from "./../../public/icons/star.svg"

export function ServicesList() {
  const services = [
    {
      icon: penSVG,
      title: "Creative Direction",
      description:
        "Developing unique ideas and writing scripts, while also creating alternative hooks that make your content perfectly tailored to your brand."
    },
    {
      icon: flimSVG,
      title: "Video Production",
      description:
        "Producing videos of every kind, including how-to tutorials, vlogs, testimonials, reviews, sports highlights, and couple videos."
    },
    {
      icon: packageSVG,
      title: "Product & Lifestyle Content",
      description:
        "Creating engaging content that highlights your products and lifestyle, from unboxing and ASMR to UGC photography and real-world product applications."
    },
    {
      icon: airplaneSVG,
      title: "Travel & Experiences",
      description:
        "Capturing authentic travel and experience-based content, including AirBnB stays, adventures, and destination storytelling."
    },
    {
      icon: microphoneSVG,
      title: "Voice & Sound",
      description:
        "Delivering professional voiceovers, sound design, and audio editing that bring your videos to life and enhance the viewer’s experience."
    },
    {
      icon: starSVG,
      title: "Premium Services",
      description:
        "Providing exclusive add-ons such as usage rights, customized packages, additional revisions, and raw material delivery."
    }
  ]

  return (
    <div className="services-list">
      {services.map((srv, idx) => (
        <ServicePreview key={idx} {...srv} />
      ))}
    </div>
  )
}
