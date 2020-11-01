// Разбивает массив на порции
function byChunk (array, n) {
    const matrix = []
    const iteration = Math.ceil(array.length / n)
    let cnt = 0
    for (let i = 0; i < iteration; i++) {
        matrix.push([])
        for (let j = 0; j < n; j++){

            if (cnt < array.length) {
                matrix[i].push(array[cnt])
                cnt++;
            }

        }
    }
    return matrix
}



console.log(byChunk([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 4));
/*
[
	[0, 1, 2, 3],
	[4, 5, 6, 7],
	[8, 9, 10, 11],
	[12]
]
*/