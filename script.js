const PARTY_SIZE = 20;

const benefits = [
  {
    no: "01",
    title: "포항 도착하시면, 그때부터 함께",
    description: "여객선터미널 집결·선표 수령·승선수속까지 진행자가 처음부터 챙겨드려요."
  },
  {
    no: "02",
    title: "또래 회원과 함께, 안심 동행",
    description: `비슷한 나이대 ${PARTY_SIZE}명. 낯설지 않게, 진행자가 처음부터 끝까지 함께해요.`
  },
  {
    no: "03",
    title: "호텔급 숙소 2박을 잡아뒀어요",
    description: "섬이지만 호텔급 2박. 예약도 자리 배정도 저희가 미리 준비했어요."
  },
  {
    no: "04",
    title: "저녁 자리까지 챙겨드려요",
    description: "첫날 저녁, 시놀 회원만의 네트워킹 나이트. 대화가 자연스럽게 이어지도록 자리를 마련해요."
  }
];

const days = [
  {
    label: "DAY 1",
    sub: "10/8 (목) · 포항→울릉",
    items: [
      { time: "09:00", title: "포항 여객선터미널 집결", description: "선표 수령·승선수속까지 진행자가 함께해요." },
      { time: "09:50", title: "쾌속선 출항", description: "약 2시간 50분, 울릉도로 출발해요." },
      { time: "도착", title: "도동항 도착 · 중식 (따개비칼국수)", description: "현지 안내 미팅 후, 울릉도 첫 특식으로 시작해요." },
      { time: "14:00", title: "울릉도 A코스 관광", description: "도동·통구미·거북바위·나리분지 등, 약 4시간." },
      { time: "저녁", title: "★ 시놀 네트워킹 나이트 (오삼불고기)", description: "첫날 저녁, 어색함을 편함으로. 시놀 회원만의 자리예요.", hot: true }
    ]
  },
  {
    label: "DAY 2",
    sub: "10/9 (금) · 우리 땅 독도",
    items: [
      { time: "조식", title: "엉겅퀴 해장국", description: "든든한 아침으로 하루를 시작해요." },
      { time: "오전", title: "★ 우리 땅 독도 관광", description: "독도 입도. 기상 악화 시 선회관광으로 대체돼요.", hot: true },
      { time: "중식", title: "산채비빔밥", description: "울릉도 산나물로 차린 제철 밥상." },
      { time: "14:00", title: "울릉도 B코스 관광", description: "저동 촛대바위·봉래폭포·관음도 등, 약 3시간." },
      { time: "저녁", title: "자유식", description: "원하는 곳에서 편하게 저녁 시간을 보내요." }
    ]
  },
  {
    label: "DAY 3",
    sub: "10/10 (토) · 포항 복귀",
    items: [
      { time: "오전", title: "조식 · 자유일정 · 선택관광", description: "서두르지 않고 마지막 아침을 즐겨요." },
      { time: "중식", title: "홍합밥", description: "울릉도에서의 마지막 특식." },
      { time: "13:40", title: "도동 여객선터미널 집결 · 승선수속", description: "진행자와 함께 안전하게 승선해요." },
      { time: "14:20", title: "쾌속선 출항 · 포항 도착", description: "좋은 기억과 함께 뭍으로 돌아와요." }
    ]
  }
];

const foods = [
  "따개비칼국수",
  "오삼불고기",
  "엉겅퀴 해장국",
  "산채비빔밥",
  "홍합밥"
];

const includedItems = [
  {
    title: "왕복 쾌속선",
    meta: "(포항↔울릉도)",
    image: "./assets/high-speed-ferry.png"
  },
  {
    title: "우리 땅 독도 관광",
    meta: "(선표 포함)",
    image: "./assets/dokdo-tour.png"
  },
  {
    title: "호텔급 숙소 2박",
    meta: "(4인 1실)",
    image: "./assets/hotel-room.png"
  },
  {
    title: "A+B코스 관광",
    meta: "(전용버스)",
    image: "./assets/ab-course-bus.png"
  },
  {
    title: "식사 6식",
    meta: "(특식 5식 포함)",
    image: "./assets/included-meals.png"
  },
  {
    title: "시놀 네트워킹 나이트",
    meta: "",
    image: "./assets/networking-card.png"
  }
];

const membershipBenefits = [
  "1년간 모든 시놀트립 회원 전용가로 참여",
  "20명 한정 회차 우선 예약권",
  "전 일정 여행자보험",
  "또래 매칭 그룹핑"
];

const audiences = [
  "독도, 꼭 한번 가보고 싶으셨던 분",
  "혼자 신청해 또래 회원과 함께 편하게 떠나고 싶은 분",
  "배편·일정 챙기기가 부담스러워 여행을 미뤄오셨던 분",
  "낯선 모임보다 조용하고 편안한 분위기를 원하시는 분"
];

