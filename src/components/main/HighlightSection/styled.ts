import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface HighlightSectionContainerProps {
  backgroundColor: string;
  isFirst: boolean;
}

export const HighlightSectionContainer = styled.div<HighlightSectionContainerProps>`
  width: 100vw;
  height: 100vh;
  ${(props) =>
    props.isFirst
      ? `background: #0B0B0B;`
      : `background: linear-gradient(
    to bottom,
    ${props.backgroundColor},
    #0B0B0B 95%
  );`}
  padding: 6rem;
`;
export const HighlightSectionContentContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;

export const HighlightSectionImageBanner = styled(motion.div)`
  width: 54rem;
  display: flex;
  place-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

export const HighlightSectionImage = styled(motion.img)`
  width: 24rem;
  aspect-ratio: 16/9;
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
