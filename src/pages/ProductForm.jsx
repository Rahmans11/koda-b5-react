import { useState } from "react";
import ShowProduct from "../component/ShowProduct";
import AddProduct from "../component/AddProduct";
import Heading from "../component/Heading";
import Footer from "../component/Footer";

function ProductForm() {
  const [product, setproduct] = useState([]);
  return (
    <>
      <Heading/>
      <main>
        <div className="p-5 h-[20vh] bg-blue-600 text-2xl font-bold select-none w-screen text-center">
          <h1>Product Form</h1> 
        </div>
        <div className="flex min-h-[85vh]">
          <ShowProduct products={product} />
        <AddProduct changeProducts={setproduct} />
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default ProductForm;