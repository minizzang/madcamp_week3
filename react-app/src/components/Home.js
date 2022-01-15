import React, {Component} from "react";
import { useParams } from "react-router-dom";

const Home = () => {

  const { id } = useParams();
  const curr_user = sessionStorage.getItem('user_id');
  // console.log("curr_user : "+curr_user);
  // curr_user가 null이라면 아무도 로그인 하지 않은 상태. 아니면 누군가의 id가 저장되어 있음.
  
  return (
    <div className="App">
    <header className="App-header">
    </header>

    <p>Here is Home</p>
    <p>Hello, {id}</p>

    <button
      onClick={()=>{
        document.location.href = `/${id}/write`
      }}>
      편지 쓰기
    </button>

  </div>
  );
};

export default Home;
