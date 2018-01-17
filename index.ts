import * as program from 'commander';

program
  .version('0.0.0')
  .option('-p, --port <n>', 'Port number to listen to', parseInt)
  .parse(process.argv);

const portNumber = program.port || 6767;
console.log(portNumber);
