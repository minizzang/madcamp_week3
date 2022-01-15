import React, { useEffect, useState } from "react";
import AppRouter from "./components/Router";


function App() {

  const [isLogin, setIsLogin] = useState(false)
  
  // useEffect(() => {
  //   if(sessionStorage.getItem('user_id') === null){
  //   // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
  //     console.log('isLogin ?? :: ', isLogin)
  //   } else {
  //   // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
  //   // 로그인 상태 변경
  //     setIsLogin(true)
  //     console.log('isLogin ?? :: ', isLogin)
  //   }
  // })
  //로그인 되어 있다면 welcome을 눌렀을 때 바로 본인 페이지로 이동할 수 있도록 설계!

  return (
    <div>
        <AppRouter
        isLoggedIn={isLogin}
        />
    </div>
  );
}

export default App;
