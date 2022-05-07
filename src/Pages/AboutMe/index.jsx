import Header from "../../Components/Header";
import person from "../../assets/person01.png";
import { Container } from "./style";

const AboutMe = () => {
  return (
    <Container>
      <Header />
      <main>
        <div>
          <img src={person} alt="" />
        </div>
        <div>
          <h1>Quem sou eu</h1>
          <h3>
            Meu nome é Diego, sou manauara, amante da natureza. atualmente estou
            focado na área de desenvolvimento web, aprimorando meus
            conhecimentos e aprendendo novas tecnologias. meu foco está no
            Front-end com ReactJs, mas pretendo aprender Back-end com nodeJS e
            React Native. aceito qualquer desafio, e estou sempre disposto a
            aprender novas tecnologias.
          </h3>
        </div>
      </main>
    </Container>
  );
};
export default AboutMe;
