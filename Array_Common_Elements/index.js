let arr1 = [
    55,
    99,
    15,
    17,
    93,
    23,
    50,
    21
];
let arr2 = [
    55,
    18,
    93,
    7,
    23,
    1,
    50,
    21
];
let common = [];
function getCommonElements(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                common.push(arr1[i])

            }

        }
    }
    return common;
}
arr1.sort(function (a, b) {
    return b - a;
});
console.log(`Descending order of the arr1 ${arr1}`);

arr2.sort(function (a, b) {
    return b - a;
});
console.log(`Descending order of the arr2 ${arr2}`);

let commonElements = getCommonElements(arr1, arr2);
console.log(`The Common elements from the array are ${commonElements}`);

commonElements.sort(function (a, b) {
    return b - a;
});
console.log(`Descending order of the  common elements are ${commonElements}`);
