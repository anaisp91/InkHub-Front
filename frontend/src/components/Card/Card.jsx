import { Link } from "react-router-dom";
export const Card = ({ artist }) => {
  return (
    <div className="rounded-md bg-gray-300 p-3 text-center flex flex-col gap-2">
      <div className="mt-8">
        <Link to={artist._id}>
          <p className="mt-2 text-black text-xl">{artist.name}</p>
        </Link>
      </div>
    </div>
  );
};
