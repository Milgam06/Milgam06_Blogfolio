import styled from "@emotion/styled";

import { CenterContainer, SpaceBetweenContainer } from "@/components/styles";

export const StepModalContainer = styled(CenterContainer)`
  padding: 2rem;
`;

export const StepModalContentContainer = styled(SpaceBetweenContainer)`
  flex-direction: column;
  max-width: 40rem;
  max-height: 46rem;
  min-width: 30rem;
  min-height: 36rem;
  @media (max-width: 675px) {
    max-width: 30rem;
    max-height: 38rem;
    min-width: 20rem;
    min-height: 28rem;
  }
`;
export const StepModalContentHeader = styled(SpaceBetweenContainer)`
  width: 100%;
  /* border: 1px solid red; */
`;

export const StepModalContentTaskContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  overflow: auto;
  gap: 1rem;
  text-align: left;
  line-height: 1.2;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StepModalLoadingContainer = styled(CenterContainer)`
  width: 100%;
  border: 1px solid red;
`;
