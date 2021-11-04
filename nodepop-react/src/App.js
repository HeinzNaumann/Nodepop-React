import "./App.css";
import PaginaAnuncios from "./components/anuncios/PaginaAnuncios/PaginaAnuncios";
import PaginaNuevoAnuncio from "./components/anuncios/PaginaNuevoAnuncio/PaginaNuevoAnuncio";
import PaginaAnuncio from "./components/anuncios/PaginaAnuncio/PaginaAnuncio";
import LoginPage from "./components/auth/LoginPage/LoginPage";
function App() {
  return (
    <div className='App'>
      {/* <PaginaAnuncios />
      <PaginaNuevoAnuncio />
      <PaginaAnuncio /> */}
      <LoginPage />
    </div>
  );
}

export default App;
