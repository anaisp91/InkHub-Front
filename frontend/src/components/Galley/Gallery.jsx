import { Card } from "../Card/Card";

export const Gallery = ({ artists }) => {
  return (
    <div>
      <h3 className="font-bold text-center text-6xl m-10">CREW</h3>
      <section className=" m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-slate-100">
        {artists.map((artist) => (
          <Card key={artist.id} artist={artist} />
        ))}
      </section>
    </div>
  );
};
