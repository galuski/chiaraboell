export function HeroButton({ text = "Button", href = "#" }) {
  return (
    <button className="hero-btn">
      <a href={href}>
        <span>{text}</span>
      </a>
    </button>
  );
}
