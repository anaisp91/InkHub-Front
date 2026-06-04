export const Home = () => {
  return (
    <div className="min-h-screen min-w-full flex-col items-center justify-start text-center p-28 bg-slate-100">
      <div>
        <img
          alt="InkHub Logo"
          src="/images/logos/Inkhub.png"
          className="mx-auto h-auto w-[18rem] m-4"
        />
        <div className="bg-slate-300 mt-9 p-7 ">
          <p className="font-bold font-sans text-[1.5rem] leading-6">
            Gestiona tu estudio de forma digital
          </p>
          <p className="font-sans text-sm mt-9 ">
            Centraliza artistas, clientes y consentimientos en una sola
            plataforma. Olvídate del papel y administra tu estudio de manera más
            rápìda, segura y profesional.
          </p>
        </div>
      </div>
    </div>
  );
};
