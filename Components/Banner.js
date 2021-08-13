import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] lg:h[600px] xl-[700px] 2xl:h-[900px]">
      <Image
        src="/hero.jpeg"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/3 w-full ml-10 md:ml-30 lg:ml-36">
                <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white w-96 font-bold mb-5">
                    Olympian & Paralympian Online Experiences.
                </h1>
                <button className="text-red-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">Explore Now</button>
            </div>
    </div>
  );
};

export default Banner;
