function ProductList({ productName, qty, price, status }) {
  return (
    <tr className="text-center border-2 border-solid border-blue-300">
        <td className="border-2 border-solid border-blue-300"
        >{productName}</td>
        <td className="border-2 border-solid border-blue-300"
        >{qty}</td>
        <td className="border-2 border-solid border-blue-300"
        >{price}</td>
        <td className="border-2 border-solid border-blue-300"
        >{status}</td>
    </tr>
  );
}
export default ProductList;