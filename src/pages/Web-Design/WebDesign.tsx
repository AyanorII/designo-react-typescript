import React from "react";
import Categories from "../../components/Categories/Categories";
import Container from "../../components/Container";
import Intro from "../../components/Intro/Intro";
import Projects from "../../components/Projects/Projects";
import CategoryInterface from "../../modules/interfaces/CategoryInterface";
import { IntroProps } from "../../components/Intro/Intro";
import { ProjectProps } from "../../components/Projects/Project";

type Props = {};

const intro: IntroProps = {
  heading: "Web Design",
  paragraph:
    "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
};

const projects: ProjectProps[] = [
  {
    title: "Express",
    description: "A multi-carrier shipping website for ecommerce businesses.",
    img: "/web-design/desktop/image-express.jpg",
  },
  {
    title: "Transfer",
    description:
      "Site for low-cost money transfers and sending money within seconds.",
    img: "/web-design/desktop/image-transfer.jpg",
  },
  {
    title: "Photon",
    description:
      "A state-of-the-art music player with high-resolution audio and DSP effects.",
    img: "/web-design/desktop/image-photon.jpg",
  },
  {
    title: "Builder",
    description:
      "Connects users with local contractors based on their location.",
    img: "/web-design/desktop/image-builder.jpg",
  },
  {
    title: "Blogr",
    description:
      "Blogr is a platform for creating an online blog or publication.",
    img: "/web-design/desktop/image-blogr.jpg",
  },
  {
    title: "Camp",
    description:
      "Get expert training in coding, data, design, and digital marketing.",
    img: "/web-design/desktop/image-camp.jpg",
  },
];

const categories: CategoryInterface[] = [
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

const WebDesign = (props: Props) => {
  const { heading, paragraph } = intro;

  return (
    <>
      <Container className="full">
        <Intro heading={heading} paragraph={paragraph} />
      </Container>
      <Projects projects={projects} />
      <Categories categories={categories} />
    </>
  );
};

export default WebDesign;
