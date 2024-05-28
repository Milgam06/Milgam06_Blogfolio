import styled from "@emotion/styled";

export const SectionLayoutContainer = styled.section<{
  backgroundColor?: string;
}>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  scroll-snap-align: start;
`;

export const SectionLayoutTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 2rem;
`;

export const SectionLayoutContentContainer = styled.div`
  width: 100%;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;
