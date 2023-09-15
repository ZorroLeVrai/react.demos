import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "./home";
import SolutionLayout from "./solutionLayout";
import NotFound from "./NotFound";
import menuList from "./menu";

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<SolutionLayout />}>
          {menuList.map((it) => (
            <Route
              key={it.path}
              path={it.path}
              element={React.createElement(it.component)}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
