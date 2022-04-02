import "./productList.css"
import Product from "../product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Portfolio</h1>
                <p className="pl-desc">
                    Here are just a few of my most recent projects, check them out!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product 
                    key={item.id} 
                    img = {item.img} 
                    link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
