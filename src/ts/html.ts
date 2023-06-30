export function html(htmlString: string) {
        const fragment = document.createDocumentFragment();
        const container = document.createElement("div");
        container.innerHTML = htmlString;
        while (container.firstChild) {
                fragment.appendChild(container.firstChild);
        }
        return fragment.childNodes.length === 1 ? fragment.firstChild : fragment;
}

export function htmlSlower(string: string) {
        const cont = document.createElement("template");
        cont.innerHTML = string;
        return cont.content;
}
