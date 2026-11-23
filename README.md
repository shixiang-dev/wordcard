# 每日单词卡

一个用原生 HTML / CSS / JavaScript 写的单词卡小工具，可以在手机上「添加到主屏幕」当 App 用。

**在线访问：** https://shixiang-dev.github.io/wordcard/

## 功能

- 点卡片翻面，看中文释义和例句
- 「记住了 / 还不认识」记录进度
- 进度存在浏览器本地（localStorage），刷新不丢
- 手机端全屏显示

## 技术栈

纯原生，无框架、无构建、无依赖。三个文件：

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面结构 |
| `style.css` | 样式与翻卡动画 |
| `app.js` | 逻辑与本地存储 |

## 本地运行

```bash
python3 -m http.server 8000
```

打开 http://localhost:8000

## 想加单词？

改 `app.js` 里的 `WORD_LIST` 数组，格式照抄现有的行。
