import { html } from "../../src/ts/html";
import { htmlSlower } from "../../src/ts/html";

let t1 = performance.now();
for (let i = 0; i < 100; i++) {
        let elem = htmlSlower("<div> yo <span></span> </div>");
        document.body.appendChild(elem);
}
console.log("htmlSlower: " + (performance.now() - t1));

let t3 = performance.now();
for (let i = 0; i < 100; i++) {
        let elem = html("<div> yo <span></span> </div>");
        document.body.appendChild(elem!);
}
console.log("html: " + (performance.now() - t3));
