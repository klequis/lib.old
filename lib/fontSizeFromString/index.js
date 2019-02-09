"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontSizeFromString = void 0;

const fontSizeFromString = (str, percentChange) => {
  if (str.endsWith('rem')) {
    const idx = str.indexOf('rem', 0);
    const num = Number.parseFloat(str.substring(0, idx));
    return `${num * percentChange}rem`;
  } else {
    // eslint-disable-next-line
    throw new Error("ERROR: Display1.fontSizeFromString: string must end in 'rem'");
  }
};

exports.fontSizeFromString = fontSizeFromString;