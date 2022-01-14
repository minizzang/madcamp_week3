import React , {Component} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from "./Home"; 
import Storage from "./Storage";
import Welcome from "./Welcome";
import Write from "./WriteLetter";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />  {/*  지금은 기본 path인데,  나중에 username으로 각 user 페이지에 접근 가능하도록 해야 할 듯. */}
            <Route path="/storage" element={<Storage/>} /> {/*  저장소 */}
            <Route path="/welcome" element={<Welcome />} />  {/* 나중에 로그인 된 상태라면 개인 페이지로 이동 가능하게 만들 수 있을 듯*/}
            <Route path="/write" element={<Write />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;