import Header from "../../Components/Header";
import { ContainerHome, ContainerMain } from "./style";
import logo from "../../assets/reactLogo01.png";
import stackLogo from "../../assets/stackLogo.png";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <ContainerMain>
        <div>
          <h1>
            <h2>Olá, seja muito bem vindo!</h2>
            <h2>Eu sou Diego Sales</h2>
            <h2>Front-end developer</h2>
          </h1>
          <img className="spinner is-animating" src={logo} alt="reactLogo" />
        </div>
        <section>
          <figure>
            <img src={stackLogo} alt="stackLogo" />
          </figure>
        </section>
      </ContainerMain>
    </ContainerHome>
  );
};

export default Home;
