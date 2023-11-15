import React,{useState} from "react";
import './Bag.css'
import Form from "../Form/Form";
import Header from "../Header/Header";


function Bag({ products }) {
 const [counter, setCounter] = useState(1)
 
 function incrementCounter(){
  setCounter(counter+1)
 }
 
 //работаем с предыдущим состоняием
 function decrementCounter(){
  setCounter(prevCounter=>{
    if(prevCounter !==0){
      return prevCounter-1
    } 
    else{
      return prevCounter
    }
  })
 }


  return (
    <div>
      <div className="basket">
        <Header />
      </div>

      <h1 className="basket-name">#BASKET</h1>
      <h3 className="your-order">Your order:</h3>

      <div className="gen-ord">
        <div className="order">
        <span className="sum"></span>
          {products.length > 0 ? (
            products.map((product, index) => (
              <div key={index}>
                <span className="orders">
                  {product.name}: {product.price} 
                  <button className="plus" onClick={incrementCounter}>+</button> <button className="minus" onClick={decrementCounter}>-</button>
                  <span className="quanity">{counter}</span>
                </span>
              </div>
            ))
          ) : (
            <div>
              <span className="orders">No orders</span>
              
            </div>
           
          )}
          <div className="all-sum"></div>
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Bag;