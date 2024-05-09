import { Global } from "@emotion/react";
import { globalStyle } from "@/styles";

import { Router } from "./router";

export const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Router />
    </>
  );
};
export default App;
