import { PRODUCTS } from "./constants";

const setDefaultInventory = () => {
  const inventory = {};
  Object.entries(PRODUCTS).forEach((product) => {
    inventory[product[0]] = 0;
  });
  return inventory;
};

export default setDefaultInventory;
