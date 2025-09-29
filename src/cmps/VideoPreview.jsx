export function VideoPreview({ src, title, description }) {
  return (
    <div className="video-preview">
      <div className="device device-iphone-14-pro">
        <div className="device-frame">
          <div className="device-screen">
            <video controls>
              <source src={src} type="video/mp4" />
            </video>
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
