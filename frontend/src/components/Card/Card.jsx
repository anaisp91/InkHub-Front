export const Card = ({ src, name, alt }) => {
  return (
    <div className="rounded-xl bg-slate-300 p-3 text-center flex flex-col gap-2">
      <a class="p-5 max-w-md  rounded-2xl  flex flex-col items-center" href="#">
        <img
          src={src}
          alt={alt}
          class="shadow rounded-lg overflow-hidden border"
        />
        <div class="mt-8">
          <p class="mt-2 text-black text-xl">{name}</p>
        </div>
      </a>
    </div>
  );
};
