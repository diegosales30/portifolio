import { MyNewTecContainer } from "./style";
import typescript from "../../assets/stacks/typescript.png";
import node from "../../assets/stacks/node.png";

const MyNewTec = () => {
  return (
    <MyNewTecContainer>
      <div>
        <h1>Estou aprendendo...</h1>
      </div>
      <section>
        <div>
          <img src={typescript} alt="TYPESCRIPT" />
        </div>
        <div>
          <img src={node} alt="NODEJS" />
        </div>
      </section>
    </MyNewTecContainer>
  );
};
export default MyNewTec;