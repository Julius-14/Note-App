const fs = require('fs');

const write = function(data = 'nothing'){
   fs.writeFileSync('note.txt', data);

}

module.exports = write;