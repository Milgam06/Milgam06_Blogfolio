import { Flex, FlexProps } from '@mantine/core';

import { memo, ReactNode } from 'react';

interface IBaseLayoutProps {
  justify?: FlexProps['justify'];
  align?: FlexProps['align'];
  direction?: FlexProps['direction'];
  gap?: FlexProps['gap'];
  isFullWidth?: boolean;
  styles?: FlexProps['styles'];
  style?: React.CSSProperties;
  children: ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = memo(
  ({
    justify = 'flex-start',
    align = 'flex-start',
    direction = 'column',
    gap,
    isFullWidth = false,
    styles,
    style,
    children,
  }) => {
    const maxWidth = isFullWidth ? '100%' : 1200;

    return (
      <Flex w="100%" h="100%" bg="transparent" justify="center" align="center">
        <Flex
          maw={maxWidth}
          h="100%"
          justify={justify}
          align={align}
          direction={direction}
          bg="transparent"
          gap={gap}
          styles={styles}
          style={style}>
          {children}
        </Flex>
      </Flex>
    );
  }
);
