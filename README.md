# 🎬 SURFLIX

> **넷플릭스 클론 프로젝트로, 영화 정보를 탐색하고 상세 정보를 확인할 수 있는 웹 애플리케이션입니다.**

<p align="center">
<img width="800" alt="SURFLIX 화면" src="https://github.com/user-attachments/assets/d9daefbb-ffdd-47fb-a30d-75f4443013b1" />
</p>

## 🔗 데모 링크

**🌐 [Live Demo](https://5urf.github.io/surflix/)**

---

## ✨ 주요 기능

### 🎭 영화 컬렉션 탐색

- **인기 영화** - 현재 가장 인기 있는 작품들
- **현재 상영작** - 극장에서 만날 수 있는 최신 영화
- **개봉 예정작** - 곧 출시될 기대작들
- 영화 카드에서 **평점과 포스터** 미리보기 제공

### 🎪 인터랙티브 영화 상세 보기

- **Framer Motion** 기반 부드러운 모달 애니메이션
- 고화질 백드롭 이미지와 **그라데이션 오버레이**
- 상세 정보: **줄거리, 장르, 개봉일, 런타임, 원제**
- **평점 정보** 및 출시 연도 표시

### 🌓 테마 전환 시스템

- **다크/라이트 모드** 원클릭 전환
- Zustand 기반 **상태 지속성** (LocalStorage)
- 모든 컴포넌트에 **일관된 테마** 적용

### 📱 완벽한 반응형 경험

- **모바일 우선** 설계로 모든 디바이스 최적화
- **반응형 그리드 레이아웃**

### ⚡ 최적화된 사용자 경험

- **TanStack Query**로 데이터 캐싱
- **로딩 스피너**와 에러 처리로 안정적인 UX
- 네트워크 오류 시 **재시도 버튼** 제공

---

## 🛠 기술 스택

- React 19
- TypeScript
- Vite
- Styled-Components
- Framer Motion
- TanStack Query
- Zustand
- React Router v7

---

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── header/
│   │   ├── Header.tsx           # 네비게이션 헤더
│   │   ├── NavItems.tsx         # 메뉴 항목
│   │   └── DarkModeSwitch.tsx   # 테마 토글
│   ├── movies/
│   │   ├── Movies.tsx           # 영화 컬렉션 래퍼
│   │   ├── MovieGrid.tsx        # 그리드 레이아웃
│   │   ├── MovieCard.tsx        # 영화 카드 컴포넌트
│   │   ├── MovieDetail.tsx      # 상세 정보 표시
│   │   ├── MovieDetailModal.tsx # 모달 컨테이너
│   │   └── banner/
│   │       ├── MainBanner.tsx   # 히어로 배너
│   │       └── InfoBtn.tsx      # 정보 버튼
│   ├── common/
│   │   └── MoviePageWrapper.tsx # 페이지 래퍼
│   ├── loadingSpinner/
│   │   └── LoadingSpinner.tsx   # 로딩 UI
│   └── modal/
│       └── Modal.tsx            # 범용 모달
├── pages/
│   ├── Home.tsx                 # 인기 영화
│   ├── NowPlaying.tsx          # 현재 상영작
│   └── ComingSoon.tsx          # 개봉 예정작
├── hooks/
│   ├── useGetPopularList.tsx    # 인기 영화 훅
│   ├── useGetNowPlayingList.tsx # 현재 상영작 훅
│   ├── useGetComingSoonList.tsx # 개봉 예정작 훅
│   └── useGetMovieDetail.tsx    # 영화 상세 훅
├── store/
│   ├── themeStore.ts           # 테마 상태 관리
│   └── modalStore.ts           # 모달 상태 관리
├── service/
│   └── api.ts                  # API 호출 함수
├── styles/
│   ├── globalStyles.ts         # 전역 스타일
│   ├── theme.ts               # 테마 정의
│   └── svgStyles.ts           # SVG 스타일
├── utils/
│   ├── imgUtil.ts             # 이미지 유틸리티
│   └── formatUtil.ts          # 포맷 유틸리티
├── types/
│   └── movie.d.ts             # 영화 타입 정의
├── assets/
│   └── [icons]                # SVG 아이콘들
└── layouts/
    └── MovieLayout.tsx        # 공통 레이아웃
```

---

## 💡 핵심 구현 포인트

### 🎨 Modern UI/UX 설계

- **Netflix 스타일 디자인 시스템** - 다크/라이트 테마 중심의 시네마틱 경험
- **Micro-interactions** - 카드 호버, 버튼 클릭 시 부드러운 전환 효과
- **반응형 그리드 레이아웃** - 다양한 디바이스에 최적화된 반응형 UI

### ⚡ 성능 최적화

- **데이터 캐싱** - TanStack Query의 자동 캐싱으로 불필요한 API 호출 방지
- **다중 해상도 이미지** - TMDB API w300/w500 포맷으로 최적 이미지 로딩
- **조건부 렌더링** - 로딩/에러/성공 상태별 효율적 컴포넌트 렌더링

### 🔄 상태 관리 아키텍처

- **서버 상태**: TanStack Query로 영화 데이터 캐싱 및 동기화
- **클라이언트 상태**: Zustand로 테마, 모달 상태 관리
- **지속성 구현** - LocalStorage 연동으로 테마 설정 유지

### 🎭 애니메이션 시스템

- **Shared Layout Animations** - Framer Motion layoutId로 카드→모달 자연스러운 전환
- **Stagger Animations** - 영화 그리드의 순차적 등장 효과 (staggerChildren)
- **스크롤 기반 애니메이션** - 헤더 네비게이션의 배경 변화
