const schema = {
  type: "object",
  properties: {}
};

const rtlcss = require("rtlcss");
const cssDiff = require("@romainberger/css-diff");

module.exports = function(source) {
  const rtl = rtlcss.process(source);
  const drtl = cssDiff(source, rtl);
  const dltr = cssDiff(rtl, source);
  const intersection = cssDiff(dltr, source);
  return `
    ${intersection}

    :host-context([dir="rtl"]) {
        ${drtl}
    }

    :host-context([dir="ltr"]) {
        ${dltr}
    }
  `;
};
