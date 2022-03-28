import React from "react";
import Features from "./Features/Features";
import Hero from "./Hero/Hero";
import Categories from "../../components/Categories/Categories";
import CategoryInterface from "../../modules/interfaces/CategoryInterface";

const categories: CategoryInterface[] = [
  {
    title: "Web Design",
    href: "/web-design",
    images: {
      mobile: "mobile/image-web-design.jpg",
      tablet: "tablet/image-web-design.jpg",
      desktop: {
        small: "desktop/image-web-design-small.jpg",
        large: "desktop/image-web-design-large.jpg",
      },
    },
  },
  {
    title: "App Design",
    href: "/app-design",
    images: {
      mobile: "mobile/image-app-design.jpg",
      tablet: "tablet/image-app-design.jpg",
      desktop: {
        small: "desktop/image-app-design.jpg",
      },
    },
  },
  {
    title: "Graphic Design",
    href: "/graphic-design",
    images: {
      mobile: "mobile/image-graphic-design.jpg",
      tablet: "tablet/image-graphic-design.jpg",
      desktop: {
        small: "desktop/image-graphic-design.jpg",
      },
    },
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <Features />
    </>
  );
};

export default Home;
