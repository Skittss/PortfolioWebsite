// Truncate the kernel as it is symmetrical - half of this data is irrelevant.
const getSeparableKernel = (r, sigma) => {

    // console.log("generated kernel")

    let sum = 0;
    let arr = [];
    let coefficient = 1/(Math.sqrt(2 * Math.PI) * sigma);
    let exponent;
    for (let i=0; i <= r; i++) {
        exponent = Math.exp(-Math.pow(i, 2)/(2 * Math.pow(sigma, 2)))
        arr[i] = coefficient * exponent;

        // Kernel sum used in normalisation - account for the fact we only generate one half of the kernel:
        sum += i === 0 ? arr[i] : 2 * arr[i];
    }

    // Normalise
    for (let i = 0; i <= r; i++) {
        arr[i] /= sum;
    }

    return arr;
}

export {getSeparableKernel}