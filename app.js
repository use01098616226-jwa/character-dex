const STORAGE_KEY = 'POCKET_CHARACTER_DEX_V1';

// 초기 샘플 데이터 (하치와레, 치이카와, 우사기 및 각 캐릭터의 다양한 모습 카드)
const INITIAL_DATA = [
  {
    id: 'char-hachiware',
    name: '하치와레 (Hachiware)',
    title: '긍정 에너지 & 수다쟁이 친구',
    bio: '파란색 가르마 무늬가 매력적인 캐릭터. 호기심이 많고 친구들을 살뜰히 챙기며, 위기 상황에서도 포기하지 않고 말을 조리 있게 잘한다.',
    themeColor: '#4a90e2',
    preset: 'catBlue',
    variants: [
      {
        id: 'v-101',
        title: '기타 치며 노래하는 모습',
        tag: '일상',
        mood: 'sing',
        imgUrl: '',
        quote: '"혼자서~ 생라면을 먹었어~♪"',
        desc: '동굴 집에서 직접 통기타를 튕기며 자작곡(생라면 송)을 부르는 평화로운 일상 모먼트.'
      },
      {
        id: 'v-102',
        title: '파란 사스마타 토벌 출동 모습',
        tag: '토벌/액션',
        mood: 'battle',
        imgUrl: '',
        quote: '"어떻게든 되겠지!! 가보자고!"',
        desc: '위험한 토벌 현장에서도 파란 사스마타를 꼭 쥐고 친구들을 지키기 위해 앞장서는 용감한 모습.'
      },
      {
        id: 'v-103',
        title: '찰칵! 카메라 사진작가 모습',
        tag: '스페셜',
        mood: 'happy',
        imgUrl: '',
        quote: '"웃어봐~! 정말 잘 나왔어!"',
        desc: '열심히 아르바이트해서 모은 돈으로 산 소중한 카메라로 친구들의 순간을 기록하는 모습.'
      },
      {
        id: 'v-104',
        title: '챠루메라 라면 먹방 모습',
        tag: '먹방',
        mood: 'food',
        imgUrl: '',
        quote: '"같이 먹으니까 두 배로 맛있네!"',
        desc: '김이 모락모락 나는 라면을 후루룩 불어가며 치이카와와 함께 행복하게 먹는 모습.'
      }
    ]
  },
  {
    id: 'char-chiikawa',
    name: '치이카와 (Chiikawa)',
    title: '작고 귀여운 노력파 주인공',
    bio: '겁이 많고 눈물도 자주 흘리지만, 친구를 위해서라면 큰 용기를 내는 따뜻한 마음씨의 소유자. 제초 검정 5급 합격을 위해 열심히 공부 중이다.',
    themeColor: '#f06595',
    preset: 'bearWhite',
    variants: [
      {
        id: 'v-201',
        title: '초록 파자마 입고 춤추는 모습',
        tag: '일상',
        mood: 'sleep',
        imgUrl: '',
        quote: '"와아... 파자마 파티다..!"',
        desc: '맞춰 입은 파자마를 입고 신나게 율동을 따라 하는 포근하고 귀여운 모습.'
      },
      {
        id: 'v-202',
        title: '분홍 사스마타 특훈 모습',
        tag: '토벌/액션',
        mood: 'battle',
        imgUrl: '',
        quote: '"야아아앗ㅡ!!"',
        desc: '두려움을 이겨내고 분홍색 사스마타를 힘껏 휘두르며 성장해 나가는 모습.'
      },
      {
        id: 'v-203',
        title: '제초 5급 열공 중인 모습',
        tag: '스페셜',
        mood: 'cry',
        imgUrl: '',
        quote: '"히끅... 이번엔 꼭 붙을 거야..."',
        desc: '눈물을 글썽이면서도 문제집을 놓지 않고 책상 앞에서 끝까지 공부하는 기특한 모습.'
      }
    ]
  },
  {
    id: 'char-usagi',
    name: '우사기 (Usagi)',
    title: '자유분방한 텐션 천재',
    bio: '어디로 튈지 모르는 유쾌한 에너지의 소유자. "야하!", "우라!" 같은 독특한 기합 소리를 내며 놀라운 순발력과 전투력을 보여준다.',
    themeColor: '#f59f00',
    preset: 'rabbitYellow',
    variants: [
      {
        id: 'v-301',
        title: '야하! 신나게 점프하는 모습',
        tag: '일상',
        mood: 'happy',
        imgUrl: '',
        quote: '"야하ㅡ!! 푸루루루~!"',
        desc: '등장만으로도 주변 분위기를 단숨에 끌어올리는 하이텐션 기본 포즈.'
      },
      {
        id: 'v-302',
        title: '거대 푸딩 위에서 먹방 모습',
        tag: '먹방',
        mood: 'food',
        imgUrl: '',
        quote: '"우라!! 냠냠!"',
        desc: '맛있는 음식이 있는 곳이라면 어디든 나타나 순식간에 해치우는 진정한 미식가 모먼트.'
      },
      {
        id: 'v-303',
        title: '양끝 폭발 토벌봉 액션 모습',
        tag: '토벌/액션',
        mood: 'battle',
        imgUrl: '',
        quote: '"하아아아ㅡ!!"',
        desc: '거대한 괴이 앞에서도 전혀 기죽지 않고 화려한 곡예로 제압하는 에이스의 모습.'
      }
    ]
  }
];

