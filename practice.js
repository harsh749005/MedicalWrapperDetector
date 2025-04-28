var a = 12;
a = "harsh";
console.log(a);
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "Admin";
    UserRoles["SuperAdmin"] = "Super";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.ADMIN);
//not returning any value set type to void
function abcd() {
    console.log("harsh");
}
// if function is returning something 
//then you have to mention it type
function efgh() {
    return 12;
}
var v;
v = 34;
var c;
// Never means it won't go ahead
// function sd():never{
//     while(true){
//     }
// }
// sd();
// console.log("hi")
// Type Inference
// Inference means varaiable itself recognise what type of value it has stored
var y = 34;
// so if u hover y will have type number value
// Type annotaions
var l;
l = 34;
l = "hysdf";
l = true;
function kgit(a, b) { }
function account(obj) {
    console.log(obj.email);
}
account({ name: "harsh", email: "sd", password: "sdf" });
