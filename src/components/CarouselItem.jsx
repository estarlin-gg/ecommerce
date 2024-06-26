import { Button } from "flowbite-react";
import React from "react";

export const CarouselItem = ({ classes, BackGround, heading, text }) => {
  return (
    <div
      className={`${classes} w-full h-full bg-black/50 bg-blend-multiply flex items-end p-4  ${BackGround} bg-top bg-cover bg-no-repeat`}
    >
      <div className="flex flex-col gap-2 py-8 px-4 lg:px-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="text-lg leading-8 text-white">{text}</p>

        <Button className="sm:w-44" pill size={"lg"} color={"dark"}>
          Get Now
        </Button>
      </div>
    </div>
  );
};
