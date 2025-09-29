import { VideoSection } from "./VideoSection";
import { videosData } from "./../data/videosData";

export function VideoList() {
  return (
    <div className="video-list">
      {videosData.map((section, idx) => (
        <VideoSection
          key={idx}
          sectionTitle={section.sectionTitle}
          videos={section.videos}
        />
      ))}
    </div>
  );
}