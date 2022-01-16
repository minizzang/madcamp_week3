import React, {Component} from "react";
import { useParams } from "react-router-dom";

const Show = () => {

  const { id } = useParams();
  const curr_user = sessionStorage.getItem('user_id');
  // console.log("curr_user : "+curr_user);
  // curr_user가 null이라면 아무도 로그인 하지 않은 상태. 아니면 누군가의 id가 저장되어 있음.
  // curr_user로 현재 유저의 id와 맞는지 인증해야면 보이게 페이지 구성할 것!
  
  return (
    <div className="App">
    <header className="App-header">
    </header>

    <p>Here is Show Letter</p>
    <p>Hello, {id}</p>

    <div className="letter_subject">편지제목 야옹야옹야옹야옹</div>
    <div className="letter_contents authInput">편지내용 주절주절주절주절</div>
    <div className="letter_sender">편지보낸이 이름이름이름이름</div>

  </div>
  );
};

export default Show;
