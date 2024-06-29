import { Button, Drawer } from "flowbite-react";
import { useStore } from "../context/StoreProvider";
import { CartItem } from "./CartItem";
import { HiShoppingCart } from "react-icons/hi";
import { useState } from "react";

export function ShopCart() {
  const { isOpen, handleClose, cart } = useStore();

  const totalPay = cart.reduce((i, item) => i + item.price, 0);

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={handleClose}
             
        position="right"
        className="overflow-y-hidden"
      >
        <Drawer.Header
          title="ShopCart"
          titleIcon={() => (
            <>
              <HiShoppingCart size={25} className="mr-2" />
            </>
          )}
          className="border-b border-black"
        />
        <Drawer.Items className="flex flex-col gap-4 py-2 overflow-auto ">
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
        <Drawer.Items className=" absolute z-50 bg-red-300 left-0 bottom-0 p-4 min-h-[200px] w-full  shadow-md">
          <div className="">
            <h2 className="font-medium text-xl">Total to pay: {totalPay}</h2>
            <Button className="w-full mt-6 bg-black">Pay</Button>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
