import { useEffect, useState } from "react";
import { getUltimosAnuncios } from "../service";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import FilterForm from "./FilterForm";

import ArrayAnuncio from "./ArrayAnuncios";

import Layout from "../../layout/Layout";

import "./PaginaAnuncios.css";

import styles from "./AnunciosPagina.module.css";

export const ListaVacia = () => (
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
    <Layout title='Listado de anuncios NodePop' {...props}>
      <FilterForm />
      <div className={styles.paginaAnuncios}></div>
      <ArrayAnuncio anuncios={anuncios}></ArrayAnuncio>
    </Layout>
  );
}

export default PaginaAnuncios;
