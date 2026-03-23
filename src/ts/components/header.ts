export const Header = () => {
  // 交差処理
  const options = {
    root: null, // ビューポートをルート要素とする
    rootMargin: '0px',
    threshold: 0
  };

  const headerEl = document.getElementById(`header`);
  const headerAddClass = 'is-scrolled';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerEl?.classList.remove(headerAddClass);
      } else {
        headerEl?.classList.add(headerAddClass);
      }
    });
  }, options);

  observer.observe(document.getElementById('mv')!);
};
