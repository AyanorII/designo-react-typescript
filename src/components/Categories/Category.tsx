import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LinkWithImageInterface from "../../modules/interfaces/CategoryInterface";
import arrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import Card from "../Card/Card";

const Category = ({ href, title, images }: LinkWithImageInterface) => {
  return (
    <Card>
      <Wrapper to={href} images={images} title={title} href={href}>
        <Content>
          <div>
            <p>{title}</p>
            <span>View Projects</span>
          </div>
        </Content>
      </Wrapper>
    </Card>
  );
};

export default Category;

const Wrapper = styled(NavLink)<LinkWithImageInterface>`
  background-image: url(${(props) => require(`../../assets/home/${props.images.mobile}`)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 250px;
  place-items: center;
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000000;
    opacity: 0.75;
    transition: all 0.5s;
  }

  @media (min-width: 768px) {
    background-image: url(${(props) => require(`../../assets/home/${props.images.tablet}`)});
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => require(`../../assets/home/${props.images.desktop.small}`)});
    height: 300px;


    &:hover {
      &::before {
        background-color: ${(props) => props.theme.colors.primary.main};
      }
    }
  }
`;

const Content = styled.div`
  color: ${(props) => props.theme.colors.primary.light};
  display: grid;
  gap: 1rem;
  place-items: center;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;

  p {
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 1.4px;
    line-height: 36px;
    text-transform: uppercase;
    margin-bottom: 10px;

    @media (min-width: 768px) {
      font-size: 2.5rem;
      margin-bottom: 2rem;
    }
  }

  span {
    font-size: 0.9375rem;
    letter-spacing: 5px;
    line-height: 22px;
    text-transform: uppercase;
    position: relative;
    padding-right: 16px;

    &::after {
      content: url(${arrow});
      position: absolute;
      right: 0;
      transition: all 0.15s ease-in-out;
    }
  }

  @media (min-width: 1440px) {
    &:hover {
      span::after {
        right: -10px;
      }
    }
  }
`;
