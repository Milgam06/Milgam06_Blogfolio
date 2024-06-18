import { Global } from "@emotion/react";
import { ModalProvider } from "@/providers";
import { globalStyle } from "@/styles";

import { Router } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <ModalProvider>
        <Global styles={globalStyle} />
        <Router />
      </ModalProvider>
    </>
  );
};
export default App;
