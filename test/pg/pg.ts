export {};

declare global {
        interface Array<T> {
                toPopped(): T[];
                toPushed(...items: T[]): T[];
        }
}

if (!Array.prototype.toPopped) {
        Array.prototype.toPopped = function () {
                if (this.length === 0) return undefined;
                const popped = this.slice();
                popped.pop();
                return popped;
        };
}

if (!Array.prototype.toPushed) {
        Array.prototype.toPushed = function (...items) {
                const copy = this.slice();
                copy.push(...items);
                return copy;
        };
}

const arr = [1, 2, 3];
const newArr = arr.toPushed(4, 5, 6);
console.log(newArr); // [1, 2, 3, 4, 5, 6]
console.log(arr); // [1, 2, 3]

const emptyArr: string[] = [];
const anotherArr = emptyArr.toPushed("a", "b", "c");
console.log(anotherArr); // ['a', 'b', 'c']
console.log(emptyArr); // []
