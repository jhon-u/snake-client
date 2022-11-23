// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') process.exit();
  if (key === 'w') return "Move: up";
  if (key === 'a') return "Move: left";
  if (key === 's') return "Move: down";
  if (key === 'd') return "Move: right";
};

module.exports = {
  setupInput
};