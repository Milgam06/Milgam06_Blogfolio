import { Flex } from '@mantine/core';
import { memo, ReactNode } from 'react';

interface ICenterLayoutProps {
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  isFullWith?: boolean;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const BaseLayout: React.FC<ICenterLayoutProps> = memo(
  ({ justify = 'flex-start', align = 'flex-start', direction = 'column', isFullWith = false, style, children }) => {
    const maxWidth = isFullWith ? '100%' : 1200;

    return (
      <Flex w="100%" h="100%" bg="transparent" justify="center" align="center">
        <Flex
          maw={maxWidth}
          h="100%"
          justify={justify}
          align={align}
          direction={direction}
          bg="transparent"
          style={style}>
          {children}
        </Flex>
      </Flex>
    );
  }
);
