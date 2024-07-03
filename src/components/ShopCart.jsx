import { Button, Drawer } from "flowbite-react";
import { useStore } from "../context/StoreProvider";
import { CartItem } from "./CartItem";
import { HiShoppingCart } from "react-icons/hi";

export function ShopCart() {
  const { isOpen, handleClose, cart } = useStore();

  const totalPay = cart.reduce((i, item) => i + item.price, 0);

  return (
    <>
      <div className="overflow-y-auto">
        <Drawer
          open={isOpen}
          onClose={handleClose}
          position="right"
          className="overflow-y-hiddeb no-scrollbar"
        >
          <Drawer.Header
            title="ShopCart"
            titleIcon={() => (
              <>
                <HiShoppingCart size={25} className="mr-2" />
              </>
            )}
            className="border-b border-black "
          />
          <Drawer.Items className="flex flex-col gap-4 py-2  overflow-y-auto">
            {cart.length <= 0 ? (
              <h2 className="text-center text-xl font-medium mt-16">
                Empty Cart
              </h2>
            ) : (
              cart.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                />
              ))
            )}
          </Drawer.Items>
          <Drawer.Items className=" fixed z-50 bg-slate-100 bottom-0 p-4 min-h-[150px] w-80 right-0  shadow-md">
            <div className="">
              <h2 className="font-medium text-xl">Total to pay: ${totalPay}</h2>
              <Button className="w-full mt-6 bg-black">Pay</Button>
            </div>
          </Drawer.Items>
        </Drawer>
      </div>
    </>
  );
}
