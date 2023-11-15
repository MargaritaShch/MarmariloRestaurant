import React from "react";
import "./Form.css"

function Form(){
    return (
      <div className="form">
       
        <form>
          <div className="item-form">
            <input placeholder="Name*" name="name" type="text" />
          </div>

          <div className="item-form">
            <input placeholder="E-mail*" name="email" type="text" />
          </div>

          <div className="item-form">
            <input placeholder="Phone number*" name="phone" type="number" />
          </div>

          <div>
            <input
              placeholder="Adress*"
              name="adress"
              type="text"
              className="adress"
            />
          </div>

          <div className="item-form">
            <textarea type="text" name="message" placeholder="Your message*" />
          </div>

          <button type="submit">SEND</button>
        </form>

        <div className="out"></div>
      </div>
    );
}

export default Form;