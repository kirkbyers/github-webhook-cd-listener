import * as program from 'commander';
import * as express from 'express';

const app = express();

program
  .version('0.0.0')
  .option('-p, --port <n>', 'Port number to listen to', parseInt)
  .parse(process.argv);

const portNumber = program.port || 6767;

console.log(`Starting Webhook listener on port ${portNumber}`);

app.post('/', (req, res) => {
  console.log(req);
  res.send(200);
});

app.listen(portNumber);
