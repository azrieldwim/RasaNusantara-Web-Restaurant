import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-4">
      <img src={img} alt="img" className="lg:w-1/2 md:w-2/3 w-full max-w-lg h-auto"/>

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Kenapa Hidangan Nusantara?
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          architecto quisquam delectus minima perferendis nulla quia nisi
          laborum, exercitationem cum quo accusantium, impedit sed. Dicta, quo
          molestias omnis reprehenderit quae animi? Explicabo quasi accusamus
          laboriosam temporibus delectus, aut a? Quasi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
          suscipit reiciendis accusamus recusandae eum aspernatur pariatur odit
          veritatis facere. Magnam!
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Pelajari Selengkapnya" />
        </div>
      </div>
    </div>
  );
};

export default About;