const faqs = [
  {
    question: "혼자 신청해도 괜찮을까요?",
    answer: "그럼요. 대부분 혼자 오세요. 진행자가 처음부터 함께하고, 자리도 자연스럽게 어울릴 수 있게 배정해 드려요."
  },
  {
    question: "독도는 꼭 들어가나요?",
    answer: "날씨가 허락하면 접안·입도하고, 파도가 높은 날엔 독도를 도는 선회관광으로 대체돼요. 해상 날씨는 저희도 어쩔 수 없는 부분이라 미리 양해 부탁드려요."
  },
  {
    question: "이동·집결은 어떻게 하나요?",
    answer: "포항 여객선터미널로 각자 오시면, 그다음부터 집결·승선·현지 이동까지 진행자가 함께해요."
  },
  {
    question: "가격에 무엇이 포함되나요?",
    answer: "포항↔울릉 왕복 쾌속선·독도 관광·호텔급 2박·A/B코스 관광·특식 포함 식사까지요. (석식 1회 자유식, 여행자보험·개인경비는 별도)"
  },
  {
    question: "배를 오래 타면 멀미가 걱정돼요.",
    answer: "쾌속선으로 약 2시간 50분이에요. 멀미가 걱정되시면 미리 약을 준비해오시면 한결 편하세요."
  },
  {
    question: "멤버십에 꼭 가입해야 하나요?",
    answer: "아니요, 비회원으로도 참여하실 수 있어요."
  }
];

function renderBenefits() {
  const container = document.querySelector("#benefits-list");

  container.innerHTML = benefits.map((benefit) => `
    <article class="benefit-card">
      <div class="benefit-card__number">${benefit.no}</div>
      <div class="benefit-card__content">
        <h3 class="benefit-card__title">${benefit.title}</h3>
        <p class="benefit-card__description">${benefit.description}</p>
      </div>
    </article>
  `).join("");
}

function renderDays() {
  const container = document.querySelector("#days-list");

  container.innerHTML = days.map((day) => `
    <article class="schedule-day">
      <div class="schedule-day__badge">
        <span>${day.label}</span>
        <span class="schedule-day__badge-sub">${day.sub}</span>
      </div>
      <div class="timeline">
        ${day.items.map((item) => `
          <div class="timeline-item${item.hot ? " timeline-item--hot" : ""}">
            <span class="timeline-item__node" aria-hidden="true"></span>
            <p class="timeline-item__time">${item.time}</p>
            <h3 class="timeline-item__title">${item.title}</h3>
            <p class="timeline-item__description">${item.description}</p>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderFoods() {
  const container = document.querySelector("#foods-list");
  container.innerHTML = foods.map((food) => `<span class="food-chip">${food}</span>`).join("");
}

function renderIncludedItems() {
  const container = document.querySelector("#includes-grid");

  container.innerHTML = includedItems.map((item) => `
    <article class="include-card">
      ${item.image
        ? `<img class="include-card__image" src="${item.image}" alt="${item.title}">`
        : `<div class="include-card__placeholder"><span>사진 자리</span></div>`}
      <h3 class="include-card__title">${item.title}</h3>
    </article>
  `).join("");
}

function renderMembershipBenefits() {
  const container = document.querySelector("#membership-list");

  container.innerHTML = membershipBenefits.map((benefit) => `
    <div class="membership-item">
      <span class="membership-item__check" aria-hidden="true">✓</span>
      <span class="membership-item__text">${benefit}</span>
    </div>
  `).join("");
}

function renderAudiences() {
  const container = document.querySelector("#audience-list");

  container.innerHTML = audiences.map((audience) => `
    <article class="audience-card">
      <span class="audience-card__check" aria-hidden="true">✓</span>
      <span class="audience-card__text">${audience}</span>
    </article>
  `).join("");
}

function renderFaqs() {
  const container = document.querySelector("#faq-list");

  container.innerHTML = faqs.map((faq, index) => {
    const isOpen = index === 0;

    return `
    <article class="faq-item">
      <button
        class="faq-item__button"
        type="button"
        aria-expanded="${isOpen}"
        aria-controls="faq-answer-${index}"
      >
        <span class="faq-item__q">Q</span>
        <span class="faq-item__question">${faq.question}</span>
        <span class="faq-item__arrow" aria-hidden="true">⌄</span>
      </button>
      <div id="faq-answer-${index}" class="faq-item__answer"${isOpen ? "" : " hidden"}>${faq.answer}</div>
    </article>
  `;
  }).join("");

  container.addEventListener("click", (event) => {
    const button = event.target.closest(".faq-item__button");
    if (!button) return;

    const isOpen = button.getAttribute("aria-expanded") === "true";

    container.querySelectorAll(".faq-item__button").forEach((faqButton) => {
      const faqAnswer = document.getElementById(faqButton.getAttribute("aria-controls"));

      faqButton.setAttribute("aria-expanded", "false");
      faqAnswer.hidden = true;
    });

    const answerId = button.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);

    button.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
  });
}

function applyPartySize() {
  document.querySelectorAll(".js-party-size").forEach((element) => {
    element.textContent = String(PARTY_SIZE);
  });
}

function initializePage() {
  applyPartySize();
  renderBenefits();
  renderDays();
  renderFoods();
  renderIncludedItems();
  renderMembershipBenefits();
  renderAudiences();
  renderFaqs();
}

document.addEventListener("DOMContentLoaded", initializePage);
