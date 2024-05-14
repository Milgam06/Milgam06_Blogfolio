import styled from "@emotion/styled";

import { TextProps } from "./index";

export const TextElement = styled.span<TextProps>`
  font-size: ${(props) => props.size}rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.color ? props.color : "#fff")};
  text-align: center;
`;
