import { useEffect, useState } from "react";
import { getUltimosAnuncios } from "./service";

import "./PaginaAnuncios.css";

import styles from "./AnunciosPagina.module.css";

function PaginaAnuncios() {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    getUltimosAnuncios().then(setAnuncios);
  });

  return (
    <div className={styles.paginaAnuncios}>
      ultimos anuncios
      <ul>
        {anuncios.map(anuncio => (
          <li key={anuncio.id}>{anuncio.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaAnuncios;
