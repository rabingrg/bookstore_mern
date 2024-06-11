import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  // margin-tog: 20px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding-left: 5rem; /* 80px */
    padding-right: 5rem; /* 80px */
  }
`;
