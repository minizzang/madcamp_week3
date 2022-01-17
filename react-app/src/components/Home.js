import { useParams, Link } from "react-router-dom";
import React, {Component, createElement, useEffect, useState, useRef } from "react";
import axios from 'axios';
import BASE_URL from "./BASE_URL";
import 'styles/home.css';
import moment from 'moment';
import Slider from 'react-touch-drag-slider';
import { createPortal } from "react-dom";
import Letter from "./Letter";
import LetterItem from "../LetterItem";
import plusImage from "../images/add_card.png";
import styled from "styled-components";
import Flippy from "react-flippy";
import {FrontSide, BackSide} from "react-flippy";
import styles from '../styles/home.css';
import PopupDom from '../PopupDom';
import Test1 from "./test1";
import Test2 from "./test2";
import Test4 from "./test4";
import Test5 from "./test5";
import Test3 from "./test3";

const Home = () => {

  const { id } = useParams(); // url의 파라미터로 넘겨져 온 것.
  const curr_user = sessionStorage.getItem('user_id');  // 현재 로그인한 유저
  const [nickname, setNickname] = useState("");
  const [memo, setMemo] = useState("");
  const [letterInvalidCnt, setLetterInvalidCnt] = useState(0);
  const [letterValidCnt, setLetterValidCnt] = useState(0);
  const [letterValidContents, setLetterValidContents] = useState([]);
  // letterInvalidInfo는 아직 날짜가 안 지난 편지, letterValidInfo는 날짜가 지나서 볼 수 있는 편지
  const [letterInvalidInfo, setLetterInvalidInfo] = useState([]);
  const [letterValidInfo, setLetterValidInfo] = useState([]);
  const [letterInfo, setLetterInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState("");
  const virtualMemo = useRef();
  const memoRef = useRef();

  const [letterList, setLetterList] = useState([]);

  const [navIdx, setnavIdx]= useState(0);

  //popup
  const [isOpenPopup,setIsOpenPopup] = useState(false);

  const [background_effect_type, setBackgroundEffect] = useState(0);

  const openPopup = () =>{
    setIsOpenPopup(true);
  }
  const closePopup = () => {
    setIsOpenPopup(false);
  }


  const handleChange = (e) => {
    setMemo(e.target.value)
    const temp = window.getComputedStyle(virtualMemo.current).width;
    memoRef.current.style = `width: ${String(Number(temp.slice(0, temp.length - 2))+10)}px`;
    // memoRef.current.style = `width: ${temp}`;
  }

  const getLettersFromDB = async () => {
  // (open_date 지나지 않은) 유저에게 온 편지 닉네임, open_date 받기
      await axios.get(BASE_URL+`/letter/getMyInvalidLetters/${id}`)
      .then(response => {
        // console.log(response.data)
        if (response.data == "편지가 없어요") {
          console.log("no letter")
        } else {
          setLetterInvalidCnt(response.data.length)
          setLetterInvalidInfo(response.data.map(item => {
            return {
              sender: item.author,
              open_date: item.open_date
            };  
          }))
        }
      })
      .catch(error => {
          console.log(error);
      })

      // (open_date 지난 && opened = False인) 유저에게 온 모든 편지 받기
      await axios.get(BASE_URL+`/letter/getMyValidLetters/${id}`)
      .then(response => {
        if (response.data == "편지가 없어요") {
          console.log("no letter!")
        } else {
          setLetterValidCnt(response.data.length)
          setLetterValidInfo(response.data.map(item => {
            return {
              sender: item.author,
              open_date: item.open_date
            };  
          }))
          setLetterValidContents(response.data.map(item => {
            return {
              id: item.id,
              sender: item.author,
              written_date: item.created_date,
              title: item.title,
              text: item.text,
              paper_type: item.paper_type,
              effect_type: item.effect_type,
            }
          }))
        }
      })
      .catch(error => {
          console.log(error);
      })

      setLoading(false)
  }
 
  // console.log("curr_user : "+curr_user);
  // curr_user가 null이라면 아무도 로그인 하지 않은 상태. 아니면 누군가의 id가 저장되어 있음.
  useEffect(()=>{
    
    // 유저의 닉네임, 메모 불러오기
    axios.get(BASE_URL+`/account/getUserInfo/${id}`)
      .then(response => {
        setNickname(response.data[0].nickname)
        setMemo(response.data[0].memo)
      })
      .catch(error => {
          console.log(error);
      })

    getLettersFromDB()

  }, []);
  
  useEffect(() => {
    const temp = window.getComputedStyle(virtualMemo.current).width;
    setWidth(`width: ${String(Number(temp.slice(0, temp.length - 2)) + 5)}px`);
  }, [memo]);

  useEffect(() => {
    memoRef.current.style = width;
  }, [width])

  useEffect(()=>{
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'add', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');

    let curIdx = 0;
    
    class Carousel{
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    
      }
    
      // Update css classes for gallery
      updateGallery() {
        this.carouselArray.forEach(el => {
          el.classList.remove('gallery-item-1');
          el.classList.remove('gallery-item-2');
          el.classList.remove('gallery-item-3');
          el.classList.remove('gallery-item-4');
          el.classList.remove('gallery-item-5');

          el.classList.add('invalid_2');
        });
    
        this.carouselArray.slice(0, 5).forEach((el, i) => {
          el.classList.remove('invalid_2');
          el.classList.add(`gallery-item-${i+1}`);

        });
      }
    
      // Update the current order of the carouselArray and gallery
      setCurrentState(direction) {
    
        if (direction.className == 'gallery-controls-previous' && curIdx >0) {

          curIdx--;
          // console.log(curIdx)
          this.carouselArray.unshift(this.carouselArray.pop());
        } else if (direction.className == 'gallery-controls-next' && curIdx <this.carouselArray.length-3){
          curIdx++;
          // console.log(curIdx)
          this.carouselArray.push(this.carouselArray.shift());
        }

        this.updateGallery();
      }
    
      // Construct the carousel navigation
      // setNav() {
        // galleryContainer.appendChild(document.createElement('ul')).className = 'gallery-nav';
    
        // this.carouselArray.forEach(item => {
        //   const nav = galleryContainer.lastElementChild;
        //   nav.appendChild(document.createElement('li'));
        // }); 
      // }s
    
      // Construct the carousel controls
      setControls() {
        this.carouselControls.forEach(control => {
          galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
          document.querySelector(`.gallery-controls-${control}`).innerText = control;
        });
      }


      ////
      

      ///
      setLetterView(){
        const newItem = document.createElement('img');
        let latestItem = this.carouselArray.length;
        const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;

        latestItem =3;

        for(let j = 0; j <letterList.length; j++){
          this.carouselArray.splice(latestIndex,0,letterList[j]);
          document.querySelector(`[data-index="${latestItem}"]`).after(letterList[j]);
          /*if(j==0){
            
            document.querySelector(`[data-index="${4}"]`).classList.add('gallery-item-4');
          }else if(j==1){
            document.querySelector(`[data-index="${4}"]`).classList.add('gallery-item-5');
          }*/
          this.updateGallery();
        }
      }
    
    
      // Add a click event listener to trigger setCurrentState method to rearrange carousel
      useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
    
    
        triggers.forEach(control => {
          control.addEventListener('click', e => {
            e.preventDefault();
            const newItem = document.createElement('img');
            let latestItem = this.carouselArray.length;
            const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;
            if (control.className == 'gallery-controls-add') {
              //Add 버튼일 경우
              //ontrols = ['previous', 'add', 'next']
              // Assign the necessary properties for new gallery item
              Object.assign(newItem,{
                className: 'gallery-item',
                src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
              });
              newItem.setAttribute('data-index', this.carouselArray.length+1);

              
              const letterItem = document.createElement('div');
              //const letterItem = new LetterItem(`밈${this.carouselArray.length+1}`,"날짜",this.carouselArray.length+1);
              //console.log(letterItem);

              Object.assign(letterItem,{
                className: 'gallery-item'
              })

              letterItem.setAttribute('data-index',this.carouselArray.length+1);
              const nickname = document.createElement('span');
              nickname.innerText = `밈${latestItem+1}\n`;
              const dueDate = document.createElement('span');
              dueDate.innerText = `2020.${latestIndex}`;

              letterItem.appendChild(nickname);
              letterItem.appendChild(dueDate);

              latestItem =2;
        
              for(let j = 0; j <letterList.length; j++){
                this.carouselArray.splice(latestIndex,0,letterList[j]);
                document.querySelector(`[data-index="${latestItem}"]`).after(letterList[j]);
                this.updateGallery();
              }
              
    
              // Then add it to the carouselArray and update the gallery
              //this.carouselArray.splice(latestIndex, 0, newItem);
              //this.carouselArray.splice(latestIndex, 0, letterItem);
              //document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
              //document.querySelector(`[data-index="${latestItem}"]`).after(letterItem);
              //this.updateGallery();
    
            } else {
              // 아닐 경우
              console.log(curIdx);
              this.setCurrentState(control);

            }
    
          });
        });
    
      }
    }
    const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
      
    //exampleCarousel.setControls();
    // exampleCarousel.setNav();
    exampleCarousel.useControls();


    if (!loading) {

      const background_effect = document.createElement('div');
      const monitor = document.getElementById('monitor');
      
      background_effect.id = "background_effect";

      monitor.appendChild(background_effect);

      // 민채 여기서 하세요!!
      console.log("loading" + loading)
      console.log(letterValidInfo)
      console.log(letterInvalidInfo)

      let j;

      for(j = 0 ; j < letterInvalidInfo.length; j++){ //invalid
        const letter = document.createElement('div');

          Object.assign(letter, {
            className: 'gallery-item'
          });


        letter.setAttribute('data-index', j+4);
        const sender = document.createElement('span');
        const DueDate = document.createElement('span');
        sender.className = "sender_text"
        sender.innerText = letterInvalidInfo[j].sender;
        DueDate.innerText = letterInvalidInfo[j].open_date;
        DueDate.className = "open_date_text"
        const line = document.createElement('br');

        const front = document.createElement('div');
        front.className = 'letter_front';
        const back = document.createElement('div');
        back.className = 'letter_back';

        front.appendChild(sender);
        front.appendChild(line);
        front.appendChild(DueDate);

        letter.appendChild(front);
        letter.appendChild(back);

        const letterContainer = document.createElement('div');
        letterContainer.className="letterContainer"
        letter.classList.add('invalid');
        
        letterContainer.appendChild(front);
        letterContainer.appendChild(back);

        letterContainer.addEventListener('click',click);

        letterContainer.style.background="rgb(200,200,200)"

        letter.appendChild(letterContainer);

        

        //elem.style.transform = "rotateY(0deg) scale(1.0)";
        

        //letter.appendChild(sender);
        //letter.appendChild(line);
        //letter.appendChild(DueDate);
        //letter.addEventListener('click',click)
        //letter.onClick= click;


        console.log(letter);

        letterList.push(letter);
        //letterList.push(filpCard);
      }


      let i;

      for(i = 0 ; i < letterValidInfo.length; i++){ //valid
        const letter = document.createElement('div');
        if(i==0){
          Object.assign(letter, {
            className: 'gallery-item gallery-item-4'
          });
          
          
        }else if(i==1){
          Object.assign(letter, {
            className: 'gallery-item gallery-item-5'
          });

        }else{
          Object.assign(letter, {
            className: 'gallery-item'
          });
          
        }


        letter.setAttribute('data-index', i+j);
        const sender_front = document.createElement('span');
        const DueDate = document.createElement('span');
        sender_front.innerText = letterValidInfo[i].sender;
        DueDate.innerText = letterValidInfo[i].open_date;
        DueDate.className = "open_date_text"
        sender_front.className = "sender_text_front"
        const line = document.createElement('br');

        const sender_back = document.createElement('span');
        sender_back.innerText = letterValidInfo[i].sender;
        sender_front.className = "sender_text_back"
        sender_front.title = letterValidContents[i].id
        sender_front.id = letterValidContents[i].paper_type
        DueDate.id = letterValidContents[i].effect_type
        const front = document.createElement('div');
        front.className = 'letter_front';
        const back = document.createElement('div');
        back.className = 'letter_back';

        front.appendChild(sender_front);
        front.appendChild(line);
        front.appendChild(DueDate);

        //편지 내용 불러오기
        const content = document.createElement('div'); //편지 내용 감싸기 위한 div태그
        content.className = "letter_content";
        
        const title = document.createElement('p');
        const text = document.createElement('p');
        // const sender (위에서 이미 정의됨 )
        const written_date = document.createElement('p');

        // 태그에 아이디 추가
        //title.id = "";
        //text.id = "";
        //written_date.id = "";
        
        // 태그 텍스트 설정
        title.innerText = letterValidContents[i].title
        text.innerText = letterValidContents[i].text
        //sender_back.innerText 위에서 디비에서 받아왔음
        written_date.innerText = letterValidContents[i].written_date.substr(0,10)

        //아까 만들었던 div태그에 자식 요소로 추가 
        content.appendChild(title);
        content.appendChild(text);
        content.appendChild(sender_back);
        content.appendChild(written_date);

        //div 태그를 div class= letter_back의 자식 요소로 추가
        back.appendChild(content);

        //편지 페이지에 앞 뒤면 자식 요소로 추가
        letter.appendChild(front);
        letter.appendChild(back);

        const letterContainer = document.createElement('div');
        letterContainer.className="letterContainer"
        letterContainer.appendChild(front);
        letterContainer.appendChild(back);

        letterContainer.style.background="rgb(200,173,226)"

        if (id == curr_user){
          letterContainer.addEventListener('click',click);
        }
        
        

        letter.appendChild(letterContainer);


        //letter.addEventListener('click',click)


        //letter.appendChild(sender);
        //letter.appendChild(line);
        //letter.appendChild(DueDate);

        

        letterList.push(letter);
      }



      exampleCarousel.setLetterView();

      // console.log(letterList.length);

    }
    
  }, [loading])

  function click(event) {
    // console.log(event.currentTarget)
    let elem = event.currentTarget;
    console.log(elem)
    console.log(elem.childNodes[0].firstChild.id) // paper_type
    console.log(elem.childNodes[0].lastChild.id)  // effect_type
    if (elem.style.transform == "rotateY(180deg) scale(2)") {
              elem.style.transform = "rotateY(0deg) scale(1.0)";
              closePopup();
              
              //opened
          } else {
              elem.style.transform = "rotateY(180deg) scale(2.0)";
              // console.log(elem);
              // console.log("opened");
              setBackgroundEffect(Number(elem.childNodes[0].lastChild.id));
              
              openPopup();
              elem.childNodes[1].firstChild.style.transform = "scale(0.5)";
              
              

              // 카드 오픈 시에 넣기, 카드 오픈 시 유저 확인도 하기
              axios.post(BASE_URL+"/letter/setOpened", {
                id: Number(elem.childNodes[0].firstChild.title)
              }).then(response => {
                console.log(response);
              }).catch(error => {
                console.log("setOpened errror!"+error);
              });
              
              /*const content = document.getElementsByClassName('letter_content');
              for (let p = 0; p < content.length; p++){
                content[p].style.transform = "scale(0.3)";
              }*/

          }
      }

      

  const transparent_style = {
    opacity: 0
  }
  const FlippyStyle = {
    width: "300px",
    height: "300px",
    textAlign: "center",
    color: "#000",
    fontFamily: "sans-serif",
    fontSize: "30px",
    justifyContent: "center"
  }

  const StyledLink = styled(Link)`
	box-sizing: border-box;
	margin: 0 auto;
  height: 100%;
  width: 100%;
	text-align: center;
  position: absolute;
  z-index: 20;
}
`;
function BackgroundType(){

  if (background_effect_type == 1) {
    return <PopupDom><Test1></Test1></PopupDom>
  } else if(background_effect_type ==2){
    return <PopupDom><Test2></Test2></PopupDom>
  } else if(background_effect_type == 3){
    return <PopupDom><Test3></Test3></PopupDom>}
    else if(background_effect_type ==4){
    return <PopupDom><Test4></Test4></PopupDom>
  } else if(background_effect_type ==5){
    return <PopupDom><Test5></Test5></PopupDom>
  } 
}


  return (
  <div id="monitor" class = "mainPage">
    <div id="screen">
    <div class="title-bar">
      {isOpenPopup && BackgroundType() }
      <div className="title-holder">
        <span class= "title"><span id="name">{nickname}</span> 님의 레터스페이스 입니다.</span>
        <button
          onClick={()=>{
            navigator.clipboard.writeText(`192.249.18.161/mypage/${id}`);
            alert("링크가 복사되었습니다. 친구에게 공유해보세요!")
            console.log(window.getComputedStyle(virtualMemo.current).width);
            // console.log(letterValidInfo)
            // console.log(letterInvalidInfo)
          }}
          className="btn_copy">링크 복사</button>
        </div>
        <div class="title_menu">
          {
            id === curr_user
            ?
              <span id="welcome">{nickname}님</span>
            : 
              (curr_user != null) ? 
              <span id="welcome"
              onClick={()=>{
                document.location.href = `/mypage/${curr_user}`       //로그인 여부에 따라 다르게
              }}>내 레터스페이스</span>
             : 
              <span id="welcome"
              onClick={()=>{
                document.location.href = `/welcome`       //로그인 여부에 따라 다르게
              }}>로그인/회원가입</span>
          }
          
          <span id="storage"
            onClick={()=>{
              // if (curr_user == id) {
                document.location.href = `/storage/${curr_user}` // 유저의 보관함으로 이동 (로그인 유저와 같아야 함)
              // } else {
                // alert("자신의 보관함만 열람 가능합니다.")
              // }
            }}>보관함</span>
        </div>
      </div>

    <div class="memo-holder">
    <div style={{ position: "absolute", top: "0px", display: "inline-block", visibility: "hidden" }} className="memo" ref={virtualMemo}>{memo}</div>
    <span className="memo-ddaoom-left">"</span>
      {(id == curr_user)? 
      <input ref={memoRef} type="text" className = "memo" placeholder={"소개를 적어주세요."} value={memo} onChange={handleChange} autoComplete="off"/>
      :
      <input ref={memoRef} disabled="disabled" type="text" className = "memo" placeholder={"소개를 적어주세요."} value={memo} onChange={handleChange}/>}
      
      <span className="memo-ddaoom-right">"</span>
    {(id == curr_user)? 
      <button
        onClick={()=>{
          // db에 메모 수정된 것 저장
          
            axios.post(BASE_URL+"/account/updateUserMemo", {
              id : id,
              memo : memo
            }).then(response => {
              console.log(response);
              alert("메모가 수정되었습니다.")
            }).catch(error => {
              console.log("updateUserMemo errror!"+error);
            });
        }}
        className="btn_edit">수정<br/>하기</button> : 
          <div/>
    }
      
    </div>
    
    <div class="contents">
      <p class="stacked_letter_text">쌓인 편지 <span id="before_open_letter">{letterInvalidCnt+letterValidCnt}</span> 개</p>
      <p class="unlock_info"><span id="unlocked_letter">{letterValidCnt}</span>개의 편지가 열렸어요 !</p>
      <div id= "content_zone" class="gallery">
        <div class="gallery-container" id="container">
          <div style={transparent_style} class="gallery-item gallery-item-1" data-index="1"/>
          <div style={transparent_style} class="gallery-item gallery-item-2" data-index="2"/>
          <div class="gallery-item gallery-item-3" data-index="3" > <StyledLink to="write"></StyledLink> <img class="plus-box" src={plusImage}/> </div>
        </div>
        <div class="gallery-controls">
          <button class="gallery-controls-previous">
            "previous"
          </button>
          <button class="gallery-controls-add">
            add
          </button>
          <button class="gallery-controls-next">
            "next"
          </button>
        </div>
      </div>
    </div>
    </div>

    {/*    <button
      // onClick={()=>{
      //   document.location.href = `/write/${id}`
      // }}>    </button>*/}
  </div>

  );
};

export default Home;
