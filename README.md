## TAB 홍보 페이지

www.hufs-tab.com

2023학년도 TAB 41기 신입부원 모집을 위한 홍보 페이지입니다.
- 개발기간: 2023-03-05 ~ 03-08
- 개발인원: 총 2명

|front|front|
|:---:|:---:|
|<img src="https://github.com/Dawon00.png" width="170">|<img src="https://github.com/juhui88.png" width="170">|
|[서다원](https://github.com/Dawon00)|[조주희](https://github.com/juhui88)|

## 사용 기술
- React
- Firebase
- Cloudtype

***

## 이 사이트를 계속 사용한다면 필요한 매년 갱신 정보

이 코드는 백엔드 없이 하드코딩 되었음을 알려드립니다.

### 홈페이지 (/)
> hufs-tab.com 접속시 가장 처음에 보이는 페이지

1. 이루어온 것들 정보
   - src/components/Achievement.js 가서 확인 가능
   - daisyUI의 타임라인 태그를 이용함(https://daisyui.com/components/timeline/)
   - 추가할거면 div 태그만 사용해서 사이트 예시와 똑같이 넣어주면 됨
  
2. 자주 묻는 질문
   - src/components/FAQ.js 가서 확인 가능
   - 오픈 채팅 링크 및 회장 정보 변경
   - 추가 질문들이 있다면 details 태그 내의 정보 복붙에서 글씨만 바꿔주면 됨



### 멤버 (/member)
> 학회 구성원의 정보를 보여주는 페이지

- src/route/Member.js 가면 확인 가능
- 멤버 정보는 json 파일로 만들어서 하드코딩 되었음(api/TAB_member_informations.json)
- 각 변수 정보는 아래와 같고 매년 학회원들에게 구글폼으로 받아서 json 파일로 변경 시 편하게 사용 가능함
  - name: 사용자의 이름 (ex. 조주희)
  - githubId: 사용자의 GitHub ID (ex. juhui88)
  - tab: 소속 기수 (ex. 38기)
  - studentId: 학번 정보 (ex. 20학번)
  - keword: 사용자를 표현하는 키워드 (ex. =useState(true))
- 변수 이름을 변경하고자 하면 src/components/member/MemberItem.js 에서 변수명도 수정해주어야 함




### 프로그램(/program)
> 매년 진행된 프로그램의 정보를 보여주는 페이지
- src/route/Program.js에 가면 확인 가능
- 상단에 data_year 이런식으로 매년 정보 json 파일을 import 해와야함
- 매년 정보를 추가할 경우 return 내에 아래 코드를 수정해주어야 함
```javascript
  function getData(year) { // 여기서 2024 추가 
    switch (year) {
      case 2022:
        return data_2022;
      case 2023:
        return data_2023;
      default:
        setYear(2022);
        return data_2022;
    }
  }
  const data = getData(year);

...

        <div className="flex  w-24">
          {[2022, 2023].map((i) => ( // 여기에 2024 추가
            <div
              onClick={() => onClick(i)}
              className="cursor-pointer rounded-full text-lg p-2  font-bold hover:text-xl transition-all pb-3"
            >
              <span className={i === year ? "text-[#865DFF]" : ""}>{i}</span>
            </div>
          ))}
        </div>
```




### 프로그램 디테일(/program/:year/:programId)
> 각 프로그램에 대한 상세 정보 나열

- Program.js에서 프로그램을 클릭시 해당 프로그램에 대한 디테일 페이지로 이동함
- 이 페이지이 2023년의 프로그램 이라면 /program/2023/1 이런식으로 URL이 이루어져 있음
- src/route/ProgramDetai.js에서 확인 가능
- 여기도 멤버와 마찬가지로 하드코딩 되었음
- 매년 정보를 갱신할거면 각 정보를 json 파일로 만들고 ProgramDetail.js 상단에서 import 해야함 (해당 파일 또한 src/api 안에 있음)
- 변수 정보는 아래와 같음
  - title: 프로젝트 이름
  - intro: 프로젝트 소개
  - goal: 목표
  - period: 프로젝트 진행 기간
  - content: 프로젝트 상세 내용
  - imgSrc: 프로젝트와 관련된 이미지 링크 목록
- imgSrc 에 들어가 있는 링크는 파이어베이스에 사진을 올리고 해당 링크를 넣어둔 형식임(이것도 하드코딩,,😓)
  1. firebase에서 새 프로젝트 생성
  2. 생성 후 해당 프로젝트 접속 후 좌측에 Storage 클릭
     ![image](https://github.com/user-attachments/assets/fdfb133a-dafb-463c-9cf1-b8fe15ab4f63)
  3. 파일 업로드 버튼으로 사진 업로드
  4. 업로드 된 이후 사진을 누르면 이름에 링크 정보가 뜸
     ![image](https://github.com/user-attachments/assets/1358c579-2319-4fba-9871-6968b737f1ea)
  6. 이 링크가 사진에 접속할 수 있는 링크임 이것을 imgSrc 안에 배열로 넣어주면 됨(클릭했을 때 위 url)
     ![image](https://github.com/user-attachments/assets/d88db558-8ffe-4859-844a-36d8c0d0cea7)






***
## 레포 무료로 배포하는 방법

1. organization에 있는 레포지토리를 본인 개인 레포로 fork
2. vercel 사이트에 로그인 후 add new project 클릭(깃허브 계정으로 로그인 해야함)
3. 포크한 레포 선택

![image](https://github.com/user-attachments/assets/e8b5e6d5-9eb2-469a-b9a1-77b01a6c414e)

4. 각종 설정 후 deploy를 누르면 배포됨

**현재 vercel에서는 개인 레포에 있는 것만 무료로 배포가 가능합니다. 따라서 개인 레포로 fork 하는 과정이 필수적입니다. 공통 올가니제이션 레포에서 수정사항을 push 한 후 개인 레포에서 synk 버튼을 눌러야 변경사항이 실시간으로 반영됩니다.**

## 커스텀 도메인 설정 방법

현재 고대디 사이트에서 구매한 hufs-tab.com 사용 중 (매년 결제 해주어야 함)

연결 방법은 아래 링크 참고

https://velog.io/@kionys/GoDaddy%EC%97%90%EC%84%9C-%EA%B5%AC%EB%A7%A4%ED%95%9C-%EB%8F%84%EB%A9%94%EC%9D%B8%EC%9D%84-Vercel%EC%97%90-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
