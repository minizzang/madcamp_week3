import React, { useEffect, useState } from "react";
import "styles/storage.css";

const StorageCard = ({ id, month, imgSrc, letterNum }) => {
  return (
    <div
      class="box"
      onClick={() => {
        document.location.href = `${id}/2022/${month}`;
      }}
    >
      <div class="imgBox">
        <img src={imgSrc} alt="" />
        <h2>{month}월</h2>
      </div>
      <div class="content">
        <span>
          {letterNum}개의
          <br />
          편지가
          <br />
          있어요!
        </span>
      </div>
    </div>
  );
};

export default StorageCard;
