# SHMART - Smart Health Monitoring Analysis & Remediation Tracking
This repository contains code for SHMART Marketplace using Ethereum blockchain.


**How to run this project**

- Open the root directory of this project in terminal. In our case, the root directory is `Shmart`. We
have tested this code on Windows.
- Type `npm run dev` or `node server.js` in terminal.


**Directory structure**

-  `Ethereum` directory contains Ethereum related code. The `Ethereum` directory contains
    two directories `build`, `contracts` and files. We provide the details as follows:
      - `Contract` directory contain contract files. It contains `.sol` files.
      - `Build` directory contains compiled contracts.
      - Files
        - `compile.js` file compiles the smart contracts. The compiled contracts are generated into `Build` directory. We compile each contract separately. Therefore, the file name convention is `compile-<contract-name>.js` file responsible to compile `<contract-name>` contract.
        - `deploy.js` file deploys smart contracts on Rinkby Test Blockchain network.
        -  `web.js` file configure web3 with a metamask provider.
        -  `factory.js` tells the web3 that a deployed copy of the contract exists.


- `test` directory contains files to test the compiled contracts. The file name convention is  `<contract-name>.test.js`. The contracts are tested on local network -- Ganache.

- `.next` directory is automatically created by the project.
- `pages` directory contains react components that get turned into a  webpages. E.g., `localhost:3000/<react-page-name.js>`, `localhost:3000/<folder-name>/<react-page-name.js>`
  - If the file name is `index.js`, the react will assume it for the landing page of the project.

- `components` directory contains the code files for common UI components, such as Layout, Header and so on.
