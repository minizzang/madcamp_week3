import React from "react";
import { Link } from "react-router-dom";

// 주석 처리가 안된다!
const HomeName = ({ userObj }) => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">  {/* 기존 코드 : 기본적으로 profile에 있는 걸 가져왔다. 그러나 서버에서 가져와야 할 듯??*/}
        
          {userObj?.displayName?.length
            ? `${userObj.displayName} 님의 레터스페이스 입니다.`
            : "레터스페이스"}
        </Link>
      </li>
    </ul>
  </nav>
);
export default HomeName;
