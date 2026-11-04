# 个人网站维护说明

本仓库同时维护 GitHub 个人主页与个人网站。根目录 `README.md` 保留个人介绍，网站首页为 `index.html`。

## 当前版本

首页来自本地 `/Users/xtbreak/Code/personalWeb/preview.html`，包含迁移时未提交的最新修改；样式与交互分别为 `preview.css`、`preview.js`。保留中文与英文切换、作品画廊、背景动画、鼠标交互、文章及联系方式。图片与字体均放在 `assets/`。

旧版页面保留为 `legacy.html`，继续使用 `style.css`、`script.js`。原项目目录不修改。重复的 `github-profile/` 不迁入，个人介绍统一维护于根目录 README。

## 本地预览与检查

在仓库根目录执行：

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

打开 http://127.0.0.1:8000/ 查看新版，打开 http://127.0.0.1:8000/legacy.html 查看旧版。

```sh
node --check preview.js
```

网站为原生静态 HTML、CSS、JavaScript，无需安装依赖或构建。外部项目与文章链接需要网络。

## 发布

- 仓库：https://github.com/Xtbreak/Xtbreak
- 网站：https://xtbreak.github.io/Xtbreak/

首次发布需在 GitHub Pages 中选择 Deploy from a branch，分支为 `main`，目录为 `/ (root)`。启用 Pages 并完成部署前，新网址不会自动生效。后续推送到 `main` 后由 GitHub Pages 发布。

迁移完成前保留原网站仓库；旧网址的跳转与旧仓库处置需在新站验证成功后另行处理。
