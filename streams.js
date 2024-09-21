const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'}); //either write this encoding wala part or write toString()
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk.toString());   //either write toString or write {encoding : 'utf8} its the same anyways.
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk); 
});

// piping
// readStream.pipe(writeStream);
