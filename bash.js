const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");

process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  const cmd = input.split(" ")[0];
  // cmd === 'cat'
  const args = input.split(" ").splice(1);
  // args == ['test.txt']

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if (cmd === "cat") {
    cat(args);
  }
});
