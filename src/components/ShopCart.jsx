import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useStore } from "../context/StoreProvider";
import { CartItem } from "./CartItem";

export function ShopCart() {
  const { isOpen, handleClose, cart } = useStore();

  return (
    <>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header
          title="ShopCart"
          titleIcon={() => <></>}
          className="border-b border-black"
        />
        <Drawer.Items className="flex flex-col gap-4 py-2">
          {cart.map((item) => (
            <CartItem
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))}
        </Drawer.Items>
      </Drawer>
    </>
  );
}
