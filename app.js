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
    name: "大間町ブルーマリンフェスティバル2026 花火大会",
    date: "2026-08-14",
    prefecture: "青森県",
    location: "大間港",
    time: "未定",
    fireworks: "未定"
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
    name: "山形大花火大会",
    date: "2026-08-14",
    prefecture: "山形県",
    location: "霞城公園周辺",
    time: "未定",
    fireworks: "約7,000発"
  },
  {
    name: "太地町花火大会",
    date: "2026-08-14",
    prefecture: "和歌山県",
    location: "太地漁港",
    time: "20:00〜",
    fireworks: "約1,000発"
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
    name: "第21回越前市サマーフェスティバル花火大会",
    date: "2026-08-15",
    prefecture: "福井県",
    location: "越前市",
    time: "未定",
    fireworks: "約15,000発"
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
    name: "刈谷わんさか祭り 花火大会",
    date: "2026-08-15",
    prefecture: "愛知県",
    location: "刈谷市総合運動公園",
    time: "未定",
    fireworks: "約7,000発"
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
    name: "大石田まつり 花火大会",
    date: "2026-08-16",
    prefecture: "山形県",
    location: "大石田町",
    time: "未定",
    fireworks: "約3,000発"
  },
  {
    name: "浅川の花火",
    date: "2026-08-16",
    prefecture: "福島県",
    location: "浅川町",
    time: "未定",
    fireworks: "約3,300発"
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
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "<p>該当する花火大会がありません。</p>";
    return;
  }

  list.forEach(firework => {
    const card = document.createElement("div");

    card.className = "firework-card";

    card.innerHTML = `
      <h2>${firework.name}</h2>
      <p>📅 ${firework.date}</p>
      <p>📍 ${firework.prefecture} ${firework.location}</p>
      <p>🕐 ${firework.time}</p>
      <p>🎆 ${firework.fireworks}</p>
    `;

    container.appendChild(card);
  });
}

function filterFireworks() {
  const prefecture =
    document.getElementById("prefecture-filter").value;

  const filtered = fireworks.filter(firework => {
    return prefecture === "すべて" ||
           firework.prefecture === prefecture;
  });

  displayFireworks(filtered);
}

displayFireworks(fireworks);
