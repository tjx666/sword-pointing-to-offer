const assert = require('assert');
const replaceSpace1 = require('../../src/05/replaceSpace2');
const replaceSpace2 = require('../../src/05/replaceSpace2');

describe('#05-replace space in string s', () => {
    [replaceSpace1, replaceSpace2].forEach((replaceSpace, index) => {
        describe(`#solution${index + 1}`, () => {
            it('should return empty string when s is empty string', () => {
                assert.strictEqual(replaceSpace(''), '');
            });

            it('should return source string when s not contain space', () => {
                assert.strictEqual(replaceSpace('abcdef'), 'abcdef');
            });

            it('should space in s be replaced with 20%', () => {
                assert.strictEqual(replaceSpace(' ab cde f '), '%20ab%20cde%20f%20');
            });

            it('should space in multiple lines s be replaced with 20%', () => {
                assert.strictEqual(replaceSpace(' ab cde\n f '), '%20ab%20cde\n%20f%20');
            });
        });
    });
});
