import { Route, Routes, Outlet } from "react-router-dom";

import { DefaultLayout } from "@/components";
import { LoginPage, MainPage } from "@/pages";

export const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          element={
            <>
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            </>
          }
        >
          <Route path="/" element={<MainPage />} />
          <Route path="/me" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
};
