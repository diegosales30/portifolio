import Header from "../../Components/Header";
import { ContainerHome, ContainerMain } from "./style";
import logo from "../../assets/reactLogo01.png";
import stackLogo from "../../assets/logo-home.png";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <ContainerMain>
        <div>
          <aside>
            <h2>Olá, seja muito bem-vindo!</h2>
            <h2>Eu sou Diego Sales</h2>
            <h2>Front-end developer Jr</h2>
          </aside>
          <img className="spinner is-animating" src={logo} alt="reactLogo" />
        </div>
        <section>
          <figure>
            <img className="swing" src={stackLogo} alt="stackLogo" />
          </figure>
        </section>
      </ContainerMain>
    </ContainerHome>
  );
};

export default Home;
