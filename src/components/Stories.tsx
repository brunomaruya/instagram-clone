"use client";
import Story from "@/common/Story";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8,
    slidesToSlide: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 8,
    slidesToSlide: 4,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 8,
    slidesToSlide: 4,
    partialVisibilityGutter: 30,
  },
};

//link:https://www.npmjs.com/package/react-multi-carousel

export default function Stories() {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr.push(i);
  }
  return (
    <Carousel responsive={responsive} className="mb-6 mx-6">
      {arr.map((i) => (
        <Story />
      ))}
    </Carousel>
  );
}
