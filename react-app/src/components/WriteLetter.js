import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

function onChange(date, dateString) {
    console.log(date, dateString);
  }

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
      <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </button>
    ));
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    );
  };

const Write = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <p>Let's write a letter!</p>

        <div>
            <input type='text' placeholder=" 00에게"/>
            <DatePickerComponent/>
        </div>

        <div>
            <textarea placeholder="내용을 적어주세요"></textarea>
        </div>

        <div>
            <input type='text' placeholder=" 00이가"/>
        </div>
      
    </div>
  );
}

export default Write;
