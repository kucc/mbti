import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";
import { fadeIn } from "../../animation/keyframe";

export const Carousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${THEME_COLOR.PRIMARY};
  margin: 1rem 0rem;
  width: 100%;
  height: 30rem;
  transition: ${fadeIn} 0.5s linear;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 50rem;
    margin: 0rem 0rem;
  }
`;

export const Text = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  font-size: 3rem;
  color: white;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  color: white;
`;

export const LeftButton = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0rem;
  width: 5rem;
  height: 100%;
  color: white;
  cursor: pointer;
`;

export const RightButton = styled.label`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0rem;
  width: 5rem;
  height: 100%;
  color: white;
  cursor: pointer;
`;
