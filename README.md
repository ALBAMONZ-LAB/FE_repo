# 서버 드리븐 UI 예시 프로젝트

![프로젝트 이미지](https://github.com/user-attachments/assets/a0746620-2494-4c1c-b1c0-5d2697e8312b)

이 프로젝트는 서버 드리븐 UI (Server-Driven UI) 개념을 구현한 Next.js 웹페이지 입니다. 서버에서 동적으로 UI 구성을 결정하고, 클라이언트에서 이를 렌더링하는 방식을 보여줍니다.

## 주요 기능

- 서버에서 동적으로 UI 구성 생성
- 클라이언트에서 동적 컴포넌트 렌더링

## 기술 스택

- Next.js 14.2.15
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## 프로젝트 구조

- `src/app/page.tsx`: 메인 페이지 컴포넌트
- `src/app/api/home/route.ts`: UI 구성을 제공하는 API 라우트
- `src/app/event/page.tsx`: 이벤트 페이지 컴포넌트
- `src/app/api/event/route.ts`: 이벤트 페이지 UI 구성을 제공하는 API 라우트

## 사용 방법

서버에서 정의된 UI 구성에 따라 동적으로 컴포넌트가 렌더링됩니다.

- Header
- Text
- Button
- Table
- Image

## 페이지

1. 홈 페이지 (`/`): 기본 서버 드리븐 UI 예시
2. 이벤트 페이지 (`/event`): 이벤트 페이지 예시


```mermaid
graph TD
    A[App] --> B[pages]
    A --> C[components]
    A --> D[api]
    A --> E[lib]

    B --> F[Home]
    B --> G[Event]
    B --> H[Photo]
    B --> I[Login]

    C --> J[UI Components]
    J --> K[Button]
    J --> L[Dialog]

    D --> M[home]
    D --> N[event]

    E --> O[utils]

    H --> P[PhotoModal]
    H --> Q[PhotoPage]

    subgraph "Server-Driven UI"
        M --> F
        N --> G
    end

    subgraph "Dynamic Routing"
        H --> P
        H --> Q
    end

    subgraph "Shared Components"
        C --> J
    end

    subgraph "Utility Functions"
        E --> O
    end
```


## Server-driven UI

```mermaid
sequenceDiagram
    actor Client
    participant Page as Next.js Page Component
    participant Server as Next.js Server
    participant API as API Route
    participant DynamicComponent as Dynamic Component

    Client->>Page: 페이지 요청
    activate Page
    Page->>Server: getServerSideProps 실행
    activate Server
    Server->>API: UI 구성 요청
    activate API
    Note right of API: UI 구성 생성
    API-->>Server: UI 구성 반환
    deactivate API
    Server-->>Page: props로 UI 구성 전달
    deactivate Server
    Page->>DynamicComponent: UI 구성 전달
    activate DynamicComponent
    DynamicComponent->>DynamicComponent: 컴포넌트 동적 렌더링
    DynamicComponent-->>Page: 렌더링된 컴포넌트
    deactivate DynamicComponent
    Page-->>Client: 렌더링된 페이지 반환
    deactivate Page

    Note over Client,DynamicComponent: 클라이언트 측 상호작용
    Client->>DynamicComponent: 사용자 상호작용
    activate DynamicComponent
    DynamicComponent->>DynamicComponent: 정의된 동작 실행
    DynamicComponent-->>Client: UI 업데이트
    deactivate DynamicComponent

```