// 애플리케이션 상태
let state = {
  characters: [],
  selectedCharId: null,
  activeTag: 'ALL'
};

// 내장 SVG 캐릭터 일러스트 생성기 (외부 이미지가 없어도 캐릭터의 다양한 모습을 렌더링)
function generateCharacterSVG(preset = 'catBlue', mood = 'happy', size = 140) {
  const palette = {
    catBlue: { main: '#ffffff', sub: '#5b9bd5', cheek: '#ffadad' },
    bearWhite: { main: '#ffffff', sub: '#ffd6e0', cheek: '#ff8fa3' },
    rabbitYellow: { main: '#fff3bf', sub: '#fcc419', cheek: '#ffa8a8' },
    squirrelPurple: { main: '#ffffff', sub: '#b197fc', cheek: '#fcc2d7' }
  }[preset] || { main: '#ffffff', sub: '#5b9bd5', cheek: '#ffadad' };

  // 귀 모양 분기
  let ears = `<circle cx="42" cy="40" r="16" fill="${palette.main}" stroke="#222" stroke-width="3.5"/>
              <circle cx="98" cy="40" r="16" fill="${palette.main}" stroke="#222" stroke-width="3.5"/>`;
  if (preset === 'catBlue') {
    ears = `<polygon points="30,52 36,20 60,38" fill="${palette.sub}" stroke="#222" stroke-width="3.5" stroke-linejoin="round"/>
            <polygon points="110,52 104,20 80,38" fill="${palette.sub}" stroke="#222" stroke-width="3.5" stroke-linejoin="round"/>`;
  } else if (preset === 'rabbitYellow') {
    ears = `<ellipse cx="52" cy="24" rx="10" ry="24" fill="${palette.main}" stroke="#222" stroke-width="3.5"/>
            <ellipse cx="88" cy="24" rx="10" ry="24" fill="${palette.main}" stroke="#222" stroke-width="3.5"/>`;
  }

  // 이마 무늬 (하치와레 스타일 가르마)
  const bangs = preset === 'catBlue'
    ? `<path d="M32 58 Q52 34 70 55 Q88 34 108 58 L104 42 Q70 28 36 42 Z" fill="${palette.sub}"/>`
    : '';

  // 표정(mood)별 눈/입/소품 분기
  let eyes = `<circle cx="53" cy="70" r="4.5" fill="#222"/><circle cx="87" cy="70" r="4.5" fill="#222"/>`;
  let mouth = `<path d="M64 78 Q70 84 76 78" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
  let prop = '';

  if (mood === 'sing') {
    eyes = `<path d="M47 70 Q53 64 59 70" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M81 70 Q87 64 93 70" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    mouth = `<ellipse cx="70" cy="81" rx="6" ry="5" fill="#ff6b6b" stroke="#222" stroke-width="2.5"/>`;
    prop = `<text x="102" y="42" font-size="22">🎵</text><text x="18" y="118" font-size="24">🎸</text>`;
  } else if (mood === 'battle') {
    eyes = `<circle cx="53" cy="70" r="4.5" fill="#222"/><circle cx="87" cy="70" r="4.5" fill="#222"/>
            <line x1="45" y1="60" x2="60" y2="64" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <line x1="95" y1="60" x2="80" y2="64" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    mouth = `<path d="M63 82 Q70 77 77 82" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    prop = `<text x="98" y="115" font-size="26">🔱</text><text x="18" y="44" font-size="20">🔥</text>`;
  } else if (mood === 'food') {
    eyes = `<path d="M47 70 Q53 63 59 70" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M81 70 Q87 63 93 70" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    mouth = `<path d="M62 78 Q70 88 78 78 Z" fill="#ff8787" stroke="#222" stroke-width="2.5"/>`;
    prop = `<text x="95" y="118" font-size="26">🍜</text><text x="20" y="45" font-size="18">✨</text>`;
  } else if (mood === 'sleep') {
    eyes = `<path d="M47 72 Q53 76 59 72" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
            <path d="M81 72 Q87 76 93 72" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    prop = `<text x="98" y="42" font-size="20">💤</text><text x="20" y="115" font-size="22">🌙</text>`;
  } else if (mood === 'cry') {
    eyes = `<circle cx="53" cy="70" r="4.5" fill="#222"/><circle cx="87" cy="70" r="4.5" fill="#222"/>
            <path d="M48 76 Q46 86 51 86" fill="none" stroke="#4dabf7" stroke-width="3" stroke-linecap="round"/>
            <path d="M92 76 Q94 86 89 86" fill="none" stroke="#4dabf7" stroke-width="3" stroke-linecap="round"/>`;
    mouth = `<path d="M64 83 Q70 78 76 83" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>`;
    prop = `<text x="96" y="115" font-size="22">📖</text>`;
  } else {
    prop = `<text x="100" y="44" font-size="20">✨</text>`;
  }

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
      ${ears}
      <ellipse cx="70" cy="76" rx="42" ry="38" fill="${palette.main}" stroke="#222" stroke-width="3.5"/>
      ${bangs}
      <ellipse cx="42" cy="78" rx="6" ry="3.5" fill="${palette.cheek}"/>
      <ellipse cx="98" cy="78" rx="6" ry="3.5" fill="${palette.cheek}"/>
      ${eyes}
      ${mouth}
      ${prop}
    </svg>
  `;
}

// 로컬 스토리지 로드 및 저장
function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      state.characters = JSON.parse(saved);
    } catch (e) {
      state.characters = JSON.parse(JSON.stringify(INITIAL_DATA));
    }
  } else {
    state.characters = JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  if (state.characters.length > 0 && !state.selectedCharId) {
    state.selectedCharId = state.characters[0].id;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.characters));
}

function getSelectedCharacter() {
  return state.characters.find((c) => c.id === state.selectedCharId) || state.characters[0];
}

// 캐릭터 테마 컬러를 CSS 변수에 반영
function applyThemeColor(hexColor) {
  document.documentElement.style.setProperty('--theme-accent', hexColor);
  document.documentElement.style.setProperty('--theme-soft', `${hexColor}18`);
}

// 전체 화면 렌더링
function renderApp() {
  const currentChar = getSelectedCharacter();
  if (!currentChar) return;

  applyThemeColor(currentChar.themeColor || '#4a90e2');
  renderSidebar(currentChar.id);
  renderBanner(currentChar);
  renderVariantCards(currentChar);
}

// 1. 좌측 캐릭터 목록 렌더링
function renderSidebar(selectedId) {
  const listEl = document.getElementById('characterList');
  const countEl = document.getElementById('charCountBadge');
  countEl.textContent = state.characters.length;

  listEl.innerHTML = state.characters
    .map(
      (char) => `
      <li class="char-item ${char.id === selectedId ? 'active' : ''}" data-id="${char.id}">
        <div class="char-avatar">
          ${generateCharacterSVG(char.preset, 'happy', 44)}
        </div>
        <div class="char-info">
          <h3>${char.name}</h3>
          <p>모습 카드 ${char.variants.length}장</p>
        </div>
      </li>
    `
    )
    .join('');
}

// 2. 상단 선택된 캐릭터 배너 렌더링
function renderBanner(char) {
  const bannerEl = document.getElementById('characterBanner');
  bannerEl.innerHTML = `
    <div class="banner-avatar">
      ${generateCharacterSVG(char.preset, 'happy', 90)}
    </div>
    <div class="banner-text">
      <span class="banner-badge">${char.title}</span>
      <h2>${char.name}</h2>
      <p>${char.bio}</p>
    </div>
  `;
}

// 3. 선택된 캐릭터의 다양한 모습(Variant) 카드 그리드 렌더링
function renderVariantCards(char) {
  const gridEl = document.getElementById('variantCardGrid');
  const filtered =
    state.activeTag === 'ALL'
      ? char.variants
      : char.variants.filter((v) => v.tag === state.activeTag);

  if (filtered.length === 0) {
    gridEl.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 48px; color:#646f7c; background:#fff; border-radius:16px; border:1px dashed #ccc;">
        해당 태그에 등록된 모습 카드가 없습니다. 우측 상단 버튼을 눌러 새로운 모습을 추가해 보세요!
      </div>
    `;
    return;
  }

  gridEl.innerHTML = filtered
    .map((v) => {
      const visualContent = v.imgUrl
        ? `<img src="${v.imgUrl}" alt="${v.title}" onerror="this.outerHTML=\`${generateCharacterSVG(char.preset, v.mood, 145).replace(/"/g, '&quot;')}\`" />`
        : generateCharacterSVG(char.preset, v.mood, 145);

      return `
        <article class="flip-card" data-variant-id="${v.id}">
          <div class="flip-card-inner">
            <!-- 카드 앞면: 캐릭터의 특정 모습 이미지 & 태그 -->
            <div class="flip-card-front">
              <div class="card-visual">
                <span class="card-tag">#${v.tag}</span>
                <button class="delete-card-btn" data-delete-id="${v.id}" title="이 모습 카드 삭제">&times;</button>
                ${visualContent}
              </div>
              <div class="card-front-body">
                <h4>${v.title}</h4>
                <span class="flip-hint">클릭해서 카드 뒷면 보기 ↻</span>
              </div>
            </div>
            <!-- 카드 뒷면: 명대사 및 에피소드 설명 -->
            <div class="flip-card-back">
              <div>
                <p class="back-quote">${v.quote}</p>
                <p class="back-desc">${v.desc}</p>
              </div>
              <div class="back-footer">${char.name} · ${v.tag} 모먼트</div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');
}

// 이벤트 리스너 초기화
function initEvents() {
  // 캐릭터 선택
  document.getElementById('characterList').addEventListener('click', (e) => {
    const item = e.target.closest('.char-item');
    if (!item) return;
    state.selectedCharId = item.dataset.id;
    renderApp();
  });

  // 태그 필터 선택
  document.getElementById('tagFilterGroup').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-chip');
    if (!btn) return;
    document.querySelectorAll('.filter-chip').forEach((el) => el.classList.remove('active'));
    btn.classList.add('active');
    state.activeTag = btn.dataset.tag;
    renderVariantCards(getSelectedCharacter());
  });

  // 카드 클릭 시 3D 플립 토글 & 삭제 버튼 처리
  document.getElementById('variantCardGrid').addEventListener('click', (e) => {
    const deleteBtn = e.target.closest('.delete-card-btn');
    if (deleteBtn) {
      e.stopPropagation();
      const targetId = deleteBtn.dataset.deleteId;
      const currentChar = getSelectedCharacter();
      currentChar.variants = currentChar.variants.filter((v) => v.id !== targetId);
      saveData();
      renderApp();
      return;
    }

    const card = e.target.closest('.flip-card');
    if (card) {
      card.classList.toggle('is-flipped');
    }
  });

  // 모달 열기/닫기
  document.getElementById('openCharModalBtn').addEventListener('click', () => {
    document.getElementById('charModal').classList.remove('hidden');
  });

  document.getElementById('openVariantModalBtn').addEventListener('click', () => {
    const currentChar = getSelectedCharacter();
    document.getElementById('targetCharName').textContent = currentChar.name;
    document.getElementById('variantModal').classList.remove('hidden');
  });

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById(btn.dataset.close).classList.add('hidden');
    });
  });

  // 새 캐릭터 등록 제출
  document.getElementById('charForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('charName').value.trim();
    const title = document.getElementById('charTitle').value.trim();
    const bio = document.getElementById('charBio').value.trim();
    const themeColor = document.getElementById('charColor').value;
    const preset = document.getElementById('charPreset').value;

    const newChar = {
      id: 'char-' + Date.now(),
      name,
      title,
      bio,
      themeColor,
      preset,
      variants: [
        {
          id: 'v-' + Date.now(),
          title: `${name}의 첫 등장 모습`,
          tag: '일상',
          mood: 'happy',
          imgUrl: '',
          quote: `"안녕! 나는 ${name}이야!"`,
          desc: '도감에 처음으로 등록된 기본 모습 카드입니다. 우측 상단 버튼으로 다양한 모습을 추가해 보세요!'
        }
      ]
    };

    state.characters.push(newChar);
    state.selectedCharId = newChar.id;
    saveData();
    renderApp();
    e.target.reset();
    document.getElementById('charModal').classList.add('hidden');
  });

  // 선택한 캐릭터의 새로운 모습 카드 추가 제출
  document.getElementById('variantForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const currentChar = getSelectedCharacter();
    const newVariant = {
      id: 'v-' + Date.now(),
      title: document.getElementById('variantTitle').value.trim(),
      tag: document.getElementById('variantTag').value,
      mood: document.getElementById('variantMood').value,
      imgUrl: document.getElementById('variantImgUrl').value.trim(),
      quote: `"${document.getElementById('variantQuote').value.trim()}"`,
      desc: document.getElementById('variantDesc').value.trim()
    };

    currentChar.variants.unshift(newVariant);
    saveData();
    renderApp();
    e.target.reset();
    document.getElementById('variantModal').classList.add('hidden');
  });

  // 기본 도감 데이터 초기화
  document.getElementById('resetDataBtn').addEventListener('click', () => {
    if (confirm('직접 추가한 캐릭터와 카드를 지우고 초기 샘플 도감 상태로 되돌릴까요?')) {
      localStorage.removeItem(STORAGE_KEY);
      state.selectedCharId = null;
      loadData();
      renderApp();
    }
  });
}

// 앱 시작
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  initEvents();
  renderApp();
});