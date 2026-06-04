import { Card } from "../Card/Card";
import { infoArtists } from "../../data/infoArtists";
export const Gallery = () => {
  const dataArtists = infoArtists;
  return (
    <div className=" ">
      <h3 className="font-bold text-center text-6xl m-10">CREW</h3>
      <section className=" m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-slate-100">
        {dataArtists.map((artists) => (
          <Card src={artists.srcImg} name={artists.slug} alt={artists.altImg} />
        ))}
      </section>
    </div>
  );
};
