export const Home = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-[url('/images/logos/foto-fondo.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-96 lg:h-screen">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10">
        <img
          alt="InkHub Logo"
          src="/images/logos/InkHub-logo2-blanco.png"
          className="mx-auto h-auto w-[24rem] mt-20 mb-5 md:mt-32 lg:mt-40 "
        />
        <div className="bg-slate-300/20 m-4 p-5 ">
          <p className="font-medium font-sans text-white text-[1rem] leading-6 text-center">
            La plataforma para gestionar tu estudio de tatuajes de manera
            sencilla
          </p>
          <p className="font-semibold text-white mt-9 text-center">
            Menos gestion más tiempo para crear
          </p>
          <p>
            Organiza artistas, clientes, consentimientos y toda la información
            de tu estudio desde un mismo lugar
          </p>
          <p>¿Que es InkHub?</p>
          <p>
            InkHub nace con el objetico de simplifiacar la gestión diaria de un
            estudio de tatuajes. Desde una única plataforma el estudio puede
            administrar a sus artistas, organizar la información de sus clientes
            y guardar los consetimientos de una forma segura.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
