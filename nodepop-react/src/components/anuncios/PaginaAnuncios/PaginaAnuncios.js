import { useEffect, useState } from "react";
import { getUltimosAnuncios } from "../service";

import Layout from "../../layout/Layout";

import "./PaginaAnuncios.css";

import styles from "./AnunciosPagina.module.css";

function PaginaAnuncios(props) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    getUltimosAnuncios().then(setAnuncios);
  }, []);

  return (
    <Layout title='What`s goin on' {...props}>
      <div className={styles.paginaAnuncios}>
        ultimos anuncios
        <ul>
          {anuncios.map(anuncio => (
            <li key={anuncio.id}>{anuncio.content}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default PaginaAnuncios;
