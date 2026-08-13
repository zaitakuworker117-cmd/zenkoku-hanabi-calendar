const events = [
  {
    id: 1,
    date: "2026-08-08",
    pref: "大阪府",
    name: "なにわ夏祭り花火大会（サンプル）",
    city: "大阪市",
    time: "19:30〜20:30",
    shots: "約8,000発",
    url: "https://example.com/"
  },
  {
    id: 2,
    date: "2026-08-08",
    pref: "兵庫県",
    name: "神戸港サマーフェス花火（サンプル）",
    city: "神戸市",
    time: "20:00〜20:30",
    shots: "約6,000発",
    url: "https://example.com/"
  },
  {
    id: 3,
    date: "2026-08-08",
    pref: "京都府",
    name: "鴨川納涼花火（サンプル）",
    city: "京都市",
    time: "19:45〜20:30",
    shots: "約5,000発",
    url: "https://example.com/"
  },
  {
    id: 4,
    date: "2026-08-09",
    pref: "大阪府",
    name: "淀川サンデー花火（サンプル）",
    city: "大阪市",
    time: "19:30〜20:15",
    shots: "約7,000発",
    url: "https://example.com/"
  },
  {
    id: 5,
    date: "2026-08-09",
    pref: "滋賀県",
    name: "びわ湖夏花火（サンプル）",
    city: "大津市",
    time: "19:30〜20:30",
    shots: "約10,000発",
    url: "https://example.com/"
  },
  {
    id: 6,
    date: "2026-08-15",
    pref: "大阪府",
    name: "大阪ベイ花火大会（サンプル）",
    city: "大阪市",
    time: "19:30〜20:30",
    shots: "約10,000発",
    url: "https://example.com/"
  },
  {
    id: 7,
    date: "2026-08-15",
    pref: "兵庫県",
    name: "○○納涼花火大会（サンプル）",
    city: "○○市",
    time: "20:00〜21:00",
    shots: "約5,000発",
    url: "https://example.com/"
  },
  {
    id: 8,
    date: "2026-08-15",
    pref: "東京都",
    name: "東京湾花火大会（サンプル）",
    city: "東京都",
    time: "19:00〜20:00",
    shots: "約12,000発",
    url: "https://example.com/"
  },
  {
    id: 9,
    date: "2026-08-16",
    pref: "京都府",
    name: "古都夏夜花火（サンプル）",
    city: "京都市",
    time: "19:30〜20:20",
    shots: "約4,000発",
    url: "https://example.com/"
  },
  {
    id: 10,
    date: "2026-08-22",
    pref: "大阪府",
    name: "大阪リバー花火（サンプル）",
    city: "大阪市",
    time: "19:30〜20:30",
    shots: "約9,000発",
    url: "https://example.com/"
  }
];


let current = new Date(2026, 7, 8);

let selectedDate = "2026-08-08";

let area = "全国";


const views = [
  "calendarView",
  "dayView",
  "detailView"
];


const $ = (id) => {
  return document.getElementById(id);
};


const iso = (date) => {

  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );

};


const fmt = (dateString) => {

  const d =
    new Date(dateString + "T00:00:00");

  const week =
    "日月火水木金土"[d.getDay()];

  return (
    `${d.getFullYear()}年` +
    `${d.getMonth() + 1}月` +
    `${d.getDate()}日` +
    `（${week}）`
  );

};


function show(id) {

  views.forEach((view) => {

    $(view).classList.toggle(
      "active",
      view === id
    );

  });

  window.scrollTo(0, 0);

}


/* =========================
   カレンダー表示
========================= */

function renderCalendar() {

  $("monthTitle").textContent =
    `${current.getFullYear()}年` +
    `${current.getMonth() + 1}月`;


  const first =
    new Date(
      current.getFullYear(),
      current.getMonth(),
      1
    );


  const last =
    new Date(
      current.getFullYear(),
      current.getMonth() + 1,
      0
    );


  let html = "";


  for (
    let i = 0;
    i < first.getDay();
    i++
  ) {

    html +=
      '<div class="empty"></div>';

  }


  for (
    let n = 1;
    n <= last.getDate();
    n++
  ) {

    const date =
      new Date(
        current.getFullYear(),
        current.getMonth(),
        n
      );


    const key = iso(date);


    const list =
      events.filter(
        (event) =>
          event.date === key
      );


    const today =
      key === "2026-08-08"
        ? " today"
        : "";


    html += `
      <button
        class="day${today}${list.length ? " has-event" : ""}"
        data-date="${key}"
      >

        <span class="num">
          ${n}
        </span>

        ${
          list.length
            ? `<br>
               <span class="count">
                 🎆 ${list.length}
               </span>`
            : ""
        }

      </button>
    `;

  }


  $("calendar").innerHTML = html;


  document
    .querySelectorAll(".day")
    .forEach((button) => {

      button.onclick = () => {

        openDay(
          button.dataset.date
        );

      };

    });

}


