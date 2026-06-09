let step = 0;
let noCount = 0;

const catFace = document.getElementById("catFace");
const title = document.getElementById("title");
const text = document.getElementById("text");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loading = document.getElementById("loading");
const finalBox = document.getElementById("finalBox");
const floatLayer = document.getElementById("floatLayer");
const card = document.querySelector(".card");

const steps = [
  {
    cat: "🐱❓",
    title: "привет даша",
    text: "у меня есть маленький секрет но его охраняют котики",
    btn: "узнать секрет 😺",
    no: "нет не хочу 🙈"
  },
  {
    cat: "😺💭",
    title: "ты точно хочешь узнать",
    text: "потому что после этого сайт станет еще милее",
    btn: "да точно хочу 💖",
    no: "нет я передумала 🙈"
  },
  {
    cat: "🐈‍⬛❔",
    title: "котики проверяют тебя",
    text: "они должны понять можно ли тебе доверить этот секрет",
    btn: "можно доверять 😻",
    no: "не доверяйте мне 😿"
  },
  {
    cat: "😽🌸",
    title: "проверка пройдена",
    text: "котики решили что тебе можно показать самое главное",
    btn: "дальше 🐾",
    no: "я боюсь 🥺"
  },
  {
    cat: "🐱💖",
    title: "загрузка любви",
    text: "сайт собирает сердечки котиков и мои чувства к тебе",
    btn: "запустить магию ✨",
    no: "отменить магию 🙈",
    loading: true
  },
  {
    cat: "💖🐱💖",
    title: "секрет почти открыт",
    text: "этот сайт сделан для самой особенной даши",
    btn: "открыть секрет ❤️",
    no: "не открывать 😭"
  }
];

const noMessages = [
  "точно нет 🥺",
  "совсем нет 😿",
  "котики грустят 🐱",
  "а если подумать 💖",
  "ну дашааа 🌸",
  "я очень старался 🥹",
  "последний шанс 😺",
  "ну пожалуйста ❤️",
  "ладно но я все равно люблю тебя"
];

yesBtn.addEventListener("click", function () {
  step++;

  if (step >= steps.length) {
    showFinal();
    return;
  }

  noCount = 0;
  updateCard();
});

noBtn.addEventListener("click", function () {
  if (noCount < noMessages.length) {
    noBtn.textContent = noMessages[noCount];
    noCount++;
  } else {
    noBtn.textContent = "все равно жми да 💖";
  }

  shakeCard();
  createFloatingItem();
});

function updateCard() {
  const s = steps[step];

  catFace.textContent = s.cat;
  title.textContent = s.title;
  text.textContent = s.text;
  yesBtn.textContent = s.btn;
  noBtn.textContent = s.no;

  loading.style.display = s.loading ? "block" : "none";
}

function shakeCard() {
  card.style.transform = "scale(1.03) rotate(-1deg)";

  setTimeout(function () {
    card.style.transform = "scale(1) rotate(0deg)";
  }, 180);
}

function showFinal() {
  card.style.display = "none";
  finalBox.style.display = "block";

  setInterval(createFloatingItem, 80);
}

function createFloatingItem() {
  const items = ["💖", "💕", "❤️", "🐱", "😺", "🐾", "🌸", "✨", "💗", "😽", "💞", "🌷"];
  const el = document.createElement("div");

  el.className = "floating";
  el.textContent = items[Math.floor(Math.random() * items.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = Math.random() * 30 + 22 + "px";
  el.style.animationDuration = Math.random() * 4 + 4 + "s";

  floatLayer.appendChild(el);

  setTimeout(function () {
    el.remove();
  }, 8000);
}

setInterval(createFloatingItem, 250);