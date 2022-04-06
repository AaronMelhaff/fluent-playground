import "./App.css";
import * as React from "react";
import { FunctionComponent, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Example from "./pages/Example/Example";
import DashboardDemo from "./pages/Dashboard/DashboardDemo";

/*
  Add your components to the Array and a route will be generated for them.
*/
const components: FunctionComponent<any>[] = [Example, DashboardDemo];

function App() {
  const routes = useMemo(
    () =>
      components.map((Comp: any) => ({
        name: Comp.name ?? Comp.prototype.name,
        path: `/${(Comp as any).name ?? (Comp as any).prototype.name}`,
      })),
    []
  );
  const routeComponents = useMemo(
    () =>
      components.map((Comp) => (
        <Route
          path={`/${(Comp as any).name ?? (Comp as any).prototype.name}`}
          element={<Comp />}
        />
      )),
    []
  );

  return (
    <BrowserRouter>
      <Routes>
        {routeComponents}
        <Route path="/" element={<Home routes={routes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
