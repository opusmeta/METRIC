const fs = require('fs');
let content = fs.readFileSync('./components/TorusScene.tsx', 'utf8');

// Find all occurrences of the isMobile declaration
const searchStr = 'const isMobile = window.innerWidth <= 768 || navigator.hardwareConcurrency <= 4;';
let firstIndex = content.indexOf(searchStr);

if (firstIndex !== -1) {
    let secondIndex = content.indexOf(searchStr, firstIndex + 1);
    while (secondIndex !== -1) {
        // Remove the subsequent occurrences
        content = content.substring(0, secondIndex) + content.substring(secondIndex + searchStr.length);
        secondIndex = content.indexOf(searchStr, firstIndex + 1);
    }
}

fs.writeFileSync('./components/TorusScene.tsx', content);
