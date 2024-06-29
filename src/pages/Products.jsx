import { Filters } from "../components/Filters";
import { ProductCard } from "../components/ProductCard";
import { useAuth } from "../context/AuthProvider";
import { useStore } from "../context/StoreProvider";

export const Products = () => {
  const { user } = useAuth();

  const { products } = useStore();
  return (
    <>
      <h2 className="text-center mt-8 text-3xl font-semibold">Products</h2>
      <div className="w-full p-4 flex flex-col ">
        <h2 className="text-lg font-medium">Filters</h2>
        <Filters />
      </div>
      <div className="grid grid-cols-1 p-4 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-cols-">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
};
