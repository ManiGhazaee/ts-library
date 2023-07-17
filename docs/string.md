# String

### `spice(string: string, start: number, deleteCount: number, insertString?: string): string`

splice for strings.

**Example:**

```typescript
const str1 = "Hello, world!";
const newStr1 = spice(str1, 7, 0, "there ");
console.log(newStr1); // Output: "Hello, there world!"

const str2 = "The quick brown fox jumps over the lazy dog.";
const newStr2 = spice(str2, 16, 3, "cat");
console.log(newStr2); // Output: "The quick brown cat jumps over the lazy dog."

const str3 = "This is a test string.";
const newStr3 = spice(str3, 10, 5);
console.log(newStr3); // Output: "This is a string."
```

**source:**
[spice](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L89)

#

### `kebabToCamel(str: string): string`

Converts a string from kebab-case to camelCase.

**Example:**

```typescript
const string = "example-string";
kebabToCamel(string); // returns "exampleString"
```

**source:**
 [kebabToCamel](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L4)

#

### `changeCase(string: string, changeTo: Case): string`

Changes the case of a string to the specified format.


changeTo type:

```typescript
type Case = "camel" | "pascal" | "snake" | "kebab" | "scream" | "upper" | "lower";
```

**example:**

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "exampleStringWithAllCases"
changeCase(string, "camel");

// Returns "ExampleStringWithAllCases"
changeCase(string, "pascal");

// Returns "_example_string_with_all_cases_"
changeCase(string, "snake");

// Returns "-example-string-with-all-cases-"
changeCase(string, "kebab");

// Returns "_EXAMPLE_STRING_WITH_ALL_CASES_"
changeCase(string, "scream");

// Returns "EXAMPLESTRINGWITHALLCASES"
changeCase(string, "upper");

// Returns "examplestringwithallcases"
changeCase(string, "lower");
```

**source:**
[changeCase](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L40)

#

### `toCamelOrPascalCase(str: string, changeTo: "camel" | "pascal"): string`

This function takes a string and a string value of either "camel" or "pascal", and returns the string converted to either camelCase or PascalCase, respectively.

**Example:**

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "exampleStringWithAllCases"
toCamelOrPascalCase(string, "camel");

// Returns "ExampleStringWithAllCases"
toCamelOrPascalCase(string, "pascal");
```

**source:**
 [toCamelOrPascalCase](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L57)

#

### `toUpperOrLowerCase(str: string, changeTo: "lower" | "upper"): string`

This function takes a string and a string value of either "lower" or "upper", and returns the string converted to either all lowercase or all uppercase, respectively.

**Example:**

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "EXAMPLESTRINGWITHALLCASES"
changeCase(string, "upper");

// Returns "examplestringwithallcases"
changeCase(string, "lower");
```

**source:**
[toUpperOrLowerCase](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L65)

#

### `toSnakeOrKebabOrScreamCase(str: string, changeTo: "snake" | "kebab" | "scream"): string`

This function takes a string and a string value of either "snake", "kebab", or "scream", and returns the string converted to snake_case, kebab-case, or SCREAMING_SNAKE_CASE, respectively.

**Example:**

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "_example_string_with_all_cases_"
changeCase(string, "snake");

// Returns "-example-string-with-all-cases-"
changeCase(string, "kebab");

// Returns "_EXAMPLE_STRING_WITH_ALL_CASES_"
changeCase(string, "scream");
```

**source:**
[toSnakeOrKebabOrScreamCase](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L70)

#

### `rmCharAt(str: string, index: number): string`

removes a character at the index given.

**Example:**

```typescript
const string = "string";
rmCharAt(string, 2); // returns "sting"
```

source:
[rmCharAt](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L84)

#

### `addCharAt(str: string, strToAdd: string, index: number): string`

adds a character at the index given.

**Example:**

```typescript
const string = "sting";
addCharAt(string, "r", 2); // returns "string"
```

**source:**
[addCharAt](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L96)

#

### `tolowercase(str: string): string`

toLowerCase but better.

**Example:**

```typescript
const string = "StRinG";
tolowercase(string); // returns "string"
```

**source:**
[tolowercase](https://github.com/ManiGhazaee/ts-library/blob/main/src/ts/string.ts#L103)
