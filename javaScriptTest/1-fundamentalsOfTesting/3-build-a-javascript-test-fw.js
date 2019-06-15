const math = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b 
};

const {sum, subtract} = math;

test('sum add numbers', () => {
    const result = sum(3, 7);
    const expected = 10;

    expect(result).toBe(expected);
})

test('subtract numbers',  () => {
    const result = subtract(7, 3);
    const expected = 4;

    expect(result).toBe(expected);
})

function test(title, callback) {
    try {
        callback();
        console.log(`✔ ${title}`)
    } catch (error) {
        console.log(`✗ ${title}`)
        console.error(`${error}`)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected)
                throw new Error(`${result} is not equal to ${expected}`)
        }
    }
}