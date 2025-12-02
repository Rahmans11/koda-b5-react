function AddProduct(props) {
    const { changeProducts } = props;

    const SubmitHandler = (event) =>{
        event.preventDefault();

        const newProduct = {};
        Object.assign(newProduct, 
            {productName: event.target["product-name"].value,
             qty: event.target["qty"].value,
             price: event.target["price"].value,
             status: event.target["status"].value
            });

        changeProducts((products)=>{
            return [...products, newProduct] 
        });
        event.target["product-name"].value = "";
        event.target["qty"].value = "";
        event.target["price"].value = "";
        event.target["status"].value = "0";
    };

    return (
        <aside className="w-[30%]">
            <form className="p-10 border-2 border-solid border-white h-full w-full"
            noValidate onSubmit={SubmitHandler}>
                <h2 className="m-5 text-4xl border-b-2 border-solid border-b-blue-700">
                    Add Product
                </h2>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="product-name">Product name:</label>
                    <br />
                    <input className="border-2 border-solid border-blue-400 bg-blue-400 rounded-[5px] text-black"
                    type="text" name="product-name" id="product-name" placeholder=" input product name "/>
                </div>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="qty">Quantity:</label>
                    <br /> 
                    <input className="border-2 border-solid border-blue-400 bg-blue-400 rounded-[5px] text-black"
                    type="number" name="qty" id="qty" placeholder="input quantity"/>
                </div>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="price">Price:</label>
                    <br /> 
                    <input className="border-2 border-solid border-blue-400 bg-blue-400 rounded-[5px] text-black"
                    type="number" name="price" id="price" placeholder="input price"/>
                </div>
                <div className="m-5"> 
                    <label className="text-2xl"
                    htmlFor="status">Status: </label> 
                    <select name="status" id="status" defaultValue={"0"} title="Judul">
                        <option value="0" disabled> select status!</option>
                        <option value="available" className="text-black">Available</option>
                        <option value="empty" className="text-black">Empty</option>
                    </select>
                </div>
                <br />
                <div className="flex justify-center">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </aside>
    )
}

export default AddProduct;