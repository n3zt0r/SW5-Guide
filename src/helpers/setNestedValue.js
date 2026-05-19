export const setNestedValues = (obj, ...args) => {
    const value = args.pop();                                               // The last argument is the value to assign.
    const keys = args;                                                      // The rest of the arguments are the keys for nesting.

    let current = obj;                                                      // Start with the original object.

    for (let i = 0; i < keys.length - 1; i++) {                             // Iterate through the keys except the last one.
        current[keys[i]] ??= typeof keys[i + 1] === "number" ? [] : {};     // if the key doesn't exist. Create an array if the key is a number, otherwise create an object.
        current = current[keys[i]];                                         // Move to the next level of nesting.
    }

    current[keys.at(-1)] = value;                                           // Assign the value to the last key.
}