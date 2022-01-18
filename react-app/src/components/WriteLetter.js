import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled, { ThemeConsumer } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import BASE_URL from "./BASE_URL";
import "styles/write.css";
import "styles/bubble.css";
import "styles/transition.css";
import stamp_back from "../images/stamp_back.png";
import stamp_heart from "../images/stamp_heart.png";
import stamp_star from "../images/stamp_star.png";
import stamp_cloud from "../images/stamp_cloud.png";
import stamp_party from "../images/stamp_party.png";
import stamp_bus from "../images/stamp_bus.png";

const Write = () => {
  let history = useNavigate();

  const { id } = useParams();
  const [sender, setSender] = useState("");
  const [contents, setContents] = useState("");
  const [subject, setSubject] = useState("");
  const [paperType, setpaperType] = useState(0);
  const [effectType, setEffectType] = useState(0);
  const [error, setError] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [stampImg, setStampImg] = useState(null);

  let imgArr = [];

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="dateInput" onClick={onClick} ref={ref}>
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
    } else if (name === "subject") {
      setSubject(value);
    }
  };

  //onSubmit 함수다. 버튼이 눌리면 보내는이, 받는이, 작성일, 작성내용이 표시됨.
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(subject, sender, contents, dateToString(startDate));
      //save data to db
      // Example data
      // sender : 보내는이, reciver : 받는이 contents : 여기는 컨텐츠 startDate : 2022-01-14
      axios
        .post(BASE_URL + "/letter/postLetter", {
          recipient: id,
          author: sender,
          title: subject,
          text: contents,
          open_date: dateToString(startDate),
          paper_type: paperType,
          effect_type: effectType,
        })
        .then((response) => {
          if (response.data == "post succeed") {
            // 편지 전송 완료 -> 해당 유저의 레터 스페이스로 보내기
            alert("편지가 무사히 전송되었습니다!");
            history(-1);

            console.log("편지 전송됨.");
          }
        })
        .catch((error) => {
          console.log("postLetter errror! " + error);
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const dateToString = (date) => {
    return (
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      date.getDate().toString().padStart(2, "0")
    );
  };
  //시간을 년-월-일 형식으로 변환해주는 함수

  const getIntTypes = (type) => {
    const intType = Number(type.substr(-1, 1));
    return intType;
  };
  //======설정된 편지지 바꾸는 함수 ===
  const onSelectPaper = (event) => {
    document
      .querySelectorAll(`div[type=paper]`)
      .forEach((el) => (el.className = "btn")); //모든걸 버튼으로 바꿔주기!

    document
      .querySelector(`form[type=writeContainer]`)
      .classList.remove("animate");
    document
      .querySelector(`form[type=writeContainer]`)
      .classList.add("animate");
    setTimeout(function () {
      document
        .querySelector(`form[type=writeContainer]`)
        .classList.remove("animate");
    }, 700); //컨테이너를 queryselector로 가져와서 classlist에 animate 추가 -> 애니메이션 실행, reset animation

    event.target.className = "btn_selected"; //내가 선택한 건 selected로 바꿔주기!

    setpaperType(getIntTypes(event.target.getAttribute("name"))); //event.target.getAttribute('name') 이게 paper1, paper2임.
    document.querySelector(`div[type=letterPaper]`).classList = ["send_letter"]; //리스트 리셋
    document
      .querySelector(`div[type=letterPaper]`)
      .classList.add(event.target.getAttribute("name")); //paper1, paper2 등으로 클래스 추가해서 배경변경
  };

  //======설정된 이펙트 바꾸는 함수 ===

  const onSelectEffect = (event) => {
    document
      .querySelectorAll(`div[type=effect]`)
      .forEach((el) => (el.className = "btn")); //모든걸 버튼으로 바꿔주기!

    document
      .querySelector(`div[type=stampContainer]`)
      .classList.remove("animate");
    document.querySelector(`div[type=stampContainer]`).classList.add("animate");
    setTimeout(function () {
      document
        .querySelector(`div[type=stampContainer]`)
        .classList.remove("animate");
    }, 700); //컨테이너를 queryselector로 가져와서 classlist에 animate 추가 -> 애니메이션 실행

    event.target.className = "btn_selected"; //내가 선택한 건 selected로 바꿔주기!

    setEffectType(getIntTypes(event.target.getAttribute("name")));
    // console.log(event.target.getAttribute('name'));
    // document.querySelector(`textarea[type=contents]`).classList = ['writeInput contentsbox'] //리스트 리셋
    // console.log(document.querySelector(`textarea[type=contents]`).classList)
    // document.querySelector(`textarea[type=contents]`).classList.add(event.target.getAttribute('name')); //effect1, effect2 등으로 클래스 추가해서 배경변경

    switch (event.target.getAttribute("name")) {
      case "effect1":
        setStampImg(
          <img src={stamp_heart} id="stamp-front" className="stamp-front"></img>
        );
        break;
      case "effect2":
        setStampImg(
          <img src={stamp_star} id="stamp-front" className="stamp-front"></img>
        );
        break;
      case "effect3":
        setStampImg(
          <img src={stamp_cloud} id="stamp-front" className="stamp-front"></img>
        );
        break;
      case "effect4":
        setStampImg(
          <img src={stamp_party} id="stamp-front" className="stamp-front"></img>
        );
        break;
      case "effect5":
        setStampImg(
          <img src={stamp_bus} id="stamp-front" className="stamp-front"></img>
        );
        break;
    }
  };

  return (
    <div class="write_page">
      <div class="write_letter_box">
        <div class="custom_tab">
          <div class="tab_subject">편지지를 골라요!</div>
          <div class="btn_container">
            <div
              className="btn"
              type="paper"
              name="paper1"
              onClick={onSelectPaper}
            >
              편지지 1
            </div>
            <div
              className="btn"
              type="paper"
              name="paper2"
              onClick={onSelectPaper}
            >
              편지지 2
            </div>
            <div
              className="btn"
              type="paper"
              name="paper3"
              onClick={onSelectPaper}
            >
              편지지 3
            </div>
            <div
              className="btn"
              type="paper"
              name="paper4"
              onClick={onSelectPaper}
            >
              편지지 4
            </div>
            <div
              className="btn"
              type="paper"
              name="paper5"
              onClick={onSelectPaper}
            >
              편지지 5
            </div>
          </div>
        </div>

        <div class="Blank"></div>

        <div class="send_letter" type="letterPaper">
          <div className="align-row">
            <DatePicker
              selected={startDate}
              selectsStart
              value={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy년 M월 d일에 편지가 열립니다."
              popperModifiers={{
                //화면을  벗어나지 않도록 하는 설정
                preventOverflow: { enabled: true },
              }}
              popperPlacement="right-start"
              customInput={<ExampleCustomInput />}
            />
            <div
              className="stamp-container bubbly-button"
              type="stampContainer"
            >
              <img src={stamp_back} className="stamp"></img>
              {stampImg}
              {/* <img src={stampImg} id="stamp-front" className="stamp-front"></img> */}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            type="writeContainer"
            className="writeContainer bubbly-button"
          >
            <input
              type="text"
              placeholder="편지 제목을 입력해주세요"
              name="subject"
              required
              value={subject}
              onChange={onChange}
              className="writeInput"
              autoComplete="off"
            />
            <textarea
              placeholder="내용을 적어주세요"
              type="contents"
              name="contents"
              className="writeInput contentsbox"
              rows="20"
              required
              value={contents}
              onChange={onChange}
            />{" "}
            {/* 사용자가 리사이징 못하도록 noresize 적용 : 세로로만 변형 가능 */}
            <input
              type="text"
              placeholder="보내는 분 이름을 입력해주세요"
              name="sender"
              className="writeInput"
              required
              value={sender}
              onChange={onChange}
              autoComplete="off"
            />
            <input
              type="submit"
              className="writeInput writeSubmit"
              value={"보내기"}
            />
          </form>
        </div>

        <div class="Blank"></div>

        <div class="custom_tab">
          <div class="tab_subject">효과를 골라요!</div>
          <div class="btn_container">
            <div
              className="btn"
              type="effect"
              name="effect1"
              onClick={onSelectEffect}
            >
              효과 1
            </div>
            <div
              className="btn"
              type="effect"
              name="effect2"
              onClick={onSelectEffect}
            >
              효과 2
            </div>
            <div
              className="btn"
              type="effect"
              name="effect3"
              onClick={onSelectEffect}
            >
              효과 3
            </div>
            <div
              className="btn"
              type="effect"
              name="effect4"
              onClick={onSelectEffect}
            >
              효과 4
            </div>
            <div
              className="btn"
              type="effect"
              name="effect5"
              onClick={onSelectEffect}
            >
              효과 5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
