import styled, { keyframes } from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";
import { fadeIn } from "../../animation/keyframe";

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #9ea9a6;
  animation: ${fadeIn} 2s linear;
`;

const swing = keyframes`
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); } 
  40% { transform: rotate(-10deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-5deg); } 
  100% { transform: rotate(0deg); } 
`;

const updown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-2rem); }
  100% { transform: translateY(0); }
`;

const fade = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; } 
  100% { opacity: 1; }
`;

export const AssetContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Asset1 = styled.img`
  margin-top: 10rem;
  transform-origin: top center;
  width: 75%;
  animation: ${swing} 1s;
`;

export const Asset2 = styled.img`
  margin-top: 5rem;
  width: 20%;
`;

export const Asset3 = styled.img`
  margin-top: 7rem;
  margin-left: 25rem;
  width: 10%;
`;

export const Asset4 = styled.img`
  position: fixed;
  top: 15%;
  right: 15%;
  width: 100%;
  opacity: 0.2;
  animation: ${updown} 2s infinite;
`;

export const FloatingText = styled.div`
  font-size: 2rem;
  margin-top: 20rem;
  animation: ${fade} 2s infinite;
`;
