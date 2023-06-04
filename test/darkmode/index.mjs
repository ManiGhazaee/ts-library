import { DarkMode } from "../../darkmode.mjs";

let button = document.getElementById("dark-mode-button");
let styleElem = document.getElementById("dark-mode");

let darkModeCss = `:root { --bg: black; }`;
let lightModeCss = `:root { --bg: white; }`;

let dm = new DarkMode(styleElem, button, darkModeCss, lightModeCss, "on");

button.addEventListener("click", () => {
        dm.toggleDarkMode();
});
