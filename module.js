

 //var os= require ('os')
 //os.hostname
 //console.log(os)


// var fs = require('fs');
// fs.readFile("./text.txt","utf8",function(err,data){
//     if(err)
//         console.log("error in reading file");
//     else
//         console.log(data);
// });

// var cowsay = require('cowsay')
// console.log(cowsay.say({text : "example text",e:"%%" ,T:"&&"}))

// var calci=require('./calci')
// console.log(calci.add(12,24))
// console.log(calci.sub(12,24))
// console.log(calci.mul(12,24))
// calci.div(12,2,(err,result)=>{
//     if(err)
//         console.log(err)
//     else
//         console.log(result)
// })

// var myPenguin ={name:"Akshaya",origin:"south Indi",livingarea:"ongole"};
// var penguin=JSON.stringify(myPenguin);
// console.log(penguin)
var chalk = require('chalk')

console.log(chalk.blue('Hello world!'));
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));


