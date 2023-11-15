import React,{useRef, forwardRef,useState} from "react";
import './ProductList.css';
import burger1 from './ImgProductList/burger1.png'
import burger2 from "./ImgProductList/burger2.png";
import burger3 from "./ImgProductList/burger3.png";
import burger4 from "./ImgProductList/burger4.png";
import burger5 from "./ImgProductList/burger5.png";
import burger6 from "./ImgProductList/burger6.png";
import salad1 from "./ImgProductList/salad1.png";
import starter1 from './ImgProductList/starter1.png';
import starter2 from "./ImgProductList/starter2.png";
import starter3 from "./ImgProductList/starter3.png";
import drinks1 from './ImgProductList/drinks1.png'
import sauce1 from './ImgProductList/sauce1.png'
import sauce2 from "./ImgProductList/sauce2.png";
import sauce3 from "./ImgProductList/sauce3.png";
import sauce4 from "./ImgProductList/sauce4.png";

const arr =[]

const ProductList = forwardRef((props, ref) => {
    const {
      burgerRef,
      saladRef,
      starterRef,
      drinksRef,
      sauceRef,
      incrementCount,
      addToBag,
      counter
    } = props;

  
    return (
      <div>
        
        <div className="burgers" ref={burgerRef}>
          <h1 className="section1">#BURGERS</h1>
          <p className="describe-section">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>

          <div className="container">
            <div className="block1">
              <div>
                <h3 className="name-burger">NAME1 BURGER</h3>
                <p className="price">{490}₽</p>
                <p className="describe-burger">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </p>

                <button
                  className="choose"
                  onClick={() => {
                    incrementCount({ name: "NAME1 BURGER", price: "490₽" }, {counter});
                    addToBag({ name: "NAME1 BURGER", price: "490₽" });
                  }}
                >
                  ADD
                </button>
              </div>
              <div>
                {/* <img src={burger2} alt="burger1" className="photo-burger" /> */}
              </div>
            </div>

            <div className="block1">
              <div>
                <h3 className="name-burger">NAME2 BURGER</h3>
                <p className="price">520₽</p>
                <p className="describe-burger">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </p>
                <button
                  className="choose"
                  onClick={() => {
                    incrementCount({ name: "NAME2 BURGER", price: "520₽" });
                    addToBag({ name: "NAME2 BURGER", price: "520₽" });
                  }}
                >
                  ADD
                </button>
              </div>
              <div>
                {/* <img src={burger3} alt="burger1" className="photo-burger" /> */}
              </div>
            </div>

            <div className="block1">
              <div>
                <h3 className="name-burger">NAME3 BURGER</h3>
                <p className="price">550₽</p>
                <p className="describe-burger">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </p>
                <button
                  className="choose"
                  onClick={() => {
                    incrementCount({ name: "NAME3 BURGER", price: "550₽" });
                    addToBag({ name: "NAME3 BURGER", price: "550₽" });
                  }}
                >
                  ADD
                </button>
              </div>
              <div>
                {/* <img src={burger4} alt="burger1" className="photo-burger" /> */}
              </div>
            </div>

            <div className="block1">
              <div>
                <h3 className="name-burger">NAME4 BURGER</h3>
                <p className="price">480₽</p>
                <p className="describe-burger">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </p>
                <button
                  className="choose"
                  onClick={() => {
                    incrementCount({ name: "NAME4 BURGER", price: "480₽" });
                    addToBag({ name: "NAME4 BURGER", price: "480₽" });
                  }}
                >
                  ADD
                </button>
              </div>
              <div>
                {/* <img src={burger5} alt="burger1" className="photo-burger" /> */}
              </div>
            </div>

            <div className="block1">
              <div>
                <h3 className="name-burger">NAME5 BURGER</h3>
                <p className="price">450₽</p>
                <p className="describe-burger">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing
                </p>
                <button
                  className="choose"
                  onClick={() => {
                    incrementCount({ name: "NAME5 BURGER", price: "450₽" });
                    addToBag({ name: "NAME5 BURGER", price: "450₽" });
                  }}
                >
                  ADD
                </button>
              </div>
              <div>
                {/* <img src={burger6} alt="burger1" className="photo-burger" /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="salad">
          <div ref={saladRef}>
            <h1 className="section1">#SALADS</h1>
            <p className="describe-section">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="container2">
              <div className="block1">
                <div>
                  <h3 className="name-burger">CESAR</h3>
                  <p className="price">400₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly used in the graphic
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "CESAR", price: "400₽" });
                      addToBag({ name: "CESAR", price: "400₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={salad1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">GREEK</h3>
                  <p className="price">490₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly used in the graphic
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "GREEK", price: "490₽" });
                      addToBag({ name: "GREEK", price: "490₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={salad1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">SEASON</h3>
                  <p className="price">520₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly used in the graphic
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "SEASON", price: "520₽" });
                      addToBag({ name: "SEASON", price: "520₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={salad1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="salad" ref={starterRef}>
          <div>
            <h1 className="section1">#STARTERS</h1>
            <p className="describe-section">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="container2">
              <div className="block1">
                <div>
                  <h3 className="name-burger">FRENCH FRIES</h3>
                  <p className="price">400₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "FRENCH FRIES", price: "400₽" });
                      addToBag({ name: "FRENCH FRIES", price: "400₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={starter1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">CHIKEN</h3>
                  <p className="price">490₽</p>
                  <p className="describe-burger">
                    КLorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "CHIKEN", price: "490₽" });
                      addToBag({ name: "CHIKEN", price: "490₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={starter2} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">CHEESY STICKS</h3>
                  <p className="price">520₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "CHEESY STICKS", price: "520₽" });
                      addToBag({ name: "CHEESY STICKS", price: "520₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={starter3} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="salad" ref={drinksRef}>
          <div>
            <h1 className="section1">#DRINKS</h1>
            <p className="describe-section">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="container2">
              <div className="block1">
                <div>
                  <h3 className="name-burger">MOHITO</h3>
                  <p className="price">400₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "MOHITO", price: "400₽" });
                      addToBag({ name: "MOHITO", price: "400₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={drinks1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">FRUIT LEMONADE</h3>
                  <p className="price">490₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "FRUIT LEMONADE", price: "490₽" });
                      addToBag({ name: "FRUIT LEMONADE", price: "490₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={drinks1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">BERRY LEMONADE</h3>
                  <p className="price">320₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "BERRY LEMONADE", price: "320₽" });
                      addToBag({ name: "BERRY LEMONADE", price: "320₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={drinks1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>
              <div className="block1">
                <div>
                  <h3 className="name-burger">MORS</h3>
                  <p className="price">250₽</p>
                  <p className="describe-burger">
                    Lorem ipsum is placeholder text commonly
                  </p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "MORS", price: "250₽" });
                      addToBag({ name: "MORS", price: "250₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={drinks1} alt="burger1" className="photo-burger" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sauce" ref={sauceRef}>
          <div>
            <h1 className="section1">#SAUCES</h1>
            <p className="describe-section">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
            <div className="container5">
              <div className="block1">
                <div>
                  <h3 className="name-burger">MUSTARD</h3>
                  <p className="price">100₽</p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "MUSTARD", price: "100₽" });
                      addToBag({ name: "MUSTARD", price: "100₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={sauce1} alt="burger1" className="photo-sauce" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">PEPPER</h3>
                  <p className="price">100₽</p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "PEPPER", price: "100₽" });
                      addToBag({ name: "PEPPER", price: "100₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={sauce2} alt="burger1" className="photo-sauce" /> */}
                </div>
              </div>

              <div className="block1">
                <div>
                  <h3 className="name-burger">SPECIALITY</h3>
                  <p className="price">100₽</p>
                  <button
                    className="choose"
                    onClick={() => {
                      incrementCount({ name: "SPECIALITY", price: "100₽" });
                      addToBag({ name: "SPECIALITY", price: "100₽" });
                    }}
                  >
                    ADD
                  </button>
                </div>
                <div>
                  {/* <img src={sauce4} alt="burger1" className="photo-sauce" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProductList;

