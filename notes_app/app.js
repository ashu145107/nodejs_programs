//adding npm pkg chalk
const chalk = require('chalk')

//adding npm pkg validator
const validator = require('validator')

//adding npm pkg yargs
const yargs = require('yargs')

//getting function from another file to this file
console.log('----this is file we get it"s path and msg----')
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)

//validator function examples...
console.log('------this is validator pkg Examples------')
console.log(validator.isEmail('ashu@example.com'))

console.log(validator.isURL('http://www.lead.in'))

console.log(validator.matches('hello','el'))

console.log(validator.isUppercase('HELL'))

console.log(validator.isAscii('129'))

console.log('-----this is example which get utils.js file and execute its method-----');
const add = require('./utils.js')

const sum  = add(4 , -2)

console.log(sum)

// Chalk npm package function examples
console.log('-----this is example of Chalk pkg-----')
console.log(chalk.rgb(255,136,0).bold('Orange!'))
console.log(chalk.bgRed('This is error'))
console.log(chalk.bgGreen('Success'))
console.log(chalk.bgWhiteBright('Hello I am Bright white'))
console.log(chalk.red('This is error'))
console.log(chalk.blue('hey there i am blue see'))
console.log(chalk.gray('Sky is not gray'))
console.log(chalk.hex('#FF8800').bold('Orange!'))
console.log(chalk.hwb(32,100,0).bold('Orange!'))
console.log(chalk.hsv(32,100,150).bold('Orange!'))
console.log(chalk.ansi256('hello  color'))
console.log(chalk.blue('This is Automatic nodemon change'))
console.log(chalk.bgBlue('This is Automatic nodemon change'))
console.log("exit nodemon by using key ctrl+c ")

// following example for getting command line argument from user
console.log('-----this is example of command line argument -----')
console.log(process.argv[2])
console.log(process.argv)

//with conditions
const command1 = process.argv[2]
if(command1 == 'add'){
    console.log('adding in progess !!')
}
else if(command1 == 'remove'){
    console.log('removing in progess !!')
} 

console.log('-----this is example of yargs-----')


//create command by using yargs
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    
    builder: {
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        },
    body: {
        describe:'Note Title',
        demandOption:true,
        type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title :',+argv.title)
        console.log('Body :',+argv.body)
    }
    
})
yargs.parse()
//console.log(yargs.argv)
