/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketMapping = {')': '(', '}': '{', ']': '['};

    for (const char of s) {
        if (bracketMapping[char] === undefined) {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== bracketMapping[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };
