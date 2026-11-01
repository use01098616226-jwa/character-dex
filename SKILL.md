---
name: character-dex-builder
description: 외부 프레임워크나 빌드 도구 없이 브라우저에서 즉시 실행 가능한 순수 HTML5/CSS3/Vanilla JS 기반의 '미니 캐릭터 도감 및 멀티 카드 뷰어'를 설계하고 단계별로 구현하는 스킬입니다.
---

# Skill: Interactive Character Dex Builder (character-dex-builder)

## 1. 목적 (Purpose)
이 스킬은 바이브 코딩(Vibe Coding)을 통해 캐릭터 도감 웹 애플리케이션을 제작할 때, AI가 불필요한 외부 패키지(React, Vite, Tailwind 등)를 도입하여 브라우저 즉시 실행 환경을 해치는 것을 방지하고, Todo 리스트 기반의 점진적 개발 및 Git 커밋 분리를 일관되게 유지하기 위해 정의되었습니다.

## 2. 핵심 구현 규칙 (Core Rules)
1. **Zero-Build 브라우저 실행 보장**:
   - 반드시 순수 HTML5, CSS3, Vanilla JavaScript(ES6+)만 사용한다.
   - 로컬 환경(`index.html` 직접 열기)과 GitHub Pages 배포 환경 모두에서 경로 에러(404)가 발생하지 않도록 모든 리소스는 상대 경로(`./style.css`, `./app.js`)로 연결한다.
2. **1:N 계층형 데이터 스키마 유지**:
   - 단일 캐릭터(`Character`) 객체 내부에 다양한 모습 카드를 담는 `variants` 배열을 포함시켜 1:N 구조를 유지한다.
   - 스키마 구조:
     - `Character`: `{ id, name, title, bio, themeColor, preset, variants: [] }`
     - `Variant`: `{ id, title, tag, mood, imgUrl, quote, desc }`
3. **시각적 무결성 및 이미지 Fallback 시스템**:
   - 사용자가 외부 이미지 URL을 입력하지 않거나, 잘못된 URL로 인해 이미지 로드 실패(`onerror`)가 발생하더라도 빈 박스가 노출되지 않도록 내장 SVG 캐릭터 일러스트 생성기(`generateCharacterSVG`)를 기본 렌더링 엔진으로 사용한다.
4. **3D 카드 플립(Flip) 인터랙션 표준**:
   - CSS `perspective: 1000px`, `transform-style: preserve-3d`, `backface-visibility: hidden` 속성을 사용하여 카드 앞면(시각 자료 및 태그)과 뒷면(명대사 및 비하인드 스토리)을 분리한다.
   - 모바일 및 데스크톱 호환성을 위해 `:hover`가 아닌 JS 클릭 이벤트(`.is-flipped` 클래스 토글)로 제어를 통일한다.
5. **안전한 DOM 처리 및 상태 영속성**:
   - 사용자 입력값을 렌더링할 때는 XSS 및 태그 깨짐을 방지하기 위해 문자열 이스케이프(`escapeHTML`) 처리를 거친다.
   - 모든 상태 변경(캐릭터 등록/삭제, 모습 카드 추가/삭제, 초기화) 직후 `localStorage`에 즉시 동기화한다.
6. **단계별 구현 (Todo & Commit 연동)**:
   - 한 번에 완성본을 출력하지 않고 [기획 문서화 -> UI 레이아웃 -> 코어 렌더링 -> 테스트 및 리팩토링] 단계별로 코드를 작성하여 Git 커밋 내역에 개발 과정이 드러나도록 한다.