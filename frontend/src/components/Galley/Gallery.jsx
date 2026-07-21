import { Card } from "../Card/Card";

export const Gallery = ({ artists }) => {
  return (
    <div className="relative z-0 pb-14 pt-6 lg:pb-20">
      <h3 className="font-bold text-center text-gray-300 text-6xl m-0">CREW</h3>
      <section className=" mt-16 mx-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 ">
        {artists.map((artist) => (
          <Card key={artist._id} artist={artist} />
        ))}
      </section>
    </div>
  );
};
