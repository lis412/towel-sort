
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (typeof matrix === 'undefined') return [];
    return matrix.reduce((res, line, index) => res.concat( !(index % 2) ? line : line.reverse()), []);
}
