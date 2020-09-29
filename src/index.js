exports.min = function min(array) {
    if (array == undefined || array.length == 0) return 0;
    let minimal = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] <= minimal) {
            minimal = array[i];
        }
    }
    return minimal;
};

exports.max = function max(array) {
    if (array == undefined || array.length == 0) return 0;
    let maximum = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= maximum) {
            maximum = array[i];
        }
    }
    return maximum;
};

exports.avg = function avg(array) {
    let sum = 0;
    if (array == undefined || array.length == 0) return 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    const avg = sum / array.length;
    return avg;
};
