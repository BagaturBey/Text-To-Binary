const inputText = document.getElementById('inputText');
const convertToBinary = document.getElementById('convertToBinary');
const convertToText = document.getElementById('convertToText');
const result = document.getElementById('result');

convertToBinary.addEventListener('click', () => {
    const text = inputText.value;
    const binary = textToBinary(text);
    result.textContent = binary;
});

convertToText.addEventListener('click', () => {
    const binary = inputText.value;
    const text = binaryToText(binary);
    result.textContent = text;
});

function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}
