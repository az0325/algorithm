const rotate = (key) => {
    const newKey = Array.from(Array(key.length), () => Array(key.length).fill(null));
    for (let i = 0; i < key.length; ++i) {
        for (let j = 0; j < key.length; ++j) {
            newKey[i][j] = key[key.length - 1 - j][i];
        }
    }

    return newKey;
};

const getAnswer = (newArr, key, arr) => {
    for (let i = key - 1; i <= arr - key; i++) {
        for (let j = key - 1; j <= arr - key; j++) {
            if (newArr[i][j] !== 1) return false;
        }
    }

    return true;
}

function solution(key, lock) {
    const arr_len = lock.length + key.length * 2 - 2;
    const arr = Array.from(Array(arr_len), () => Array(arr_len).fill(null));

    for (let i = key.length - 1; i <= arr_len - key.length; i++) {
        for (let j = key.length - 1; j <= arr_len - key.length; j++) {
            arr[i][j] = lock[i - key.length + 1][j - key.length + 1];
        }
    }

    for (let rot = 0; rot < 4; rot++) {
        key = rotate(key);

        for (let x = 0; x < lock.length + key.length - 1; x++) {
            for (let y = 0; y < lock.length + key.length - 1; y++) {
                const newArr = arr.map((v) => v.slice());

                for (let i = 0; i < key.length; i++) {
                    for (let j = 0; j < key.length; j++) {
                        if (newArr[x + i][y + j] === 1 && key[i][j] === 1) {
                            newArr[x + i][y + j] = 2;
                        } else if (newArr[x + i][y + j] === 1 && key[i][j] === 0) {
                            newArr[x + i][y + j] = 1;
                        } else if (newArr[x + i][y + j] === 0 && key[i][j] === 1) {
                            newArr[x + i][y + j] = 1;
                        } else {
                            newArr[x + i][y + j] = 0;
                        }
                    }
                }

                if (getAnswer(newArr, key.length, arr_len)) {
                    return true;
                }
            }
        }
    }

    return false;
}