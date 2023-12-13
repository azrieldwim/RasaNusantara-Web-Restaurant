import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className="rounded w-full lg:w-2/4 space-y-3 backdrop-brightness-50 p-5">
        <h1 className=" text-brightColor  font-semibold text-5xl">
            Rasa Nusantara, Sentuhan Tradisi dalam Setiap Sajian!
        </h1>
        <p className=" text-brightColor font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className=" lg:pl-0">
            <Link
                to="dishes"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightColor transition-all cursor-pointer"
                >
                <Button title="Pesan Sekarang" />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;