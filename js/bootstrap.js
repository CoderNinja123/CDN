import bootstrap from 'https://cdn.skypack.dev/bootstrap';
import tippy from "https://cdn.skypack.dev/tippy.js";

tippy("#home_lnk", {
  content: "The main home",
  placement: "bottom-end",
  popperOptions: {
    positionFixed: true,
  },
});

tippy("#abt_lnk", {
  content: "A little about me",
  placement: "bottom-end",
  popperOptions: {
    positionFixed: true,
  },
});

tippy("#source_cde", {
  content: "The source code of this website, hosted using GitHub Pages",
  placement: "bottom-end",
  popperOptions: {
    positionFixed: true,
  },
});

tippy("#projs", {
  content: "The projects I have worked on",
  placement: "bottom-end",
  popperOptions: {
    positionFixed: true,
  },
});

tippy("#projMerry", {
  content: "MERRY Land; A Simple CLI Game with Python",
  placement: "bottom-end",
  popperOptions: {
    positionFixed: true,
  },
});