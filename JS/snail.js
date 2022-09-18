function snail(arr) {
    const resultArr = [];
    let len = arr.length;
    let iterations = len * 2  - 1;
    let cycle = 0;

    if (iterations === 1) {
        return arr[0];
    }

    for (let t = 1; t <= iterations; t++) {
        for (let i = cycle; i < arr[0].length - cycle; i++) {
            resultArr.push(arr[cycle][i]);
        }
        if (t !== iterations) {
            resultArr.pop();
        }
        arr = rotate90(arr);
        cycle = Math.floor(t / 4);
    }

    return resultArr;
}

function rotate90(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = Array.from(arr[i]);
    }

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[0].length; j++){
            newArr[i][j] = arr[j][arr.length - 1 - i]
        }
    }
    return newArr;
}

// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]