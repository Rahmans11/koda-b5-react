function AddProduct(props) {
    const {changeProducts} = props;

    const SubmitHandler = (event) =>{
        event.preventDefault();

        const newProduct = {};
        Object.assign(newProduct, { productName: event.target["product-name"].value});
        Object.assign(newProduct, { qty: event.target["product-qty"].value});
        Object.assign(newProduct, { price: event.target["product-price"].value});
        Object.assign(newProduct, { status: event.target["product-status"].value});

        changeProducts((product)=>{
            return [...product, newProduct]
        });
        event.target["product-name"].value = "";
        event.target["product-qty"].value = "";
        event.target["product-price"].value = "";
        event.target["product-status"].value = "0";
    }

    return (
        <aside>
            <form noValidate onSubmit={SubmitHandler}>
                <h2>Add Product</h2>
                <div> 
                    <label htmlFor="product-name">product name:</label>
                    <input type="text" name="product-name" id="product-name" placeholder="input product name"/>
                </div>
                <div> 
                    <label htmlFor="qty">quantity:</label> 
                    <input type="number" name="qty" id="qty" placeholder="input quantity"/>
                </div>
                <div> 
                    <label htmlFor="price">price:</label> 
                    <input type="number" name="price" id="price" placeholder="input price"/>
                </div>
                <div> 
                    <label htmlFor="status">Status</label> 
                    <select name="status" id="status" defaultValue={"0"} title="Judul">
                        <option value="0" disabled> select status!</option>
                        <option value="available" className="text-black">Available</option>
                        <option value="empty" className="text-black">Empty</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </aside>
    )
}

export default AddProduct;