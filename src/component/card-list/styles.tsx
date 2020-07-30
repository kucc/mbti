import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";

export const CardList = styled.div`
  width: 100%;
  margin: 1rem 0rem;
  height: 25rem;
  border-radius: 1.5rem;
  background: ${THEME_COLOR.GRAY};
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 30%;
    min-width: 50rem;
  }
`;
