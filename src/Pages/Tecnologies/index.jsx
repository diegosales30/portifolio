import Header from "../../Components/Header";
import MyNewTec from "../../Components/MyNewTec";
import MyTecs from "../../Components/MyTecs";
import { TecContainer } from "./style";

const Tecnologies = () => {
  return (
    <TecContainer>
      <Header />
      <main>
        <MyTecs />
        <MyNewTec />
      </main>
    </TecContainer>
  );
};
export default Tecnologies;
