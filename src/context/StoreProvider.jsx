import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../hooks/reducer/cartReducer";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

const CartContext = createContext();
export const useStore = () => useContext(CartContext);
export const StoreProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    console.log("sweet")
    const store = collection(db, "products");
    getDocs(store).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
    return () => {
      setProducts([]);
    };
  }, []);

  const handleClose = () => setIsOpen(false);

  return (
    <CartContext.Provider
      value={{ dispatch, products, handleClose, isOpen, cart, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
