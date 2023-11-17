import _ from "lodash";
import { useState } from "react";
import "./App.css";
import setDefaultInventory from "./utils/aux";
import { PRODUCTS } from "./utils/constants";

function App() {
  const [inventory, setInventory] = useState(setDefaultInventory());
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addProduct = (product) => (e) => {
    const copy = _.cloneDeep(inventory);
    copy[product] = copy[product] + 1;
    setInventory(copy);
    setTotalQuantity(getTotals(copy)[0]);
    setTotalPrice(getTotals(copy)[1]);
  };

  const removeProduct = (product) => (e) => {
    const copy = _.cloneDeep(inventory);
    copy[product] = 0;
    setInventory(copy);
    setTotalQuantity(getTotals(copy)[0]);
    setTotalPrice(getTotals(copy)[1]);
  };

  const getTotals = (newInventory) => {
    var price = 0;
    var quantity = 0;
    Object.entries(newInventory).forEach((product) => {
      price += product[1] * PRODUCTS[product[0]][0];
      quantity += product[1];
    });
    return [quantity, price];
  };

  return (
    <div className="app-main-container">
      <div className="table-container">
        <table className="product-table">
          <thead>
            <tr>
              <th>CANTIDAD</th>
              <th>DESCRIPCIÓN</th>
              <th>SUBTOTAL</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(inventory).map((product) => {
              const productDetails = PRODUCTS[product[0]];
              if (product[1] !== 0) {
                return (
                  <tr key={`inventory-${product[0]}`}>
                    <td>{product[1]}</td>
                    <td>{productDetails[1]}</td>
                    <td>{productDetails[0]}</td>
                    <td>{productDetails[0] * product[1]}</td>
                    <td>
                      <button
                        type="button"
                        value="quitar"
                        onClick={removeProduct(product[0])}
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="app-bottom-row">
        <div className="select-new-product">
          <h3>Seleccionar nuevo producto</h3>
          <div className="product-list">
            {Object.entries(PRODUCTS).map((product) => {
              return (
                <button onClick={addProduct(product[0])} key={product[0]}>
                  <span>{product[1][1]}:</span>
                  <span>${product[1][0]}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="purchase-details">
          <h3>Detalles de compra</h3>
          <div>
            <span>Cantidad de items:</span>
            <span>{totalQuantity}</span>
          </div>
          <div>
            <span>Precio total:</span>
            <span>${totalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
