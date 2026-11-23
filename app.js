// ===============================================
// 这个文件只做一件事：把 WORD_LIST 里的单词一张张
// 显示出来，并记住你点了"记住了"的有哪些。
// 加单词 -> 只改下面的 WORD_LIST。
// 改颜色/排版 -> 去 style.css。
// ===============================================

const WORD_LIST = [
  { word: "abandon",    mean: "放弃；抛弃",       eg: "He abandoned the plan halfway. 他中途放弃了这个计划。" },
  { word: "benefit",    mean: "好处；使受益",      eg: "Exercise benefits both body and mind. 运动对身心都有好处。" },
  { word: "curious",    mean: "好奇的",           eg: "I am curious about how it works. 我很好奇它是怎么运作的。" },
  { word: "deliver",    mean: "交付；递送",        eg: "We deliver the project on time. 我们按时交付了这个项目。" },
  { word: "efficient",  mean: "高效的",           eg: "This is a much more efficient way. 这是一种高效得多的办法。" },
  { word: "feature",    mean: "功能；特点",        eg: "The app has a new feature. 这个应用有个新功能。" },
  { word: "generate",   mean: "生成；产生",        eg: "The model generates an answer. 模型生成了一个答案。" },
  { word: "handle",     mean: "处理；应对",        eg: "Can you handle the error? 你能处理这个报错吗？" },
  { word: "improve",    mean: "改进；提高",        eg: "We improved the speed by 3x. 我们把速度提升了三倍。" },
  { word: "justify",    mean: "证明…正当",        eg: "Nothing can justify wasting time. 没有任何理由能为浪费时间开脱。" },
  { word: "knowledge",  mean: "知识",             eg: "Knowledge is built step by step. 知识是一步步搭起来的。" },
  { word: "limitation", mean: "局限；限制",        eg: "Every model has its limitations. 每个模型都有局限。" },
  { word: "maintain",   mean: "维护；保持",        eg: "Someone has to maintain the server. 总得有人维护服务器。" },
  { word: "negotiate",  mean: "谈判；协商",        eg: "We negotiated a better price. 我们谈下了一个更好的价格。" },
  { word: "obvious",    mean: "明显的",           eg: "The bug was obvious after logging. 打了日志之后 bug 很明显。" },
  { word: "precise",    mean: "精确的",           eg: "Give me a precise number. 给我一个精确的数字。" },
  { word: "quality",    mean: "质量",             eg: "Quality matters more than speed. 质量比速度更重要。" },
  { word: "reduce",     mean: "减少；降低",        eg: "It reduces the cost by half. 它把成本降了一半。" },
  { word: "stable",     mean: "稳定的",           eg: "The service is stable now. 服务现在稳定了。" },
  { word: "trigger",    mean: "触发；引发",        eg: "This line triggers the error. 这一行触发了报错。" },
    { word: "focus",    mean: "专注；焦点",  eg: "Focus on one thing at a time. 一次只专注一件事。" },
  { word: "habit",    mean: "习惯",       eg: "Reading is a good habit. 阅读是个好习惯。" },
  { word: "persist",  mean: "坚持；持续",  eg: "If you persist, you will improve. 坚持下去就会进步。" },
  { word: "review",   mean: "复习；回顾",  eg: "Review what you learned last week. 复习上周学的内容。" },
  { word: "progress", mean: "进步；进展",  eg: "Small progress is still progress. 小的进步也是进步。" },
];

const KEY = "wordcard.v1";
const card   = document.getElementById("card");
const wordEl = document.getElementById("word");
const meanEl = document.getElementById("mean");
const egEl   = document.getElementById("eg");
const barEl  = document.getElementById("bar");
const statEl = document.getElementById("stat");

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { index: 0, known: [] };
}

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
}

function current() {
  return WORD_LIST[state.index % WORD_LIST.length];
}

function render() {
  const w = current();
  wordEl.textContent = w.word;
  meanEl.textContent = w.mean;
  egEl.textContent = w.eg;
  card.classList.remove("flipped");

  const pct = Math.round((state.known.length / WORD_LIST.length) * 100);
  barEl.style.width = pct + "%";
  statEl.textContent = state.known.length + " / " + WORD_LIST.length + " 张已记住";
}

card.addEventListener("click", () => card.classList.toggle("flipped"));

document.getElementById("known").addEventListener("click", () => {
  const w = current();
  if (!state.known.includes(w.word)) state.known.push(w.word);
  state.index = (state.index + 1) % WORD_LIST.length;
  save();
  render();
});

document.getElementById("again").addEventListener("click", () => {
  state.index = (state.index + 1) % WORD_LIST.length;
  save();
  render();
});

document.getElementById("reset").addEventListener("click", () => {
  state = { index: 0, known: [] };
  save();
  render();
});

render();
