const fs = require("fs");

// reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// writing files
fs.writeFile("./docs/blog2.txt", "Hello World 2", (err, data) => {
  console.log("File was written");
});

// directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created");
  });
} else {
  // deleting folders
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted");
  });
}
// deleting files 
if (fs.existsSync('./docs/blog1.txt')) {
    fs.unlink('./docs/blog1.txt', (err) => {
        if (err) {
            console.log(err);
          }
          console.log("File Deleted");
    })
}
