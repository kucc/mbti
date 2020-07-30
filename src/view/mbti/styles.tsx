import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";
import { fadeIn } from "../../animation/keyframe";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #ccccdd;
`;
export const ResultLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
`;
