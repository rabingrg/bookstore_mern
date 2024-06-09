import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* 16px */
  padding-right: 1rem; /* 16px */

  @media (min-width: 768px) {
    padding-left: 5rem; /* 80px */
    padding-right: 5rem; /* 80px */
  }
`;
