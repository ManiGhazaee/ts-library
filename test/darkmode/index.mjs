import { DarkMode } from "../../darkmode.mjs";

let button = document.getElementById("dark-mode-button");
let styleElem = document.getElementById("dark-mode");

let darkModeCss = `:root { --bg: black; }`;
let lightModeCss = `:root { --bg: white; }`;

const onClickFn = () => {
        dm.toggle();
        if (dm.darkModeState === "on") {
                button.style.transform = "rotate(30deg)";
        } else {
                button.style.transform = "rotate(-30deg)";
        }
};

let dm = new DarkMode(darkModeCss, lightModeCss, onClickFn);
