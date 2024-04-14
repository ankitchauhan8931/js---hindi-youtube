const accountId = 122002
let accountEmail = "ankit@google.com"
var accountPassword = "1235"
accountCity = "kanpur"
let accountState

//accountId = 2 // not allowed

accountEmail ="ac@ac.com"
accountPassword = "456456"
accountCity = "Jaipur"

/*

Prefer not to use var
because of issue in block scope and functional scope

*/



console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])