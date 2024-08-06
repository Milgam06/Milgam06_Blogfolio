import styled from "@emotion/styled";

import { TextProps } from "./index";

export const TextElement = styled.span<TextProps>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
  background: ${(props) => (props.color ? props.color : "#000")};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  border: none;
  line-height: 1.2;
  white-space: pre-line;
  text-align: left;
`;
