// const get1DGaussianKernel = (r, sigma) => {
//     let arr = [];
//     let coefficient = 1/(Math.sqrt(2 * Math.PI * Math.pow(sigma, 2)));
//     let exponent;
//     for (let i = -r; i <= r; i++) {
//         exponent = Math.exp(-(Math.pow(i, 2))/(2*Math.pow(sigma, 2)))

//         arr[i + r] = coefficient * exponent;
//     }
//     return arr;
// }

// Truncate the kernel as it is symmetrical - half of this data is irrelevant.
const getSeparableKernel = (r, sigma) => {

    let sum = 0;
    let arr = [];
    let coefficient = 1/(Math.sqrt(2 * Math.PI) * sigma);
    let exponent;
    for (let i=0; i <= r; i++) {
        exponent = Math.exp(-Math.pow(i, 2)/(2 * Math.pow(sigma, 2)))
        arr[i] = coefficient * exponent;
        sum += i == 0 ? arr[i] : 2 * arr[i];
    }

    for (let i = 0; i <= r; i++) {
        arr[i] /= sum;
    }

    return arr;
}

export {getSeparableKernel}
