const cmd = process.argv[2];

const write = require('./write');

write(cmd);

const read = require('./read');

console.log(read());