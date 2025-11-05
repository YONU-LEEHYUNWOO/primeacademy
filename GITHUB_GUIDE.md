# 🚀 GitHub 업로드 가이드

프라임 수학학원 랜딩페이지 프로젝트를 GitHub에 올리는 단계별 가이드입니다.

## 📋 순서

### 1단계: 현재 변경사항 확인

```bash
git status
```

이미 실행했고, 변경사항이 확인되었습니다.

---

### 2단계: 모든 변경사항 스테이징 (추가)

```bash
git add .
```

또는 특정 파일만 추가하려면:

```bash
git add src/
git add docs/
git add README.md
git add .gitignore
```

---

### 3단계: 커밋 메시지와 함께 커밋

```bash
git commit -m "feat: 프라임 수학학원 랜딩페이지 구현

- 홈페이지 및 주요 페이지 구현 (about, results, teachers, difference, location, reservation)
- 강사진 모달 다이얼로그 기능 추가
- 히어로 섹션 디자인 개선
- shadcn-ui Dialog 컴포넌트 추가
- 반응형 디자인 적용
- 프로젝트 문서 추가"
```

---

### 4단계: GitHub에서 새 저장소 생성

1. GitHub 웹사이트 (https://github.com) 접속
2. 우측 상단 **+** 버튼 클릭 → **New repository** 선택
3. 저장소 정보 입력:
   - **Repository name**: `academy_homepage` (또는 원하는 이름)
   - **Description**: `프라임 수학학원 랜딩페이지`
   - **Public** 또는 **Private** 선택
   - **⚠️ 중요**: "Initialize this repository with a README" 체크박스는 **체크하지 마세요** (이미 로컬에 파일이 있으므로)
4. **Create repository** 버튼 클릭

---

### 5단계: 원격 저장소 연결

GitHub에서 생성한 저장소의 URL을 확인하고 다음 명령어 실행:

```bash
git remote add origin https://github.com/사용자명/저장소명.git
```

예시:
```bash
git remote add origin https://github.com/yourusername/academy_homepage.git
```

원격 저장소가 이미 있다면:

```bash
git remote set-url origin https://github.com/사용자명/저장소명.git
```

원격 저장소 확인:
```bash
git remote -v
```

---

### 6단계: GitHub에 푸시

```bash
git push -u origin master
```

또는 메인 브랜치가 `main`인 경우:

```bash
git branch -M main
git push -u origin main
```

---

## 🔄 이후 업데이트하는 방법

프로젝트를 수정한 후 다시 업로드하려면:

```bash
# 1. 변경사항 확인
git status

# 2. 변경사항 추가
git add .

# 3. 커밋
git commit -m "커밋 메시지"

# 4. 푸시
git push
```

---

## ⚠️ 주의사항

1. **환경 변수 파일 (.env)**: `.gitignore`에 포함되어 있어 업로드되지 않습니다.
2. **node_modules**: 자동으로 제외됩니다.
3. **빌드 파일 (.next/)**: 자동으로 제외됩니다.
4. **개인정보**: 실제 연락처나 API 키 등은 환경 변수로 관리하세요.

---

## 📝 커밋 메시지 컨벤션

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 스타일 변경 (포맷팅 등)
- `refactor`: 코드 리팩토링
- `design`: UI/UX 디자인 변경
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등

---

## ✅ 완료 확인

GitHub 저장소 페이지에서 모든 파일이 올라갔는지 확인하세요!

