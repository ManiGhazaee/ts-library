"use strict";
import { html } from "./html.js";
import { createDOMFragment } from "./html.js";
var t1 = performance.now();
for (var i = 0; i < 1000; i++) {
    var elem = (0, html)("<div> yo <span></span> </div>");
    document.body.appendChild(elem);
}
console.log("html: " + (performance.now() - t1));
var t3 = performance.now();
for (var i = 0; i < 1000; i++) {
    var elem = (0, createDOMFragment)("<div> yo <span></span> </div>");
    document.body.appendChild(elem);
}
console.log("createDOMFragment: " + (performance.now() - t3));
