# 从 0 到「手机上能打开的项目」— 傻瓜版操作手册

> 你的电脑已经装好了所有东西（Python 3.13、Node 22、Git 2.39、VS Code），**不需要再装任何软件**。
> 全程 4 个阶段，第一个阶段今天 10 分钟就能看到结果。

---

## 阶段 1 · 先在电脑和手机上看一眼（10 分钟）

### 1.1 打开终端，进到项目文件夹

打开「终端」App（或 VS Code 里按 `Ctrl + \`` 打开终端），复制粘贴这一行，回车：

```bash
cd ~/dsworkspace/code-first/wordcard
```

### 1.2 启动一个本地服务器

复制粘贴，回车：

```bash
python3 -m http.server 8000
```

看到 `Serving HTTP on ... port 8000` 就成了。**这个窗口不要关**（关了服务就停）。

> 第一次运行 macOS 可能会弹窗问「是否允许 Python 接受传入网络连接」，点 **允许**。没点的话手机连不上。

### 1.3 电脑上看

浏览器打开：<http://localhost:8000>

应该看到一个深色卡片，写着 `abandon`。点一下卡片会翻面。

### 1.4 手机上看（关键：这一步会给你「啊我能做东西」的感觉）

手机连**和电脑同一个 WiFi**，浏览器输入：

```
http://192.168.10.186:8000
```

> 这个 IP 是你电脑现在的局域网地址。如果明天换了网络、或者连不上，在终端另开一个窗口运行
> `ipconfig getifaddr en0`，把输出的数字换掉 `192.168.10.186` 即可。

### 1.5 手机上「添加到主屏幕」

- iPhone Safari：点底部「分享」→「添加到主屏幕」
- 安卓 Chrome：右上角「⋮」→「添加到主屏幕」

加完点图标打开，会发现它是**全屏**的，没有浏览器地址栏——看起来就像一个 App。

**到这里，你已经做出了一个「手机能打开的东西」。** 剩下的只是把它变成你自己的，再放到公网上。

---

## 阶段 2 · 改成你自己的（1–2 小时）

这一步才是真正的「学编程」。三个任务，从易到难：

### 任务 A（10 分钟，改文字）

用 VS Code 打开 `index.html`，找到这两行，把标题改成你想要的：

```html
<title>每日单词卡</title>
...
<h1>每日单词卡</h1>
```

保存（`⌘ S`），刷新浏览器，看到变化。

### 任务 B（30 分钟，改数据）

打开 `app.js`，找到最上面的 `WORD_LIST`。它长这样：

```js
{ word: "abandon", mean: "放弃；抛弃", eg: "He abandoned the plan halfway. 他中途放弃了这个计划。" },
```

**你自己加 5 个词进去**，格式照抄，注意：
- 每一项用 `{ }` 包起来
- 项与项之间用**英文逗号** `,` 隔开
- 最后一项后面**不要**加逗号
- 引号必须是英文的 `"`，不是中文的 `"`

保存，刷新，翻到第 21 张，应该能看到你加的。

> 加错了页面会白屏。按 `F12` 打开「控制台」，红色的那行就是错误原因（通常是少个逗号或引号）。

### 任务 C（30 分钟，改颜色）

打开 `style.css`，最上面是：

```css
:root{
  --bg:#0b1220;      /* 背景色 */
  --accent:#4f8cff;  /* 进度条颜色 */
  --ok:#2fb37a;      /* "记住了"按钮颜色 */
}
```

把 `#4f8cff` 改成 `#ff5c8a`，保存刷新，进度条就变粉了。

**做完这三个，你就理解了网页编程的三个基本件：结构（HTML）、样式（CSS）、逻辑（JS）。**

---

## 阶段 3 · 放到 GitHub 上，拿到公网链接（30 分钟）

### 3.1 注册 GitHub

<https://github.com> → Sign up。用户名用英文小写，比如 `shixiang-dev`。

### 3.2 新建仓库

右上角 `+` → **New repository**
- Repository name：`wordcard`
- 选 **Public**
- **不要**勾 "Add a README file"
- 点 **Create repository**

### 3.3 上传文件（网页版，最省事，不用敲命令）

在新仓库页面点 **uploading an existing file**，把这 4 个文件拖进去：

```
index.html
style.css
app.js
manifest.json
```

下面 Commit changes 按钮点一下。文件就上去了。

### 3.4 打开 Pages，拿到网址

仓库页面 → **Settings** → 左侧 **Pages**
- Source 选 **Deploy from a branch**
- Branch 选 **main**，目录选 **/ (root)**
- 点 **Save**

等 1–2 分钟，刷新这个页面，顶上会出现：

```
https://你的用户名.github.io/wordcard/
```

**这个链接，别人在任何地方、任何手机上都能打开。** 这就是你的第一个「作品链接」。

### 3.5 更新内容怎么办

改完文件，重新拖上去覆盖，等 1 分钟，刷新页面就是新的。

---

## 阶段 4 · 学会 Git 命令（可选，但建议第 2 周做）

网页拖拽能跑，但真正的开发是这样改代码的。在项目文件夹里依次运行：

```bash
# 只做一次：告诉 git 你是谁
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

# 只做一次：把本地文件夹接到 GitHub 仓库
git init
git remote add origin https://github.com/你的用户名/wordcard.git

# 以后每次改完代码，就这三行
git add .
git commit -m "加了 5 个单词"
git push
```

第一次 `git push` 会要你登录：用户名填 GitHub 用户名，密码位置要填 **Personal Access Token**（不是登录密码）。
生成方法：GitHub → 头像 → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → 勾 `repo` → 生成后复制那串字符。

> 嫌麻烦就先跳过阶段 4，用网页拖拽也能一直更新。等你觉得「每次拖拽好烦」的时候再回来学。

---

## 常见问题

| 现象 | 原因 | 怎么办 |
| --- | --- | --- |
| 手机打不开 `192.168.x.x:8000` | 不在同一 WiFi / 电脑防火墙拦了 | 确认同一 WiFi；系统设置→网络→防火墙，允许 Python 接入 |
| 页面白屏 | JS 报错（多半是逗号、引号） | `F12` → Console 看红字 |
| 改了文件刷新没变化 | 浏览器缓存 | `⌘ Shift R` 强制刷新 |
| Pages 链接 404 | 还没构建完 / 分支选错 | 等 2 分钟；确认分支是 main、目录是 /(root) |
| 手机上字太小 / 布局乱 | 缺 viewport | 检查 `<meta name="viewport" ...>` 那行还在不在 |
| 端口被占用 | 8000 被别的程序用了 | 换成 `python3 -m http.server 8080`，地址改成 `:8080` |

---

## 接下来做什么（等你跑通上面再想）

1. **加一个「随机出题」按钮** —— 练数组和随机数
2. **加「今天学了几个」的日期记录** —— 练日期和 localStorage
3. **把静态词表换成一个网络接口** —— 练 `fetch`（第一次接触"后端"）
4. **接一个 AI 接口，让它给每个词生成例句** —— 到这一步，你就在做"AI 应用"了

一步一步来。**每一小步都要能在手机上看到变化**，看不到变化的步骤就不要做。
