import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
       <ToastContainer />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
