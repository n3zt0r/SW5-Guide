export const cleanText = (text) =>
    text
        .toLowerCase()
        .replace(/[': ]/g, (letter) => (letter === " " ? "_" : ""));
