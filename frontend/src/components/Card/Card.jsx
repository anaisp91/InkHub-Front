export const Card = ({ id, name, lastName }) => {
  return (
    <div className="rounded-xl bg-slate-300 p-3 text-center flex flex-col gap-2">
      <a class="p-5 max-w-md  rounded-2xl  flex flex-col items-center" href="#">
        <img class="shadow rounded-lg overflow-hidden border" />
        <div class="mt-8">
          <p class="mt-2 text-black text-xl">{name}</p>
          <p class="mt-2 text-black text-xl">{lastName}</p>
        </div>
      </a>
    </div>
  );
};
