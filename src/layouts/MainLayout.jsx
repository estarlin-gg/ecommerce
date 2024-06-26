import { Outlet } from "react-router-dom";
import { Menu } from "../components/NavBar";
import { useAuth } from "../context/AuthProvider";
import { Spinner } from "flowbite-react";
import { Loading } from "../components/Loading";

export const MainLayout = () => {
  const { loading } = useAuth();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Menu />
          <main className="max-w-[1250px] lg:my-2 mx-auto relative">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
};
