pragma solidity ^0.4.17;


contract RecordFactory{

    address[] public deployedRecords;

    function createRecord(string  name, string  id,
                          string  role, string org_type, string provider,
                          uint wallet_balance, address wallet_ID, string smart_record) public{

        address newData = new registeration(msg.sender,
                                name, id, role, org_type, provider,
                                wallet_balance, wallet_ID, smart_record);

        deployedRecords.push(newData);
    }

    function getDeployedRecords() public view returns (address[]){
        return deployedRecords;
    }

}

contract registeration {

    struct Reg_data{
        string  name;
        string  id;
        string  role;
        string org_type;
        string provider;
        uint wallet_balance;
        address wallet_ID;
        string smart_record;
    }

    Reg_data[] public data;

    // This is an address of the person
    // who is managing this campaign
    address public manager;

    function registeration(address creator, string  name, string  id, string  role,
                      string org_type, string provider, uint wallet_balance,
                      address wallet_ID, string smart_record) public {

        manager = creator;

          Reg_data memory newRegisteration = Reg_data({
            name : name,
            id : id,
            role : role,
            org_type : org_type,
            provider : provider,
            wallet_balance : wallet_balance,
            wallet_ID: wallet_ID,
            smart_record: smart_record
        });

        data.push(newRegisteration);

    }


    // function createRequest(string  name, string  id, string  role,
    //                   string org_type, string provider, uint wallet_balance,
    //                   address wallet_ID, string smart_record) public {

    //     Reg_data memory newRegisteration = Reg_data({
    //         name : name,
    //         id : id,
    //         role : role,
    //         org_type : org_type,
    //         provider : provider,
    //         wallet_balance : wallet_balance,
    //         wallet_ID: wallet_ID,
    //         smart_record: smart_record
    //     });

    //     data.push(newRegisteration);
    // }

}
