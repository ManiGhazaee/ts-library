/**
 * Converts an HTML string into a document fragment.
 *
 * @example
 * const htmlString = '<p>Hello, world!</p>';
 * const fragment = html(htmlString);
 * document.body.appendChild(fragment);
 */
export function html(htmlString: string) {
        const fragment = document.createDocumentFragment();
        const container = document.createElement("div");
        container.innerHTML = htmlString;
        while (container.firstChild) {
                fragment.appendChild(container.firstChild);
        }
        return fragment.childNodes.length === 1 ? fragment.firstChild as ChildNode : fragment;
}

/**
 * Converts an HTML string into a document fragment using the <template> element.
 *
 * @example
 * const htmlString = '<p>Hello, world!</p>';
 * const fragment = htmlWithTemplate(htmlString);
 * document.body.appendChild(fragment);
 */
export function htmlWithTemplate(string: string) {
        const cont = document.createElement("template");
        cont.innerHTML = string;
        return cont.content;
}
