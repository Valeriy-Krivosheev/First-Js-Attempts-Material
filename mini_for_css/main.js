let fs = require('fs');
let fileContent = fs.readFileSync('file.css', 'utf8');
var newstr = fileContent.replace(/\s/g, '')

fs.writeFile('style.min.css', newstr, error => { });