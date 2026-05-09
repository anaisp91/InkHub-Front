import "./Gallery.css";
import { Card } from "./components";
import { infoArtists } from "../../data/infoArtists";
export const Gallery = () => {
  const dataArtists = infoArtists;
  return (
    <section id="gallery-container">
      {dataArtists.map((artists) => (
        <Card src={artists.srcImg} name={artists.slug} alt={artists.altImg} />
      ))}
    </section>
  );
};
