export const normalizeText = ( text, replacement = "_" ) =>
    text
        .toLowerCase()
        .replace(/[': ]/g, ( letter ) => ( letter === " " ? replacement : "" ));
