import { Nav } from "../Nav/Nav";
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 justify-between">
          <div className="flex flex-1 items-stretch justify-start">
            <img
              className="block h-auto w-auto"
              src="/images/logos/logo-inkhub.png"
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
