# Native Federation for Angular (PoC)
This is just a Proof of Concept (PoC) based on https://github.com/angular-architects/module-federation-plugin to test code federation at runtime between an application shell and various micro frontends. This PoC uses Angular Standalone Components instead of Angular Modules.

## Prerequisites
You must work through the following instructions in order to build each project:
* Download and install NodeJS LTS version from https://nodejs.org/en
* Install Angular V17+ globally with `npm install -g @angular/cli`
* Install TypeScript V5+ globally with `npm install -g typescript`

## Further instructions
Follow the README of each project:
* [Readme for customer-ui-lib](./customer-ui-lib/README.md)
* [Readme for data-lib](./data-lib/README.md)
* [Readme for mfe1](./mfe1/README.md)
* [Readme for mfe2](./mfe2/README.md)
* [Readme for mfe3](./mfe3/README.md)
* [Readme for shell](./shell/README.md)