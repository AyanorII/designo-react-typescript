import React from "react";
import Categories from "../../components/Categories/Categories";
import Container from "../../components/Container";
import Intro, { IntroProps } from "../../components/Intro/Intro";
import { ProjectProps } from "../../components/Projects/Project";
import Projects from "../../components/Projects/Projects";
import CategoryInterface from "../../modules/interfaces/CategoryInterface";

type Props = {};

const intro: IntroProps = {
  heading: "App Design",
  paragraph:
    "Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.",
};

const projects: ProjectProps[] = [
  {
    title: "Airfilter",
    description:
      "Solving the problem of poor indoor air quality by filtering the air",
    img: "/app-design/desktop/image-airfilter.jpg",
  },
  {
    title: "Eyecam",
    description:
      "Product that lets you edit your favorite photos and videos at any time",
    img: "/app-design/desktop/image-eyecam.jpg",
  },
  {
    title: "Faceit",
    description:
      "Get to meet your favorite internet superstar with the faceit app",
    img: "/app-design/desktop/image-faceit.jpg",
  },
  {
    title: "Todo",
    description: "A todo app that features cloud sync with light and dark mode",
    img: "/app-design/desktop/image-todo.jpg",
  },
  {
    title: "Loopstudios",
    description: "A VR experience app made for Loopstudios",
    img: "/app-design/desktop/image-loopstudios.jpg",
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
        large: "desktop/image-web-design-large.jpg"
      }
    }
  },
  {
    title: "Graphic Design",
    href: "/graphic-design",
    images: {
      mobile: "mobile/image-graphic-design.jpg",
      tablet: "tablet/image-graphic-design.jpg",
      desktop: {
        small: "desktop/image-graphic-design.jpg",
      }
    }
  }
];

const AppDesign = (props: Props) => {
  const { heading, paragraph } = intro;

  return (
    <>
      <Container className="full">
        <Intro heading={heading} paragraph={paragraph} />
      </Container>
      <Projects projects={projects} />
      <Categories categories={categories}/>
    </>
  );
};

export default AppDesign;
