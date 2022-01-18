# LetterForYou

친구에게, 혹은 연인에게 전하고 싶은 말이 있나요?
레터포유를 통해 인터랙티브한 타입캡슐 편지를 보내보세요!

![Banner](https://user-images.githubusercontent.com/79495204/149894954-a672b480-2b32-4853-8562-4001b516c475.png)


### 0. 회원가입 및 로그인
***

|회원가입|로그인|
|:-:|:-:|
|![ss_signup](https://user-images.githubusercontent.com/79495204/149895574-655b533b-2302-4009-a5bb-7e9822f74b0a.jpg)|![ss_login](https://user-images.githubusercontent.com/79495204/149895065-609bace8-678c-4cf1-b451-65273130d3f7.jpg)|

- 닉네임, 이메일, 비밀번호를 이용해 회원가입 할 수 있습니다.
- 이메일과 비밀번호를 이용해 로그인할 수 있습니다.


### 1. 나의 레터스페이스
***
|메인 레터스페이스|
|:-:|
|![home_animation](https://user-images.githubusercontent.com/79495204/149898112-3d23d647-c443-44fc-ade8-536075ac3c98.gif)|
- 사용자의 이름이 레터스페이스 좌측 상단에 표시됩니다!
- 레터스페이스 주인은 방문자에게 보여줄 한마디를 수정하고 저장할 수 있습니다.
- 메인에는 도착한 편지들이 Carousel View로 보여집니다. 총 몇 개의 편지가 도착했는지 알 수 있습니다.
- 맨 처음 ‘+’로 표시된 박스를 누르면 레터스페이스 주인에게 편지를 쓸 수 있습니다.
- 설정한 날짜가 지나 열어볼 수 있는 편지는 색이 나타납니다. 누르면 화려한 효과와 함께 내용을 볼 수 있습니다.
- 날짜가 지나지 않아 볼 수 없는 편지는 회색으로 표시되며, 클릭이 불가능합니다.
- ‘링크 복사’ 버튼을 클릭하여 나의 레터스페이스 링크를 공유할 수 있습니다.

|편지 오픈 화면|
|:-:|
|![open_animation](https://user-images.githubusercontent.com/79495204/149901538-6e27bbdc-f399-42dc-9666-b0c7897129b3.gif)|
- 편지 작성자가 지정한 편지지 색상과 효과가 적용되어 보여집니다.
- 열린 편지를 다시 한 번 클릭하면 편지가 닫힙니다.
- 열람한 편지는 레터스페이스에서 없어지며, 보관함으로 이동됩니다.

### 2. 편지 보관함
***
![storage_animation](https://user-images.githubusercontent.com/79495204/149901601-8b1d390f-f069-490c-926e-64188b9fc4ea.gif)

- 사용자가 열람한 편지는 연도별, 월별로 분류되어 저장됩니다.
- 보관함은 해당되는 사용자만 접근이 가능합니다. 이외의 사용자가 접근하면 잘못된 접근이라는 경고 문구가 표시됩니다.
- 사진 위에 마우스를 올리면 몇 장의 편지가 있는지 확인 할 수 있습니다.
- 사진을 클릭하면 해당 월의 편지들이 레터스페이스와 동일하게 Carousel View로 보여집니다.
- 카드를 누르면 flip animation과 함께 내용이 표시됩니다.

### 3. 편지 쓰기
***
|편지 작성 화면|
|:-:|
|![ss_post](https://user-images.githubusercontent.com/79495204/149901667-a50d1032-0375-43bf-8672-4cf738cb3aa5.jpg)|
- 이 편지를 열 수 있는 날짜를 선택합니다.
- 좌측 버튼을 통해 편지지의 색상을 변경할 수 있습니다. 지정하지 않으면 기본 색상이 적용됩니다.
- 우측 버튼을 통해서 편지와 제목에 들어갈 효과를 적용할 수 있습니다. 지정하지 않으면 효과는 적용되지 않습니다.
- 입력 창에 편지 제목, 내용, 보낸 사람을 작성한 후 하단 보내기 버튼을 누르면 해당 레터스페이스의 주인에게 편지가 발송되고, 편지 목록에서 확인할 수 있습니다.
- css-transition을 사용해서 화면이 전환될 때 위/아래로 뷰가 움직입니다.

### **Tech stack**

---

- Frontend: HTML, CSS, JavaScript, React.js
- Backend Server: Django
- Database: SQLite


# Credit
+ Minchae Kim : <http://github.com/passa021>
+ Minhee Kim : <http://github.com/minizzang>
+ Seolyeong Bae : <http://github.com/pell13>
