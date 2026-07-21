import { Link } from "react-router-dom";
export const Card = ({ artist }) => {
  return (
    <Link to={artist._id}>
      <div
        className="rounded-sm bg-gray-700 p-3 m-8 text-center flex flex-col gap-2 transition-all
                   duration-200 hover:-translate-y-1 w-[300px] lg:w-[270px] "
      >
        <div className="mt-4">
          <img
            src={artist.avatar ?? "/images/avatar.jpg"}
            className="rounded-sm w-[300px]"
          />
          <p className="mt-2 text-white text-xl font-serif py-3">
            {artist.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
