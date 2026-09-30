document.querySelectorAll('[data-tabs]').forEach(group => {
  const tabs = [...group.querySelectorAll('[role="tab"]')];
  function select(tab) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index + tabs.length - 1) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next !== undefined) { event.preventDefault(); select(tabs[next]); tabs[next].focus(); }
    });
  });
  select(tabs[0]);
  group.classList.add('enhanced');
  group.querySelector('[role="tablist"]').hidden = false;
});

const loop = document.querySelector('[data-loop]');
const toggle = document.querySelector('[data-video-toggle]');
if (loop && toggle) {
  loop.controls = false;
  toggle.hidden = false;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let userPaused = false;
  let visible = false;
  let playFailed = false;
  const sync = () => {
    toggle.textContent = loop.paused ? (playFailed ? '重试播放 ↗' : '播放演示 ↗') : '暂停动效 Ⅱ';
    toggle.setAttribute('aria-label', loop.paused ? '播放首屏演示' : '暂停首屏演示');
  };
  const play = async () => {
    try { await loop.play(); playFailed = false; }
    catch (error) { if (error.name !== 'AbortError') playFailed = true; }
    sync();
  };
  const resume = () => {
    if (visible && !document.hidden && !reduced.matches && !userPaused) play();
    else loop.pause();
  };
  toggle.addEventListener('click', () => {
    if (loop.paused) { userPaused = false; play(); }
    else { userPaused = true; loop.pause(); }
  });
  loop.addEventListener('play', sync);
  loop.addEventListener('pause', sync);
  loop.addEventListener('error', () => { playFailed = true; sync(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; resume(); }, {threshold:.15}).observe(loop);
  } else { visible = true; resume(); }
  reduced.addEventListener('change', resume);
  document.addEventListener('visibilitychange', resume);
  document.querySelectorAll('video[controls]').forEach(film => film.addEventListener('play', () => { userPaused = true; loop.pause(); }));
  sync();
}
