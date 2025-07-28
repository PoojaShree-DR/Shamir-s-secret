const fs = require("fs");
function convertToDecimal(valueStr, base) {
    const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = 0n;
    for (let i = 0; i < valueStr.length; i++) {
        const digit = BigInt(digits.indexOf(valueStr[i].toLowerCase()));
        result = result * BigInt(base) + digit;
    }
    return result;
}

function lagrangeInterpolation(points) {
    const k = points.length;
    let f0 = 0n;

    for (let j = 0; j < k; j++) {
        let numerator = 1n;
        let denominator = 1n;

        for (let m = 0; m < k; m++) {
            if (m !== j) {
                numerator *= -BigInt(points[m].x);
                denominator *= BigInt(points[j].x - points[m].x);
            }
        }

        const term = points[j].y * numerator / denominator;
        f0 += term;
    }

    return f0;
}

function processTestCase(jsonPath) {
    const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
    const n = data.keys.n;
    const k = data.keys.k;

    const points = [];
    for (const key of Object.keys(data)) {
        if (key === "keys") continue;
        if (points.length >= k) break;

        const x = parseInt(key);
        const base = parseInt(data[key].base);
        const value = data[key].value;
        const y = convertToDecimal(value, base);

        points.push({ x, y });
    }

    const result = lagrangeInterpolation(points);
    return result.toString();
}

const secret1 = processTestCase("testcase1.json");
console.log("Secret for Test Case 1:", secret1);

const secret2 = processTestCase("testcase2.json");
console.log("Secret for Test Case 2:", secret2);
