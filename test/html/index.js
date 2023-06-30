"use strict";
import { html } from "./html.js";
import { createDOMFragment } from "./html.js";
var t1 = performance.now();
for (var i = 0; i < 100; i++) {
        var elem = (0, html)("<div> yo <span></span> </div>");
        document.body.appendChild(elem);
}
console.log("html: " + (performance.now() - t1));
while (document.body.firstChild) {
        document.body.firstChild.remove();
}
console.log(document.body);
var t3 = performance.now();
for (var i = 0; i < 100; i++) {
        var elem = (0, createDOMFragment)("<div> yo <span></span> </div>");
        document.body.appendChild(elem);
}
console.log("createDOMFragment: " + (performance.now() - t3));
