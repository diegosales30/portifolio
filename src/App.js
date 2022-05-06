import { ToastContainer } from "react-toastify";
import Routers from "./Routers";
import { GlobalStyle } from "./Styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />
      <Routers />
    </>
  );
};

export default App;
