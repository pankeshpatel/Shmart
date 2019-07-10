pragma solidity ^0.4.17;


// This is to list the address of  all deployed contracts.
// The deployed contract's cost will be charged to the Caller's
// account. Because he has been calling.

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        address newCampaign = new Campaign(minimum, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

// Each Campaign contract has its own address in the Blockchain.

contract Campaign {

    struct Request {
        // Describes why the request is being created.
        string description;

        // Amount of money that the manager wants
        // to send to the vendor
        uint value;

        // Address that the money will be sent to
        address recipient;

        // True if the request has already
        //been processed (money sent)
        bool complete;

        // Tracks number of "Yes" votes for this
        // request.
        uint approvalCount;

        // this is for votting mechanism
        // It tracks who has voted on a given request.

        // Every Request in a campaign contract will
        // have its own set of approvals.
        mapping(address => bool) approvals;
    }

    // List of requests that the manager
    // has created.
    Request[] public requests;

    // This is an address of the person
    // who is managing this campaign
    address public manager;

    // Minimum donation required to be considered
    // a contributor or approver
    uint public minimumContribution;

    // List of addresses for every person
    // who has donated the money.

    // mapping
    // It is the collection of key value pairs
    // All the keys must be of the same type, and
    // all values must be of the same type.

    // mapping
    // It takes constant search time.
    // This is because it has HASH index.
    // It maps to the hashing values.

    // address --
    // the keys are "address" of people, who donates to
    // the contract.

    // bool --
    // the values are boolean (True/ False).
    // By default value is "False"
    mapping(address => bool) public approvers;


    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    // Constructor function that sets the
    //minimumContribution and the owner.
    function Campaign(uint minimum, address creator) public {
        // we can reterive the address through
        // msg.sender
        manager = creator;
        minimumContribution = minimum;
    }

    // Called when someober wants to donate money
    // to the campaign and become an approver
    function contribute() public payable {
        require(msg.value > minimumContribution);

        // msg.sender is a key,
        // "true" assignment is value.
        approvers[msg.sender] = true;
        approversCount++;
    }

    // Called by the manager to create a new
    // 'spending request'
    function createRequest(string description, uint value, address recipient) public restricted {
       // The following are Data holding places:

       // 1. Storage -- holds data between function calls
       // Pretty much like a computer's hard drive.
       // The declared variables in this contract
       // is an example of storage.


       // 2. Memory -- Temporary place to store Data
       // Pretty much like a computer's RAM.
       // the function ARGUMENT (e.g., minimumContribution)
       // is an example of "memory".


       // We have been creating "newRequest" temporarily.
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           approvalCount: 0
        });

        requests.push(newRequest);
    }

    // Called by the each contributor to approver
    // a spending request.

    // Req1 :  A contributor cannot vote multiple time
    // on a single request.

    // Req2:  Resiliant to many many contributors.

    // The goal of approveRequest() is to approve a specific
    // request. Therefore, the caller of this function has
    // to provide "index".
    function approveRequest(uint index) public {

        // "requests" is an array. The following
        // will access the index of the requests.
        Request storage request = requests[index];

        // This would check the address of the contributor
        // (who has called approveRequest(..)) exists in
        // approvers[]

        // Check if the approvers exists
        require(approvers[msg.sender]);

        // check if the callers has not voted before.
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    // After a request has gotten enough approvals,
    // the manager can call this to get money sent
    // to the vendor.
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        // Check that more than 50% of contributors
        // have approved the request.
        require(request.approvalCount > (approversCount / 2));

        // Check wheather the request is processed.
        // If it is processed (True), then exist the function
        // If is is not processed (False), then execute the function
        // to the next line of this function.
        require(!request.complete);

        // Transfer the value to the recipient.
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
      uint, uint, uint, uint, address
      ) {
        return (
          minimumContribution,
          this.balance,
          requests.length,
          approversCount,
          manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
  }
