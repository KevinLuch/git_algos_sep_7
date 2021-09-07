// parensValid(input)
// input is a string
// return true if the input has a valid configuration of parentheses and false otherwise
// by "return true/false" I mean the boolean value, not a string
// what's valid?
// - no more open parens than close parens or vice versa
// - no clost parens that appear before a valid open paren
// - ignore all other characters that are not ( and )
// - () -> true
// - (()) -> true
// - (q(a)(x)(!(7(xx)(34)(2, 7, 11)))) -> true
// - )( -> false
// - (() -> false


function parensValid(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == "(") {
            counter++;
        }
        if (input[i] == "{") {
            counter++;
        }
        if (input[i] == "[") {
            counter++
        }
        if (input[i] == "]") {
            counter--;
        }
        if (input[i] == "}") {
            counter--;
        }
        if (input[i] == ")") {
            counter--;
        }
        // if we have more closed parens than open
        if (counter < 0) {
            return false;
        }
    }
    // lines 30-35 are more readable than line 38
    if (counter == 0) {
        return true; 
    }
    else {
        return false;
    }
    // this line makes the code more efficient and does what lines 30 - 34 do
    // return counter == 0;
}

console.log(parensValid('{}()'))
console.log(parensValid('[]'))
console.log(parensValid('()'))
console.log(parensValid(')'))
console.log(parensValid('((q(a)(x)(!(7(xx)(34)(2, 7, 11)))))'))
console.log(parensValid('((()'))
console.log(parensValid('((())'))
console.log(parensValid('((()))'))
console.log(parensValid("]["))
console.log(parensValid("[]"))