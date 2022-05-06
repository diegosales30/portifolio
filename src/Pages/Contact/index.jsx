import Header from "../../Components/Header";
import contactImg from "../../assets/contato.png";
import { ContainerContact } from "./style";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <ContainerContact>
      <Header />
      <main>
        <figure>
          <img src={contactImg} alt="" />
        </figure>
        <section className="contatos">
          <li>
            <BsLinkedin />
            <a
              href="https://www.linkedin.com/in/diego-felipe-js/"
              target="_blank"
            >
              ir para Likedin
            </a>
          </li>
          <li>
            <SiGmail />
            <a href="mailto:diegofelipesales23@gmail.com" target="_blank">
              ir para Gmail
            </a>
          </li>
          <li>
            <FaInstagramSquare />
            <a
              href="https://z-p42.www.instagram.com/dihcode/?hl=sv"
              target="_blank"
            >
              ir para Instagram
            </a>
          </li>
          <li>
            <FaGithubSquare />
            <a href="https://github.com/diegosales30" target="_blank">
              ir para Github
            </a>
          </li>
        </section>
      </main>
    </ContainerContact>
  );
};
export default Contact;
