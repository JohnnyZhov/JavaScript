function toCamelCase(str) {
    //Turning a string to an array
    let result = str.split("-")
    //spliting each element of the result on "_"
    result = result.flatMap(subStr => subStr.split("_"));
    let finishResult = result[0];

    //skip first word and capitalize first letter of the other words
    for (let i = 1; i < result.length; i++) {
        let temp = result[i][0].toUpperCase();
        let temp2 = '';
        for (let k = 1; k < result[i].length; k++)
            temp2 += result[i][k];
        finishResult += temp + temp2;
    }

    return finishResult;
}

//test
const { assert } = require('chai');

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(toCamelCase(''), '', "An empty string was provided but not returned")
        assert.strictEqual(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
        assert.strictEqual(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
        assert.strictEqual(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
    });
});