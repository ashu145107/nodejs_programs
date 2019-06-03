const fs = require('fs')

const getNotes = ()=>{
    return 'Your notes...';
}
 
const addNotes = function(title,body){
    const notes = loadNotes()

    const duplicatenote = notes.filter(function(notes){
        return notes.title === title || notes.body === body
    })
    
    if(duplicatenote.length==0)
    {
        notes.push({
        title:title,
        body: body
    })
    saveNotes(notes)
    console.log('title and body added successfully')
}else{
    console.log('Note title and body are taken!')

    }
}

const saveNotes=(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes11.json',dataJSON)

}

const loadNotes = ()=>{
    try{
        const databuffer =fs.readFileSync('notes11.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
        
    }catch(e){
        return []
    }
     
}
//removing notes code

const removeNotes =(title)=>{

    console.log(title)
}


module.exports={
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes
}
