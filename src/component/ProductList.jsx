function ProductList({ productName, qty, price, status }) {
  return (
    <tr>
        <td>{productName}</td>
        <td>{qty}</td>
        <td>{price}</td>
        <td>{status}</td>
    </tr>
  );
}
export default ProductList;