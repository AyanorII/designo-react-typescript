import React from "react";
import Categories from "../../components/Categories/Categories";
import Intro, { IntroProps } from "../../components/Intro/Intro";
import { ProjectProps } from "../../components/Projects/Project";
import Projects from "../../components/Projects/Projects";
import CategoryInterface from "../../modules/interfaces/CategoryInterface";

type Props = {};

const intro: IntroProps = {
  heading: "Graphic Design",
  paragraph:
    "We deliver eye-catching branding materials that are tailored to meet your business objectives.",
};

const projects: ProjectProps[] = [
  {
    title: "Tim Brown",
    description: "A book cover designed for Tim Brown’s new release, ‘Change’",
    img: "/graphic-design/desktop/image-change.jpg",
  },
  {
    title: "Boxed Water",
    description: "A simple packaging concept made for Boxed Water",
    img: "/graphic-design/desktop/image-boxed-water.jpg",
  },
  {
    title: "Science!",
    description: "A poster made in collaboration with the Federal Art Project",
    img: "/graphic-design/desktop/image-science.jpg",
  },
];

const categories: CategoryInterface[] = [
  {
    title: "Web Design",
    href: "/web-design",
    images: {
      mobile: "mobile/image-web-design.jpg",
      tablet: "tablet/image-web-design.jpg",
      desktop: {
        small: "desktop/image-web-design-small.jpg",
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
      }
    }
  }
];

const GraphicDesign = (props: Props) => {
  const { heading, paragraph } = intro;

  return (
    <>
      <Intro heading={heading} paragraph={paragraph} />
      <Projects projects={projects} />
      <Categories categories={categories}/>
    </>
  );
};

export default GraphicDesign;
