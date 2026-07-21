export const NotFound = () => {
  return (
    <div className="bg-[url('/images/logos/foto-fondo.jpg')] bg-cover bg-center bg-no-repeat w-full">
      <div className="bg-black/90 absolute inset-0 z-10"></div>
      <section className="relative z-20 mt-36 flex flex-col justify-center items-center bg-gray-700/60 p-14">
        <h3 className="text-gray-300 font-extrabold text-[6rem]">404</h3>
        <p className="text-gray-300 text-[2rem]">Ups...Nothing to see here</p>
      </section>
    </div>
  );
};
