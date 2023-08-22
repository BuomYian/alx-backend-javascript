const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: !process.stdin.isTTY, // Use terminal mode only if stdin is a TTY
});

console.log('Welcome to Holberton School, what is your name?');
rl.on('line', (input) => {
  if (input.trim() === '') {
    rl.close();
  } else {
    console.log(`Your name is: ${input}`);
  }
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
