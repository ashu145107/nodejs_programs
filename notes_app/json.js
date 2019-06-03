const fs = require('fs')

const book ={
    title :'This book is mine',
    author :'Ashutosh D.Bharati'
}

const bookJSON = JSON.stringify(book)
console.log(bookJSON)

 const bookJSON1 = JSON.parse(bookJSON)
 console.log(bookJSON1)

 fs.writeFileSync('createtest.json',bookJSON)
const buffer = fs.readFileSync('createtest.json')
const dataJSON = buffer.toString()
const data =JSON.parse(dataJSON)
console.log(data.title)

data.title ="Life is struggle get up and take a chance "
data.author = "Ash D. Indian"

const user =JSON.stringify(data)
fs.writeFileSync('createtest.json',user)