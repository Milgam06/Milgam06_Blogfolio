import { Global } from '@emotion/react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { ModalProvider } from '@/providers';
import { globalStyle } from '@/styles';

import { Router } from './router';

export const App: React.FC = () => {
  return (
    <>
      <MantineProvider>
        <ModalProvider>
          <Global styles={globalStyle} />
          <Router />
        </ModalProvider>
      </MantineProvider>
    </>
  );
};
export default App;
