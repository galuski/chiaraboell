import { ImagePreview } from "./ImagePreview";

export function ImageSection({ sectionTitle, images }) {
  return (
    <section className="image-section">
      <h2 className="image-section-title">{sectionTitle}</h2>
      <div className="image-grid">
        {images.map((image, idx) => (
          <ImagePreview
            key={idx}
            src={image.src}
          />
        ))}
      </div>
    </section>
  );
}
