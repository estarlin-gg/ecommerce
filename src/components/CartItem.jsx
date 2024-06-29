import { Button } from "flowbite-react";
import { useStore } from "../context/StoreProvider";

export const CartItem = ({ image, price, name, id }) => {
  const { dispatch } = useStore();
  return (
    <div className="flex shadow-md justify-between p-2">
      <div className="flex">
        <div className="aspect-square h-[100px]">
          <img src={image} className="w-full  aspect-square object-contain" />
        </div>
        <div className="p-2 h-full">
          <h2 className="text-sm font-semibold">{name}</h2>
          <span className="font-medium">${price}</span>

          <div className="cantidad">
            
          </div>
        </div>
      </div>
      <div className="flex items-center p-2 ">
        <Button
          className="w-fit p-0  rounded-full"
          color="failure"
          onClick={() => dispatch({ type: "DELETE", payload: { id: id } })}
        >
          x
        </Button>
      </div>
    </div>
  );
};
