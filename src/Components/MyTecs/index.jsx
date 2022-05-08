import { BoxContent, Mytec } from "./style";

import html from "../../assets/stacks/html.png";
import css from "../../assets/stacks/css.png";
import js from "../../assets/stacks/js.png";
import react from "../../assets/stacks/react.png";
import git from "../../assets/stacks/git.png";
import styledLogo from "../../assets/stacks/styled-componets.png";
import mui from "../../assets/stacks/mui.png";

const MyTecs = () => {
  return (
    <Mytec>
      <div>
        <h1>Tecnologias que eu domino</h1>
      </div>
      <BoxContent>
        <div>
          <img src={html} alt="HTML" />
          <h4>HTML5</h4>
        </div>
        <div>
          <img src={css} alt="CSS" />
          <h4>CSS3</h4>
        </div>
        <div>
          <img src={js} alt="JAVASCRIPT" />
          <h4>JAVASCRIPT</h4>
        </div>
        <div>
          <img src={react} alt="REACT" />
          <h4>REACTJS</h4>
        </div>
        <div>
          <img src={git} alt="GIT" />
          <h4>GIT</h4>
        </div>
        <div>
          <img src={styledLogo} alt="STYLED-COMPONENTS" />
          <h4>STYLED-COMPONENTS</h4>
        </div>
        <div>
          <img src={mui} alt="mui" />
          <h4>MATERIAL UI</h4>
        </div>
      </BoxContent>
    </Mytec>
  );
};
export default MyTecs;
