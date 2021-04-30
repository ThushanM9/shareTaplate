console.log("HEllo world");
const file = "../src/config.ts";

var fs = require("fs");
fs.readFile(file, "utf8", function(err, data) {
  console.log("Replacing Base URL to QA 🟡");
  let searchString = `homepage: "http://localhost:3000",`;
  let re = new RegExp("^.*" + searchString + ".*$", "gm");
  let formatted = data.replace(
    re,
    `homepage: "https://qa-sl.fusionx.biz/web/yard-management",`
  );

  fs.writeFile(file, formatted, "utf8", function(err) {
    if (err) return console.log(err);
  });
  console.log("Replaced Base URL to QA 🟢");
});
