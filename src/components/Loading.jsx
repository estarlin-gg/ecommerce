import { Spinner } from "flowbite-react";

export const Loading = () => {
  return (
    <div className=" bg-white flex items-center justify-center h-[80dvh]">
      <Spinner size={"xl"} />
    </div>
  );
};
