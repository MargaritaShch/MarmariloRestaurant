import React,{useState, useRef} from "react";
import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import Slider from '../Slider/Slider';
import Menu from '../Menu/Menu';
import ProductList from '../ProductList/ProductList';
import Footer from '../Footer/Footer';
import Bag from "../Bag/Bag";
import './PageAboutCompany.css'

function PageAboutCompany({updateQuantityInOtherComponent}){
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const burgerRef = useRef(null)
    const saladRef = useRef(null);
    const starterRef = useRef(null);
    const drinksRef = useRef(null);
    const sauceRef = useRef(null);
  
    const scrollToProduct = (ref) => {
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  
  
  console.log('>>>', products)
    function incrementCount(){
      setCount(count+1);
     
    }
    const addToBag = (product) => {
      setProducts((prevProducts) => {
        const updatedProducts = { ...prevProducts };
    
        if (updatedProducts[product.name]) {
          // Если продукт уже существует, обновляем количество и цену
          updatedProducts[product.name].quantity += 1;
          updatedProducts[product.name].price += parseFloat(product.price);
        } else {
          // Если продукта нет, добавляем новый
          updatedProducts[product.name] = {
            name: product.name,
            price: parseFloat(product.price),
            quantity: 1,
            totalPrice: parseFloat(product.price)
          };
      
        }
     updatedProducts[product.name].totalPrice =
      updatedProducts[product.name].quantity * updatedProducts[product.name].price;
        return updatedProducts;
      });
    };

    return (
      <div className="App1">
        <Header count={count} />
        <Cover />
        <Slider />
        <Menu
          scrollToBurger={() => scrollToProduct(burgerRef)}
          scrollToSalads={() => scrollToProduct(saladRef)}
          scrollToStarter={() => scrollToProduct(starterRef)}
          scrollToDrinks={() => scrollToProduct(drinksRef)}
          scrollToSauce={() => scrollToProduct(sauceRef)}
  
        />
        <ProductList
          burgerRef={burgerRef}
          saladRef={saladRef}
          starterRef={starterRef}
          drinksRef={drinksRef}
          sauceRef={sauceRef}
          incrementCount={incrementCount}
          addToBag={addToBag}
          updateQuantity={updateQuantityInOtherComponent} 
        />
        <div className="fot-gen">
        <Footer />
        </div>
        
      </div>
    );
  }

export default PageAboutCompany;