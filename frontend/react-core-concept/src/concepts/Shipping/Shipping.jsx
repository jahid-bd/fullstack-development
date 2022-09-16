import "./shipping.css";
import { useState } from "react";

const data = [
  {
    id: "12345",
    title: "Keybord",
    stock: 15,
    price: 1050,
  },
  {
    id: "12452",
    title: "Mouse",
    stock: 12,
    price: 750,
  },
  {
    id: "98745",
    title: "Head Phone",
    stock: 20,
    price: 500,
  },
];

const Product = ({
  id,
  title,
  stock,
  price,
  quantity,
  total,
  increment,
  decrement,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{stock}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{total}</td>
      <td>
        <button onClick={() => increment(id)}>+</button>
        <button onClick={() => decrement(id)}>-</button>
      </td>
    </tr>
  );
};

const Shipping = () => {
  const [products, setproducts] = useState(
    data.map((item) => ({
      ...item,
      quantity: 0,
      total: 0,
    }))
  );

  const incrementProduct = (id) => {
    setproducts(
      products.map((item) => {
        if (item.id === id && item.quantity < item.stock) {
          item.quantity++;
          item.total = item.price * item.quantity;
        }
        return item;
      })
    );
  };

  const decrementProduct = (id) => {
    setproducts(
      products.map((item) => {
        if (item.id === id && item.quantity > 0) {
          item.quantity--;
          item.total = item.price * item.quantity;
        }
        return item;
      })
    );
  };

  const total = products.reduce((acc, cur) => acc + cur.total, 0);

  return (
    <div style={{ margin: "50px auto", width: "70%" }}>
      <h1>I am shipping component</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Stock</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Actions</td>
          </tr>
          {products.map((product) => (
            <Product
              key={product.id}
              {...product}
              increment={incrementProduct}
              decrement={decrementProduct}
            />
          ))}
          <tr>
            <td>Total : {total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Shipping;
