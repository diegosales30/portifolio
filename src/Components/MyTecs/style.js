import styled from "styled-components";

export const Mytec = styled.div`
  text-align: center;
  margin: 30px;
  h1 {
    margin: 30px;
    color: white;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 22px;
    }
  }
`;

export const BoxContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 700px;
  margin: auto;
  text-align: center;
  h4 {
    color: white;
  }
  div {
    margin: 15px;
    img {
      width: 150px;
      height: 150px;
      &:hover {
        border: 2px solid white;
        box-shadow: 0 0 10px black;
      }
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    div {
    }
  }
`;
