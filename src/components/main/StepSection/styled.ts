import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StepSectionContentContainer = styled(motion.div)`
  width: 100%;
  max-height: 70vh;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  padding: 2rem;

  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
