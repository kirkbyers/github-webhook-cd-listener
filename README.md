## Install

`npm i -g ghcd`

## Usage

1) Start up the listening server with

`ghcd -p <port-number> -e <path-to-script>`

2) Create a script at `path-to-script` that updates your source code and runs the commands to stop and re-deploy your app.

3) Expose `port-number` on your server for HTTP requests.

4) Add `<server-URL>:<port-number>` to github webhooks on your project's repository to send a POST request on github events.

If everything has gone correctly, the script at `path-to-script` will execute when you trigger your github webhook.

### Port Number

Port number to listen for POST requests on

### Path to script

Path to script to execute on POST request

## Notes

This is a temporary solution for continuous delivery.

Currently there's no secret support.

## Roadmap

- Secret Support
  - Support github option to send a secret to verify against before executing script