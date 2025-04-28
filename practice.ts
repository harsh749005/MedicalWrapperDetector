var a:any =12
a = "harsh"

console.log(a);

enum UserRoles {
    ADMIN = "Admin",
    SuperAdmin="Super"
}

console.log(UserRoles.ADMIN)

//not returning any value set type to void
function abcd ():void{
    console.log("harsh")
}

// if function is returning something 
//then you have to mention it type
function efgh():number{
    return 12
}

let v:number|null;
v =34;

let c:undefined;

// Never means it won't go ahead
// function sd():never{
//     while(true){

//     }
// }
// sd();
// console.log("hi")


// Type Inference
// Inference means varaiable itself recognise what type of value it has stored
let y = 34
// so if u hover y will have type number value


// Type annotaions

let l :number | string | boolean ;
l =34
l = "hysdf"
l = true
function kgit(a:number,b:number):void{}

// Interfaces & type aliases
//Defining interfaces
// Using interfaces to define object shapes
//  Extending interfaces
// type aliases
// intersection types

// interface kaa hai shapes ko define krna shape yani ki , maan lo aap ne koi object bnaaya toh uas me aap kya-kya define kr rhae ho
// some what schema
//? represent optional  
interface User{
    name:string,
    email:string,
    password?:string
}

function account(obj:User){
    console.log(obj.email)
}

account({name:"harsh",email:"sd",password:"sdf"})


// extending interface
interface Admin extends User{}

function bhdc(obj:Admin){
    obj.email
}

// 2 interface of same name get merged into one
interface olx {
    name:string
}

interface olx {
    email:string
}

function abcd2(obj: olx){
    obj.email
}