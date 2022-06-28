module.exports = function reverse(n) {
    const subArr = String(n).split('');
    let arr = ""
    let subRes = ''
    if (subArr[0] === '-') {
        subArr.shift();

        arr = subArr.reverse();

    } else arr = subArr.reverse();

    arr.forEach(e => {
        subRes += e
    });

    return Number(subRes);
}
