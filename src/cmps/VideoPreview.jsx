import { useInView } from "react-intersection-observer";

export function VideoPreview({ src, title, description }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // ברגע ש־20% מהוידאו נכנס למסך מתחיל טעינה
  });

  // מוסיף אופטימיזציה ל־Cloudinary (פורמט ואיכות אוטומטיים)
  const optimizedSrc = src.includes("/upload/")
    ? src.replace("/upload/", "/upload/f_auto,q_auto/")
    : src;

  // יוצר poster (thumbnail) אוטומטי מהוידאו
  const poster = src.includes("/upload/")
    ? src
        .replace("/upload/", "/upload/f_auto,q_auto,so_0/") // פריים ראשון
        .replace(/\.\w+$/, ".jpg") // משנה סיומת ל־jpg
    : "";

  return (
    <div ref={ref} className="video-preview">
      <div className="device device-iphone-14-pro">
        <div className="device-frame">
          <div className="device-screen">
            {inView ? (
              <video
                controls
                preload="none"
                poster={poster}
                style={{ width: "100%", height: "100%", borderRadius: "12px" }}
              >
                <source src={optimizedSrc} type="video/mp4" />
                הדפדפן שלך לא תומך בתגית וידאו
              </video>
            ) : (
              <div className="video-placeholder">Loading video...</div>
            )}
          </div>
        </div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>

      <div className="video-preview-txt">
        <p className="video-preview-title">{title}</p>
        <p className="video-preview-description">{description}</p>
      </div>
    </div>
  );
}