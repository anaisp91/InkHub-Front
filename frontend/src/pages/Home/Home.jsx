export const Home = () => {
  return (
    <div className="relative h-auto bg-[url('/images/logos/foto-fondo.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10">
        <img
          alt="InkHub Logo"
          src="/images/logos/InkHub-logo2-blanco.png"
          className="mx-auto mt-20 mb-5 w-80 
                    md:w-[600px] md:p-6
                    lg:w-[600px] lg:pb-0"
        />
        <div
          className="bg-slate-300/10 m-5 p-3 
                  md:m-12 md:p-3"
        >
          <p
            className="font-normal font-sans text-white text-[1rem] leading-6 text-center pt-8 
                      md:text-[1.5rem]  
                      lg:text-[1.3rem] "
          >
            La plataforma para gestionar tu estudio de tatuajes de manera
            sencilla
          </p>
          <p
            className="font-semibold text-slate-400 mt-9 text-center mb-5 text-[1.2rem] 
                      md:text-[2rem] 
                      lg:text-[1.7rem] "
          >
            Menos gestion más tiempo para crear
          </p>
          <p
            className="text-white font-sans font-normal text-center mb-7 
                      md:text-[1.5rem]
                      lg:text-[1.3rem]"
          >
            Organiza artistas, clientes, consentimientos y toda la información
            de tu estudio desde un mismo lugar
          </p>
          <p
            className="text-slate-400 text-[1.2rem] font-bold mb-3 text-center 
                      md:text-[2rem]
                      lg:text-[1.7rem]"
          >
            ¿Que es InkHub?
          </p>
          <p
            className="text-white font-normal font-sans text-center text-[1rem] mb-7 
                    md:text-[1.5rem]
                    lg:text-[1.3rem] "
          >
            InkHub nace con el objetico de simplifiacar la gestión diaria de un
            estudio de tatuajes. Desde una única plataforma el estudio puede
            administrar a sus artistas, organizar la información de sus clientes
            y guardar los consetimientos de una forma segura.
          </p>
        </div>
      </div>
    </div>
  );
};
