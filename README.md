# [렌시스재팬](https://lenssis.jp/) 페이지 리뉴얼 - 관리자페이지

#### 배포주소 : https://lenssis-admin-page.vercel.app/
#### notion : https://quickest-asterisk-75d.notion.site/BE-FE2-UXUI3-_1-e1ca7b5e27354b08a033573299dde83d
#### figma : https://www.figma.com/file/N2eTli2BXz3o4HjuReWbCz/%EC%BB%AC%EB%9F%AC%EB%A0%8C%EC%A1%B0-2?node-id=573%3A26444

## 📌 프로젝트 개요

### 기업요구사항
 - 상품 등록 및 수정,삭제 구현
 - 클라이언트에서 들어온 주문 실시간 조회

### 구현사항

> **상품 정보**
- 렌시스 렌즈상품의 등록,수정,삭제
- 기존 렌시스페이지와는 달리 렌즈의 모든 옵션을 일괄 등록 가능
- 해당 API사용 및 사진 파일을 AWS-S3로 바로 업로드가 가능하도록 처리

> **주문 정보**
- 클라이언트페이지에서 들어온 주문리스트 조회 및 상세주문페이지 조회
- API요청을 통한 주문상태변경 및 리스트 최신화

> **이벤트 정보**
- 이벤트 등록 및 조회
- 해당 API사용 및 사진 파일을 AWS-S3로 바로 업로드가 가능하도록 처리

> **공지사항 정보**
- 공지사항 등록 및 조회
- 에디터 라이브러리를 통한 공지사항 등록 가능 

### 사용기술
 - React
 - TypeScript
 - React-Query
 - Tailwind CSS
 

### 프로젝트 기간

2022.09 ~ 2022.10

<br />

## 🌳 기능설명

### 🎁 상품정보

#### 상품목록조회

<img width="1000" alt="스크린샷 2022-10-17 오후 2 40 15" src="https://user-images.githubusercontent.com/99630188/196098665-5f902ba4-13a8-49f9-9285-dd154251d020.png">

- 실시간 상품목록 조회 및 체크박스를 통한 선택 삭제 및 수정이 가능합니다.

#### 상품등록


<img width="1000" alt="스크린샷 2022-10-17 오후 3 03 29" src="https://user-images.githubusercontent.com/99630188/196100732-5969d3c9-6534-45c5-9ab4-7d182600dcdf.png">

- 상품등록 페이지에서 먼저 메인정보를 입력합니다. 스위치를 통한 추천상품, 상품노출의 설정이 가능하고 체크박스를 통한 상품 시리즈 및 특징 선택이 가능합니다.

<img width="1000" alt="스크린샷 2022-10-17 오후 3 04 39" src="https://user-images.githubusercontent.com/99630188/196100876-699bc0cc-a4df-451e-9654-3545231a1b7e.png">


- 메인정보를 입력한후 옵션의 정보를 입력합니다. 사진첨부시 사진미리보기와 사진 수정,삭제가 가능합니다.

<img width="1000" alt="스크린샷 2022-10-17 오후 3 01 41" src="https://user-images.githubusercontent.com/99630188/196100473-dfb34e52-0175-4950-a6db-6c30b203e9d1.png">

- 옵션정보 입력후 옵션추가를 클릭하면 하나의 옵션으로 저장이되고 추가로 옵션입력이 가능합니다. 옵션삭제 또한 가능합니다.

- 상품등록시 사진데이터는 자동으로 AWS-S3로 저장이됩니다.

#### 상품수정

<img width="1000" alt="스크린샷 2022-10-17 오후 3 12 47" src="https://user-images.githubusercontent.com/99630188/196101968-1f81f58f-5999-43dd-a352-2a859069bfb2.png">

<img width="1000" alt="스크린샷 2022-10-17 오후 3 13 04" src="https://user-images.githubusercontent.com/99630188/196102012-7c969d5b-d9f1-4fd4-ab09-c3156bc266e5.png">

- 상품등록 페이지와 같지만 기존의 상품정보 및 옵션이 입력 되어있습니다. 정보 수정 및 옵션 추가, 삭제가 가능합니다.

### 📦 주문정보

#### 주문리스트

<img width="1000" alt="스크린샷 2022-10-17 오후 3 17 46" src="https://user-images.githubusercontent.com/99630188/196102629-2f06df2a-b516-4467-bb49-b3fe063f43ad.png">

<img width="1000" alt="스크린샷 2022-10-17 오후 3 18 46" src="https://user-images.githubusercontent.com/99630188/196102795-18d7bc28-868f-4527-9373-762cdbc93db6.png">

- 주문리스트는 클라이언트에서 상품 주문시 실시간으로 반영이 되며 우측상단의 새로고침버튼을 통해 최신화가 가능합니다.
- 체크박스로 주문을 선택한 후 우측상단의 드롭박스를 통해 주문상태변경이 가능합니다.

#### 주문상세정보

<img width="1000" alt="스크린샷 2022-10-17 오후 3 33 07" src="https://user-images.githubusercontent.com/99630188/196105056-70d44c3c-82c6-4e76-9609-657af570efa9.png">

<img width="1000" alt="스크린샷 2022-10-17 오후 3 33 59" src="https://user-images.githubusercontent.com/99630188/196105222-ebb10a0a-4610-4e73-89d5-479b52fc3ee7.png">

- 주문리스트에서 주문번호 클릭시 주문상세정보 조회가 가능합니다. 구매한상품들과 옵션정보까지 모두 조회가 가능합니다.

### 🎉 이벤트 정보

#### 이벤트 리스트

<img width="1000" alt="스크린샷 2022-10-17 오후 3 37 30" src="https://user-images.githubusercontent.com/99630188/196105815-e84a2f41-5b39-4f41-ba90-7cc91b1f573e.png">

<img width="1000" alt="스크린샷 2022-10-17 오후 3 37 53" src="https://user-images.githubusercontent.com/99630188/196105901-93d64f5e-51c7-4294-baf3-c5c0318b1963.png">

- 이벤트리스트 조회가 가능합니다. 제목 클릭시 이벤트 상세정보 페이지로 넘어갑니다.

#### 이벤트 등록

<img width="1000" alt="스크린샷 2022-10-17 오후 3 45 25" src="https://user-images.githubusercontent.com/99630188/196107172-c61c4bd2-c365-45d3-8c38-8f73b6d1a07d.png">

- 이벤트 제목, 내용, 기간설정, 클라이언트페이지 상단고정여부, 사진첨부가 가능합니다.
- 이벤트 등록시 사진데이터는 자동으로 AWS-S3로 저장이됩니다.

### 📢 공지사항 정보

#### 공지사항 리스트

<img width="1000" alt="스크린샷 2022-10-17 오후 3 46 40" src="https://user-images.githubusercontent.com/99630188/196107372-f8470ab6-a324-4a1b-8942-d25d2cc98b62.png">

<img width="1000" alt="스크린샷 2022-10-17 오후 3 48 03" src="https://user-images.githubusercontent.com/99630188/196107661-8e3e6abe-0c3e-400d-9736-5192cdf2abf9.png">

- 공지사항 리스트 조회가 가능합니다. 제목 클릭시 공지사항 상세정보 페이지로 넘어갑니다.

#### 공지사항 등록

<img width="1000" alt="스크린샷 2022-10-17 오후 3 56 26" src="https://user-images.githubusercontent.com/99630188/196109197-93b67141-51ba-4481-991a-d265ecc49a38.png">

- 공지사항 제목, 내용, 카테고리 설정이 가능합니다.
- 에디터를 통해 내용을 편집할수 있습니다.

