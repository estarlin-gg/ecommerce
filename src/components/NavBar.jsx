import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";
import { useAuth } from "../context/AuthProvider";
import { UserAvatar } from "./UserAvatar";
import { ShopCart } from "./ShopCart";
import { useStore } from "../context/StoreProvider";

export const Menu = () => {
  const { setIsOpen } = useStore();

  const { user } = useAuth();

  return (
    <>
      <Navbar className="shadow-md  mx-auto py-4 justify-center ">
        <Navbar.Toggle />
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Sweet
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-4 md:order-2">
          {user ? (
            <>
              <SlHandbag
                size={33}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
              <UserAvatar
                email={user.email}
                username={user.displayName}
                avatar={user.photoURL}
              />
            </>
          ) : (
            <div className="flex gap-2 md:order-2">
              <Link to={"/register"}>
                <Button
                  size={""}
                  color={"white"}
                  className=" border-2 border-black p-2  text-black"
                >
                  Sign Up
                </Button>
              </Link>
              <Link to={"/login"}>
                <Button size={""} color={"dark"} className=" p-2">
                  Log in
                </Button>
              </Link>
            </div>
          )}
        </div>
        <Navbar.Collapse>
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Mens</Link>
          <Link>Woman</Link>
        </Navbar.Collapse>
      </Navbar>
      <ShopCart />
    </>
  );
};
