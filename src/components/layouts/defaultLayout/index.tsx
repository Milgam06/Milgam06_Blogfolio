import { Box } from '@mantine/core';

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Box w="100%" h="100%" bg="#fff" style={{ overflow: 'auto' }}>
        {children}
      </Box>
    </>
  );
};
