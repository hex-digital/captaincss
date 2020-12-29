const pxToRem = (px, base = 16) => `${px / base}rem`;
const pxToRemPair = (px, base = 16) => ({ [px]: pxToRem(px, base) });
const pxToEm = (px, base = 16) => `${px / base}em`;
const pxToEmPair = (px, base = 16) => ({ [px]: pxToEm(px, base) });
const pxPair = (px) => ({ [px]: `${px}px` });

module.exports = { pxToRem, pxToRemPair, pxToEm, pxToEmPair, pxPair };
