import "./App.css";
import { EnlacesCustom } from "./components/EnlacesCustom/EnlacesCustom";
import { infoArtists } from "./data/infoArtists";

const App = () => {
  return (
    <>
      {infoArtists.map((item) => (
        <EnlacesCustom
          key={item.slug}
          srcImg={item.srcImg}
          className={item.className}
          altImg={item.altImg}
        />
      ))}
    </>
  );
};

export default App;
