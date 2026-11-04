(() => {
  const root = document.documentElement;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ================= 中英文 ================= */
  const dict = {
    zh: {
      title: '徐同博 · AI 产品经理', brand: '徐同博', navWork: '作品', navContact: '联系',
      navWriting: '文章', writingTitle: '文章', writingSub: '写在我的微信公众号，关于 AI 产品、工具和公司。', tp1: 'AI 产品经理', tp2: 'AI 工具', tp3: '知识管理', tp4: '公司研究', read: '阅读',
      role: '徐同博 · AI 产品经理', roleShort: 'AI 产品经理', stWork: '个作品', stWrite: '公众号文章', stLive: '个可在线体验', scrollCue: '向下滚动', tag1: 'CV 硕士 · 安徽理工', tag2: '和 AI 一起写代码', tag3: '自己做到上线', tag4: '公众号写 AI 产品',
      headline: '把 AI 想法，\n做成真正能用的产品。', sub: '计算机视觉硕士 · 安徽理工大学',
      tXy: 'AI 桌面伙伴', tXg: 'AI 产品', tHb: '3D 网页',
      lead: '计算机视觉硕士，想做 AI 产品经理。\n我习惯自己把想法做成能用的东西。',
      ctaWork: '看全部作品', workTitle: '作品',
      kType: '类型', kState: '状态', sOpen: '开源', sPrivate: '私有', sLive: '已上线', sPlay: '可在线玩',
      fLm: '逐字稿洗成笔记', fXy: '会记事的桌面伙伴', fXg: '照片找馆藏', fVr: '调研变成报告', fHb: '40+ 版 3D 旅程', fCc: '校园网自动登录',
      xgTag: 'AI 产品，已上线', xgTitle: '寻馆', xgLine: '拍下展品，找到它在哪个博物馆',
      xyTag: 'macOS AI 伙伴，私有项目', xyTitle: '汐音', xyLine: '记得你，也知道什么时候别打扰你',
      hbTag: '3D 网页，可在线玩', hbTitle: '小黑盒', hbLine: '三世界宇宙旅程，和 AI 一起迭代了 40 多版',
      lmLine: '把课堂逐字稿洗成精简笔记', vrLine: '把调研整理成可以离线阅读的 HTML 报告',
      ccTag: '桌面工具，开源', ccLine: '校园网自动认证，Windows 和 macOS 都能用',
      mhTag: '资源平台，私有项目', mhLine: '视频、歌谱、文章统一管理，按权限和额度访问',
      contactTitle: '一起聊聊 AI 产品', note: '样稿：首屏、作品画廊和联系方式。确认风格后再补齐文章和关于我。',
      cursor: { open: '打开', drag: '拖动', private: '私有项目', mail: '写邮件', view: '查看' },
      flipHint: '翻面看详情', backClose: '再点一下翻回', stackLabel: '技术栈', judgeLabel: '我做的判断',
      lOpenXg: '打开寻馆', lOpenHb: '打开体验', lSkill: 'Skill 说明页', lGuide: '说明页', lCode: '看源码', lPrivate: '私有项目，源码不公开',
      backs: {
        xunguan: { facts: ['“是不是这件”和“现在能不能看到”，拆成两个结论。', '证据不够就显示“暂未确认”，不硬猜。', '失败分四种：主动停止、服务中断、断网、图片不能用，每种给不同的下一步。'], stack: 'Web · Dify 工作流 · 元宝搜索' },
        xiyin: { facts: ['记忆可以查来源、修改、撤销和遗忘；手动改过的内容，自动提取不能覆盖。', '主动消息默认关闭，开不开口由规则决定：免打扰、每日上限、未回应上限。', '判断人在不在，只读键鼠空闲秒数，不读屏幕和剪贴板。'], stack: 'Tauri 2 · React · Rust · SQLite' },
        heybox: { facts: ['从 journey-21 改到 43c，每版只解决一两个具体问题。', '反复纠正 AI 的地方，写成十条铁律。', '封装成 Skill：16 MB 快照、104 个文件校验、22 项浏览器回归。'], stack: 'Three.js · GLB · Claude Code Skill' },
        lecture: { facts: ['只写你点名的主题，不总结整门课。', '听不清的词不悄悄改成确定说法，不补造没讲过的内容。', '落地页能看“原稿、批改、笔记”三步，还能在线跑语气校验。'], stack: 'Agent Skill · Python 校验脚本 · SVG' },
        report: { facts: ['研究在前，技术选型和实施建议在后。', '只用 Python 标准库，输出能离线阅读的 HTML 和一份 Markdown。', '推荐方案和已经验证的结果分开写。'], stack: 'Codex Skill · Python' },
        campus: { facts: ['先判断校园网认证，再检查外网，外网不通时不重复登录。', '密码存在系统钥匙串或 Windows DPAPI 里。', '支持电信、移动、联通，Windows 还适配 AUST_Student 无线。'], stack: 'Python · Tkinter · Windows / macOS' },
        media: { facts: ['视频、歌谱、文章、公告和首页横幅统一管理。', '按用户权限和每周下载额度控制访问。', '配套视频导入、时长更新和缩略图生成工具。'], stack: '本地媒体资源平台' }
      },
    },
    en: {
      title: 'Tongbo Xu · AI Product Manager', brand: 'Tongbo Xu', navWork: 'Work', navContact: 'Contact',
      navWriting: 'Writing', writingTitle: 'Writing', writingSub: 'On my WeChat account: AI products, tools and companies. Articles are in Chinese.', tp1: 'AI product', tp2: 'AI tools', tp3: 'Knowledge', tp4: 'Company research', read: 'Read',
      role: 'Tongbo Xu · AI Product Manager', roleShort: 'AI Product Manager', stWork: 'projects', stWrite: 'articles', stLive: 'live to try', scrollCue: 'Scroll', tag1: 'CV master\'s · AUST', tag2: 'Codes with AI', tag3: 'Ships it myself', tag4: 'Writes on AI products',
      headline: 'Turning AI ideas into\nproducts people actually use.', sub: 'Computer vision master\'s · AUST',
      tXy: 'AI companion', tXg: 'AI product', tHb: '3D web',
      lead: 'Master\'s in computer vision, moving into AI product.\nI turn ideas into things people can actually use.',
      ctaWork: 'See all work', workTitle: 'Work',
      kType: 'Type', kState: 'Status', sOpen: 'Open source', sPrivate: 'Private', sLive: 'Live', sPlay: 'Playable',
      fLm: 'Transcripts to notes', fXy: 'A desktop pal that remembers', fXg: 'Photo to museum', fVr: 'Research to report', fHb: '40+ builds in 3D', fCc: 'Campus Wi‑Fi autologin',
      xgTag: 'AI product, live', xgTitle: 'Xunguan', xgLine: 'Snap an artwork, find the museum that holds it',
      xyTag: 'macOS AI companion, private', xyTitle: 'Xiyin', xyLine: 'Remembers you, and knows when not to interrupt',
      hbTag: '3D web, playable', hbTitle: 'Heybox', hbLine: 'A three-world 3D journey, iterated 40+ times with AI',
      lmLine: 'Turns lecture transcripts into clean study notes', vrLine: 'Turns research into offline HTML reports',
      ccTag: 'Desktop tool, open source', ccLine: 'Auto login for the campus network, on Windows and macOS',
      mhTag: 'Media platform, private', mhLine: 'Videos, sheet music and articles, with permissions and quotas',
      contactTitle: 'Let\'s talk AI products', note: 'Draft: hero, work gallery and contact. Writing and About come next.',
      cursor: { open: 'Open', drag: 'Drag', private: 'Private', mail: 'Email', view: 'View' },
      flipHint: 'Flip for details', backClose: 'Tap again to flip back', stackLabel: 'Stack', judgeLabel: 'Calls I made',
      lOpenXg: 'Open Xunguan', lOpenHb: 'Open the journey', lSkill: 'Skill page', lGuide: 'Guide', lCode: 'Source', lPrivate: 'Private project, source not public',
      backs: {
        xunguan: { facts: ['"Is it this piece" and "can I see it now" are two separate answers.', 'Without enough evidence it says "not confirmed yet" instead of guessing.', 'Four kinds of failure (stopped, service down, offline, bad image), each with its own next step.'], stack: 'Web · Dify workflow · Yuanbao search' },
        xiyin: { facts: ['Memories show their source and can be edited, undone or forgotten; manual edits beat auto-extraction.', 'Proactive messages are off by default; rules decide: quiet hours, daily cap, unanswered cap.', 'To tell if you are there it only reads idle seconds, never the screen or clipboard.'], stack: 'Tauri 2 · React · Rust · SQLite' },
        heybox: { facts: ['From journey-21 to 43c, each build fixes one or two specific things.', 'Every repeated correction to the AI became one of ten rules.', 'Packaged as a Skill: a 16 MB snapshot, 104 files verified, 22 browser checks.'], stack: 'Three.js · GLB · Claude Code Skill' },
        lecture: { facts: ['Writes only the topics you name, not a summary of the whole course.', 'Unclear words are never quietly turned into certain ones; nothing is invented.', 'The landing page shows draft, edits and notes, with a live tone check.'], stack: 'Agent Skill · Python checker · SVG' },
        report: { facts: ['Research first, then the technical choice and the plan.', 'Python standard library only; outputs offline HTML plus Markdown.', 'Recommendations and verified results are written apart.'], stack: 'Codex Skill · Python' },
        campus: { facts: ['Checks campus login first, then the internet, and never logs in twice.', 'Passwords live in the system keychain or Windows DPAPI.', 'Works with all three carriers; on Windows it also handles AUST_Student Wi-Fi.'], stack: 'Python · Tkinter · Windows / macOS' },
        media: { facts: ['Videos, sheet music, articles, notices and banners in one place.', 'Access controlled by user permissions and weekly download quotas.', 'Tools for importing videos, updating durations and making thumbnails.'], stack: 'Local media platform' }
      },
    }
  };
  const nodes = document.querySelectorAll('[data-i18n]');
  const langButtons = document.querySelectorAll('[data-set-lang]');
  const lang = () => (root.dataset.lang === 'en' ? 'en' : 'zh');
  let onLangChange = () => {};

  function applyLang(l) {
    const d = dict[l];
    nodes.forEach((n) => { n.textContent = d[n.dataset.i18n]; });
    document.title = d.title;
    root.dataset.lang = l;
    root.lang = l === 'en' ? 'en' : 'zh-CN';
    langButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setLang === l)));
    try { localStorage.setItem('lang', l); } catch (e) {}
    if (backsReady) renderBacks();
  }
  var backsReady = false;
  langButtons.forEach((b) => b.addEventListener('click', () => {
    const l = b.dataset.setLang;
    if (l === lang()) return;
    onLangChange(l);
    if (calm) { applyLang(l); return; }
    document.body.classList.add('is-switching');
    setTimeout(() => { applyLang(l); requestAnimationFrame(() => document.body.classList.remove('is-switching')); }, 300);
  }));
  applyLang(lang());

  /* 滚动后顶栏加磨砂底，避免压在内容上 */
  const bar = document.querySelector('.bar');
  const onBar = () => bar.classList.toggle('is-scrolled', scrollY > 24);
  addEventListener('scroll', onBar, { passive: true }); onBar();

  /* ================= 指针 ================= */
  // 背景色调：跟着作品转盘里正对的那张变
  const tint = { r: .498, g: .706, b: .910 }, tintTo = { r: .498, g: .706, b: .910 };
  const pointer = { x: innerWidth * 0.5, y: innerHeight * 0.45, px: 0, py: 0, vx: 0, vy: 0, inside: false };
  addEventListener('pointermove', (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.inside = true; }, { passive: true });
  root.addEventListener('pointerleave', () => { pointer.inside = false; });

  /* ================= 光标与磁吸 ================= */
  const cursor = document.querySelector('.cursor');
  const cDot = cursor.querySelector('.cursor-dot');
  const cRing = cursor.querySelector('.cursor-ring');
  const cLabel = cursor.querySelector('.cursor-label');
  const ring = { x: pointer.x, y: pointer.y };
  if (fine && !calm) {
    // 使用系统默认光标（不再启用自定义光标）
    document.addEventListener('pointerover', (e) => {
      let key = null;
      const card = e.target.closest('.card');
      if (e.target.closest('.gcard')) key = 'view';
      else if (card) key = card.tagName === 'A' ? 'open' : 'private';
      else if (e.target.closest('.mail')) key = 'mail';
      else if (e.target.closest('.gallery-sticky')) key = 'drag';
      cursor.classList.toggle('is-label', !!key);
      cursor.classList.toggle('is-link', !key && !!e.target.closest('a, button'));
      if (key) cLabel.textContent = dict[lang()].cursor[key];
    });
    root.addEventListener('pointerleave', () => cursor.classList.add('is-hidden'));
    root.addEventListener('pointerenter', () => cursor.classList.remove('is-hidden'));
    addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    addEventListener('pointerup', () => cursor.classList.remove('is-down'));

    document.querySelectorAll('.magnetic, .lang').forEach((el) => {
      const base = el.classList.contains('pill') ? 'translateX(-50%) ' : '';
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `${base}translate(${((e.clientX - r.left) / r.width - 0.5) * 16}px, ${((e.clientY - r.top) / r.height - 0.5) * 12}px)`;
      });
      el.addEventListener('pointerleave', () => {
        el.style.transition = 'transform .6s cubic-bezier(.2,.7,.2,1)'; el.style.transform = '';
        setTimeout(() => { el.style.transition = ''; }, 600);
      });
    });
  }

  /* ================= 首屏扇形卡片 ================= */
  const fan = document.querySelector('.fan');
  const gcards = [...fan.querySelectorAll('.gcard')];
  const N = gcards.length, mid = (N - 1) / 2;
  let hoverIndex = -1, stacked = !calm;

  const heroLeft = document.querySelector('.hero-left');
  // 桌面端：量出左栏文字实际占到哪，卡片只在右边剩下的空间里排，放不下就缩小，保证不挡字
  function fitFan() {
    gcards.forEach((c) => c.style.removeProperty('--w'));
    fan.style.removeProperty('left');
    if (innerWidth < 760) return;
    let right = 0;
    heroLeft.querySelectorAll('.hero-id, .hero-title, .hero-lead, .tags li, .hero-actions > *').forEach((el) => { right = Math.max(right, el.getBoundingClientRect().right); });
    const ratio = innerWidth < 1180 ? 0.6 : 0.72;
    const gapL = 56, edgeR = innerWidth * 0.04;
    const avail = innerWidth - edgeR - (right + gapL);
    const cssW = gcards[0].offsetWidth;
    // 两侧卡片的倾斜、跟随鼠标和悬停外推大约再占 60px
    const w = Math.max(150, Math.min(cssW, (avail - 60) / (1 + 2 * ratio)));
    gcards.forEach((c) => c.style.setProperty('--w', `${w}px`));
    fan.style.left = `${right + gapL + avail / 2}px`;
  }
  addEventListener('resize', () => { fitFan(); layoutFan(); });
  if (document.fonts) document.fonts.ready.then(() => { fitFan(); layoutFan(); });
  fitFan();
  if ('ResizeObserver' in window) { const ro = new ResizeObserver(() => { fitFan(); layoutFan(); }); heroLeft.querySelectorAll('.hero-title, .tags').forEach((el) => ro.observe(el)); }

  function layoutFan() {
    const w = gcards[0].offsetWidth;
    const spread = innerWidth < 760 ? w * 0.62 : innerWidth < 1180 ? w * 0.6 : w * 0.72;
    const mx = (pointer.x / innerWidth - 0.5) * 2; // -1 … 1
    const focus = hoverIndex >= 0 ? hoverIndex : Math.round(mid);
    gcards.forEach((c, i) => {
      const d = i - mid;
      let x = d * spread, y = Math.abs(d) * 16, r = d * 4, s = 1;
      if (stacked) { x = d * 8; y = 70; r = d * 1.5; s = 0.94; }
      else {
        if (fine && !calm) { x += mx * (10 + Math.abs(d) * 8); r += mx * 1.5; }
        if (i === focus) { s = 1.06; r *= 0.3; y -= hoverIndex >= 0 ? 10 : 0; }
        else if (hoverIndex >= 0) { x += Math.sign(i - focus) * 20; }
      }
      c.classList.toggle('is-focus', !stacked && i === focus);
      c.classList.toggle('is-dim', !stacked && i !== focus);
      c.style.setProperty('--x', `${x}px`);
      c.style.setProperty('--y', `${y - c.offsetHeight / 2}px`);
      c.style.setProperty('--r', `${r}deg`);
      c.style.setProperty('--s', s);
      c.style.zIndex = i === focus ? 20 : 10 - Math.round(Math.abs(d));
    });
  }

  /* ================= 作品转盘：3D 弧形，自动循环，可拖动 ================= */
  const gallery = document.querySelector('.gallery');
  const viewport = gallery.querySelector('.gallery-sticky');
  const track = gallery.querySelector('.track');
  const cards = [...track.querySelectorAll('.card')];
  const N_CARDS = cards.length;
  const counterNow = gallery.querySelector('.counter-now');
  const dotsWrap = gallery.querySelector('.dots');
  const INTERVAL = 3500; // 每张停留时间
  let pos = 0, target = 0, vel = 0, hovering = false, focusing = false, holdUntil = 0, lastT = performance.now(), timerStart = performance.now();
  const mod = (n, m) => ((n % m) + m) % m;
  const frontIndex = () => mod(Math.round(pos), N_CARDS);

  // 圆点导航
  const dots = cards.map((c, i) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'dot';
    b.setAttribute('aria-label', (c.querySelector('h3') || {}).textContent || `${i + 1}`);
    b.innerHTML = '<i></i>';
    b.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });

  // 卡片背面：翻过来看这个作品的判断、技术栈和链接
  const LINKS = {
    xunguan: [['lOpenXg', 'https://xunguan.vercel.app']],
    heybox: [['lOpenHb', 'https://xtbreak.github.io/heybox-universe/'], ['lSkill', 'https://xtbreak.github.io/heybox-universe-skill/'], ['lCode', 'https://github.com/Xtbreak/heybox-universe']],
    lecture: [['lGuide', 'https://xtbreak.github.io/lecture-manuscript/'], ['lCode', 'https://github.com/Xtbreak/lecture-manuscript']],
    report: [['lCode', 'https://github.com/Xtbreak/visual-research-report-skill']],
    campus: [['lCode', 'https://github.com/Xtbreak/CampusConnect']],
    xiyin: [], media: []
  };
  const esc = (s) => s.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  cards.forEach((c) => {
    c.setAttribute('aria-expanded', 'false');
    const back = document.createElement('div'); back.className = 'card-back'; c.appendChild(back);
    const hint = document.createElement('span'); hint.className = 'card-hint'; hint.setAttribute('aria-hidden', 'true'); c.appendChild(hint);
    const glare = document.createElement('span'); glare.className = 'card-glare'; glare.setAttribute('aria-hidden', 'true'); c.appendChild(glare);
    c._flip = 0; c._tx = 0; c._ty = 0;
  });
  function renderBacks() {
    const d = dict[lang()];
    cards.forEach((c) => {
      const key = c.dataset.key, info = d.backs[key];
      const title = c.querySelector('h3').textContent;
      const links = (LINKS[key] || []).map(([k, url]) => `<a class="cb-link" href="${url}" target="_blank" rel="noopener noreferrer">${esc(d[k])} ↗</a>`).join('');
      c.querySelector('.card-back').innerHTML =
        `<p class="cb-label">${esc(d.judgeLabel)}</p><h3 class="cb-title">${esc(title)}</h3>` +
        `<ul class="cb-facts">${info.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>` +
        `<p class="cb-stack"><span>${esc(d.stackLabel)}</span>${esc(info.stack)}</p>` +
        `<div class="cb-links">${links || `<span class="cb-private">${esc(d.lPrivate)}</span>`}<button type="button" class="cb-close">${esc(d.backClose)}</button></div>`;
      c.querySelector('.card-hint').textContent = d.flipHint;
    });
    fitBacks();
  }
  // 背面内容放不下时逐步缩小排版（最多到 0.72），不出现滚动条
  function fitBacks() {
    cards.forEach((c) => {
      const b = c.querySelector('.card-back');
      let k = 1; b.style.setProperty('--k', k);
      while (b.scrollHeight > b.clientHeight + 1 && k > 0.72) { k -= 0.04; b.style.setProperty('--k', k.toFixed(2)); }
    });
  }
  addEventListener('resize', fitBacks);
  if (document.fonts) document.fonts.ready.then(fitBacks);
  renderBacks(); backsReady = true;
  let flipped = -1;
  function setFlip(i) {
    flipped = i;
    cards.forEach((c, k) => {
      const on = k === i;
      c.classList.toggle('is-flipped', on);
      c.setAttribute('aria-expanded', String(on));
      c.querySelector('.card-back').inert = !on;
    });
  }
  setFlip(-1);
  const hexToRgb = (hex) => { const m = hex.trim().replace('#', ''); return { r: parseInt(m.slice(0, 2), 16) / 255, g: parseInt(m.slice(2, 4), 16) / 255, b: parseInt(m.slice(4, 6), 16) / 255 }; };
  const edgeOf = cards.map((c) => hexToRgb(getComputedStyle(c).getPropertyValue('--edge') || '#5CC8F0'));
  const mirrorImg = gallery.querySelector('.mirror img');
  const floor = gallery.querySelector('.floor');
  let mirrorFor = -1;
  // 正中那张跟着鼠标倾斜，表面高光跟着走
  track.addEventListener('pointermove', (e) => {
    const c = e.target.closest('.card');
    if (!c || !c.classList.contains('is-front') || e.pointerType !== 'mouse') return;
    const r = c.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
    c._txTo = (0.5 - py) * 10; c._tyTo = (px - 0.5) * 12;
    c.style.setProperty('--gx', `${px * 100}%`); c.style.setProperty('--gy', `${py * 100}%`);
    c.classList.add('is-hot');
  });
  track.addEventListener('pointerleave', () => cards.forEach((c) => { c._txTo = 0; c._tyTo = 0; c.classList.remove('is-hot'); }));

  function goTo(i, hold = 4000) {
    // 走最近的方向
    const cur = mod(target, N_CARDS);
    let delta = i - cur;
    if (delta > N_CARDS / 2) delta -= N_CARDS;
    if (delta < -N_CARDS / 2) delta += N_CARDS;
    target += delta;
    if (delta !== 0) setFlip(-1);
    holdUntil = performance.now() + hold;
    timerStart = holdUntil;
  }
  function scrollToCard(c) {
    gallery.scrollIntoView({ behavior: calm ? 'instant' : 'smooth', block: 'start' });
    goTo(cards.indexOf(c), 5000);
  }

  gcards.forEach((c, i) => {
    c.addEventListener('pointerenter', () => { hoverIndex = i; layoutFan(); });
    c.addEventListener('pointerleave', () => { hoverIndex = -1; layoutFan(); });
    c.addEventListener('focus', () => { hoverIndex = i; layoutFan(); });
    c.addEventListener('blur', () => { hoverIndex = -1; layoutFan(); });
    c.addEventListener('pointermove', (e) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty('--shine', `${((e.clientX - r.left) / r.width - 0.5) * 120}%`);
    });
    c.addEventListener('click', (e) => {
      const target = document.querySelector(c.getAttribute('href'));
      if (target) { e.preventDefault(); scrollToCard(target); }
    });
  });
  layoutFan();
  // 载入后一叠卡片展开：全站唯一的一次自动动画
  setTimeout(() => {
    gcards.forEach((c, i) => { c.style.transitionDelay = `${Math.abs(i - mid) * 0.06}s`; });
    stacked = false; layoutFan();
    setTimeout(() => gcards.forEach((c) => { c.style.transitionDelay = '0s'; }), 1000);
  }, 450);
  addEventListener('resize', layoutFan);
  let fanRaf = 0;
  addEventListener('pointermove', () => {
    if (fanRaf || !fine || calm || stacked) return;
    fanRaf = requestAnimationFrame(() => { fanRaf = 0; if (scrollY < innerHeight) layoutFan(); });
  }, { passive: true });

  // 拖动：转动转盘；手指竖着滑时仍然是正常滚动页面
  let drag = null, moved = false;
  const spacing = () => cards[0].offsetWidth * (innerWidth < 760 ? 0.78 : 0.9);
  // U 字槽位：d 为离正中的距离（可以是小数）
  const slotX = (d, sp) => Math.sign(d) * (Math.abs(d) < 1 ? Math.abs(d) : 1 + (Math.abs(d) - 1) * 0.9) * sp;
  const slotY = (d) => -Math.pow(Math.abs(d), 2) * (innerWidth < 760 ? 28 : 44);
  const slotZ = (d) => -Math.abs(d) * (innerWidth < 760 ? 70 : 90);
  const slotS = (d) => 1 - Math.min(Math.abs(d), 3) * 0.07;
  // 卡片底下的 U 形轨道
  const rail = gallery.querySelector('.rail');
  const railPath = rail.querySelector('.rail-path');
  const railGlow = rail.querySelector('.rail-glow');
  const railDot = rail.querySelector('.rail-dot');
  const PERSP = 1800;
  function railPoint(d) {
    const sp = spacing();
    const H = cards[0].offsetHeight;
    const cx = track.offsetLeft + track.offsetWidth / 2;
    const top = track.offsetTop;
    const oy = top + track.offsetHeight * 0.2;
    const k = PERSP / (PERSP - slotZ(d));
    const px = cx + slotX(d, sp) * k;
    const py = oy + (top + H / 2 + slotY(d) + (H / 2) * slotS(d) - oy) * k;
    return [px, py + 22];
  }
  function drawRail() {
    let p = '';
    for (let d = -3.4; d <= 3.401; d += 0.1) { const [x, y] = railPoint(d); p += `${p ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`; }
    railPath.setAttribute('d', p); railGlow.setAttribute('d', p);
  }
  drawRail();
  addEventListener('resize', drawRail);
  addEventListener('load', drawRail);
  viewport.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    drag = { x: e.clientX, y: e.clientY, last: e.clientX, t: performance.now(), id: e.pointerId, axis: null, v: 0 };
    moved = false;
  });
  addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (!drag.axis && Math.hypot(dx, dy) > 6) {
      drag.axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
      if (drag.axis === 'x') { moved = true; viewport.classList.add('is-dragging'); try { viewport.setPointerCapture(e.pointerId); } catch (err) {} }
    }
    if (drag.axis !== 'x') return;
    const now = performance.now();
    const step = (e.clientX - drag.last) / spacing();
    pos -= step; target = pos; vel = 0;
    drag.v = -step / Math.max(1, now - drag.t);
    drag.last = e.clientX; drag.t = now;
  });
  const endDrag = () => {
    if (!drag) return;
    if (drag.axis === 'x') { target = Math.round(pos + drag.v * 260); holdUntil = performance.now() + 3000; timerStart = holdUntil; }
    drag = null; viewport.classList.remove('is-dragging');
  };
  addEventListener('pointerup', endDrag);
  addEventListener('pointercancel', endDrag);
  // 点两侧的卡：先把它转到中间；点中间那张才打开
  track.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; return; }
    const c = e.target.closest('.card');
    if (!c) return;
    const i = cards.indexOf(c);
    if (i !== frontIndex()) { e.preventDefault(); e.stopPropagation(); goTo(i); return; }
    if (e.target.closest('.cb-link')) return; // 背面的链接照常打开
    e.preventDefault();
    if (flipped === i) setFlip(-1); // 背面任意处再点一次就翻回
    else setFlip(i);
  }, true);
  track.addEventListener('dragstart', (e) => e.preventDefault());
  let wheelAcc = 0;
  viewport.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault(); wheelAcc += e.deltaX;
    if (Math.abs(wheelAcc) > 60) { goTo(mod(Math.round(target) + Math.sign(wheelAcc), N_CARDS), 3000); wheelAcc = 0; }
  }, { passive: false });
  viewport.setAttribute('tabindex', '0');
  viewport.setAttribute('aria-roledescription', 'carousel');
  viewport.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && flipped >= 0) { setFlip(-1); return; }
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card') && !e.target.closest('.cb-link')) { e.preventDefault(); const i = cards.indexOf(e.target); if (i === frontIndex()) setFlip(flipped === i ? -1 : i); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(mod(Math.round(target) + 1, N_CARDS)); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(mod(Math.round(target) - 1, N_CARDS)); }
  });
  viewport.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hovering = true; });
  viewport.addEventListener('pointerleave', () => { hovering = false; timerStart = performance.now(); });
  cards.forEach((c, i) => {
    c.addEventListener('focus', () => { focusing = true; goTo(i); });
    c.addEventListener('blur', () => { focusing = false; });
  });

  function updateGallery() {
    const now = performance.now();
    const dt = Math.min(48, now - lastT); lastT = now;
    const paused = calm || drag || hovering || focusing || flipped >= 0 || now < holdUntil;
    let progress = paused ? 0 : (now - timerStart) / INTERVAL;
    if (!paused && progress >= 1) { target = Math.round(target) + 1; timerStart = now; progress = 0; }
    if (hovering || focusing || drag || flipped >= 0) timerStart = now;
    // 带弹性的转动：弹簧 + 阻尼
    if (!drag) {
      if (calm) { pos = target; vel = 0; }
      else {
        const k = 0.00011, c = 0.022;
        const steps = Math.ceil(dt / 8);
        for (let s = 0; s < steps; s++) {
          const h = dt / steps;
          vel += ((target - pos) * k - vel * c) * h;
          pos += vel * h;
        }
      }
    }
    const narrow = innerWidth < 760;
    const sp = spacing();
    const front = frontIndex();
    cards.forEach((card, i) => {
      let d = i - pos;
      d = mod(d + N_CARDS / 2, N_CARDS) - N_CARDS / 2;
      const a = Math.abs(d);
      // 正视呈 U 字：越往两侧越往上翘、往外展开，并沿弧线倾斜
      const x = slotX(d, sp), y = slotY(d), z = slotZ(d), s = slotS(d);
      const ry = 0, rz = 0; // 卡片保持正立，不随弧线倾斜
      const fTo = card.classList.contains('is-flipped') ? 1 : 0;
      card._flip += (fTo - card._flip) * (calm ? 1 : Math.min(1, dt * 0.012));
      const isFront = i === front;
      card._tx += ((isFront ? card._txTo || 0 : 0) - card._tx) * 0.12;
      card._ty += ((isFront ? card._tyTo || 0 : 0) - card._ty) * 0.12;
      card.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rz}deg) rotateY(${ry + card._flip * 180}deg) rotateX(${card._tx}deg) rotateY(${card._ty * (1 - 2 * Math.round(card._flip))}deg) scale(${s})`;
      card.style.opacity = a > 3.1 ? 0 : 1 - Math.max(0, a - 2.2) * 1.1;
      // 景深：越往两侧越模糊（正中那张不加滤镜，保证翻面的 3D 效果）
      card.style.filter = !calm && a > 0.35 ? `blur(${Math.min(2.6, (a - 0.35) * 1.4).toFixed(2)}px)` : '';
      card.style.zIndex = String(100 - Math.round(a * 10));
      card.style.setProperty('--dim', Math.min(0.62, a * 0.24).toFixed(3));
      card.style.setProperty('--shift', `${calm ? 0 : -d * 40}px`);
      card.style.pointerEvents = a > 2.6 ? 'none' : '';
      card.classList.toggle('is-front', i === front);
      card.setAttribute('aria-hidden', a > 2.6 ? 'true' : 'false');
    });
    if (mirrorFor !== front) {
      mirrorFor = front;
      const im = cards[front].querySelector('.card-media img');
      floor.classList.toggle('no-img', !im);
      if (im) mirrorImg.src = im.getAttribute('src');
      floor.style.setProperty('--edge', getComputedStyle(cards[front]).getPropertyValue('--edge'));
    }
    const gr = gallery.getBoundingClientRect();
    const inView = gr.top < innerHeight * 0.55 && gr.bottom > innerHeight * 0.45;
    const tt = inView ? edgeOf[front] : { r: .498, g: .706, b: .910 };
    tintTo.r = tt.r; tintTo.g = tt.g; tintTo.b = tt.b;
    { const [rx, ry2] = railPoint(Math.max(0, Math.min(1, progress)));
      railDot.setAttribute('cx', rx.toFixed(1)); railDot.setAttribute('cy', ry2.toFixed(1));
      railDot.style.opacity = progress > 0.01 ? 1 : 0.35; }
    counterNow.textContent = String(front + 1).padStart(2, '0');
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-on', i === front);
      dot.setAttribute('aria-current', i === front ? 'true' : 'false');
      dot.style.setProperty('--p', i === front ? Math.max(0, Math.min(1, progress)).toFixed(3) : 0);
    });
  }

  /* ================= WebGL：彩色光晕 + 液态描边名字 ================= */
  const canvas = document.querySelector('.gl');
  const gl = canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false, alpha: false });
  let glTick = () => {};

  if (gl) {
    root.classList.add('gl-on');
    const VS = 'attribute vec2 p; varying vec2 vUv; void main(){ vUv = p*0.5+0.5; gl_Position = vec4(p,0.,1.); }';

    // 流场：记录鼠标划过的速度，逐帧衰减
    const FLOW = `precision highp float; varying vec2 vUv;
      uniform sampler2D tPrev; uniform vec2 uMouse, uVel; uniform float uAspect, uDecay;
      void main(){
        vec4 prev = texture2D(tPrev, vUv);
        vec2 v = (prev.rg - 0.5) * 2.0 * uDecay;
        float m = prev.b * (uDecay * 0.985);
        vec2 d = vUv - uMouse; d.x *= uAspect;
        float s = smoothstep(0.16, 0.0, length(d));
        v += uVel * s;
        m += min(length(uVel) * 6.0, 1.0) * s;
        gl_FragColor = vec4(clamp(v*0.5+0.5, 0., 1.), clamp(m, 0., 1.), 1.);
      }`;

    // 画面：浅灰底上漂浮的彩色光晕 + 描边名字，被鼠标搅动的地方变成实心
    const MAIN = `precision highp float; varying vec2 vUv;
      uniform sampler2D tFlow, tA, tB; uniform float uTime, uMix, uAspect, uFade, uLift; uniform vec3 uTint;
      vec3 bg=vec3(.043,.059,.090), bg2=vec3(.075,.098,.145), ink=vec3(.910,.925,.953),
           pink=vec3(.949,.482,.722), violet=vec3(.612,.596,1.), aqua=vec3(.361,.784,.941), lime=vec3(.498,.878,.541), lemon=vec3(.776,.800,.839);
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
        return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float fbm(vec2 p){ float v = 0., k = .5; for (int i = 0; i < 4; i++){ v += k * n(p); p = p * 2.03 + vec2(1.7, 9.2); k *= .5; } return v; }
      float blob(vec2 q, vec2 c, float r){ return exp(-dot(q-c, q-c) / (r*r)); }
      vec4 txt(vec2 uv){ float nz = n(uv*vec2(uAspect,1.)*9.)*.8+.1; return mix(texture2D(tA, uv), texture2D(tB, uv), smoothstep(nz-.18, nz+.18, uMix)); }
      void main(){
        vec4 f = texture2D(tFlow, vUv);
        vec2 flow = (f.rg - 0.5) * 2.0; float mag = f.b;
        float t = uTime;
        vec2 q = (vUv - flow * 0.08) * vec2(uAspect, 1.);
        float A = uAspect;
        vec3 col = bg;
        // 上方略亮、下方更深的整体明暗
        col = mix(col, bg2, smoothstep(.1, .95, vUv.y) * .7);
        // 极光雾层：两条被噪声扭动的光带，缓慢流动
        float fx = q.x * 1.3;
        float w1 = fbm(vec2(fx * .8 + t * .03, t * .02));
        float w2 = fbm(vec2(fx * .6 - t * .025, 3.1 + t * .015));
        float b1 = exp(-pow((vUv.y - (.64 + .10 * sin(fx * 1.7 + t * .09) + (w1 - .5) * .22)) / .085, 2.));
        float b2 = exp(-pow((vUv.y - (.44 + .08 * sin(fx * 1.2 - t * .07 + 1.3) + (w2 - .5) * .2)) / .07, 2.));
        float veil1 = b1 * (.55 + .45 * fbm(vec2(fx * 3. - t * .05, vUv.y * 6.)));
        float veil2 = b2 * (.55 + .45 * fbm(vec2(fx * 3.4 + t * .04, vUv.y * 7. + 2.)));
        vec3 c1 = uTint * .85, c2 = uTint;
        col = mix(col, c1 * .55 + bg * .45, veil1 * .42);
        col = mix(col, c2 * .5 + bg * .5, veil2 * .38);
        // 卡片后方的同色柔光
        col = mix(col, uTint, blob(q, vec2(A*.36, .28), .22) * .1);
        col = mix(col, mix(aqua, uTint, .85), blob(q, vec2(A*.50, .24), .26) * .22);
        col = mix(col, uTint, blob(q, vec2(A*.64, .28), .2) * .1);
        // 暗角
        vec2 vc = (vUv - .5) * vec2(A * .85, 1.);
        col *= mix(.62, 1., smoothstep(1.05, .2, length(vc)));
        vec2 tu = vUv - flow * 0.035 + vec2(0., uLift);
        float T = txt(tu).r;
        col = mix(col, ink, T * uFade);
        col += (h(vUv * 900. + t) - .5) * .028;
        gl_FragColor = vec4(col, 1.);
      }`;

    const compile = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
    const program = (fs) => { const p = gl.createProgram(); gl.attachShader(p, compile(gl.VERTEX_SHADER, VS)); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, fs));
      gl.bindAttribLocation(p, 0, 'p'); gl.linkProgram(p); return p; };
    const pFlow = program(FLOW), pMain = program(MAIN);
    const U = (p, names) => Object.fromEntries(names.map((k) => [k, gl.getUniformLocation(p, k)]));
    const uF = U(pFlow, ['tPrev', 'uMouse', 'uVel', 'uAspect', 'uDecay']);
    const uM = U(pMain, ['tFlow', 'tA', 'tB', 'uTime', 'uMix', 'uAspect', 'uFade', 'uLift', 'uTint']);

    const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const makeTex = (w, h, data) => { const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, data || null); return t; };
    const FS = 128;
    const seed = new Uint8Array(FS * FS * 4);
    for (let i = 0; i < seed.length; i += 4) { seed[i] = 128; seed[i + 1] = 128; seed[i + 2] = 0; seed[i + 3] = 255; }
    const flows = [0, 1].map(() => { const tex = makeTex(FS, FS, seed); const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0); return { tex, fb }; });
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    // 名字纹理：R 写实心，G 写描边
    const tc = document.createElement('canvas');
    const tctx = tc.getContext('2d');
    const texA = makeTex(1, 1), texB = makeTex(1, 1);
    let mixV = 1, currentName = dict[lang()].headline, dpr = 1;

    const titleEl = document.querySelector('.hero-title');
    function drawName(text, l) {
      const w = tc.width, h = tc.height;
      tctx.fillStyle = '#000'; tctx.fillRect(0, 0, w, h);
      // 读取 DOM 标题的实际位置和字号，保证与无 WebGL 时的排版一致
      const cs = getComputedStyle(titleEl);
      const enCls = root.dataset.lang;
      root.dataset.lang = l; // 临时切换以读取对应语言的字号
      const fs = parseFloat(getComputedStyle(titleEl).fontSize);
      const lh = parseFloat(getComputedStyle(titleEl).lineHeight) || fs * 1.15;
      const ls = parseFloat(getComputedStyle(titleEl).letterSpacing) || 0;
      root.dataset.lang = enCls;
      const tr = titleEl.getBoundingClientRect(), top = tr.top + scrollY, left = tr.left;
      const size = fs * dpr;
      tctx.font = l === 'en' ? `700 ${size}px "Red Hat Display"` : `600 ${size}px "Noto Sans SC"`;
      if ('letterSpacing' in tctx) tctx.letterSpacing = `${ls * dpr}px`;
      tctx.textAlign = 'left'; tctx.textBaseline = 'middle';
      tctx.fillStyle = 'rgb(255,0,0)';
      text.split('\n').forEach((line, i) => {
        tctx.fillText(line, left * dpr, (top + lh * (i + 0.5)) * dpr + size * 0.04);
      });
      void cs;
    }
    function uploadName(tex, text, l) {
      drawName(text, l);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tc);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    }
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 1.75);
      canvas.width = Math.round(innerWidth * dpr); canvas.height = Math.round(innerHeight * dpr);
      tc.width = canvas.width; tc.height = canvas.height;
      uploadName(texA, currentName, lang()); uploadName(texB, currentName, lang()); mixV = 1;
    }
    resize();
    Promise.all([document.fonts.load('600 100px "Noto Sans SC"', dict.zh.headline), document.fonts.load('700 100px "Red Hat Display"', 'Turning')]).finally(resize);
    addEventListener('resize', resize);

    onLangChange = (l) => {
      uploadName(texA, currentName, root.dataset.lang);
      currentName = dict[l].headline;
      uploadName(texB, currentName, l);
      mixV = calm ? 1 : 0;
    };

    let flowIndex = 0;
    const start = performance.now();
    glTick = () => {
      const aspect = innerWidth / innerHeight;
      const mx = pointer.x / innerWidth, my = 1 - pointer.y / innerHeight;
      const dx = mx - (pointer.px || mx), dy = my - (pointer.py || my);
      pointer.px = mx; pointer.py = my;
      pointer.vx += (dx * 9 - pointer.vx) * 0.5; pointer.vy += (dy * 9 - pointer.vy) * 0.5;
      if (calm || !pointer.inside) { pointer.vx = 0; pointer.vy = 0; }

      const src = flows[flowIndex], dst = flows[1 - flowIndex];
      gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fb); gl.viewport(0, 0, FS, FS);
      gl.useProgram(pFlow);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, src.tex); gl.uniform1i(uF.tPrev, 0);
      gl.uniform2f(uF.uMouse, mx, my); gl.uniform2f(uF.uVel, pointer.vx, pointer.vy);
      gl.uniform1f(uF.uAspect, aspect); gl.uniform1f(uF.uDecay, 0.965);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      flowIndex = 1 - flowIndex;

      mixV += (1 - mixV) * 0.06;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(pMain);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, dst.tex); gl.uniform1i(uM.tFlow, 0);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, texA); gl.uniform1i(uM.tA, 1);
      gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, texB); gl.uniform1i(uM.tB, 2);
      gl.uniform1f(uM.uTime, calm ? 0 : (performance.now() - start) / 1000);
      gl.uniform1f(uM.uMix, mixV * 1.4 - 0.2);
      gl.uniform1f(uM.uAspect, aspect);
      gl.uniform1f(uM.uFade, 1);
      gl.uniform1f(uM.uLift, -scrollY / innerHeight); // 和页面一起滚动，1:1
      gl.uniform3f(uM.uTint, tint.r, tint.g, tint.b);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
  }

  /* ================= 特征点星场 ================= */
  const sc = document.querySelector('.stars');
  const sx = sc.getContext('2d');
  let stars = [], sdpr = 1;
  function seedStars() {
    sdpr = Math.min(devicePixelRatio || 1, 2);
    sc.width = innerWidth * sdpr; sc.height = innerHeight * sdpr;
    sx.setTransform(sdpr, 0, 0, sdpr, 0, 0);
    const count = Math.round(innerWidth * innerHeight / (innerWidth < 760 ? 8000 : 5200));
    stars = Array.from({ length: count }, () => {
      const z = Math.random(); // 0 远 … 1 近
      return { x: Math.random() * innerWidth, y: Math.random() * innerHeight, z,
        r: 0.4 + z * 1.1, a: 0.12 + z * 0.38, vx: (Math.random() - .5) * 0.05 * (0.4 + z), vy: -0.02 - z * 0.04, tw: Math.random() * 6.28, k: 0 };
    });
  }
  seedStars();
  addEventListener('resize', seedStars);
  const LINK = 190, NEAR = 120;
  function drawStars(time) {
    sx.clearRect(0, 0, innerWidth, innerHeight);
    const px = (pointer.x / innerWidth - 0.5), py = (pointer.y / innerHeight - 0.5);
    const scrollShift = scrollY * 0.15;
    const near = [];
    for (const s of stars) {
      if (!calm) {
        s.x += s.vx; s.y += s.vy;
        if (s.y < -10) { s.y = innerHeight + 10; s.x = Math.random() * innerWidth; }
        if (s.x < -10) s.x = innerWidth + 10; else if (s.x > innerWidth + 10) s.x = -10;
      }
      // 视差：越近的点随鼠标和滚动移动越多
      const dx = s.x - px * 18 * s.z;
      const dy = ((s.y - py * 12 * s.z - scrollShift * s.z) % (innerHeight + 20) + innerHeight + 20) % (innerHeight + 20) - 10;
      s.sx = dx; s.sy = dy;
      const d = Math.hypot(dx - pointer.x, dy - pointer.y);
      const target = pointer.inside && fine && !calm && d < LINK ? 1 - d / LINK : 0;
      s.k += (target - s.k) * 0.12;
      if (s.k > 0.05) near.push(s);
      const twinkle = calm ? 1 : 0.75 + 0.25 * Math.sin(time * 0.0012 + s.tw);
      const alpha = Math.min(1, s.a * twinkle + s.k * 0.6);
      sx.fillStyle = s.k > 0.05 ? `rgba(${Math.round(200 + (tint.r * 255 - 200) * s.k)}, ${Math.round(214 + (tint.g * 255 - 214) * s.k)}, ${Math.round(235 + (tint.b * 255 - 235) * s.k)}, ${alpha})` : `rgba(200, 214, 235, ${alpha})`;
      sx.beginPath(); sx.arc(dx, dy, s.r + s.k * 1.2, 0, 6.283); sx.fill();
    }
    // 鼠标附近：特征点连线 + 关键点圆圈
    for (let i = 0; i < near.length; i++) {
      const a = near[i];
      for (let j = i + 1; j < near.length; j++) {
        const b = near[j];
        const d = Math.hypot(a.sx - b.sx, a.sy - b.sy);
        if (d < NEAR) {
          sx.strokeStyle = `rgba(${Math.round(tint.r * 255)}, ${Math.round(tint.g * 255)}, ${Math.round(tint.b * 255)}, ${(1 - d / NEAR) * Math.min(a.k, b.k) * 0.85})`;
          sx.lineWidth = 0.8;
          sx.beginPath(); sx.moveTo(a.sx, a.sy); sx.lineTo(b.sx, b.sy); sx.stroke();
        }
      }
      if (a.k > 0.45 && a.z > 0.45) {
        sx.strokeStyle = `rgba(${Math.round(tint.r * 255)}, ${Math.round(tint.g * 255)}, ${Math.round(tint.b * 255)}, ${(a.k - 0.45) * 1.3})`;
        sx.lineWidth = 1;
        sx.beginPath(); sx.arc(a.sx, a.sy, 5 + a.z * 3, 0, 6.283); sx.stroke();
      }
    }
  }

  /* ================= 主循环 ================= */
  function frame() {
    ring.x += (pointer.x - ring.x) * 0.2; ring.y += (pointer.y - ring.y) * 0.2;
    cDot.style.transform = `translate3d(${pointer.x}px,${pointer.y}px,0)`;
    cRing.style.transform = `translate3d(${ring.x}px,${ring.y}px,0)`;
    tint.r += (tintTo.r - tint.r) * 0.03; tint.g += (tintTo.g - tint.g) * 0.03; tint.b += (tintTo.b - tint.b) * 0.03;
    updateGallery();
    glTick();
    drawStars(performance.now());
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
