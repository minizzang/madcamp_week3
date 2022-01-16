import React, {Component, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import BASE_URL from "./BASE_URL";
import 'styles/home.css';
import Slider from 'react-touch-drag-slider';
import { createPortal } from "react-dom";
import Letter from "./Letter";
import LetterItem from "../LetterItem";

const Home = () => {

  const { id } = useParams(); // url의 파라미터로 넘겨져 온 것.
  const curr_user = sessionStorage.getItem('user_id');
  const [nickname, setNickname] = useState("");
  const [memo, setMemo] = useState("");
  const [letterInvalidCnt, setLetterInvalidCnt] = useState(0);
  const [letterValidCnt, setLetterValidCnt] = useState(0);
  // letterInvalidInfo는 아직 날짜가 안 지난 편지, letterValidInfo는 날짜가 지나서 볼 수 있는 편지
  const [letterInvalidInfo, setLetterInvalidInfo] = useState([]);
  const [letterValidInfo, setLetterValidInfo] = useState([]);

  const handleChange = (e) => {
    setMemo(e.target.value)
  }

  // console.log("curr_user : "+curr_user);
  // curr_user가 null이라면 아무도 로그인 하지 않은 상태. 아니면 누군가의 id가 저장되어 있음.
  useEffect(()=>{
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'add', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // 유저의 닉네임, 메모 불러오기
    axios.get(BASE_URL+`/account/getUserInfo/${id}`)
      .then(response => {
        setNickname(response.data[0].nickname)
        setMemo(response.data[0].memo)
      })
      .catch(error => {
          console.log(error);
      })

    // (open_date 지나지 않은) 유저에게 온 편지 닉네임, open_date 받기
    axios.get(BASE_URL+`/letter/getMyInvalidLetters/${id}`)
    .then(response => {
      console.log(response.data)
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
    axios.get(BASE_URL+`/letter/getMyValidLetters/${id}`)
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
      }
      
    })
    .catch(error => {
        console.log(error);
    })

    
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
          });
      
          this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i+1}`);
          });
        }
      
        // Update the current order of the carouselArray and gallery
        setCurrentState(direction) {
      
          if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
          } else {
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
      
      
        // Add a click event listener to trigger setCurrentState method to rearrange carousel
        useControls() {
          const triggers = [...galleryControlsContainer.childNodes];
      
      
          triggers.forEach(control => {
            control.addEventListener('click', e => {
              e.preventDefault();
      
              if (control.className == 'gallery-controls-add') {

                


                //Add 버튼일 경우
                //ontrols = ['previous', 'add', 'next']
                const newItem = document.createElement('img');
                const latestItem = this.carouselArray.length;
                const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;


      
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

                letterItem.setAttribute('data-index', this.carouselArray.length+1);
                const nickname = document.createElement('span');
                nickname.innerText = `밈${latestItem+1}\n`;
                const dueDate = document.createElement('span');
                dueDate.innerText = `2020.${latestIndex}`;

                letterItem.appendChild(nickname);
                letterItem.appendChild(dueDate);
          
                
      
                // Then add it to the carouselArray and update the gallery
                //this.carouselArray.splice(latestIndex, 0, newItem);
                this.carouselArray.splice(latestIndex, 0, letterItem);
                //document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
                document.querySelector(`[data-index="${latestItem}"]`).after(letterItem);
                this.updateGallery();
      
              } else {
                // 아닐 경우
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


  }, []);

  return (
  <>
    <div class="title-bar">
      <div>
        <span class= "title"><span id="name">{nickname}</span> 님의 레터스페이스 입니다.</span>
        <button
          onClick={()=>{
            navigator.clipboard.writeText(`192.249.18.161/${id}`);
            alert("링크가 복사되었습니다. 친구에게 공유해보세요!")

            console.log(letterValidInfo)
            console.log(letterInvalidInfo)
          }
          }>링크 복사</button>
        <div class="title_menu">
          <span id="welcome">Welcome !</span>
          <span id="storage">보관함</span>
        </div>
      </div>
    </div>
    <div class="memo">
      <p>" {memo} "</p>
    </div>
    <input type="text" placeholder={"소개를 적어주세요."} value={memo} onChange={handleChange}/>
    <button
      onClick={()=>{
        // db에 메모 수정된 것 저장
        axios.post(BASE_URL+"/account/updateUserMemo", {
          id : id,
          memo : memo
        }).then(response => {
          console.log(response);
        }).catch(error => {
          console.log("updateUserMemo errror!"+error);
        });
      }}>수정하기</button>
    
    <div class="contents">
      <p class="stacked_letter_text">쌓인 편지 <span id="before_open_letter">{letterInvalidCnt+letterValidCnt}</span> 개</p>
      <p class="unlock_info"><span id="unlocked_letter">{letterValidCnt}</span>개의 편지가 열렸어요 !</p>
      <div id= "content_zone" class="gallery">
        <div class="gallery-container">
          <img class="gallery-item gallery-item-1" src="http://fakeimg.pl/300/?text=1" data-index="1"/>
          <img class="gallery-item gallery-item-2" src="http://fakeimg.pl/300/?text=2" data-index="2"/>
          <img class="gallery-item gallery-item-3" src="http://fakeimg.pl/300/?text=3" data-index="3"/>
          <img class="gallery-item gallery-item-4" src="http://fakeimg.pl/300/?text=4" data-index="4"/>
          <img class="gallery-item gallery-item-5" src="http://fakeimg.pl/300/?text=5" data-index="5"/>
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

    <button
      onClick={()=>{
        document.location.href = `/${id}/write`
      }}>
      편지 쓰기
    </button>
  </>

  );
};

export default Home;
