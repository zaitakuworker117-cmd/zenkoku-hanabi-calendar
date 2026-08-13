const fireworks = [
  {
    name: "十和田市夏まつり花火大会",
    date: "2026-08-14",
    prefecture: "青森県",
    location: "十和田市陸上競技場周辺",
    time: "19:00〜",
    fireworks: "約2,500発"
  },
  {
    name: "第22回 男鹿日本海花火",
    date: "2026-08-14",
    prefecture: "秋田県",
    location: "船川港OGAマリンパーク",
    time: "未定",
    fireworks: "約10,000発"
  },
  {
    name: "木更津港まつり花火大会",
    date: "2026-08-15",
    prefecture: "千葉県",
    location: "木更津港周辺",
    time: "未定",
    fireworks: "約14,000発"
  },
  {
    name: "赤川花火大会",
    date: "2026-08-15",
    prefecture: "山形県",
    location: "赤川河畔",
    time: "19:15〜",
    fireworks: "約12,000発"
  },
  {
    name: "諏訪湖祭湖上花火大会",
    date: "2026-08-15",
    prefecture: "長野県",
    location: "諏訪湖",
    time: "未定",
    fireworks: "約40,000発"
  },
  {
    name: "福山夏まつり あしだ川花火大会",
    date: "2026-08-15",
    prefecture: "広島県",
    location: "芦田川大橋上流",
    time: "未定",
    fireworks: "約16,000発"
  },
  {
    name: "八幡浜みなと花火大会",
    date: "2026-08-15",
    prefecture: "愛媛県",
    location: "八幡浜港",
    time: "未定",
    fireworks: "約3,500発"
  },
  {
    name: "敦賀とうろう流しと大花火大会",
    date: "2026-08-16",
    prefecture: "福井県",
    location: "敦賀湾",
    time: "未定",
    fireworks: "約10,000発"
  },
  {
    name: "川内川花火大会",
    date: "2026-08-16",
    prefecture: "鹿児島県",
    location: "川内川河川敷",
    time: "未定",
    fireworks: "約10,000発"
  },
  {
    name: "宮津燈籠流し花火大会",
    date: "2026-08-16",
    prefecture: "京都府",
    location: "宮津湾",
    time: "未定",
    fireworks: "約3,000発"
  },
  {
    name: "第61回 函館湯の川温泉花火大会",
    date: "2026-08-22",
    prefecture: "北海道",
    location: "松倉川下流",
    time: "未定",
    fireworks: "約3,000発"
  },
  {
    name: "第32回 ひたちなか祭り花火大会",
    date: "2026-08-22",
    prefecture: "茨城県",
    location: "陸上自衛隊勝田駐屯地",
    time: "未定",
    fireworks: "約3,000発"
  },
  {
    name: "朝来市山東夏祭り",
    date: "2026-08-22",
    prefecture: "兵庫県",
    location: "小谷与布土川左岸",
    time: "未定",
    fireworks: "約1,400発"
  },
  {
    name: "第98回 全国花火競技大会「大曲の花火」",
    date: "2026-08-29",
    prefecture: "秋田県",
    location: "大仙市大曲雄物川河畔",
    time: "17:15〜",
    fireworks: "約18,000発"
  }
];

const container = document.getElementById("fireworks-list");

function displayFireworks(list) {

  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML =
      "<p>該当する花火大会がありません。</p>";
    return;
  }

  list.forEach((firework, index) => {

    const card = document.createElement("div");

    card.className = "firework-card";

    card.innerHTML = `
      <h2>${firework.name}</h2>

      <p>📅 ${firework.date}</p>

      <p>📍 ${firework.prefecture} ${firework.location}</p>

      <p>🕐 ${firework.time}</p>

      <p>🎆 ${firework.fireworks}</p>

      <a
        href="detail.html?id=${index}"
        class="detail-button">
        詳細を見る →
      </a>
    `;

    container.appendChild(card);
  });
}

function filterFireworks() {

  const select =
    document.getElementById("prefecture-filter");

  if (!select) {
    return;
  }

  const prefecture = select.value;

  const filtered = fireworks.filter(firework => {

    return prefecture === "すべて" ||
           firework.prefecture === prefecture;

  });

  displayFireworks(filtered);
}


// 一覧ページ
displayFireworks(fireworks);


// ==========================
// 詳細ページ
// ==========================

const detailContainer =
  document.getElementById("firework-detail");

if (detailContainer) {

  const params =
    new URLSearchParams(window.location.search);

  const id =
    Number(params.get("id"));

  const firework =
    fireworks[id];

  if (firework) {

    detailContainer.innerHTML = `

      <div class="detail-card">

        <h2>${firework.name}</h2>

        <div class="detail-item">
          <span>📅 開催日</span>
          <strong>${firework.date}</strong>
        </div>

        <div class="detail-item">
          <span>📍 開催場所</span>
          <strong>
            ${firework.prefecture}
            ${firework.location}
          </strong>
        </div>

        <div class="detail-item">
          <span>🕐 開催時間</span>
          <strong>${firework.time}</strong>
        </div>

        <div class="detail-item">
          <span>🎆 打ち上げ数</span>
          <strong>${firework.fireworks}</strong>
        </div>

        <div class="detail-item">
          <span>🚗 アクセス</span>
          <strong>詳細情報を確認中</strong>
        </div>

        <div class="detail-item">
          <span>🎫 有料席</span>
          <strong>詳細情報を確認中</strong>
        </div>

        <div class="detail-item">
          <span>🌧️ 雨天時</span>
          <strong>公式情報をご確認ください</strong>
        </div>

      </div>
    `;

  } else {

    detailContainer.innerHTML = `
      <div class="detail-card">
        <h2>花火大会が見つかりません</h2>
        <p>指定された花火大会の情報が見つかりませんでした。</p>
      </div>
    `;

  }
}
