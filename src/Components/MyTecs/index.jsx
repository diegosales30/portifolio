import { BoxContent, Mytec } from "./style";

import html from "../../assets/stacks/html.png";
import css from "../../assets/stacks/css.png";
import js from "../../assets/stacks/js.png";
import react from "../../assets/stacks/react.png";
import git from "../../assets/stacks/git.png";
import styledLogo from "../../assets/stacks/styled-componets.png";

const MyTecs = () => {
  return (
    <Mytec>
      <div>
        <h1>Tecnologias que eu domino</h1>
      </div>
      <BoxContent>
        <div>
          <img src={html} alt="HTML" />
        </div>
        <div>
          <img src={css} alt="CSS" />
        </div>
        <div>
          <img src={js} alt="JAVASCRIPT" />
        </div>
        <div>
          <img src={react} alt="REACT" />
        </div>
        <div>
          <img src={git} alt="GIT" />
        </div>
        <div>
          <img src={styledLogo} alt="STYLED-COMPONENTS" />
        </div>
      </BoxContent>
    </Mytec>
  );
};
export default MyTecs;
