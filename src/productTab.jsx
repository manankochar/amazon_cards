import Product from "./product.jsx"
function ProductTab(){
    let styles = {
        display: "flex",
        flexwrap: "flex",
        justifycontent: "centre",
        alignitems: "centre",


    }
    return(
        
        <div style={styles}> 
        
            < Product title={"Apple iPhone 15 pro"} idx={0}/>
            < Product title={"Sony Play Station 5"} idx={1}/>
            < Product title={"MacBook Pro M3 chip"} idx={2}/>
        </div>
    )
}

export default ProductTab;