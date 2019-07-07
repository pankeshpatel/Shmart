pragma solidity ^0.4.17;

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


        uint approvalCount;

        // this is for votting mechanism
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

    // Lisy of addresses for every person
    // who has donated the money.
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

        approvers[msg.sender] = true;
        approversCount++;
    }

    // Called by the manager to create a new
    // 'spending request'
    function createRequest(string description, uint value, address recipient) public restricted {
       // The following are Data holding places:

       // Storage -- holds data between function calls
       // Pretty much like a computer's hard drive.
       // The declared variables in this contract
       // is an example of storage.

       // Memory -- Temporary place to store Data
       // Pretty much like a computer's RAM.
       // the function ARGUMENT (e.g., minimumContribution)
       // is an example of "memory".

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
    // a spending request
    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    // After a request has gotten enough approvals,
    // the manager can call this to get money sent
    // to the vendor.
    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

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
