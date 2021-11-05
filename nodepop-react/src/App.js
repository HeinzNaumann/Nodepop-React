import "./App.css";
import PaginaAnuncios from "./components/anuncios/PaginaAnuncios/PaginaAnuncios";
import PaginaNuevoAnuncio from "./components/anuncios/PaginaNuevoAnuncio/PaginaNuevoAnuncio";
import PaginaAnuncio from "./components/anuncios/PaginaAnuncio/PaginaAnuncio";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import { useState } from "react";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  return (
    <div className='App'>
      {/* 
      <PaginaNuevoAnuncio />
      <PaginaAnuncio /> */}
      {isLogged ? (
        <PaginaAnuncios isLogged={isLogged} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
