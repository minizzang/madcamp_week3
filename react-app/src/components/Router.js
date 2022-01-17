import React , {Component, useState} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import 'styles/transition.css';
import Home from "./Home"; 
import Letter from "./Letter";
import Storage from "./Storage";
import StorageLetter from "./StorageLetter"
import Welcome from "./Welcome";
import Write from "./WriteLetter";
import Test1 from "./test1";
import Test2 from "./test2";
import Test4 from "./test4";
import Test5 from "./test5";
import Test3 from "./test3";
import Test_animation from "./test_animation"

//로그인 되어있다면 바로 메인으로 이동할 수 있도록 처리하기. Router에서. 

const AppRouter = ({isLoggedIn}) => {

  const location = useLocation();

  console.log(location.pathname.toString().split('/')[3]==="write" ? location.pathname : null);
  console.log(location.key.toString());
  
  return (
        <TransitionGroup>
        <CSSTransition key={location.pathname.toString().split('/')[3]==="write" ? location.key : null} classNames="next" timeout={700}> 
          <Routes location={location}>
              <Route path="mypage/:id" element={<Home />} />  {/*  지금은 기본 path인데,  나중에 username으로 각 user 페이지에 접근 가능하도록 해야 할 듯. */}
              <Route path="storage/:id" element={<Storage/>} /> {/*  저장소 */}
              <Route path="storage/:id/:year/:month" element={<StorageLetter/>} />
              {/* {isLoggedIn ? */}
              {/* <Route path="/:id" element={<Home />} /> : */}
              {/* <Route path="/welcome" element={<Welcome />} />  */}
              {/* }  로그인 상태에 따라 welcome으로 갈지 본인 home으로 갈 지 결정 */}
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/mypage/:id/write" element={<Write />} />{/* 익명 작성이 가능하다면 Id/write 형식 or write/id 형식으로 누구에게 쓰는 건지 특정하게 해야 할 듯 */}
              <Route path="/letter" element={<Letter />} />  {/* 나중에 로그인 된 상태라면 개인 페이지로 이동 가능하게 만들 수 있을 듯*/}
              <Route path="test1" element={<Test1/> }/>
              <Route path="test2" element={<Test2/> }/>
              <Route path="test4" element={<Test4/> }/>
              <Route path="test5" element={<Test5/> }/>
              <Route path="test3" element={<Test3/> }/>
              <Route path="test_animation" element={<Test_animation/> }/>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
  );
};

export default AppRouter;