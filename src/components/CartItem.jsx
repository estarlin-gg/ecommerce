export const CartItem = ({ image, price, name }) => {
  return (
    <div className="flex gap-2  shadow-md p-2 ">
      <div className="aspect-square h-[100px]">
        <img src={image} className="w-full  aspect-square object-contain" />
      </div>
      <div className="p-2">
        <h2 className="text-sm font-semibold">{name}</h2>
        <span className="font-medium">${price}</span>
      </div>
    </div>
  );
};
