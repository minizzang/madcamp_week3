import React, {Component, useEffect} from "react";
import { useParams } from "react-router-dom";
import 'styles/home.css';

const Home = () => {

  const { id } = useParams();
  const curr_user = sessionStorage.getItem('user_id');
  // console.log("curr_user : "+curr_user);
  // curr_user가 null이라면 아무도 로그인 하지 않은 상태. 아니면 누군가의 id가 저장되어 있음.
  useEffect(()=>{
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControls = ['previous', 'add', 'next'];
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    
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
      
      
        // Add a click event listener to trigger setCurrentState method to rearrange carousel
        useControls() {
          const triggers = [...galleryControlsContainer.childNodes];
      
      
          triggers.forEach(control => {
            control.addEventListener('click', e => {
              e.preventDefault();
      
              if (control.className == 'gallery-controls-add') {
                const newItem = document.createElement('img');
                const latestItem = this.carouselArray.length;
                const latestIndex = this.carouselArray.findIndex(item => item.getAttribute('data-index') == this.carouselArray.length)+1;
      
                // Assign the necessary properties for new gallery item
                Object.assign(newItem,{
                  className: 'gallery-item',
                  src: `http://fakeimg.pl/300/?text=${this.carouselArray.length+1}`
                });
                newItem.setAttribute('data-index', this.carouselArray.length+1);
      
                // Then add it to the carouselArray and update the gallery
                this.carouselArray.splice(latestIndex, 0, newItem);
                document.querySelector(`[data-index="${latestItem}"]`).after(newItem);
                this.updateGallery();
      
              } else {
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
        <span class= "title"><span id="name">민채</span> 님의 레터스페이스 입니다.</span>
        <div class="title_menu">
          <span id="welcome">Welcome !</span>
          <span id="storage">보관함</span>
        </div>
      </div>
    </div>
    <div class="memo">
      <p>" 편지 좀 써줘 친구들아 사랑해 🧡 "</p>
    </div>
    
    <div class="contents">
      <p class="stacked_letter_text">쌓인 편지 <span id="before_open_letter">10</span> 개</p>
      <p class="unlock_info"><span id="unlocked_letter">4</span>의 편지가 열렸어요 !</p>
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
