import { useEffect, useState } from "react";
import { getUltimosAnuncios } from "../service";
import { Link } from "react-router-dom";
import Button from "../../common/button";

import Layout from "../../layout/Layout";

import "./PaginaAnuncios.css";

import styles from "./AnunciosPagina.module.css";

const ListaVacia = () => (
  <div style={{ textAlign: "center" }}>
    <p>Pon el primer anuncio</p>
    <Button as={Link} to='/adverts/new' variant='primary'>
      anuncio
    </Button>
  </div>
);

function PaginaAnuncios(history, ...props) {
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    getUltimosAnuncios().then(setAnuncios);
  }, []);

  return (
    <Layout title='What`s goin on' {...props}>
      <div className={styles.paginaAnuncios}>
        {!anuncios.length ? (
          <ul>
            ultimos anuncios
            {anuncios.map(anuncio => (
              <li
                key={anuncio.id}
                //onClick={() => history.push(`/adverts/${anuncio.id}`)}
              >
                <li>
                  <Link to={`/adverts/${anuncio.id}`}>
                    {anuncio.name} Precio:{anuncio.price} Tipo: {anuncio.tags}{" "}
                    {anuncio.sale ? `En venta` : `Se compra`}
                  </Link>
                  Photo:
                  <img src={anuncio.photo} />
                </li>
              </li>
            ))}
          </ul>
        ) : (
          <ListaVacia />
        )}
      </div>
    </Layout>
  );
}

export default PaginaAnuncios;
