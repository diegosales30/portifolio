import logo from "../../assets/logoLand01.png";
import { Hamburguer, HeaderPage, SectionBtn } from "./style";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { DiGithubBadge, DiHtml5 } from "react-icons/di";
import { FiUser, FiPhone } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigation = useNavigate();
  const handleNavigation = (path) => {
    return navigation(path);
  };

  return (
    <>
      <HeaderPage>
        <img onClick={() => handleNavigation("/home")} src={logo} alt="logo" />
        <div className="menu-list">
          <ul>
            <li onClick={() => handleNavigation("/about")}>Quem sou</li>
            <li onClick={() => handleNavigation("/projects")}>Projetos</li>
            <li onClick={() => handleNavigation("/tecnologies")}>
              Tecnologias
            </li>
            <li onClick={() => handleNavigation("/contact")}>Contato</li>
          </ul>
          <Hamburguer>
            <GiHamburgerMenu
              onClick={() => setOpen(!open)}
              size={30}
              color="#fff"
            />
          </Hamburguer>
        </div>
      </HeaderPage>

      {open && (
        <SectionBtn>
          <ul>
            <li onClick={() => handleNavigation("/about")}>
              <FiUser />
            </li>
            <li onClick={() => handleNavigation("/projects")}>
              <FaGithub />
            </li>
            <li onClick={() => handleNavigation("/tecnologies")}>
              <DiHtml5 />
            </li>
            <li onClick={() => handleNavigation("/contact")}>
              <FiPhone />
            </li>
          </ul>
        </SectionBtn>
      )}
    </>
  );
};
export default Header;
