import { useState } from "react";
import { Filters } from "../components/Filters";
import { ProductCard } from "../components/ProductCard";
import { useStore } from "../context/StoreProvider";

export const Products = () => {
  const [category, setCategory] = useState("All");
  const { products } = useStore();

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  const filteredProducts = products.filter(
    (i) => category === "All" || i.category[0] === category
  );

  return (
    <>
      <h2 className="text-center mt-8 text-3xl font-semibold">Products</h2>
      <div className="w-full p-4 flex flex-col">
        <h2 className="text-lg font-medium">Filters</h2>
        <Filters onCategoryChange={handleCategoryChange} />
      </div>
      <div className="p-4">
        {filteredProducts.length === 0 ? (
          <h2 className="text-center text-xl font-semibold">
            No products available for this category.
          </h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                image={item.image}
                price={item.price}
                name={item.name}
                id={item.id}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
