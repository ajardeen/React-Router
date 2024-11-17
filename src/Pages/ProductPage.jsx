import { React } from "react";
import ProductCard from "../components/ProductCard";


function ProductPage({ addTOCart, products }) {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-h-screen bg-gray-100 p-3 md:p-20">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
              addTOCart={addTOCart}
              addedToCart={product.addedToCart}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
