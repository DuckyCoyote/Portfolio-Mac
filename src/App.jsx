import Escritorio from "./components/Escritorio/escritorio.componet";

import Header from "./components/NavBar/header.components";

import "./App.css";

function App() {
  return (
    <div className="container-html">
      <div className="container-css">
        <Header />

        <Escritorio />
      </div>
    </div>
  );
}

export default App;
