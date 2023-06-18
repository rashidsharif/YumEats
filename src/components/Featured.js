import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://i.pinimg.com/736x/2f/32/c1/2f32c16c9f0e0722d79d885f9ba082c0.jpg",
    },
    {
      url: "https://assets.bonappetit.com/photos/5c5d936be81bbf522a957993/1:1/w_2560%2Cc_limit/sambolognese-ramen-noodles.jpg",
    },
    { url: "https://images.deliveryhero.io/image/fd-pk/LH/r6gj-hero.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlider = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlider = () => {
    const isFirstSlide = currentIndex === sliders.length - 1;
    const newIndex = isFirstSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const moveToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Automatic slide change every 5 seconds
    const interval = setInterval(() => {
      const newIndex = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, sliders.length]);

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      >
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlider} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlider} />
        </div>
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((sliderItems, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

// import React, { useState } from "react";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

// const Featured = () => {
//   const sliders = [
//     {
//       url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
//     },
//     {
//       url: "https://i.pinimg.com/736x/2f/32/c1/2f32c16c9f0e0722d79d885f9ba082c0.jpg",
//     },
//     {
//       url: "https://assets.bonappetit.com/photos/5c5d936be81bbf522a957993/1:1/w_2560%2Cc_limit/sambolognese-ramen-noodles.jpg",
//     },
//     { url: "https://images.deliveryhero.io/image/fd-pk/LH/r6gj-hero.jpg" },
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const prevSlider = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };
//   const nextSlider = () => {
//     const isFirstSlide = currentIndex === sliders.length - 1;
//     const newIndex = isFirstSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };
//   const moveToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   return (
//     <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
//       <div
//         className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
//         style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
//       >
//         <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
//           <BsChevronCompactLeft onClick={prevSlider} />
//         </div>
//         <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
//           <BsChevronCompactRight onClick={nextSlider} />
//         </div>
//       </div>
//       <div className="flex top-4 justify-center py-2">
//         {sliders.map((sliderItems, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => moveToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;
