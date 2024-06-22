import styled from "@emotion/styled";
import { motion } from "framer-motion";

import { SpaceBetweenContainer } from "@/components/styles";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalCloseContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled(SpaceBetweenContainer)`
  display: flex;
  min-width: 32rem;
  border: none;
  border-radius: 1rem;
  background-color: #fff;
  z-index: 999;
`;
