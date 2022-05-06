import styled from "styled-components";

export const ContainerContact = styled.div`
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  min-width: 320px;
  margin: auto;

  main {
    margin-top: 55px !important;
    margin: auto;
    width: 80%;

    display: flex;
    justify-content: space-around;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      section {
        margin-top: 30px;
        margin: auto;
      }
    }
  }
  figure {
    margin: auto;
  }
  section.contatos {
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid white;

    justify-content: space-around;

    li {
      list-style: none;
      color: var(--senary);
      font-size: 25px;
      padding: 10px;
      a {
        color: var(--senary);
        font-size: small;
        margin-left: 15px;
      }
    }
  }
  @media (max-width: 768px) {
    section.contatos {
      width: 320px;
    }
  }
`;
