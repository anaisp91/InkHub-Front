import { Link } from "react-router-dom";
export const Card = ({ artist }) => {
  return (
    <Link to={artist._id}>
      <div
        className="rounded-md bg-gray-700 p-3 text-center flex flex-col gap-2 transition-all
                   duration-200 hover:-translate-y-1"
      >
        <div className="mt-8">
          <img src={artist.avatar ?? "/images/avatar.jpg"} />
          <p className="mt-2 text-white text-xl font-serif">{artist.name}</p>
        </div>
      </div>
    </Link>
  );
};
