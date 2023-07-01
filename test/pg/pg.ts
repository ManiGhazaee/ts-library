export {};

declare global {
        interface Array<T> {
                toPopped(): T[];
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

let arr = [1, 2, 3];
let poped = arr.toPopped();
console.log(poped);
console.log(arr);

let arr2 = [1];
arr2.pop();
