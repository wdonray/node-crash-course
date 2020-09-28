const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog1.txt", {
  encoding: "utf-8",
});

const writeStream = fs.createWriteStream("./docs/blog3.txt");

//  Event Listener (Listens to data event, every time we get data fire a callback)
readStream.on("data", (chunk) => {
  console.log("---- NEW CHUNK ----");
  console.log(chunk);
  writeStream.write('\n---- NEW CHUNK ----\n');
  writeStream.write(chunk);
});

// piping does same thing as above
readStream.pipe(writeStream);