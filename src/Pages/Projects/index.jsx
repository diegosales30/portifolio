import Header from "../../Components/Header";
import { ContainerProject, ContentBox } from "./style";
import himpact from "../../assets/project-img/himpact.png";
import doit from "../../assets/project-img/doit.png";
import movies from "../../assets/project-img/movies.png";
import { FaGithubSquare } from "react-icons/fa";

const Projects = () => {
  return (
    <ContainerProject>
      <Header />
      <ContentBox>
        <h1>Projetos</h1>
        <section>
          <a
            href="https://himpact-page-diegosales30.vercel.app/"
            target="_blank"
          >
            <figure>
              <img src={himpact} alt="himpact" />
              <p>Himpact</p>
              <p>projeto desenvolvido em ReactJs para hackathon </p>
            </figure>
          </a>
          <a href="https://do-it-react.vercel.app/" target="_blank">
            <figure>
              <img src={doit} alt="doit" />
              <p>Do.it</p>
              <p>Projeto em ReactJs para criar lista de tarefas</p>
            </figure>
          </a>
          <a href="https://capstone-easy-movie.vercel.app/" target="_blank">
            <figure>
              <img src={movies} alt="movies" />

              <p>EasyMovie</p>
              <p>
                Projeto em ReactJs e chakra, simula uma plataforma de streaming
              </p>
            </figure>
          </a>
        </section>
        <a href="https://github.com/diegosales30" target="_blank">
          <FaGithubSquare />
          <p>ver mais no Github</p>
        </a>
      </ContentBox>
    </ContainerProject>
  );
};

export default Projects;
