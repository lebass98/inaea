# 학업성취도평가지원포털

Next.js 기반의 학업성취도평가지원포털 웹 애플리케이션입니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS
- **Fonts**: PretendardGOV
- **Linting**: ESLint + Next.js config

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── faq/               # FAQ 페이지
│   ├── notice/            # 공지사항 페이지
│   ├── infocenter/        # 정보마당 페이지
│   ├── survey/            # 설문조사 페이지
│   ├── research/          # 연구자료 페이지
│   ├── promotion/         # 홍보자료 페이지
│   ├── inquiry/           # 문의하기 페이지
│   └── notification/      # 마이페이지(알림) 페이지
├── components/             # React 컴포넌트
├── assets/                 # CSS 및 기타 자산
└── utils/                  # 유틸리티 함수
```

## 시작하기

### 필수 요구사항

- Node.js 18.17 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 주요 기능

- **평가소개**: 학업성취도평가에 대한 소개
- **체험하기**: 평가 체험 기능
- **정보마당**: 관련 정보 제공
- **소통하기**: 공지사항 및 소통 공간
- **마이페이지**: 개인 알림 및 설정

## 라우팅

Next.js App Router를 사용하여 파일 기반 라우팅을 구현했습니다:

- `/` - 홈페이지
- `/faq` - FAQ
- `/notice` - 공지사항
- `/infocenter` - 정보마당
- `/survey` - 설문조사
- `/research` - 연구자료
- `/promotion` - 홍보자료
- `/inquiry` - 문의하기
- `/notification` - 마이페이지

## 개발 가이드

### 컴포넌트 추가

새로운 페이지 컴포넌트를 추가할 때는 `src/app/` 디렉토리에 해당 폴더와 `page.tsx` 파일을 생성하세요.

### 스타일링

CSS 파일은 `src/assets/css/` 디렉토리에 위치하며, 컴포넌트별로 import하여 사용합니다.

### 이미지 및 폰트

정적 파일들은 `public/` 디렉토리에 위치하며, `getImagePath()` 유틸리티를 통해 경로를 관리합니다.
