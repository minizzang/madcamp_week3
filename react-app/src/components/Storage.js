import React, { useEffect, useState } from "react";
import 'styles/storage.css';

const Storage = () => {

  return (
    <>
    <div class = "letter_box">
        <div class = "storage_year">2021년의 추억들</div>
        <div class="container_grid">
            <div class="box"> {/* 나중에 map 함수 써서 무한생산하면 될 듯. */}
                <div class="imgBox">
                    <img src="https://img.freepik.com/free-photo/top-view-envelope-flower-book_23-2148213913.jpg?size=626&ext=jpg" alt=""/>
                    <h2>1월</h2>
                </div>
                <div class="content">
                    <span>72장의 편지가  있어요</span>
                </div>
            </div>

            <div class="box"> {/* 나중에 map 함수 써서 무한생산하면 될 듯. */}
                <div class="imgBox">
                    <img src="https://img.freepik.com/free-photo/top-view-envelope-flower-book_23-2148213913.jpg?size=626&ext=jpg" alt=""/>
                    <h2>7월</h2>
                </div>
                <div class="content">
                    <span>72장의 편지가  있어요</span>
                </div>
            </div>
            
        </div>
    </div>

    

</>
  );
}

export default Storage;
