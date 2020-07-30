import { Link } from "react-router-dom";
import styled from "styled-components/macro";

import { THEME_COLOR, BREAKPOINT } from "../../constant";

interface ActiveProps {
  active?: boolean;
}

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
  padding: 0rem 2rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    padding: 0rem 5rem;
  }
`;

export const Logo = styled.img`
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    width: 15rem;
  }
`;

export const QuizLogo = styled.img`
  size: 3rem;
  width: 3rem;
`;

export const MobileLogo = styled.img`
  width: 9rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const DesktopButtons = styled.div`
  height: 100%;
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
  }
`;

export const MobileButtons = styled.div`
  height: 100%;
  display: flex;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const Button = styled.button`
  height: 100%;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 1.7rem;
  font-weight: bolder;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${THEME_COLOR.GRAY};
  }
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 10rem;
    width: 8.7rem;
    padding: 0rem 2rem;
    transition: background-color 0.5s;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
`;

export const DesktopLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: none;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;
  }
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;
