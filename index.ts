import { exec } from 'child_process';
import * as program from 'commander';
import * as express from 'express';
import { resolve } from 'path';

const app = express();

program
  .version('0.1.0')
  .option('-p, --port <n>', 'Port number to listen to', parseInt)
  .option('-e, --exec <s>', 'Relative path to script to execute on webhook POST')
  .option('-s, --secret <s>', 'Webhook secret to compare to on POST')
  .parse(process.argv);

const portNumber = program.port || 6767;
const scriptInputPath = program.exec || './webhook.sh';
const scriptPath = resolve(process.cwd(), scriptInputPath);

console.log(`Starting Webhook listener on port ${portNumber}`);

app.post('/', (req, res) => {
  exec(`sh ${scriptPath}`);
  res.sendStatus(200);
});

app.listen(portNumber);
