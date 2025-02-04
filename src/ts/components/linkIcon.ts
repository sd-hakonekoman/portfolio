import { FONT_AWESOME_ARROUPICON } from "../constants/icon";

export const LinkIcon = () => {
  const aBlankEls = document.querySelectorAll("a[target='_blank']");
  aBlankEls.forEach((el) => {
    el.insertAdjacentHTML("beforeend", FONT_AWESOME_ARROUPICON);
  });
};
