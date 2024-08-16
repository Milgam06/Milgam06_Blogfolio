import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface HighlightSectionContainerProps {
  backgroundColor: string;
}

export const HighlightSectionContainer = styled.div<HighlightSectionContainerProps>`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    to right,
    ${(props) => props.backgroundColor},
    #060606
  );
  padding: 6rem;
`;
export const HighlightSectionContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const HighlightSectionImageBanner = styled(motion.div)`
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  /* border: 1px solid red; */
`;

export const HighlightSectionImage = styled(motion.img)`
  width: 20rem;
  height: 12rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

export const HighlightSectionTextContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 8rem;
  gap: 3rem;
`;
