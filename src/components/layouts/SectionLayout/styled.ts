import styled from "@emotion/styled";

export const SectionLayoutContainer = styled.section<{
  backgroundColor?: string;
}>`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fefefe"};
  /* scroll-snap-align: start; */
`;

export const SectionLayoutTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1rem;
  margin-bottom: 2rem;
  /* border: 1px solid red; */
`;

export const SectionLayoutContentContainer = styled.div`
  width: 100%;
  min-height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
