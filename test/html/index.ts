function getNextElementBy(element: HTMLElement, by: "tag" | "id" | "class", target: string) {
        const byObj = {
                tag: isTagName,
                id: isId,
                class: hasClass,
        };
        let tempElem: HTMLElement = element;
        for (let i = 0; i < 1000; i++) {
                if (tempElem.nextElementSibling !== null) {
                        if (isHTMLElement(tempElem.nextElementSibling)) {
                                tempElem = tempElem.nextElementSibling;
                        } else {
                                throw new Error("nextElementSibling is a type of Element");
                        }

                        if (byObj[by](element, target)) {
                                return tempElem;
                        } else {
                                continue;
                        }
                } else {
                        return undefined;
                }
        }

        return undefined;
}
function isHTMLElement(element: unknown): element is HTMLElement {
        return element instanceof HTMLElement;
}

function isTagName(elements: HTMLElement, tagName: string): boolean;
function isTagName(elements: HTMLElement[], tagName: string): boolean[];
function isTagName(elements: HTMLElement | HTMLElement[], tagName: string): boolean | boolean[] {
        if (Array.isArray(elements)) {
                let result: boolean[] = [];
                for (let i = 0; i < elements.length; i++) {
                        result.push(elements[i].tagName === tagName.toUpperCase());
                }
                return result;
        } else {
                return elements.tagName === tagName.toUpperCase();
        }
}

function isId(elements: HTMLElement, id: string): boolean;
function isId(elements: HTMLElement[], id: string): boolean[];
function isId(elements: HTMLElement | HTMLElement[], id: string): boolean | boolean[] {
        if (Array.isArray(elements)) {
                let result: boolean[] = [];
                for (let i = 0; i < elements.length; i++) {
                        result.push(elements[i].id === id);
                }
                return result;
        } else {
                return elements.id === id;
        }
}

function hasClass(elements: HTMLElement, classNmaes: string): boolean;
function hasClass(elements: HTMLElement[], classNmaes: string): boolean[];
function hasClass(elements: HTMLElement, classNmaes: string[]): boolean[];
function hasClass(elements: HTMLElement[], classNmaes: string[]): boolean[][];
function hasClass(elements: HTMLElement[] | HTMLElement, classNames: string[] | string): boolean | boolean[] | boolean[][] {
        const elems = Array.isArray(elements) ? elements : [elements];
        const classNameArr = Array.isArray(classNames) ? classNames : [classNames];

        let result: boolean[][] = [];

        for (let i = 0; i < elems.length; i++) {
                let arr: boolean[] = [];
                for (let j = 0; j < classNameArr.length; j++) {
                        let bool: boolean;
                        if (elems[i].classList) bool = elems[i].classList.contains(classNameArr[j]);
                        else bool = new RegExp("(^| )" + classNameArr[j] + "( |$)", "gi").test(elems[i].className);

                        arr.push(bool);
                }
                result.push(arr);
        }
        if (result.length === 1) {
                return result[0];
        } else if (result[0].length === 1) {
                return result.flat();
        } else return result;
}

const element: HTMLElement = document.querySelector(".className")!;
console.log(getNextElementBy(element, "class", "className"));
