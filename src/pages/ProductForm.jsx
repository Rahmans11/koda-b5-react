import { useState } from "react";
import ShowProduct from "../component/ShowProduct";
import AddProduct from "../component/AddProduct";

function ProductForm() {
  const [product, setproduct] = useState([]);
  return (
    <>
      <header className="p-5 h-[15vh] bg-amber-200 text-2xl font-bold select-none">Product List</header>
      <main className="flex min-h-[85vh]">
        <ShowProduct products={product} />
        <AddProduct changeproduct={setproduct} />
      </main>
    </>
  );
}

export default ProductForm;