import "./App.css";
import { PRODUCTS } from "./utils/constants";

function App() {
  return (
    <div className="main-container">
      <table>
        <tr>
          <th>CANTIDAD</th>
          <th>DESCRIPCIÓN</th>
          <th>SUBTOTAL</th>
          <th>TOTAL</th>
          <th></th>
        </tr>
        <tr>
          <td>2</td>
          <td>Fernet</td>
          <td>150</td>
          <td>300</td>
          <td>quitar</td>
        </tr>
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
