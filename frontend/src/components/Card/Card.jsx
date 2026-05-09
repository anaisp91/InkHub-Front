import "./Card.css";
export const Card = ({ src, name, alt }) => {
  return (
    <div className="card-artist">
      <figure>
        <img src={src} alt={alt} />
        <h3>{name}</h3>
      </figure>
    </div>
  );
};
