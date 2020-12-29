import punycode from 'punycode';
export const emojiPath = (char) => `node_modules/emojiimages/imgs/${punycode.ucs2.decode(char).map(num => num.toString(16)).join("-")}.png`
