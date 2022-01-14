import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'

const Write = () => {
    
    const [sender, setSender] = useState("");
    const [reciver, setReciver] = useState("");
    const [contents, setContents] = useState("");
    const [error, setError] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <button className="example-custom-input" onClick={onClick} ref={ref}>
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
                } else if (name === "reciver") {
                    setReciver(value);
                } else if (name === "contents") {
                    setContents(value);
                }
            };
    
          //onSubmit 함수다. 버튼이 눌리면 보내는이, 받는이, 작성일, 작성내용이 표시됨.  
        const onSubmit = async (event) => {
            console.log(contents);
            event.preventDefault();
            try {
              console.log(sender, reciver, contents,startDate);
                //save data to db
                // Example data
                // sender : 보내는이, reciver : 받는이 contents : 여기는 컨텐츠 startDate : Wed Jan 19 2022 17:28:03 GMT+0900 (한국 표준시)
            } catch (error) {
              setError(error.message);
            }
          };


  return (
      <>

      <p>Let's write a letter!</p>

      <form onSubmit={onSubmit} className="container">

        <input type="reciver"
                name="reciver"
                className="authInput"
                placeholder=" 00에게"
                required
                value={reciver}
                onChange={onChange}
                />

        <DatePicker
        selected={startDate}
        value={startDate}
        onChange={(date) => setStartDate(date)}
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
