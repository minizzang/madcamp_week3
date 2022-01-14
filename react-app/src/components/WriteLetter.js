import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Write = () => {
    
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
            console.log(contents);
            event.preventDefault();
            try {
              console.log(sender, contents,dateToString(startDate));
                //save data to db
                // Example data
                // sender : 보내는이, reciver : 받는이 contents : 여기는 컨텐츠 startDate : 2022-01-14
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
        dateFormat="yyyy년 M월 d일"
        customInput={<ExampleCustomInput />}
      />

        <textarea placeholder="내용을 적어주세요"
        type="contents"
        name="contents"
        className="authInput"
        required
        value={contents}
        onChange={onChange} className="authInput"/>

        <input type='text' placeholder=" 00이가"
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
