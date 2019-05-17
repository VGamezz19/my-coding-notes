const math = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b 
};

const {sum, subtract} = math;

let resut, expected;

result = sum(3, 7);
expected = 10;

expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;

expect(result).toBe(expected);

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected)
                throw new Error(`${result} is not equal to ${expected}`)
        }
    }
}