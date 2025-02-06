import { MEDIA_QUERY_PC } from "../constants/mediaQuery";

const mediaQueryList = window.matchMedia(`(width >= ${MEDIA_QUERY_PC}px)`);

export const Menu = () => {
  // ボタンをクリックしたときの処理
  handleClick();

  // PCに切り替えたときの処理
  resetMenu();
};

function handleClick() {
  const headerEl = document.getElementById(`header`);

  // ボタンをクリックしたときの処理
  if (headerEl) {
    headerEl.querySelectorAll(`.js-menuButton`).forEach((menuButton) => {
      menuButton.addEventListener(`click`, () => {
        // SPのとき
        if (!mediaQueryList.matches) {
          // buttonタグのaria-expandedを切り替える
          const button = headerEl.querySelector(`.header__button`);
          if (button) {
            button.ariaExpanded =
              button.ariaExpanded === `true` ? `false` : `true`;
          }

          // メニューアイコンを切り替える
          headerEl.querySelectorAll(`.header__button > img`).forEach((img) => {
            img.classList.toggle(`u-hidden`);
          });

          document.querySelectorAll(`body > *:not(#header)`).forEach((el) => {
            if (el instanceof HTMLElement) {
              el.inert = !el.inert;
            }
          });
        }
      });
    });
  }
}

/**
 * PCに切り替えたときの処理
 */
function resetMenu() {
  const button = document.querySelector(`#header .header__button`);

  mediaQueryList.addEventListener("change", (e) => {
    if (e.matches) {
      // 768px以上
      if (button) {
        button.ariaExpanded = `false`;
        const openEl = button.querySelector(`& > img.__open`);
        if (openEl) {
          openEl.classList.remove(`u-hidden`);
        }

        const closeEl = button.querySelector(`& > img.__close`);
        if (closeEl) {
          closeEl.classList.add(`u-hidden`);
        }
      }

      document.querySelectorAll(`body > *:not(#header)`).forEach((el) => {
        if (el instanceof HTMLElement) {
          el.inert = false;
        }
      });
    }
  });
}
