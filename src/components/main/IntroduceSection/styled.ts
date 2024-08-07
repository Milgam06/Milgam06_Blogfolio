import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const IntroduceSectionContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
`;

export const IntroduceSectionTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const IntroduceContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 0.2rem;
`;

export const IntroduceIconContainer = styled.div`
  display: flex;
  justify-content: row;
  align-items: center;
  gap: 4rem;
`;

export const IntroduceContentTextIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const IntroduceIconContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;
`;

export const IntroduceIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
