import styled from "@emotion/styled";

import { CenterContainer, SpaceBetweenContainer } from "@/components/styles";

export const StepModalContainer = styled(CenterContainer)`
  padding: 2.2rem 2rem;
`;

export const StepModalContentContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  max-width: 40rem;
  max-height: 48rem;
  min-width: 30rem;
  min-height: 38rem;
  @media (max-width: 675px) {
    max-width: 30rem;
    max-height: 38rem;
    min-width: 20rem;
    min-height: 28rem;
  }
`;
export const StepModalContentHeader = styled(SpaceBetweenContainer)`
  width: 100%;
`;

export const StepModalContentTaskContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid black;
`;
