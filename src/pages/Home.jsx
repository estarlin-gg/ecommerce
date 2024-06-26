import { Button, Carousel } from "flowbite-react";
import { CarouselItem } from "../components/CarouselItem";
import { ProductCard } from "../components/ProductCard";
import { ClothesType } from "../components/ClothesType";
import { useAuth } from "../context/AuthProvider";
import { useStore } from "../context/StoreProvider";

export const Home = () => {
  const { user } = useAuth();
  const { products } = useStore();
  console.log(products)

  return (
    <>
      <div className="h-[80dvh]">
        <Carousel
          slideInterval={2000}
          className="bg-slate-100  rounded-none object-cover"
        >
          <CarouselItem
            BackGround={"bg-carousel1"}
            heading={"Lorem ipsum"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <CarouselItem
            BackGround={"bg-carousel2"}
            heading={"Lorem ipsum"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
          <CarouselItem
            BackGround={"bg-carousel3"}
            heading={"Lorem ipsum"}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit"
          />
        </Carousel>
      </div>
      <section className="w-full mt-12">
        <div className="w-full  text-center space-y-2 p-4">
          <h2 className="uppercase text-2xl sm:text-4xl font-bold">
            new collection
          </h2>
          <p className="text-md text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ipsam
            possimus inventore, illum in impedit quas, voluptate, laboriosam
            facilis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  px-4 lg:p-4 ">
          {products.slice(0, 6).map((item) => (
            <ProductCard
              key={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </section>
      <section className="w-full p-4 md:p-8 mt-12">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_960_720.jpg"
          className="rounded-2xl w-full aspect-square object-cover  max-h-[400px]"
          alt=""
        />
        <div className="text-center gap-2 flex flex-col items-center mt-4">
          <h2 className="text-4xl font-bold uppercase">wear to wedding</h2>

          <p className="lg:text-lg text-gray-500">
            A symphony of exquisite designs tailored for your unforgettable
            moments
          </p>

          <Button className="bg-black text-white" size={"lg"} pill>
            See Details
          </Button>
        </div>
      </section>
      <section className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <ClothesType backgroundImage={"/img/man.jpg"} title={"Man"} />
        <ClothesType backgroundImage={"/img/woman.jpg"} title={"Woman"} />
        <ClothesType backgroundImage={"/img/ninos.avif"} title={"Kids"} />
      </section>
    </>
  );
};
