import "./App.css";
import { Outlet } from "react-router-dom";
import { Footer, Header, Main } from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default App;
