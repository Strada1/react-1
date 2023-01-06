import './App.css'
import Product from "./components/Product.jsx";
import {useState} from "react";
import {PRODUCTS} from "./assets/products.js";

function App() {
    const [products, setProducts] = useState(PRODUCTS)

    return (
        <div className="App">
            {products.map((product) =>
                <Product product={product} key={PRODUCTS.id}/>
            )}
        </div>
    )
}

export default App
