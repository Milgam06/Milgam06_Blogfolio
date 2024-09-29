import styled from "@emotion/styled";
import { motion } from "framer-motion";

export interface TitleWrapperElementStyleProps {
  padding?: string;
}

export const TitleWrapperElement = styled(
  motion.div
)<TitleWrapperElementStyleProps>`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding || "1rem 2rem"};
  background-color: #000;
  border-radius: 1rem;
  overflow: hidden;
`;
