import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./BASE_URL";
import "styles/storage.css";
import StorageCard from "./StorageCard";
import monthImgUrl from "ImgUrls";

const Storage = () => {
  const { id } = useParams(); // url의 파라미터로 넘겨져 온 것.
  const curr_user = sessionStorage.getItem("user_id");
  const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState("");

  const MONTH_NUM = 12;

  const arr_2021 = new Array(MONTH_NUM).fill(0);
  const arr_2022 = new Array(MONTH_NUM).fill(0);

  const [data2022, setData2022] = useState(arr_2021);
  const [data2021, setData2021] = useState(arr_2022);

  useEffect(() => {
    axios
      .get(BASE_URL + `/letter/getSavedLetters/${id}`)
      .then((response) => {
        // console.log(response.data)
        if (response.data === "편지가 없어요") {
          console.log("no letter");
        } else {
          response.data.forEach((data) => {
            const date = data.open_date;
            const year = date.substr(2, 2);
            var month = date.substr(5, 2);
            const index = Number(month) - 1; // int로 형변환

            if (year === "21") {
              arr_2021[index] = arr_2021[index] + 1;
            } else if (year === "22") {
              arr_2022[index] = arr_2021[index] + 1;
            }
          });

          setData2021(() => arr_2021);
          setData2022(() => arr_2022);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setLoading(false);
  }, []);

  axios
    .get(BASE_URL + `/account/getUserInfo/${id}`)
    .then((response) => {
      setNickname(response.data[0].nickname);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <div className="title-bar">
        <div className="title-holder">
          <span className="title">
            <span id="name">{nickname}</span> 님의 보관함입니다.
          </span>
        </div>

        <div className="title_menu">
          {id === curr_user ? (
            <span id="welcome">{nickname}님</span>
          ) : (
            <span
              id="welcome"
              onClick={() => {
                document.location.href = `/welcome`; //로그인 여부에 따라 다르게
              }}
            >
              로그인/회원가입
            </span>
          )}

          <span
            id="storage"
            onClick={() => {
              if (curr_user == id) {
                document.location.href = `/mypage/${id}`; // 유저의 레터스페이스로 이동 (로그인 유저와 같아야 함)
              } else {
                alert("자신의 보관함만 열람 가능합니다.");
              }
            }}
          >
            내 레터스페이스
          </span>
        </div>
      </div>

      <div className="letter_box">
        <div className="storage_year">2022년의 추억들</div>
        <div className="container_grid">
          {data2022.map((data, index) => {
            return (
              <StorageCard
                id={id}
                imgSrc={monthImgUrl[index]}
                month={index + 1}
                letterNum={data}
              />
            );
          })}
        </div>
        <div className="storage_year">2021년의 추억들</div>
        <div className="container_grid">
          {data2021.map((data, index) => {
            return (
              <StorageCard
                id={id}
                imgSrc={monthImgUrl[index]}
                month={index + 1}
                letterNum={data}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Storage;
