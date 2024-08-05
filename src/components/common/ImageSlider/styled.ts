import styled from "@emotion/styled";

import { CenterContainer } from "@/components/styles";

export const ImageSliderWrapper = styled(CenterContainer)`
  width: 100%;
  height: 100%;
`;

export const ImageSliderContentWrapper = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 18rem;
  max-width: 40rem;
  height: 18rem;
  border-radius: 0.4rem;
  margin: 0 1rem;
`;
