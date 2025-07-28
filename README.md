Problem Summary

Given:
- A polynomial of degree `m`, so we need `k = m + 1` points
- `n ≥ k` encoded (x, y) points in different number bases
- Task is to recover `f(0)` (the constant term `c`)

We:
- Decode the y-values from the given base
- Use the first `k` points
- Reconstruct the constant using **Lagrange Interpolation**

---

The code:
- Reads the `.json` file
- Decodes values using custom base conversion
- Calculates the constant term using `BigInt` for large integers

---

How to Run

Prerequisites

- Node.js installed

Steps

bash
node index.js

---

OutPut
<img width="538" height="87" alt="image" src="https://github.com/user-attachments/assets/a1214118-97e3-4075-a536-598c1750e5e1" />
