/**
 * Converts a string from kebab-case to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string in camelCase.
 */
export function kebabToCamel(str: string): string {
        let spliced: string[] = str.split("");
        for (let i = 0; i < spliced.length; i++) {
                if (spliced[i] === "-" && spliced[i + 1] != null) {
                        spliced[i + 1] = spliced[i + 1].toUpperCase();
                        spliced.splice(i, 1);
                        i--;
                }
        }
        return spliced.join("");
}

/**
 * Changes the case of a string to the specified format.
 * @param {string} str - The string to change the case of.
 * @param {("camel"|"pascal"|"snake"|"kebab"|"scream"|"upper"|"lower")} changeTo - The case format to change the string to.
 * @returns {string} - The original string with its case changed to the specified format.
 * @example
 * // Returns "exampleStringWithAllCases"
 * changeCase("-Example_string-with all-_ CASES__", "camel");
 *
 * // Returns "ExampleStringWithAllCases"
 * changeCase("-Example_string-with all-_ CASES__", "pascal");
 *
 * // Returns "_example_string_with_all_cases_"
 * changeCase("-Example_string-with all-_ CASES__", "snake");
 *
 * // Returns "-example-string-with-all-cases-"
 * changeCase("-Example_string-with all-_ CASES__", "kebab");
 *
 * // Returns "_EXAMPLE_STRING_WITH_ALL_CASES_"
 * changeCase("-Example_string-with all-_ CASES__", "scream");
 *
 * // Returns "EXAMPLESTRINGWITHALLCASES"
 * changeCase("-Example_string-with all-_ CASES__", "upper");

 * // Returns "examplestringwithallcases"
 * changeCase("-Example_string-with all-_ CASES__", "lower");
 */
type Case = "camel" | "pascal" | "snake" | "kebab" | "scream" | "upper" | "lower";

export function changeCase(str: string, changeTo: Case) {
        switch (changeTo) {
                case "camel":
                case "pascal":
                        return toCamelOrPascalCase(str, changeTo);
                case "snake":
                case "kebab":
                case "scream":
                        return toSnakeOrKebabOrScreamCase(str, changeTo);
                case "upper":
                case "lower":
                        return toUpperOrLowerCase(str, changeTo);
                default:
                        throw new Error(`Invalid case: ${changeTo}`);
        }
}
export function toCamelOrPascalCase(str: string, changeTo: "camel" | "pascal") {
        let result = str
                .split(/[-_ ]+/)
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join("");
        return changeTo === "camel" ? result.charAt(0).toLowerCase() + result.slice(1) : result;
}
export function toUpperOrLowerCase(str: string, changeTo: "lower" | "upper") {
        let result = str.replace(/[-_ ]+/g, "");
        return changeTo === "upper" ? result.toUpperCase() : result.toLowerCase();
}

export function toSnakeOrKebabOrScreamCase(str: string, changeTo: "snake" | "kebab" | "scream") {
        let separator = changeTo === "kebab" ? "-" : "_";
        let result = str.split(/[-_ ]+/).join(separator);
        if (changeTo === "scream") {
                result = result.toUpperCase();
        }
        return result;
}

// console.log(changeCase("-Example_string-with all-_ CASES__", "camel"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "pascal"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "snake"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "kebab"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "scream"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "upper"));
// console.log(changeCase("-Example_string-with all-_ CASES__", "lower"));

/**
 * removes a character at the index given.
 * @param {string} str
 * @param {number} index
 * @returns {string}
 */
export function rmCharAt(str: string, index: number): string {
        return str.slice(0, index) + str.slice(index + 1);
}

/**
 * splice for strings
 * @param {string} string
 * @param {number} start
 * @param {number} deleteCount
 * @param {string} insertString
 * @returns {string}
 */
export function spice(string: string, start: number, deleteCount: number, insertString: string): string {
        return string.slice(0, start) + (insertString || "") + string.slice(start + (deleteCount || 0));
}

/**
 * adds strToAdd to str at index.
 * @param {string} str
 * @param {string} strToAdd
 * @param {number} index
 * @returns {string}
 */
export function addCharAt(str: string, strToAdd: string, index: number): string {
        return str.slice(0, index) + strToAdd + str.slice(index);
}

/**
 * toLowerCase but better
 * @param {string} str
 * @returns {string}
 */
export function tolowercase(str: string): string {
        if (str === " ") return " ";
        if (str == null) return " ";
        return str.toLowerCase();
}
