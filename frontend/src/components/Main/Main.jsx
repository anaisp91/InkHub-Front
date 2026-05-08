import { Flex } from "../../layouts/Flex/Flex";
import "./Main.css";
export const Main = ({ children }) => {
  return (
    <main className="main-container">
      <Flex>{children}</Flex>
    </main>
  );
};
