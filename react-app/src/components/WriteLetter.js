import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import axios from "axios";
import BASE_URL from "./BASE_URL";

const Write = () => {

    const { id } = useParams();
    const [sender, setSender] = useState("");
    const [contents, setContents] = useState("");
    const [error, setError] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <button className="authInput" onClick={onClick} ref={ref}>
        {value}
      </button>
    ));

    //입력할때 이메일이랑 패스워드 설정
    const onChange = (event) => {
      const {
        target: { name, value },
        } = event;
        if (name === "sender") {
            setSender(value);
        } else if (name === "contents") {
            setContents(value);
        }
    };
    
      //onSubmit 함수다. 버튼이 눌리면 보내는이, 받는이, 작성일, 작성내용이 표시됨.  
    const onSubmit = async (event) => {
      event.preventDefault();
      try {

        console.log(sender, contents, dateToString(startDate));
          //save data to db
          // Example data
          // sender : 보내는이, reciver : 받는이 contents : 여기는 컨텐츠 startDate : 2022-01-14
        axios.post(BASE_URL+"/letter/postLetter", {
          recipient : id,
          author : sender,
          title : "편지왔숑!",
          text : contents,
          open_date : dateToString(startDate)
        }).then(response => {
          if (response.data == "post succeed"){
            // 편지 전송 완료 -> 해당 유저의 레터 스페이스로 보내기
            console.log("편지 전송됨.");
          }
        }).catch(error => {
          console.log("postLetter errror! "+error);
        });
      } catch (error) {
        setError(error.message);
      }
    };

    const dateToString = (date) => {
      return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
    }
    //시간을 년-월-일 형식으로 변환해주는 함수

  return (
      <>

      <p>Let's write a letter!</p>

      <form onSubmit={onSubmit} className="container">

        <DatePicker
        selected={startDate}
        selectsStart
        value={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy년 M월 d일에 메시지가 열립니다."
        customInput={<ExampleCustomInput />}
      />

        <textarea placeholder="내용을 적어주세요"
        type="contents"
        name="contents"
        className="authInput"
        required
        value={contents}
        onChange={onChange} className="authInput noresize"/> {/* 사용자가 리사이징 못하도록 noresize 적용 : 세로로만 변형 가능 */}

        <input type='text' placeholder="이름을 입력해주세요"
                name="sender"
                className="authInput"
                required
                value={sender}
                onChange={onChange}className="authInput"/>
        <input
        type="submit"
        className="authInput authSubmit"
        value={"보내기"}/>
        </form>
    </>
  );
}

export default Write;
