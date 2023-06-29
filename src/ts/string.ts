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

export function changeCase(string: string, changeTo: Case): string {
        let arr: string[] = string.split("");
        if (changeTo === "camel" || changeTo === "pascal") {
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                                arr.splice(i, 1);
                                arr[i] = arr[i].toUpperCase();
                        } else {
                                arr[i] = arr[i].toLowerCase();
                        }
                }
                if (changeTo === "camel") {
                        arr[0] = arr[0].toLowerCase();
                } else {
                        arr[0] = arr[0].toUpperCase();
                }
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                                arr.splice(i, 1);
                                i--;
                        }
                }
        } else if (changeTo === "snake" || changeTo === "kebab" || changeTo === "scream") {
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                                if (changeTo === "snake" || changeTo === "scream") {
                                        arr[i] = "_";
                                } else {
                                        arr[i] = "-";
                                }
                        } else if (arr[i] === arr[i].toUpperCase() && arr[i + 1] != null && arr[i + 1] !== arr[i + 1].toUpperCase()) {
                                arr[i] = arr[i].toLowerCase();
                                if (changeTo === "snake" || changeTo === "scream") {
                                        arr.splice(i, 0, "_");
                                } else {
                                        arr.splice(i, 0, "-");
                                }
                                i++;
                        } else {
                                arr[i] = arr[i].toLowerCase();
                        }
                }
                for (let i = 0; i < arr.length - 1; i++) {
                        if ((arr[i] === "_" && (arr[i + 1] === "_" || arr[i + 1] === "-")) || (arr[i] === "-" && (arr[i + 1] === "_" || arr[i + 1] === "-"))) {
                                arr.splice(i, 1);
                                i--;
                        }
                }
                if (changeTo === "scream") {
                        for (let i = 0; i < arr.length; i++) {
                                arr[i] = arr[i].toUpperCase();
                        }
                }
        } else if (changeTo === "upper" || changeTo === "lower") {
                for (let i = 0; i < arr.length; i++) {
                        if (arr[i] === "-" || arr[i] === "_" || arr[i] === " ") {
                                arr.splice(i, 1);
                                i--;
                        }
                }
                if (changeTo === "upper") {
                        for (let i = 0; i < arr.length; i++) {
                                arr[i] = arr[i].toUpperCase();
                        }
                } else {
                        for (let i = 0; i < arr.length; i++) {
                                arr[i] = arr[i].toLowerCase();
                        }
                }
        }
        return arr.join("");
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
