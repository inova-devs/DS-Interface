import "./loading-dots.css";

type LoadingDotsProps = {
  color?: string;
};

export const LoadingDots = ({ color = "#000" }: LoadingDotsProps) => {
  return (
    <span className="loading">
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};
