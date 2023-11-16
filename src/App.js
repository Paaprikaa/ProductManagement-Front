import _ from "lodash";
import { useState } from "react";
import "./App.css";
import setDefaultInventory from "./utils/aux";
import { PRODUCTS } from "./utils/constants";

function App() {
  const [inventory, setInventory] = useState(setDefaultInventory());

  const addProduct = (product) => (e) => {
    const copy = _.cloneDeep(inventory);
    copy[product] = copy[product] + 1;
    setInventory(copy);
  };

  const removeProduct = (product) => (e) => {
    const copy = _.cloneDeep(inventory);
    copy[product] = 0;
    setInventory(copy);
  };

  return (
    <div className="main-container">
      <table>
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
            if (product[1] != 0) {
              return (
                <tr key={`inventory-${product[0]}`}>
                  <td>{product[1]}</td>
                  <td>{productDetails[1]}</td>
                  <td>{productDetails[0]}</td>
                  <td>{productDetails[0] * product[1]}</td>
                  <td>
                    <input
                      type="button"
                      value="quitar"
                      onClick={removeProduct(product[0])}
                    />
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <div className="app-bottom-row">
        <div className="select-new-product">
          <h3>Seleccionar nuevo producto</h3>
          <div className="product-list">
            {Object.entries(PRODUCTS).map((product) => {
              return (
                <input
                  type="button"
                  value={`${product[1][1]}: $${product[1][0]}`}
                  onClick={addProduct(product[0])}
                  key={product[0]}
                />
              );
            })}
          </div>
        </div>
        <div className="purchase-details">
          <h3>Detalles de compra</h3>
          <div>Cantidad de items: </div>
          <div>Precio total: </div>
        </div>
      </div>
    </div>
  );
}

export default App;
