pragma solidity ^0.4.17;

contract RecordFactory{

    address[] public deployedRecords;

    function createRecord(string  name, string  id, string  role, string orgType, string provider,
                          uint walletBalance, address walletID, string smartRecord) public{

        address newData = new Registeration(msg.sender, name, id, role, orgType, provider,
                                walletBalance, walletID, smartRecord);

        deployedRecords.push(newData);
    }

    function getDeployedRecords() public view returns (address[]){
        return deployedRecords;
    }
}

contract Registeration {
    
    struct RegisterationData{
        string  name;
        string  id;
        string  role;
        string  orgType;
        string  provider;
        uint   walletBalance;
        address walletID;
        string  smartRecord;
    }

    RegisterationData[] public data;

    // This is an address, who is managing this record
    address public manager;

    function Registeration(address creator, 
                          string  name, string  id, string  role,
                         string orgType, string provider, uint walletBalance,
                         address walletID, string smartRecord) public {

        manager = creator;

        RegisterationData memory newRegisteration = RegisterationData({
            name : name,
            id : id,
            role : role,
            orgType : orgType,
            provider : provider,
            walletBalance : walletBalance,
            walletID: walletID,
            smartRecord: smartRecord
        });

        data.push(newRegisteration);

    } 


    function getSummary() public view returns (
    string, string, string, string, string, uint, address, string) {
        return (
        data[0].name, 
        data[0].id, 
        data[0].role, 
        data[0].orgType, 
        data[0].provider, 
        data[0].walletBalance, 
        data[0].walletID, 
        data[0].smartRecord 
    );
    }

    function getRequestsCount() public view returns (uint) {
        return data.length;
    }

}
