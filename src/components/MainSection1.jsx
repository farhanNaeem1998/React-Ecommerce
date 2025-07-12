import React, { use, useEffect, useRef, useState } from "react";

import rect from "../assets/Rectangle 17.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import axios from "axios";

export const MainSection1 = () => {
  const sliderRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Scroll controls
  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    sliderRef.current.scrollLeft += 300;
  };

  return (
    <>
      <div className="main w-full lg:mt-30 mt-5">
        <div className="red flex justify-start lg:mx-50 items-center mx-5">
          <div className="rect">
            <img src={rect} alt="" className="w-5 h-10" />
          </div>
          <div className="text ml-3 text-red-500">Today's </div>
        </div>
        <div className="sales flex lg:mx-50 items-center mx-5 justify-between lg:mt-10 mt-3">
          <div className="first flex items-center justify-start">
            <div className="font-bold lg:text-4xl text-1xl">
              <h1>Flash Sales</h1>
            </div>
            <div className="lg:ml-70 font-bold lg:text-4xl text-1xl ml-10">
              <h1>03 : 23 : 19 : 56</h1>
            </div>
          </div>
          <div className="second flex items-center justify-start">
            <div>
              <img
                src={left}
                alt=""
                className="w-[46px] h-[46px]"
                onClick={scrollLeft}
              />
            </div>
            <div>
              <img
                src={right}
                alt=""
                className="w-[46px] h-[46px]"
                onClick={scrollRight}
              />
            </div>
          </div>
        </div>
        <div
          className="flash-sales-cards flex justify-between overflow-hidden scroll-smooth no-scrollbar lg:ml-50 border-2 border-gray-200 mt-10"
          ref={sliderRef}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="basis-[44.44%] lg:basis-[22.22%] flex-shrink-0 bg-white rounded-lg shadow p-4"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto object-contain"
              />
              <h2 className="text-md font-semibold mt-2 line-clamp-2">
                {product.title}
              </h2>
              <p className="text-green-600 font-bold mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
