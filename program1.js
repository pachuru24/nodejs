// console.log("Example node js application")
// var a=5
// var b=6
// var c=a+b
// console.log("addition"+c)

// var number =[45,4,9,16,25];
// for(var x in number){
//     console.log(number[x])
// }

// var number =[45,4,9,16,25];
// number.forEach(myFunction)
// function myFunction(value){
//     console.log(value);
// }

// function verifylogin(user,pwd,callback){
//     if(pwd=="pwd1")
//         callback(null,"correct login")
//     else
//         callback("incorrect login",null)
// }

// verifylogin("user1","pwd2",function(err,result){
// if(err)
//     console.log("invalid");
// else
//     console.log("valid user")
// })

// console.log("program is starting");
// setTimeout(() => {
//     console.log("inside timeout")

// },2000);\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// console.log("after time out")
// console.log("program ending")

function alphabet_order(str){
    return str.split('').sort().join('');

}
console.log(alphabet_order("webmasters"));
