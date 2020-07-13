# 토이프로젝트 - 뽀모도로 기법을 통한 시간 관리 웹앱
##### 사이트 주소 https://www.momato.net
------------------------------

## 기획
>일에 집중하기 까지의 시간을 단축 시킬 방법을 찾다 뽀모도로 기법을 알게 되었다.  
>뽀모도로 기법을 이용하여 일하는 시간과 휴식 시간을 미리 계획하고   
>일정을 실행할 수 있는 시간 관리하는 사이트를 개발했다.
>Rest api를 활용하여 서버를 구성하고, react를 사용하여 SPA(Single Page Application)를 만들었다.

## 프로젝트 일정
+ 프로젝트 기획 및 설계 2020-03-30 ~ 2020-04-03  
+ 프로젝트 구현 2020-04-03 ~  
 <br/>  
 <br/>

------------------------------
## 프로젝트 설명
+ ### 토마토  
  + 집중시간(기본 25분)과 휴식시간(기본 5분)으로 이루어진 한 개의 일정을 토마토라고 표현한다.
  + 그 날에 등록된 토마토들을 오늘의 토마토에서 확인 가능하다.
  + 진행이 완료된 토마토들과 아직 진행중인 토마토들의 개수를 확인 할 수 있다.

+ ### 토마토 달력
  + 달력 형태로 매일 완료한 토마토 개수를 보여준다.
  
+ ### 토마토 텃밭
  + 반복적인 일정을 저장해 놓는 템플릿을 토마토 텃밭이라고 표현한다.
  + 오늘의 토마토에서 토마토 텃밭을 불러와 반복적인 작업을 재활용 할 수 있다.  
 <br/>
 <br/>

------------------------------
## 프로젝트 설계

+ ### 기능명세서
![기능명세서](https://user-images.githubusercontent.com/53218264/79749468-3ea46080-834a-11ea-8342-2882b556a92a.jpg)

+ ### 데이터베이스
![DB_diagram](https://user-images.githubusercontent.com/52450448/86915227-95a51f00-c15c-11ea-8fb1-f4c383ddbf33.PNG)

+ ### api 설계
![api](https://user-images.githubusercontent.com/53218264/79750478-fd14b500-834b-11ea-9830-ec52dc9994b0.gif)  
 <br/>  
 <br/>  

------------------------------
## 화면

+ ### 오늘의 토마토 / 토마토 달력 / 토마토 텃밭 / 타이머
![daily_tomato_mobile](https://user-images.githubusercontent.com/52450448/87302833-0e392080-c54d-11ea-8587-5fb1ce6b9bb8.png)
![calendar_mobile](https://user-images.githubusercontent.com/52450448/87303092-843d8780-c54d-11ea-973f-b96084892cd4.png)  

![template_mobile](https://user-images.githubusercontent.com/52450448/87303200-ba7b0700-c54d-11ea-9dba-abb962880835.png)
![timer_mobile](https://user-images.githubusercontent.com/52450448/87306920-b225ca80-c553-11ea-80a5-cc8eb0396e04.png)  
 <br/>
 <br/> 

------------------------------
## 추가할 기능

+ #### 달력을 통해 지난 토마토 조회 기능
+ #### 일정 기간동안 완료한 토마토 개수 기준으로 순위 선정
