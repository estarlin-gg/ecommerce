import { Button } from "flowbite-react";

export const ClothesType = ({ title, backgroundImage }) => {
  return (
    <div
      className={`bg-blend-multiply bg-no-repeat bg-center bg-cover bg-black/10 flex items-end aspect-square rounded-lg min-h-[350px]`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-4">
        <h2 className="uppercase text-white font-semibold text-2xl ">{title}</h2>
        <Button className="bg-black text-white mt-2" pill size={"sm"}>See Details</Button>
      </div>
    </div>
  );
};
