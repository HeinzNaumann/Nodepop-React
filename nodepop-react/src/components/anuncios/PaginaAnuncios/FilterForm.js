import React, { Fragment } from "react";

const FilterForm = () => {
  return (
    <Fragment>
      <h1>Filtros</h1>
      <form>
        <label>Busca un producto</label>
        <input type='text' />
        <label for='vehicle1'>En venta</label>
        <input type='checkbox' />
        <label for='vehicle2'>Se compra</label>
        <input type='checkbox' />
        <label for='vehicle2'> Precio desde</label>
        <input type='number' />
        <label for='vehicle2'>hasta</label>
        <input type='number' />
        <label for='cars'>Choose a car:</label>
        <select size='4' multiple>
          <option value='lifestyle'>lifestyle</option>
          <option value='mobile'>mobile</option>
          <option value='motor'>motor</option>
          <option value='work'>work</option>
        </select>
        <button onSubmit>Filter</button>
      </form>
    </Fragment>
  );
};

export default FilterForm;
