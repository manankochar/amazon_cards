import Price from './price.jsx';
import "./product.css"

function Product({ title, idx}) {
    let oldPrice = ["1,39,000","49,999","1,69,999"];
    let newPrice = ["99,999","34,999","1,29,999"]
    let features = ["Max Performance","Pro Gaming","Superb Productivity"]
    return(
        <div className="product">
            <h3>{title}</h3>
            <p> {features[idx]} </p>
            < Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/> 
        </div>
    )
}

export default Product;