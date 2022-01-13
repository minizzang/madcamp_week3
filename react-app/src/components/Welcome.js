import React, { useEffect, useState } from "react";



const Welcome = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    //입력할때 이메일이랑 패스워드 설정
    const onChange = (event) => {
        const {
          target: { name, value },
        } = event;
        if (name === "email") {
          setEmail(value);
        } else if (name === "password") {
          setPassword(value);
        }
      };

      //onSubmit 함수다. create account라고 되어 있으면 계정을 생성한다. 백엔드와 연결
      const onSubmit = async (event) => {
        event.preventDefault();
        try {
          let data;
          if (newAccount) {
              console.log(email, password)
            //create account
          } else {
            //log in
          }
          console.log(data);
        } catch (error) {
          setError(error.message);
        }
      };

    const toggleAccount = () => setNewAccount((prev) => !prev); //create Account와 Sign in이 바뀌게 만드는 변수. True&False를 바꿔줘서 계정 생성


  return (
    <div>
         <div>
             <h3> Welcome! 오늘도 즐거운 하루 보내세요~ </h3>
         </div>
    <form onSubmit={onSubmit}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholdeer="Password"
        required
        value={password}
        onChange={onChange}
      />
      <input
        type="submit"
        value={newAccount ? "Create Account" : "Sign In"}
      />
      {error}
    </form>
    <span onClick={toggleAccount}>
      {newAccount ? "Sign In" : "Create Account"}
    </span>

    <div>
        <button name="google">
          Continue with Google
        </button>
        <button name="github">
          Continue with Github
        </button>
      </div>

    </div>
  );
}

export default Welcome;
