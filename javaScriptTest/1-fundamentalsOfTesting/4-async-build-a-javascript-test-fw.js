const math = {
    sum: (a, b) => a + b,
    subtract: (a, b) => a - b,
    sumAsync: (a, b) => setTimeout(() => a + b, 0),
    subtractAsync: (a, b) => setTimeout(() => a - b, 0)
};

const {sum, subtract, sumAsync, subtractAsync} = math;

test('sum add numbers', async () => {
    const result = await sumAsync(3, 7);
    const expected = 10;
    expect()
    expect(result).toBe(expected);
})

test('subtract numbers', async () => {
    const result = await subtractAsync(7, 3);

    const expected = 4;
    expect(result).toBe(expected);
})

function test(title, callback) {
    try {
        await callback();
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