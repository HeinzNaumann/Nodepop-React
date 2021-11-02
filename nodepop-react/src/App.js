import "./App.css";
import PaginaAnuncios from "./components/anuncios/PaginaAnuncios";

import Button from "./components/common/button";

function App() {
  return (
    <div className='App'>
      <Button variant='primary' onClick={() => console.log("click")}>
        {" "}
        Primary{" "}
      </Button>
      <Button disabled>Normal </Button>

      <PaginaAnuncios />
    </div>
  );
}

export default App;
