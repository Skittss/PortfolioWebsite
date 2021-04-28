const get1DGaussianKernel = (r, sigma) => {
    let arr = [];
    let coefficient = 1/(Math.sqrt(2 * Math.PI * Math.pow(sigma, 2)));
    let exponent;
    for (let i = -r; i <= r; i++) {
        exponent = Math.exp(-(Math.pow(i, 2))/(2*Math.pow(sigma, 2)))

        arr[i + r] = coefficient * exponent;
    }
    return arr;
}


// Truncate the kernel as it is symmetrical - half of this data is irrelevant.
const getTrunc1DKernel = (r, sigma) => {
    let arr = [];
    let coefficient = 1/(Math.sqrt(2 * Math.PI * Math.pow(sigma, 2)));
    let exponent;
    for (let i=0; i <= r; i++) {
        exponent = Math.exp(-(Math.pow(i, 2))/(2*Math.pow(sigma, 2)))
        arr[i] = coefficient * exponent;
    }

    return arr;
}

export {get1DGaussianKernel}
export {getTrunc1DKernel}