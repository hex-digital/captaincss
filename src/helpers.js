let baseFontSize = 16;

const setBaseFontSize = (px) => (baseFontSize = px);

const pxToRem = (px) => `${px / baseFontSize}rem`;
const pxToRemPair = (px) => ({ [px]: pxToRem(px) });
const pxToEm = (px) => `${px / baseFontSize}em`;
const pxToEmPair = (px) => ({ [px]: pxToEm(px) });
const pxPair = (px) => ({ [px]: `${px}px` });

module.exports = { setBaseFontSize, pxToRem, pxToRemPair, pxToEm, pxToEmPair, pxPair };
