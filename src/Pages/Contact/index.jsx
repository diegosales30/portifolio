import Header from "../../Components/Header";
import contactImg from "../../assets/contato.png";
import { ContainerContact } from "./style";

const Contact = () => {
  return (
    <ContainerContact>
      <Header />
      <main>
        <figure>
          <img src={contactImg} alt="" />
        </figure>
        <section>
          <a href="https://google.com" target="_blank">
            ir para
          </a>
          <a href="" target="_blank">
            ir para
          </a>
          <a href="" target="_blank">
            ir para
          </a>
          <a href="" target="_blank">
            ir para
          </a>
        </section>
      </main>
    </ContainerContact>
  );
};
export default Contact;
