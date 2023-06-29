## API Info
---

### 유저 생성하기
```
Method: POST
URL: {{host}}/users
body: {
  "id": "test",
  "password": "12345",
  "name": "하이루",
  "email": "test@com"
}
```

### 유저 전체 리스트
```
Method: GET
URL: {{host}}/users
```

### 특정 유저 조회
```
Method: GET
URL: {{host}}/users/${id}
```

### 유저 정보 수정
```
Method: PATCH
URL: {{host}}/users/${id}
body: {
  "name": "호로록" 
}
```

### 유저 삭제
```
Method: DELETE
URL: {{host}}/users/${id}
```

---

### 로그인
```
Method: POST
URL: {{host}}/auth/login
body: {
  "id": "test",
  "password": "12345"
}
```

### 내 정보 가져오기
```
Method: GET
URL: {{host}}/auth/profile
header: {
  Authorization: {{jwt}}
}
```