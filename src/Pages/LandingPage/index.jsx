import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logoInicial.png";
import { ContainerLand } from "./style";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    toast.success("Seja bem vindo");
    setTimeout(() => {
      return navigate("/home");
    }, 2000);
  };
  return (
    <ContainerLand>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <h1>Bem vindo!</h1>
      </div>
      <div>
        <button onClick={handleNavigation} className="fa-blink">
          CLICK PARA CONTINUAR
        </button>
      </div>
    </ContainerLand>
  );
};

export default LandingPage;
