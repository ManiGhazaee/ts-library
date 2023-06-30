"use strict";
export function createDOMFragment(htmlString) {
        var fragment = document.createDocumentFragment();
        var container = document.createElement("div");
        container.innerHTML = htmlString;
        while (container.firstChild) {
                fragment.appendChild(container.firstChild);
        }
        return fragment;
}
export function html(string) {
        var cont = document.createElement("template");
        cont.innerHTML = string;
        return cont.content;
}
