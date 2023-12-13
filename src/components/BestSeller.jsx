import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img6 from "../assets/img/img6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 pt-20">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Best Seller
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Nasi Goreng" price="Rp. 25.000" />
        <DishesCard img={img2} title="Sate" price="Rp. 30.000" />
        <DishesCard img={img3} title="Bakso" price="Rp. 22.000" />
        <DishesCard img={img4} title="Es Cendol" price="Rp. 15.000" />
        <DishesCard img={img6} title="Es Selendang Mayang" price="Rp. 18.000" />
      </div>
    </div>
  );
};

export default Menu;