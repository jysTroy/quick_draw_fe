# Quick Draw 프론트앤드

## 개요
Quick, Draw! - 그림 인식 기반 예측 서비스

사용자가 직접 그린 그림을 인공지능이 인식하여 예측 결과를 제공하는 웹 서비스입니다.

메인 화면에서 “시작하기” 버튼을 클릭하면 캔버스에서 제시된 주제를 보고 그림을 그리고, AI가 결과를 예측해줍니다.

## 기능 설명

- 페이지 구성 흐름
  - MainPage (/)
    - 시작 화면에서 메인 이미지와 함께 시작하기 버튼 제공
    - 클릭 시 /draw 경로로 이동   
  - DrawPage (/draw)
    - 메인 기능 페이지. DrawContainer를 중심으로 구성
    - 사용자가 그림을 그리고 예측 결과를 확인하는 모든 기능을 포함

- DrawContainer.js
  - 그림 주제 설정, canvas 초기화, 예측 요청, 결과 관리 등 

- Canvas.js
  - <canvas> 태그를 렌더링하여 그림을 입력받는 컴포넌트
  - ref를 통해 외부에서 DOM 제어 가능
  - styled-components를 활용한 테두리 및 마진 스타일 적용

- Direction.js
  -  사용자에게 무엇을 그리세요라는 지시 문구 출력
  -  category[1] 값을 기반으로 동적으로 문구 생성

- Result.js
  - 예측 결과와 제출/초기화 버튼을 포함한 결과 컴포넌트

<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/311acaf7-9e61-46a1-962d-e71c4a569316" />

<img width="1916" height="905" alt="image" src="https://github.com/user-attachments/assets/e21b64d3-d13a-4cb3-9e13-836a22c232fe" />


