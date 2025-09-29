import { VideoPreview } from "./VideoPreview";

export function VideoSection({ sectionTitle, videos }) {
  return (
    <section className="video-section">
      <h2 className="video-section-title">{sectionTitle}</h2>
      <div className="video-grid">
        {videos.map((video, idx) => (
          <VideoPreview
            key={idx}
            src={video.src}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </section>
  );
}