/* =========================
   日別一覧
========================= */

function openDay(date) {

  selectedDate = date;

  area = "全国";

  renderDay();

  show("dayView");

}


function renderDay() {

  const list =
    events.filter(
      (event) =>
        event.date === selectedDate
    );


  const prefs = [
    "全国",
    ...new Set(
      list.map(
        (event) =>
          event.pref
      )
    )
  ];


  $("dayTitle").textContent =
    `🎆 ${fmt(selectedDate)}`;


  $("dayCount").textContent =
    `${list.length}件`;


  $("areaFilters").innerHTML =
    prefs
      .map(
        (pref) => `
          <button
            class="${
              pref === area
                ? "active"
                : ""
            }"
            data-pref="${pref}"
          >
            ${pref}
          </button>
        `
      )
      .join("");


  document
    .querySelectorAll(
      "#areaFilters button"
    )
    .forEach((button) => {

      button.onclick = () => {

        area =
          button.dataset.pref;

        renderDay();

      };

    });


  const filtered =
    area === "全国"
      ? list
      : list.filter(
          (event) =>
            event.pref === area
        );


  if (filtered.length === 0) {

    $("dayList").innerHTML =
      "<p>この条件の花火大会はありません。</p>";

    return;

  }


  $("dayList").innerHTML =
    filtered
      .map(
        (event) => `

          <article class="card">

            <h2>
              🎆 ${event.name}
            </h2>

            <div class="meta">

              📍
              ${event.pref}
              ${event.city}

              <br>

              🕐
              ${event.time}

              <br>

              🎇
              ${event.shots}

            </div>

            <button
              data-id="${event.id}"
            >
              詳細を見る
            </button>

          </article>

        `
      )
      .join("");


  document
    .querySelectorAll(
      "#dayList button"
    )
    .forEach((button) => {

      button.onclick = () => {

        openDetail(
          Number(
            button.dataset.id
          )
        );

      };

    });

}


/* =========================
   詳細画面
========================= */

function openDetail(id) {

  const event =
    events.find(
      (item) =>
        item.id === id
    );


  if (!event) {

    return;

  }


  $("detail").innerHTML = `

    <div class="detail-hero">

      <div class="emoji">
        🎆
      </div>

      <h1>
        ${event.name}
      </h1>


      <div class="info">

        <b>
          📅 開催日
        </b>

        ${fmt(event.date)}

      </div>


      <div class="info">

        <b>
          🕐 開催時間
        </b>

        ${event.time}

      </div>


      <div class="info">

        <b>
          📍 開催場所
        </b>

        ${event.pref}
        ${event.city}

      </div>


      <div class="info">

        <b>
          🎇 打ち上げ数
        </b>

        ${event.shots}

      </div>


      <div class="map">

        🗺 地図

        <br>

        （次版でGoogle Maps等と連携）

      </div>


      <div class="info">

        <b>
          ⚠️ 開催情報
        </b>

        荒天時は延期・中止になる場合があります。

        最新情報は公式サイトをご確認ください。

      </div>


      <a
        class="official"
        href="${event.url}"
        target="_blank"
        rel="noopener"
      >

        🔗 公式サイトを見る

      </a>

    </div>

  `;


  show("detailView");

}


/* =========================
   ボタン
========================= */

$("prevMonth").onclick = () => {

  current.setMonth(
    current.getMonth() - 1
  );

  renderCalendar();

};


$("nextMonth").onclick = () => {

  current.setMonth(
    current.getMonth() + 1
  );

  renderCalendar();

};


$("todayBtn").onclick = () => {

  current =
    new Date(2026, 7, 8);

  renderCalendar();

};


$("todayList").onclick = () => {

  openDay("2026-08-08");

};


$("navToday").onclick = () => {

  openDay("2026-08-08");

};


document
  .querySelectorAll(".back")
  .forEach((button) => {

    button.onclick = () => {

      show(
        button.dataset.back
      );

    };

  });


document
  .querySelectorAll("[data-nav]")
  .forEach((button) => {

    button.onclick = () => {

      show(
        button.dataset.nav
      );

    };

  });


/* =========================
   初期表示
