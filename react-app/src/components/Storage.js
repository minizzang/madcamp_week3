import React, { useEffect, useState } from "react";
import 'styles/storage.css';

const Storage = () => {

  return (
    <>
<div class="container_grid">
  <div class="box">
  몇년이게 
  </div>
        <div class="box"> {/* 나중에 map 함수 써서 무한생산하면 될 듯. */}
            <div class="imgBox">
                <img src="https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg" alt=""/>
                <h2>7월</h2>
            </div>
            <div class="content">
                <span>72장 의 카드가 있어요!</span>
            </div>
        </div>
</div>
<span>72장 의 카드가 있어요!</span>
</>
  );
}

export default Storage;
