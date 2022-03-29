import React from "react";
import AboutCard, { AboutCardProps } from "./AboutCard";
import AboutHero from "./AboutHero";
import LocationList from "./LocationList";

type Props = {};

const cards: AboutCardProps[] = [
  {
    images: {
      mobile: "/about/mobile/image-world-class-talent.jpg",
      tablet: "/about/tablet/image-world-class-talent.jpg",
      desktop: "/about/desktop/image-world-class-talent.jpg",
    },
    heading: "World-class talent",
    headingColor: "primary",
    variant: "h2",
    paragraph: `We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.

    Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`,
    paragraphColor: "dark",
  },
  {
    images: {
      mobile: "/about/mobile/image-real-deal.jpg",
      tablet: "/about/tablet/image-real-deal.jpg",
      desktop: "/about/desktop/image-real-deal.jpg",
    },
    heading: "The real deal",
    headingColor: "primary",
    variant: "h2",
    paragraph: `As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.

    We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`,
    paragraphColor: "dark",
  },
];

const About = (props: Props) => {
  const [worldClass, realDeal] = cards;
  return (
    <>
      <AboutHero />
      <AboutCard
        images={worldClass.images}
        heading={worldClass.heading}
        headingColor={worldClass.headingColor}
        variant={worldClass.variant}
        paragraph={worldClass.paragraph}
        paragraphColor={worldClass.paragraphColor}
      />
      <LocationList />
      <AboutCard
        images={ realDeal.images }
        heading={ realDeal.heading }
        headingColor={ realDeal.headingColor }
        variant={ realDeal.variant }
        paragraph={ realDeal.paragraph }
        paragraphColor={ realDeal.paragraphColor }
        revert
      />
    </>
  );
};

export default About;
