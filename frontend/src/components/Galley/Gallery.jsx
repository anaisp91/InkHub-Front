import "./Gallery.css";
import { Card } from "../Card/Card";
import { infoArtists } from "../../data/infoArtists";
export const Gallery = () => {
  const dataArtists = infoArtists;
  return (
    <div>
      <h3 className="gallery-title">CREW</h3>
      <section id="cards-container">
        {dataArtists.map((artists) => (
          <Card src={artists.srcImg} name={artists.slug} alt={artists.altImg} />
        ))}
      </section>
    </div>
  );
};
