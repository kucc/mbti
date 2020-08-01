import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";
import { fadeIn } from "../../animation/keyframe";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;

  animation: ${fadeIn} 0.5s linear;
`;

export const Quiz = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: 700;
  margin: 3rem 0rem;
  width: 100%;
  font-size: 1.8rem;
`;

export const Button = styled.button`
  background: ${THEME_COLOR.PRIMARY};
  color: white;
  font-weight: 700;
  font-size: 1.8rem;
  width: 100%;
  margin: 1rem;
  height: 5rem;
  border: none;
  border-radius: 1.5rem;
`;
