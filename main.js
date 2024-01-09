
function findDistinctSum(set1, set2) {
    let sum = 0;

    // Function to check if an element is present in the array
    function isElementPresent(element, array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        return false;
    }

    // Loop through set1
    for (let i = 0; i < set1.length; i++) {
        if (!isElementPresent(set1[i], set2)) {
            sum += set1[i];
        }
    }

    // Loop through set2
    for (let i = 0; i < set2.length; i++) {
        if (!isElementPresent(set2[i], set1)) {
            sum += set2[i];
        }
    }

    return sum;
}


let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let result = findDistinctSum(set1, set2);
console.log(result); // Output: 13

// problem 2
// Function to calculate dot product of two vectors
function dotProduct(v1, v2) {
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }
    return result;
}

// Function to check if vectors are orthogonal
function areVectorsOrthogonal(v1, v2) {
    return dotProduct(v1, v2) === 0;
}

// Example usage
let vector1 = [1, 2, 3];
let vector2 = [4, -2, 1];
let isOrthogonal = areVectorsOrthogonal(vector1, vector2);
console.log(isOrthogonal); // Output: true