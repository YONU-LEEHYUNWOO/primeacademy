# 프라임 수학학원 랜딩페이지

프라임 수학학원의 공식 랜딩페이지 프로젝트입니다. Next.js 15와 TailwindCSS를 사용하여 구축된 반응형 웹사이트입니다.

## 🌐 배포 링크

**라이브 사이트**: [https://academy-homepage.vercel.app/](https://academy-homepage.vercel.app/)

Vercel을 통해 배포된 프로덕션 사이트입니다.

## 📋 프로젝트 개요

학부모들이 학원의 강점, 교육 철학, 성과를 신뢰감 있게 확인하고 온라인 방문 상담 예약으로 전환하도록 유도하는 목적의 랜딩페이지입니다.

## 🚀 주요 기능

- **홈페이지**: 메인 비주얼과 학원 소개
- **학원 소개** (`/about`): 교육 철학 및 커리큘럼 소개
- **성과 및 통계** (`/results`): 객관적인 성과 데이터 시각화
- **강사진 소개** (`/teachers`): 전문 강사진 프로필 및 상세 모달
- **차별점 소개** (`/difference`): 타 학원 대비 비교
- **오시는 길** (`/location`): 위치 정보 및 교통편 안내
- **상담 예약** (`/reservation`): 온라인 상담 예약 폼

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **언어**: TypeScript
- **스타일링**: TailwindCSS
- **UI 컴포넌트**: shadcn-ui
- **애니메이션**: Framer Motion
- **폼 처리**: React Hook Form + Zod
- **아이콘**: Lucide React
- **상태 관리**: Zustand, React Query

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인할 수 있습니다.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 🚢 배포

이 프로젝트는 [Vercel](https://vercel.com)을 통해 배포되었습니다.

### 배포 방법

1. Vercel 계정에 GitHub 저장소 연결
2. 자동 배포 설정 (GitHub push 시 자동 배포)
3. 환경 변수 설정 (필요 시)

배포된 사이트: [https://academy-homepage.vercel.app/](https://academy-homepage.vercel.app/)

## 📁 프로젝트 구조

```
academy_homepage/
├── docs/                    # 프로젝트 문서
│   ├── prd.md               # 제품 요구사항 문서
│   ├── design.md            # UI/UX 디자인 가이드
│   ├── ia.md                # 정보구조도
│   └── usecases.md          # 유스케이스 문서
├── src/
│   ├── app/                 # Next.js App Router 페이지
│   │   ├── about/          # 학원 소개 페이지
│   │   ├── results/        # 성과 및 통계 페이지
│   │   ├── teachers/       # 강사진 소개 페이지
│   │   ├── difference/     # 차별점 소개 페이지
│   │   ├── location/       # 오시는 길 페이지
│   │   ├── reservation/    # 상담 예약 페이지
│   │   └── page.tsx        # 홈페이지
│   ├── components/         # React 컴포넌트
│   │   ├── home/           # 홈페이지 섹션 컴포넌트
│   │   ├── ui/             # shadcn-ui 컴포넌트
│   │   ├── Header.tsx      # 헤더 컴포넌트
│   │   └── Footer.tsx      # 푸터 컴포넌트
│   ├── hooks/              # 커스텀 훅
│   └── lib/                # 유틸리티 함수
└── public/                 # 정적 파일
```

## 🎨 디자인 시스템

- **주요 색상**: Primary `#6fcf1b` (연두색)
- **디자인 철학**: 깔끔하고 전문적인 Modern UI
- **참고 서비스**: 네이버 (Naver) 스타일
- **애니메이션**: Framer Motion을 활용한 부드러운 인터랙션
- **레이아웃**: 가로형 배너 및 카드 기반 그리드 시스템

## 📝 주요 특징

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱 대응)
- ✅ 접근성 고려 (WCAG 2.1 AA 준수)
- ✅ SEO 최적화
- ✅ 타입 안정성 (TypeScript)
- ✅ 폼 유효성 검사 (Zod)
- ✅ Framer Motion 기반 세련된 애니메이션
- ✅ 스크롤 기반 인터랙티브 효과
- ✅ 강사진 모달 다이얼로그 기능
- ✅ 숫자 카운트업 애니메이션
- ✅ 가로형 배너 레이아웃

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 비공개 프로젝트입니다.

## 🔗 관련 링크

- **라이브 사이트**: [https://academy-homepage.vercel.app/](https://academy-homepage.vercel.app/)
- **GitHub 저장소**: [https://github.com/YONU-LEEHYUNWOO/primeacademy](https://github.com/YONU-LEEHYUNWOO/primeacademy)

## ✨ 최근 업데이트

### v1.1.0 (최신)
- 🎨 차별점 섹션을 가로형 배너 레이아웃으로 변경
- 🎯 헤더에 GraduationCap 아이콘 추가
- 🎬 모든 섹션에 Framer Motion 애니메이션 적용
- 📊 성과 통계 섹션에 숫자 카운트업 애니메이션 추가
- 🖼️ 히어로 섹션 배경 이미지 디자인 개선
- 📱 모바일 메뉴 슬라이드 애니메이션 개선
- 🎭 강사진 모달 다이얼로그 기능 추가
