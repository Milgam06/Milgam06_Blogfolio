import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const StepSectionContentContainer = styled(motion.div)`
  width: 100%;
  max-height: 80vh;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;
  overflow: auto;
  padding: 2rem 0;
  /* border: 1px solid red; */
  ::-webkit-scrollbar {
    display: none;
  }
`;
