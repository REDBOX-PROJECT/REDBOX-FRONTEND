# REDBOX-FRONTEND

## 커밋 메시지 구조

```
// Header, Body, Footer는 빈 행으로 구분한다.
타입(스코프): 주제(제목) // Header(헤더)

본문 // Body(바디)

바닥글 // Footer
```

<br><br>

| 타입 이름 | 내용 |
| --------- | ------- |
| feat | 새로운 기능 추가 |
| fix	| 버그 수정 |
| docs | 문서 수정 |
| style |	코드 스타일 변경 (코드 포매팅, 세미콜론 누락 등) 기능 수정이 없는 경우 |
| design | 사용자 UI 디자인 변경 (CSS 등) | 
| test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| refactor | 코드 리팩토링 |
| build	| 빌드 파일 수정 |
| ci | CI 설정 파일 수정 |
| perf | 성능 개선 | 
| chore	| 빌드 업무 수정, 패키지 매니저 수정 (gitignore 수정 등) |
| rename | 파일 혹은 폴더명을 수정만 한 경우 | 
| remove | 파일을 삭제만 한 경우 | 


Header는 필수이다.

Body는 Header에서 표현할 수 없는 상세한 내용을 적는다.

Header에서 충분히 표현할 수 있다면 생략 가능하다.

Footer는 바닥글로 어떤 이슈에서 왔는지 같은 참조 정보들을 추가하는 용도로 사용한다.

Footer는 생략 가능하다.

**작성 예시**
1.
    ```
    FX-00 design: [FE] 홈페이지 디자인 변경
    ```
2.
    ```
    FX-00 design: [FE] 홈페이지 디자인 변경
    
    - 메인 화면 레이아웃 업데이트
    - 네비게이션 바 디자인 수정

    resolved: #FX-00
    ```   


