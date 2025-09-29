import { ImageSection } from "./ImageSection";
import { ImagesData } from "./../data/ImagesData";

export function ImagesList() {
  return (
    <div className="image-list">
      {ImagesData.map((section, idx) => (
        <ImageSection
          key={idx}
          sectionTitle={section.sectionTitle}
          images={section.images}
        />
      ))}
    </div>
  );
}