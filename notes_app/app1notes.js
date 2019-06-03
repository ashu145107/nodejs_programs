//adding npm pkg chalk
const chalk = require('chalk')

//adding npm pkg validator
const validator = require('validator')

//adding npm pkg yargs
const yargs = require('yargs')

//getting function from another file to this file

const notes= require('/home/ashu/Desktop/Ashu_programs/notes_app/notes.js')

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

        notes.addNotes(argv.title, argv.body)
        
    }
    
})
yargs.parse()
//console.log(yargs.argv)

//command for removing node

yargs.command({
    command: 'remove',
    describe: 'remove a new node',
    
    builder: {
        title:{
            describe:'Note Title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function(argv){

        notes.removeNotes(argv.title)
    }
    
})
