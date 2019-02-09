"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameFromEmail = void 0;

const nameFromEmail = email => {
  if (email === undefined) {
    return undefined;
  }

  const idx = email.indexOf('@');
  return email.slice(0, idx);
};

exports.nameFromEmail = nameFromEmail;