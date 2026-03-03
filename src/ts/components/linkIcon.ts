// 外部リンクアイコンをつけないaタグに対しては、data-blank-icon="false"をつける
import { FONT_AWESOME_ARROUPICON } from "../constants/icon";

export const LinkIcon = () => {
  const aBlankEls = document.querySelectorAll("a[target='_blank']:not([data-blank-icon='false'])");
  aBlankEls.forEach((el) => {
    el.insertAdjacentHTML("beforeend", FONT_AWESOME_ARROUPICON);
  });
};
