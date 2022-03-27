import React from "react";
import styled from "styled-components";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";

const links = [
  {
    icon: facebook,
    url: "https://www.facebook.com/",
  },
  {
    icon: youtube,
    url: "https://www.youtube.com/",
  },
  {
    icon: twitter,
    url: "https://www.twitter.com/",
  },
  {
    icon: pinterest,
    url: "https://www.pinterest.com/",
  },
  {
    icon: instagram,
    url: "https://www.instagram.com/",
  },
];

const FooterSocialMedia = () => {
  return (
    <StyledUl>
      {links.map((link) => {
        const { icon, url } = link;
        return (
          <li key={url}>
            <a href={url}>
              <img src={icon} alt="social media" />
            </a>
          </li>
        );
      })}
    </StyledUl>
  );
};

export default FooterSocialMedia;

const StyledUl = styled.ul`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
