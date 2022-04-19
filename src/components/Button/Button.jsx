import "./styles.css";

export const Button = ({ func, title, className }) => {
  return (
    <div>
      <button className={className} onClick={func}>
        {title}
      </button>
    </div>
  );
};
