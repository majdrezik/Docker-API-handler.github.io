const app = require("express")();
const http = require("http"); //include the http library into http variable
const fs = require("fs"); //for reading webpage from another html file
const path = require("path");
const dotenv = require("dotenv");
const PORT = 8088;
dotenv.config();
const os = require("os");
const envFilePath = path.resolve(__dirname, ".env");
// read .env file & convert to array
const readEnvVars = () => fs.readFileSync(envFilePath, "utf-8").split(os.EOL);

app.listen(PORT, () => {
  console.log(`\n\nit's alive on http://localhost:${PORT}`);
  // console.log(process.env.DATE = 1111)
});

// /creation - provides the time the image was built
app.get("/creation", (req, res) => {
  fs.readFile("date.txt", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found!");
    } else {
      setEnvValue("DATE", data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`Image Creation Date: ${getEnvValue("DATE")}`); //all the info inside date.txt file
      //delete after
      console.log(getEnvValue("DATE"));
      console.log(data.toString());
      console.log(process.env.DATE === undefined ? "true" : "false");
    }
    res.end();
  });
  console.log("/creation is called.");
});

const getEnvValue = (key) => {
  // find the line that contains the key (exact match)
  const matchedLine = readEnvVars().find((line) => line.split("=")[0] == key); //deleted one =
  // split the line (delimiter is '=') and return the item at index 2
  return matchedLine !== undefined ? matchedLine.split("=")[1] : null;
};

const setEnvValue = (key, value) => {
  const envVars = readEnvVars();
  const targetLine = envVars.find((line) => line.split("=")[0] === key);
  if (targetLine !== undefined) {
    // update existing line
    const targetLineIndex = envVars.indexOf(targetLine);
    // replace the key/value with the new value
    envVars.splice(targetLineIndex, 1, `${key}="${value}"`);
  } else {
    // create new key value
    envVars.push(`${key}=${value}`);
  }
  // write everything back to the file system
  fs.writeFileSync(envFilePath, envVars.join(os.EOL));
  console.log("Date updated successfully...");
};

/**
 *  dynamic parameters / value provided when the image is built
 */
app.get("/dynamic", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(JSON.stringify(process.env));
  console.log(process.env);
  res.end();
  console.log("/dynamic is called.");
});

/**
 *  provides the dockerfile the image was created with (in the image)
 */
app.get("/dockerfile", (req, res) => {
  //res.sendFile(path.join(__dirname, "Dockerfile"))

  fs.readFile("Dockerfile", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found!");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data); //all the info inside Dockerfile
    }
    res.end();
    console.log("/dockerfile is called.");
  });
});

// returns the index.html file
app.get("/", (req, res) => {
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File Not Found!");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data); //all the info inside index.html
    }
    res.end();
  });
});
