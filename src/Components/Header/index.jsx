import logo from "../../assets/logoLand01.png";
import { Hamburguer, HeaderPage } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const handleNavigation = (path) => {
    return navigation(path);
  };

  return (
    <HeaderPage>
      <img onClick={() => handleNavigation("/home")} src={logo} alt="logo" />
      <div className="menu-list">
        <ul>
          <li onClick={() => handleNavigation("/about")}>Quem sou</li>
          <li onClick={() => handleNavigation("/projects")}>Projetos</li>
          <li onClick={() => handleNavigation("/tecnologies")}>Tecnologias</li>
          <li onClick={() => handleNavigation("/contact")}>Contato</li>
        </ul>
        <Hamburguer>
          <GiHamburgerMenu size={30} color="#fff" />
        </Hamburguer>
      </div>
    </HeaderPage>
  );
};
export default Header;
