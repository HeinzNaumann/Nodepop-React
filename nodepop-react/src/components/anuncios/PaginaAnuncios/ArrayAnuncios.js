import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { ListaVacia } from "./PaginaAnuncios";

import styles from "./AnunciosPagina.module.css";

const ArrayAnuncio = ({ anuncios }) => {
  return (
    <Fragment>
      <div className={styles.paginaAnuncios}>
        {anuncios.length ? (
          <ul className='contenedor-anuncios'>
            {anuncios.map(anuncio => (
              <li className='listado-anuncios' key={anuncio.id}>
                <Link to={`/adverts/${anuncio.id}`}>
                  <div className='bloque-anuncio'>
                    <img
                      alt='imagenes-articulos'
                      className='imagenes-anuncios'
                      src={`${process.env.REACT_APP_API_BASE_URL}${anuncio.photo}`}
                    />
                    <h2>{anuncio.name}</h2>
                    <p>
                      {" "}
                      <strong>Precio:</strong> {anuncio.price}{" "}
                    </p>
                    <p>
                      <strong>Tipo:</strong> {anuncio.tags}{" "}
                    </p>
                    <p>
                      <strong> Estado: </strong>
                      {anuncio.sale ? `En venta` : `Se compra`}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ListaVacia />
        )}
      </div>
    </Fragment>
  );
};

export default ArrayAnuncio;
