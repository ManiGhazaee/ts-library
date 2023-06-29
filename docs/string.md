# String

### `spice(string: string, start: number, deleteCount: number, insertString: string): string`

splice for strings.

source: [spice](../src/ts/string.ts#spice)

```typescript
const str1 = "Hello, world!";
const newStr1 = spice(str1, 7, 0, "there ");
console.log(newStr1); // Output: "Hello, there world!"

const str2 = "The quick brown fox jumps over the lazy dog.";
const newStr2 = spice(str2, 16, 3, "cat");
console.log(newStr2); // Output: "The quick brown cat jumps over the lazy dog."

const str3 = "This is a test string.";
const newStr3 = spice(str3, 10, 5, "");
console.log(newStr3); // Output: "This is a string."
```

### `kebabToCamel(str: string): string`

Converts a string from kebab-case to camelCase.

source: [kebabToCamel](../src/ts/string.ts#kebabToCamel)

```typescript
const string = "example-string";
kebabToCamel(string); // returns "exampleString"
```

### `changeCase(string: string, changeTo: Case): string`

Changes the case of a string to the specified format.

source: [changeCase](../src/ts/string.ts#changeCase)

changeTo type:

```typescript
type Case = "camel" | "pascal" | "snake" | "kebab" | "scream" | "upper" | "lower";
```

example:

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

### `toCamelOrPascalCase(str: string, changeTo: "camel" | "pascal"): string`

This function takes a string and a string value of either "camel" or "pascal", and returns the string converted to either camelCase or PascalCase, respectively.

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "exampleStringWithAllCases"
toCamelOrPascalCase(string, "camel");

// Returns "ExampleStringWithAllCases"
toCamelOrPascalCase(string, "pascal");
```

### `toUpperOrLowerCase(str: string, changeTo: "lower" | "upper"): string`

This function takes a string and a string value of either "lower" or "upper", and returns the string converted to either all lowercase or all uppercase, respectively.

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "EXAMPLESTRINGWITHALLCASES"
changeCase(string, "upper");

// Returns "examplestringwithallcases"
changeCase(string, "lower");
```

### `toSnakeOrKebabOrScreamCase(str: string, changeTo: "snake" | "kebab" | "scream"): string`

This function takes a string and a string value of either "snake", "kebab", or "scream", and returns the string converted to snake_case, kebab-case, or SCREAMING_SNAKE_CASE, respectively.

```typescript
const string = "-Example_string-with all-_ CASES__";

// Returns "_example_string_with_all_cases_"
changeCase(string, "snake");

// Returns "-example-string-with-all-cases-"
changeCase(string, "kebab");

// Returns "_EXAMPLE_STRING_WITH_ALL_CASES_"
changeCase(string, "scream");
```

### `rmCharAt(str: string, index: number): string`

removes a character at the index given.

source: [rmCharAt](../src/ts/string.ts#rmCharAt)

```typescript
const string = "string";
rmCharAt(string, 2); // returns "sting"
```

## `addCharAt(str: string, strToAdd: string, index: number): string`

adds a character at the index given.

source: [addCharAt](../src/ts/string.ts#addCharAt)

```typescript
const string = "sting";
addCharAt(string, "r", 2); // returns "string"
```

## `tolowercase(str: string): string`

toLowerCase but better.

source: [tolowercase](../src/ts/string.ts#tolowercase)

```typescript
const string = "StRinG";
tolowercase(string); // returns "string"
```
