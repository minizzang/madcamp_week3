import React , {Component} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from "./Home"; 
import Letter from "./Letter";
import Storage from "./Storage";
import Welcome from "./Welcome";
import Write from "./WriteLetter";

//로그인 되어있다면 바로 메인으로 이동할 수 있도록 처리하기. Router에서. 

const AppRouter = ({isLoggedIn}) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/:id" element={<Home />} />  {/*  지금은 기본 path인데,  나중에 username으로 각 user 페이지에 접근 가능하도록 해야 할 듯. */}
            <Route path="/storage" element={<Storage/>} /> {/*  저장소 */}
            {isLoggedIn ?
            <Route path="/:id" element={<Home />} /> :
            <Route path="/welcome" element={<Welcome />} /> 
            } 
            <Route path="/write" element={<Write />} />
            <Route path="/letter" element={<Letter />} />  {/* 나중에 로그인 된 상태라면 개인 페이지로 이동 가능하게 만들 수 있을 듯*/}
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;