export function ServicePreview({ icon, title, description }) {
  return (
    <div className="solution_card">
      <div className="hover_color_bubble"></div>
      <div className="so_top_icon">
        <img src={icon} alt={title} />
      </div>
      <div className="solu_title">
        <div>{title}</div>
      </div>
      <div className="solu_description">
        <p>{description}</p>
      </div>
    </div>
  );

}