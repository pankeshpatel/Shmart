# SHMART - Smart Health Monitoring Analysis & Remediation Tracking
This repository contains code for SHMART Marketplace using Ethereum blockchain.




**Directory structure**

-  `Ethereum` directory contains Ethereum related code. The `Ethereum` directory contains
    two directories `build`, `contracts` and files. We provide the details as follows:
      - `Contract` directory contain contract files. It contains `.sol` files.
      - `Build` directory contains compiled contracts.
      - Files
        - `compile.js` file compiles the smart contracts. The compiled contracts are generated into `Build` directory. We compile each contract separately. Therefore, the file name convention is `compile-<contract-name>.js` file responsible to compile `<contract-name>` contract.
        - `deploy.js` file deploys smart contracts on Blockchain network.


- `test` directory contains files to test the compiled contracts. The file name convention is  `<contract-name>.test.js`.
