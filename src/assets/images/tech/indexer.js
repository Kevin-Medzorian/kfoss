// Writes the names of all logos in this directory to the 'index.json' file, to be used in the app later.
const fs = require('fs');

fs.readdir(__dirname, (_, files) => {
    files = files.filter(x => x.endsWith('.svg'));
    output = {icons: files}
    fs.writeFileSync('index.json', JSON.stringify(output), 'utf-8') 
});