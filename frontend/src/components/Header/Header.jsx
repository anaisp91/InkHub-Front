import { Nav } from "../Nav/Nav";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6  ">
        <div className="flex items-center justify-between py-2 border-slate-200">
          <div className="flex flex-1 items-stretch justify-start">
            <img
              className="h-12 w-auto"
              src="/images/logos/InkHub-logo-blanco.png"
            />
          </div>
          <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-8">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};
