import React,{useState} from "react";
import './Bag.css'
import Form from "../Form/Form";
import Header from "../Header/Header";



function Bag({ products,updateQuantityInOtherComponent }) {
 const [counter, setCounter] = useState(1)
 const totalSum = Object.values(products).reduce(
  (sum, product) => sum + product.price,
  0
);

const handleIncrement = (productName) => {
  updateQuantityInOtherComponent(productName, 1);
};

// const handleDecrement = (productName) => {
//   if (products[productName].quantity > 1) {
//     updateQuantityInOtherComponent(productName, -1);
//   } else {
//     // If the quantity is 1, remove the product from the bag
//     updateQuantityInOtherComponent(productName, 0);
//   }
// };

  return (
    <div >
      <div className="basket">
        <Header />
      </div>

      <h1 className="basket-name">#BASKET</h1>
      <h3 className="your-order">Your order:</h3>
      <span className="sum">Total: {totalSum} ₽</span>

      <div className="gen-ord">
        <div className="order">

       
         
               <div className="order">
              
          {Object.values(products).map((product) => (
        
            <div key={product.name}>
              <span className="orders">{product.name}</span>
            
              <div className="price">Price: {product.price} ₽</div>
              <button className="plus" >+</button>
              <button className="minus">-</button>
              <div className="quanity">Quantity: {product.quantity}</div>
            </div>
          ))}
        </div>
        
          
        </div>
      </div>

      <div className="form">
          <Form />
        </div>
    </div>
  );
}

export default Bag;