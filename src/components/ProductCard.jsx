import { Button } from "flowbite-react";
import { useStore } from "../context/StoreProvider";
import { useAuth } from "../context/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

export const ProductCard = ({ image, name, price, id }) => {
  const { dispatch } = useStore();
  const { user } = useAuth();
  const navigate = useNavigate();
  const ProductState = {
    id,
    image,
    name,
    price,
  };
  const handleAddToCart = () => {
    if (user) {
      dispatch({ type: "ADD", payload: { ...ProductState } });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=" max-w-md p-4  shadow-xl rounded-lg">
      <div className="card-img   object-cover ">
        <img src={image} alt="" className=" h-[350px]  object-cover mx-auto" />
      </div>
      <div className="card-body  mt-3">
        <h3 className="text-xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h3>

        <span className="font-semibold text-lg">{price}$</span>
      </div>
      <div className="mt-3">
        <Button
          size={"sm"}
          className="bg-black w-full uppercase"
          onClick={handleAddToCart}
        >
          Add To cart
        </Button>
      </div>
    </div>
  );
};
