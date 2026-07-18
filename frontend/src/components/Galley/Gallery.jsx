import { Card } from "../Card/Card";

export const Gallery = ({ artists }) => {
  return (
    <div className="relative z-0">
      <h3 className="font-bold text-center text-gray-300 text-6xl m-0">CREW</h3>
      <section className=" m-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {artists.map((artist) => (
          <Card key={artist._id} artist={artist} />
        ))}
      </section>
    </div>
  );
};
