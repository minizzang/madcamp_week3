import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "./BASE_URL";
import "styles/storage.css";

const Storage = () => {
  const { id } = useParams(); // url의 파라미터로 넘겨져 온 것.
  const curr_user = sessionStorage.getItem("user_id");
  const [loading, setLoading] = useState(true);
  const [nickname, setNickname] = useState("");

  var arr21_1 = [];
  var arr21_2 = [];
  var arr21_3 = [];
  var arr21_4 = [];
  var arr21_5 = [];
  var arr21_6 = [];
  var arr21_7 = [];
  var arr21_8 = [];
  var arr21_9 = [];
  var arr21_10 = [];
  var arr21_11 = [];
  var arr21_12 = [];

  var arr22_1 = [];
  var arr22_2 = [];
  var arr22_3 = [];
  var arr22_4 = [];
  var arr22_5 = [];
  var arr22_6 = [];
  var arr22_7 = [];
  var arr22_8 = [];
  var arr22_9 = [];
  var arr22_10 = [];
  var arr22_11 = [];
  var arr22_12 = [];

  const [data21_1, setData21_1] = useState(0);
  const [data21_2, setData21_2] = useState(0);
  const [data21_3, setData21_3] = useState(0);
  const [data21_4, setData21_4] = useState(0);
  const [data21_5, setData21_5] = useState(0);
  const [data21_6, setData21_6] = useState(0);
  const [data21_7, setData21_7] = useState(0);
  const [data21_8, setData21_8] = useState(0);
  const [data21_9, setData21_9] = useState(0);
  const [data21_10, setData21_10] = useState(0);
  const [data21_11, setData21_11] = useState(0);
  const [data21_12, setData21_12] = useState(0);

  const [data22_1, setData22_1] = useState(0);
  const [data22_2, setData22_2] = useState(0);
  const [data22_3, setData22_3] = useState(0);
  const [data22_4, setData22_4] = useState(0);
  const [data22_5, setData22_5] = useState(0);
  const [data22_6, setData22_6] = useState(0);
  const [data22_7, setData22_7] = useState(0);
  const [data22_8, setData22_8] = useState(0);
  const [data22_9, setData22_9] = useState(0);
  const [data22_10, setData22_10] = useState(0);
  const [data22_11, setData22_11] = useState(0);
  const [data22_12, setData22_12] = useState(0);

  useEffect(() => {
    axios
      .get(BASE_URL + `/letter/getSavedLetters/${id}`)
      .then((response) => {
        // console.log(response.data)
        if (response.data == "편지가 없어요") {
          console.log("no letter");
        } else {
          response.data.forEach((data) => {
            const date = data.open_date;
            const year = date.substr(2, 2);
            var month = date.substr(5, 2);
            console.log(date);
            if (year == "21") {
              const index = Number(month); // int로 형변환
              switch (index) {
                case 1:
                  arr21_1.push("1");
                  break;
                case 2:
                  arr21_2.push("1");
                  break;
                case 3:
                  arr21_3.push("1");
                  break;
                case 4:
                  arr21_4.push("1");
                  break;
                case 5:
                  arr21_5.push("1");
                  break;
                case 6:
                  arr21_6.push("1");
                  break;
                case 7:
                  arr21_7.push("1");
                  break;
                case 8:
                  arr21_8.push("1");
                  break;
                case 9:
                  arr21_9.push("1");
                  break;
                case 10:
                  arr21_10.push("1");
                  break;
                case 11:
                  arr21_11.push("1");
                  break;
                case 12:
                  arr21_12.push("1");
                  break;
              }
              // setData21(data21[index-1] = data21[index-1]+1)
              // data21.splice(index-1, 0, data21[index-1]+1)
              // console.log(data21[index-1])
            } else if (year == "22") {
              const index = Number(month); // int로 형변환
              switch (index) {
                case 1:
                  arr22_1.push("1");
                  break;
                case 2:
                  arr22_2.push("1");
                  break;
                case 3:
                  arr22_3.push("1");
                  break;
                case 4:
                  arr22_4.push("1");
                  break;
                case 5:
                  arr22_5.push("1");
                  break;
                case 6:
                  arr22_6.push("1");
                  break;
                case 7:
                  arr22_7.push("1");
                  break;
                case 8:
                  arr22_8.push("1");
                  break;
                case 9:
                  arr22_9.push("1");
                  break;
                case 10:
                  arr22_10.push("1");
                  break;
                case 11:
                  arr22_11.push("1");
                  break;
                case 12:
                  arr22_12.push("1");
                  break;
              }
              // setData22_1(data22_1 + 1)
              // console.log(data22_1)
              // test_data[index-1] = test_data[index-1] + 1
              // setData22(data22[index-1] = data22[index-1]+1)
              // data22.splice(index-1, 0, data22[index-1]+1)
              // console.log(data22[index-1])
            }
          });
          setData21_1(arr21_1.length);
          setData21_2(arr21_2.length);
          setData21_3(arr21_3.length);
          setData21_4(arr21_4.length);
          setData21_5(arr21_5.length);
          setData21_6(arr21_6.length);
          setData21_7(arr21_7.length);
          setData21_8(arr21_8.length);
          setData21_9(arr21_9.length);
          setData21_10(arr21_10.length);
          setData21_11(arr21_11.length);
          setData21_12(arr21_12.length);

          setData22_1(arr22_1.length);
          setData22_2(arr22_2.length);
          setData22_3(arr22_3.length);
          setData22_4(arr22_4.length);
          setData22_5(arr22_5.length);
          setData22_6(arr22_6.length);
          setData22_7(arr22_7.length);
          setData22_8(arr22_8.length);
          setData22_9(arr22_9.length);
          setData22_10(arr22_10.length);
          setData22_11(arr22_11.length);
          setData22_12(arr22_12.length);
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

  if (curr_user == id) {
    return (
      <>
        <div class="title-bar">
          <div className="title-holder">
            <span class="title">
              <span id="name">{nickname}</span> 님의 보관함입니다.
            </span>
          </div>

          <div class="title_menu">
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

        <div class="letter_box">
          <div class="storage_year">2022년의 추억들</div>
          <div class="container_grid">
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/1`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://img.insight.co.kr/static/2020/09/10/700/tgyv623d6t4qza7070ap.jpg"
                  alt=""
                />
                <h2>{1}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_1}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/2`;
              }}
            >
              <div class="imgBox">
                <img
                  src="http://gdimg.gmarket.co.kr/1751538303/still/600?ver=1623820593"
                  alt=""
                />
                <h2>{2}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_2}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/3`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://cdn.notefolio.net/img/01/7c/017c7f6d1c34085ca6d3dc04ea57f7fb5524e2867ec1741c4019a2398a9d0335_v1.jpg"
                  alt=""
                />
                <h2>{3}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_3}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/4`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://www.jobaba.net/file/image.do?filePath=sONy7CFJVlHd+/JjdwFq+iS2HVEsSAv5J9kJDk6VJNWWtcEaYTwOm11GhF32XM4L"
                  alt=""
                />
                <h2>{4}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_4}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/5`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://cdn.imweb.me/upload/S20200903356594b8dc821/122e89b0892d2.jpg"
                  alt=""
                />
                <h2>{5}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_5}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/6`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13665.jpg"
                  alt=""
                />
                <h2>{6}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_6}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/7`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://dimg.donga.com/ugc/CDB/WOMAN/Article/5f/f8/06/41/5ff806410c12d2738de6.jpg"
                  alt=""
                />
                <h2>{7}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_7}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/8`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_q9W7JVZBUC6oW1ROwS74DKJBmbHNRAW-Q&usqp=CAU"
                  alt=""
                />
                <h2>{8}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_8}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/9`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/autumn-korea-maple-tree-park-naejangsan-national-park-autumn-season-south-korea_174052-16.jpg"
                  alt=""
                />
                <h2>{9}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_9}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/10`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-vector/halloween-background-flat-design_52683-43845.jpg?size=626&ext=jpg"
                  alt=""
                />
                <h2>{10}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_10}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/11`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202111/08/0f075577-08d3-4e7a-b8e3-786e39f98ae8.jpg"
                  alt=""
                />
                <h2>{11}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_11}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2022/12`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/living-room-with-fireplace-christmas-tree_1252-386.jpg"
                  alt=""
                />
                <h2>{12}월</h2>
              </div>
              <div class="content">
                <span>
                  {data22_12}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
          </div>
          <div class="storage_year">2021년의 추억들</div>
          <div class="container_grid">
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/1`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://img.insight.co.kr/static/2020/09/10/700/tgyv623d6t4qza7070ap.jpg"
                  alt=""
                />
                <h2>{1}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_1}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/2`;
              }}
            >
              <div class="imgBox">
                <img
                  src="http://gdimg.gmarket.co.kr/1751538303/still/600?ver=1623820593"
                  alt=""
                />
                <h2>{2}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_2}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/3`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://cdn.notefolio.net/img/01/7c/017c7f6d1c34085ca6d3dc04ea57f7fb5524e2867ec1741c4019a2398a9d0335_v1.jpg"
                  alt=""
                />
                <h2>{3}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_3}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/4`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://www.jobaba.net/file/image.do?filePath=sONy7CFJVlHd+/JjdwFq+iS2HVEsSAv5J9kJDk6VJNWWtcEaYTwOm11GhF32XM4L"
                  alt=""
                />
                <h2>{4}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_4}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/5`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://cdn.imweb.me/upload/S20200903356594b8dc821/122e89b0892d2.jpg"
                  alt=""
                />
                <h2>{5}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_5}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/6`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/beautiful-tropical-empty-beach-sea-ocean-with-white-cloud-blue-sky-background_74190-13665.jpg"
                  alt=""
                />
                <h2>{6}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_6}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/7`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://dimg.donga.com/ugc/CDB/WOMAN/Article/5f/f8/06/41/5ff806410c12d2738de6.jpg"
                  alt=""
                />
                <h2>{7}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_7}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/8`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc_q9W7JVZBUC6oW1ROwS74DKJBmbHNRAW-Q&usqp=CAU"
                  alt=""
                />
                <h2>{8}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_8}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/9`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/autumn-korea-maple-tree-park-naejangsan-national-park-autumn-season-south-korea_174052-16.jpg"
                  alt=""
                />
                <h2>{9}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_9}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/10`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://img.freepik.com/free-vector/halloween-background-flat-design_52683-43845.jpg?size=626&ext=jpg"
                  alt=""
                />
                <h2>{10}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_10}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/11`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202111/08/0f075577-08d3-4e7a-b8e3-786e39f98ae8.jpg"
                  alt=""
                />
                <h2>{11}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_11}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
            <div
              class="box"
              onClick={() => {
                document.location.href = `${id}/2021/12`;
              }}
            >
              <div class="imgBox">
                <img
                  src="https://image.freepik.com/free-photo/living-room-with-fireplace-christmas-tree_1252-386.jpg"
                  alt=""
                />
                <h2>{12}월</h2>
              </div>
              <div class="content">
                <span>
                  {data21_12}개의
                  <br />
                  편지가
                  <br />
                  있어요!
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <div>삐빅- 잘못된 접근입니다! :(</div>;
  }
};

export default Storage;
