const fs = require('fs')

const update = function(note, oldNote) {
    
    const oNote = JSON.parse(oldNote)

    const newNote = oNote.map(n => {
        if(n.id == note.id){
           return { ...n, title: note.title, body: note.body}
    }
    return n
})

fs.writeFileSync('./note.txt', JSON.stringify(newNote))
console.log(newNote)

}
module.exports = update