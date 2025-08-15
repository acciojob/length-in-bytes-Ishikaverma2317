const byteSize = (str) => {
    return new Blob([str]).size; // Calculates size in bytes
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
