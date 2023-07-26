function getNextElementBy(element, by, target) {
    var byObj = {
        tag: isTagName,
        id: isId,
        class: hasClass,
    };
    var tempElem = element;
    for (var i = 0; i < 1000; i++) {
        if (tempElem.nextElementSibling !== null) {
            if (isHTMLElement(tempElem.nextElementSibling)) {
                tempElem = tempElem.nextElementSibling;
            }
            else {
                throw new Error("nextElementSibling is a type of Element");
            }
            if (byObj[by](tempElem, target)) {
                return tempElem;
            }
            else {
                continue;
            }
        }
        else {
            return undefined;
        }
    }
    return undefined;
}
function isHTMLElement(element) {
    return element instanceof HTMLElement;
}
function isTagName(elements, tagName) {
    if (Array.isArray(elements)) {
        var result = [];
        for (var i = 0; i < elements.length; i++) {
            result.push(elements[i].tagName === tagName.toUpperCase());
        }
        return result;
    }
    else {
        return elements.tagName === tagName.toUpperCase();
    }
}
function isId(elements, id) {
    if (Array.isArray(elements)) {
        var result = [];
        for (var i = 0; i < elements.length; i++) {
            result.push(elements[i].id === id);
        }
        return result;
    }
    else {
        return elements.id === id;
    }
}
function hasClass(elements, classNames) {
    var elems = Array.isArray(elements) ? elements : [elements];
    var classNameArr = Array.isArray(classNames) ? classNames : [classNames];
    var result = [];
    for (var i = 0; i < elems.length; i++) {
        var arr = [];
        for (var j = 0; j < classNameArr.length; j++) {
            var bool = void 0;
            if (elems[i].classList)
                bool = elems[i].classList.contains(classNameArr[j]);
            else
                bool = new RegExp("(^| )" + classNameArr[j] + "( |$)", "gi").test(elems[i].className);
            arr.push(bool);
        }
        result.push(arr);
    }
    if (result.length === 1) {
        return result[0];
    }
    else if (result[0].length === 1) {
        return result.flat();
    }
    else
        return result;
}
var element = document.querySelector(".className");
console.log(getNextElementBy(element, "id", "ixd"));
