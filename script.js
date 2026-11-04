const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project');
const filterStatus = document.querySelector('.filter-status');

document.querySelector('.filters').hidden = false;
filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((filter) => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });

    let count = 0;
    cards.forEach((card) => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) count += 1;
    });
    filterStatus.textContent = `${count} 个项目 / PROJECTS`;
  });
});

const dialog = document.querySelector('#project-dialog');
const projectButtons = document.querySelectorAll('.project-open');
let dialogTrigger = null;

projectButtons.forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => {
    const project = button.closest('article');
    const template = project.querySelector('.project-detail');
    document.querySelector('#dialog-title').textContent = project.querySelector('h3').textContent;
    document.querySelector('#dialog-category').textContent = project.querySelector('.project-type').textContent;
    document.querySelector('#dialog-description').replaceChildren(template.content.cloneNode(true));
    dialogTrigger = button;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});

document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  dialogTrigger?.focus();
});
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right
    || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

const menuToggle = document.querySelector('#menu-toggle');
if (menuToggle) {
  const navShell = document.querySelector('.nav-shell');
  const navigation = document.querySelector('#primary-nav');

  function setMenuOpen(open) {
    navShell.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? '收起导航' : '展开导航');
  }

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!navShell.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setMenuOpen(false));
}

document.querySelector('#year').textContent = new Date().getFullYear();
