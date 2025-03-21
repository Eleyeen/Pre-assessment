const capitalizeFirstLetter = string => string ? string.charAt(0).toUpperCase() + string.slice(1) : '';
const smallFirstLetter = string => string ? string.charAt(0).toLowerCase() + string.slice(1) : '';

const priceFromat = (price) => {
    if (price / Number('10000000') >= 1) {
        const r = price / Number('10000000');

        return isFloat(r) ? `${r.toFixed(2)} Cr` : `${r} Cr`
    } else if (price / Number('100000') >= 1) {
        const r = price / Number('100000');

        return isFloat(r) ? `${r.toFixed(2)} Lac` : `${r} Lac`
    } else if (price / 1000 >= 1) {
        const r = price / 1000;

        return isFloat(r) ? `${r.toFixed(2)} K` : `${r} K`
    }

    return price;
}



const errorMessageConsole = (error) => {
    // eslint-disable-next-line no-console
    console.log('=============================');
    // eslint-disable-next-line no-console
    console.log('Message:', error.response.data.message);
    // eslint-disable-next-line no-console
    console.log('Error:', error.response);
    // eslint-disable-next-line no-console
    console.log('==============================');
}



export {
    capitalizeFirstLetter,
    smallFirstLetter,
    priceFromat,
    errorMessageConsole
}