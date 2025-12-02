import ProductList from "./ProductList";

function ShowProduct(props) {
 const { products } = props;
  return (
    <section className="flex-1 p-5 border-2 border-solid border-white">
      <table className="border-2 border-solid border-blue-300 w-full">
        <caption className="text-2xl font-bold mb-2">Product List</caption>
        <thead className="border-2 border-solid border-blue-300">
            <tr className="border-2 border-solid border-blue-300">
                <th className="border-2 border-solid border-blue-300"
                scope="col">Product Name</th>
                <th className="border-2 border-solid border-blue-300"
                scope="col">Quantity</th>
                <th className="border-2 border-solid border-blue-300"
                scope="col">Price</th>
                <th className="border-2 border-solid border-blue-300"
                scope="col">Status</th>
            </tr>
        </thead>
        <tbody className="border-2 border-solid border-blue-300">
            {products.map((product, idx) => {
          return <ProductList key={idx} 
                                productName={product.productName} 
                                qty={product.qty} 
                                price={product.price} 
                                status={product.status}/>;
                    })}
        </tbody>
      </table>
    </section>
  );
}

export default ShowProduct;