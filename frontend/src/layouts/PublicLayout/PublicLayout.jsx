import { Header, Footer, Main } from "../../components";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
