# Number

### `clamp(min: number, numbers: number | number[], max: number): number | number[]`

Clamp a number or numbers around a min and max value.

**Example:**

```typescript
clamp(0, 5, 10); // 5
clamp(0, 15, 10); // 10
clamp(0, -5, 10); // 0
// or:
clamp(0, [5, 15, -5], 10); // [5, 10, 0]
```

**Source(s):**
[clamp](../src/ts/array.ts#clamp)

#
