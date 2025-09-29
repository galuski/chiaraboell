import { useInView } from "react-intersection-observer";

export function ImagePreview({ src, alt = "", width = 800 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // ייטען כשהתמונה נכנסת ~20% למסך
  });

  // מוסיף f_auto,q_auto,w_... לכתובת Cloudinary
  const optimizedSrc = src.includes("/upload/")
    ? src.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`)
    : src;

  return (
    <div ref={ref} className="image-preview">
      {inView ? (
        <img
          src={optimizedSrc}
          alt={alt}
          loading="lazy"
          style={{ maxWidth: "100%", borderRadius: "12px" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            paddingTop: "56.25%", // יחס 16:9 כ־placeholder
            background: "#f0f0f0",
            borderRadius: "12px",
          }}
        />
      )}
    </div>
  );
}