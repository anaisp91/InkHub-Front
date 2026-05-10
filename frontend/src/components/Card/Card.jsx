import "./Card.css";
export const Card = ({ src, name, alt }) => {
  return (
    <a>
      <div className="card-artist">
        <figure>
          <img src={src} alt={alt} />
          <p>{name}</p>
        </figure>
      </div>
    </a>
  );
};
