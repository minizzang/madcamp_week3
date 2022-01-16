import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import 'styles/storage.css';

const Storage = () => {

    const { id } = useParams(); // url의 파라미터로 넘겨져 온 것.
    const curr_user = sessionStorage.getItem('user_id');

    if (curr_user == id) {
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
                            <span>72장 의 카드가 있어요!</span>
                        </div>
                    </div>

                    <div class="box"> {/* 나중에 map 함수 써서 무한생산하면 될 듯. */}
                        <div class="imgBox">
                            <img src="https://img.freepik.com/free-photo/top-view-envelope-flower-book_23-2148213913.jpg?size=626&ext=jpg" alt=""/>
                            <h2>7월</h2>
                        </div>
                        <div class="content">
                            <span>72장 의 카드가 있어요!</span>
                        </div>
                    </div>
            </div>
            </div>
            </>
        );
    } else {
        return (
            <div>본인만 보관함 조회가 가능합니다! :(</div>
        )
    }

  
}

export default Storage;
