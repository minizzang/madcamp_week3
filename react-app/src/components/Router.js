import React , {Component} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from "./Home"; //환경변수 설정에 path를 안 넣어놓긴 했다. 나중에 수정!
import Storage from "./Storage";
import Welcome from "./Welcome";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/storage" element={<Storage/>} />
            <Route path="/welcome" element={<Welcome />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;