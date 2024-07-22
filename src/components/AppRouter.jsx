import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Context } from "..";

const AppRouter = () => {
  const { user } = useContext(Context);

  return (
    <>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </>
  );
};

export default AppRouter;
