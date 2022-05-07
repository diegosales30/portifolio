import Header from "../../Components/Header";
import { ContainerProject, ContentBox } from "./style";
import himpact from "../../assets/project-img/himpact.png";
import doit from "../../assets/project-img/doit.png";
import hamburgueria from "../../assets/project-img/hamburgueria.png";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <ContainerProject>
      <Header />
      <ContentBox>
        <h1>Projetos</h1>
        <section>
          <figure>
            <img src={himpact} alt="himpact" />
            <h4>Himpact</h4>
            <p>projeto desenvolvido em ReactJs para hackathon </p>
          </figure>
          <figure>
            <img src={doit} alt="doit" />
            <h4>Do.it</h4>
            <p>Projeto em ReactJs para criar lista de tarefas</p>
          </figure>
          <figure>
            <img src={hamburgueria} alt="hamburgueria" />
            <h4>Hamburgueria</h4>
            <p>Projeto em ReactJs</p>
          </figure>
        </section>
        <a href="https://github.com/diegosales30" target="_blank">
          <FaGithubSquare />
          <p>ir para Github</p>
        </a>
      </ContentBox>
    </ContainerProject>
  );
};

export default Projects;
