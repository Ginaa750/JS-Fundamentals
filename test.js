const args = process.argv.length;
console.log(args);
if (args === 2) {
  console.log("No argument");
} else if (args === 4) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}


