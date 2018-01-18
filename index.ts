import { exec } from 'child_process';
import * as program from 'commander';
import * as express from 'express';
import { resolve } from 'path';

const app = express();

program
  .version('0.0.0')
  .option('-p, --port <n>', 'Port number to listen to', parseInt)
  .option('-s --script <s>', 'Relative path to script to run on webhook POST')
  .parse(process.argv);

const portNumber = program.port || 6767;
const scriptInputPath = program.script || './webhook.sh';
const scriptPath = resolve(__dirname, scriptInputPath);

console.log(`Starting Webhook listener on port ${portNumber}`);

app.post('/', (req, res) => {
  exec(`sh ${scriptPath}`);
  res.sendStatus(200);
});

app.listen(portNumber);
