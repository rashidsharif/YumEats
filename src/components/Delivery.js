import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h1 className="text-orange-500 font-bold text-center text-2xl">
        Quick Delivery App
      </h1>
      <div className="max-w-[1240px] mx-auto grid gap-4 md:grid-cols-2">
        <img
          className="w-full md:w-auto mx-auto my-4"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience on-demand
          </h1>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
