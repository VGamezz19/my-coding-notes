const errors = require('./src/errors');
const handlingError = require('./src/handling');

try {
    errors.standardErr.range();
} catch (error) {
    console.error(error);
}

handlingError.errorFirstCallbackWrong();