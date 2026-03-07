let currentDiary = null;

document.addEventListener('DOMContentLoaded', async () => {
  await loadDiaryList();
});

async function loadDiaryList() {
  const listContainer = document.getElementById('diary-list');
  if (!listContainer) return;

  try {
    const response = await fetch('/evolution/diary-index.json');
    const diaries = await response.json();

    listContainer.innerHTML = diaries.map(diary => `
      <a class="diary-item" data-file="${diary.file}">
        <div class="diary-item-title">${diary.title}</div>
        <div class="diary-item-date">${diary.date}</div>
      </a>
    `).join('');

    listContainer.querySelectorAll('.diary-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        loadDiary(item.dataset.file);
      });
    });
  } catch (error) {
    listContainer.innerHTML = '<p style="padding:16px;color:var(--text-secondary)">暂无日记内容</p>';
  }
}

async function loadDiary(filename) {
  const contentContainer = document.getElementById('diary-content');
  if (!contentContainer) return;

  document.querySelectorAll('.diary-item').forEach(item => {
    item.classList.toggle('active', item.dataset.file === filename);
  });

  contentContainer.innerHTML = '<div class="diary-placeholder"><p>加载中...</p></div>';

  try {
    const response = await fetch(`/evolution/${filename}`);
    const markdown = await response.text();
    const html = marked.parse(markdown);

    contentContainer.innerHTML = `
      <article class="diary-article fade-in-up">
        ${html}
      </article>
    `;

    Prism.highlightAllUnder(contentContainer);
  } catch (error) {
    contentContainer.innerHTML = '<div class="diary-placeholder"><p>加载失败，请重试</p></div>';
  }
}

window.loadDiary = loadDiary;
