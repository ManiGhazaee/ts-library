"use strict";
export function createDOMFragment(htmlString) {
    var fragment = document.createDocumentFragment();
    var container = document.createElement("div");
    container.innerHTML = htmlString;
    while (container.firstChild) {
        fragment.appendChild(container.firstChild);
    }
    return fragment.childNodes.length === 1 ? fragment.firstChild : fragment;
}
export function html(string) {
    var cont = document.createElement("template");
    cont.innerHTML = string;
    return cont.content;
}
