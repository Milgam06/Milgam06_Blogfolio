import styled from "@emotion/styled";

import { CenterContainer } from "@/components/styles";

export const ImageSliderWrapper = styled(CenterContainer)`
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const ImageSliderContentWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20rem;
  max-width: 36rem;
  height: 20rem;
  margin: 0 1rem;
`;
