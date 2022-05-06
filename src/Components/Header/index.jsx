import logo from "../../assets/logoLand01.png";
import { HeaderPage } from "./style";

const Header = () => {
  return (
    <HeaderPage>
      <img src={logo} alt="logo" />
      <div>
        <ul>
          <li>Quem sou</li>
          <li>Projetos</li>
          <li>Tecnologias</li>
          <li>Contato</li>
        </ul>
      </div>
    </HeaderPage>
  );
};
export default Header;
