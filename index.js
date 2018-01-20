#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var program = require("commander");
var express = require("express");
var path_1 = require("path");
var app = express();
program
    .version('0.1.0')
    .option('-p, --port <n>', 'Port number to listen to', parseInt)
    .option('-e, --exec <s>', 'Relative path to script to execute on webhook POST')
    .option('-s, --secret <s>', 'Webhook secret to compare to on POST')
    .parse(process.argv);
var portNumber = program.port || 6767;
var scriptInputPath = program.exec || './webhook.sh';
var scriptPath = path_1.resolve(process.cwd(), scriptInputPath);
console.log("Starting Webhook listener on port " + portNumber);
app.post('/', function (req, res) {
    child_process_1.exec("sh " + scriptPath);
    res.sendStatus(200);
});
app.listen(portNumber);
//# sourceMappingURL=index.js.map