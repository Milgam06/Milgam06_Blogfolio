import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HighlightSectionContainer = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* place-items: center; */
  /* padding: 0 4rem; */
  border: 1px solid red;
`;

export const HighlightSectionImageBanner = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
