module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.join(",").split(",").join("");
    let stack = [];
    for (let bracket of str) {
        let bracketsIndex = brackets.indexOf(bracket);
        if (bracket === brackets[brackets.indexOf(bracket) + 1]) {
            if (stack.length === 0) {
                stack.push(bracket);
            } else if (stack.length !== 0) {
                let k = stack.length - 1;
                    if (stack[k] === bracket) {
                        stack.splice(k, 1);
                    } else {
                      stack.push(bracket);
                    }
                    
                
            } else {
              return false;
        } 
      }else if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1);
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
