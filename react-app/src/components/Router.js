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
import Test from "./test";
import Test_animation from "./test_animation"
import Show from "./ShowLetter";

//로그인 되어있다면 바로 메인으로 이동할 수 있도록 처리하기. Router에서. 

const AppRouter = ({isLoggedIn}) => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="mypage/:id" element={<Home />} />  {/*  지금은 기본 path인데,  나중에 username으로 각 user 페이지에 접근 가능하도록 해야 할 듯. */}
            <Route path="storage/:id" element={<Storage/>} /> {/*  저장소 */}
            {/* {isLoggedIn ? */}
            {/* <Route path="/:id" element={<Home />} /> : */}
            {/* <Route path="/welcome" element={<Welcome />} />  */}
            {/* }  로그인 상태에 따라 welcome으로 갈지 본인 home으로 갈 지 결정 */}
            <Route path="/welcome" element={<Welcome />} />
            <Route path="write/:id" element={<Write />} />{/* 익명 작성이 가능하다면 Id/write 형식 or write/id 형식으로 누구에게 쓰는 건지 특정하게 해야 할 듯 */}
            <Route path="/letter" element={<Letter />} />  {/* 나중에 로그인 된 상태라면 개인 페이지로 이동 가능하게 만들 수 있을 듯*/}
            <Route path="test" element={<Test/> }/>
            <Route path="test_animation" element={<Test_animation/> }/>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;