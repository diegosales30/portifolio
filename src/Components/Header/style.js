import styled from "styled-components";

export const HeaderPage = styled.header`
  background-color: var(--tertiary);
  width: 100%;
  max-width: 1250px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 100px;
  min-width: 320px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 15px;
    width: 75px;
    height: 75px;
    cursor: pointer;
    &:hover {
      border-radius: 100%;
      margin-top: 5px;
    }
  }

  div {
    margin-right: 55px;
    ul {
      padding: 10px;
      display: flex;
      justify-content: space-between;

      display: flex;
      width: 450px;
      height: 70px;
      li {
        padding: 10px;
        list-style: none;
        color: var(--senary);
        color: white;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid var(--senary);
          margin-top: 2px;
        }
      }
    }
    @media (max-width: 768px) {
      ul {
        display: none;
      }
    }
  }
`;
export const Hamburguer = styled.div`
  display: none;
  position: absolute;

  cursor: pointer;
  top: 35px;
  &:hover {
    color: black;
    margin-top: 1px;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const SectionBtn = styled.section`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
  ul {
    background-color: #dcdcdc;
    display: flex;
    width: 100%;
    height: 50px;
    margin-left: 10px;
    justify-content: space-around;
    list-style: none;
    margin-right: 15px;
    margin-top: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: 10px;

    li {
      margin-top: 10px;
      font-size: 17px;
      font-weight: 500;
      color: var(--quinary);
      font-size: 27px;
      width: 30px;
      &:hover {
        cursor: pointer;
        margin-top: 7px;
      }
    }
  }
`;
