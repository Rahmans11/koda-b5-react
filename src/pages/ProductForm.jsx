import { useState } from "react";
import ShowProduct from "../component/ShowProduct";
import AddProduct from "../component/AddProduct";

function ProductForm() {
  const [product, setproduct] = useState([]);
  return (
    <>
      <header className="p-5 h-[20vh] bg-blue-400 text-2xl font-bold select-none w-screen text-center">
       <h1>Product Form</h1>  
      </header>
      <main className="flex min-h-[85vh]">
        <ShowProduct products={product} />
        <AddProduct changeProducts={setproduct} />
      </main>
    </>
  );
}

export default ProductForm;