var nextGreatestLetter = function(letters, target) {
    for (let letter of letters) {
        if (letter > target) {
            return letter;
        }
    }
    return letters[0]; 
};

const letters1 = ["c", "f", "j"];
const target1 = "a";
console.log(nextGreatestLetter(letters1, target1)); 