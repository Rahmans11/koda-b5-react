import ProductList from "./ProductList";

function ShowProduct(props) {
 const { products } = props;
  return (
    <section className="flex-1 p-5 border-2 border-solid border-black">
      <table>
        <caption className="text-2xl font-bold mb-2">Product List</caption>
        <thead>
            <tr>
                <th scope="col">Product Name:</th>
                <th scope="col">Quantity:</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            {products.map((product, idx) => {
          return <ProductList key={idx} name={product.productName} quantity={product.qty} price={product.price} status={product.status}/>;
        })}
        </tbody>
      </table>
    </section>
  );
}

export default ShowProduct;