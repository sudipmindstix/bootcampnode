const getData = require('./mongo')

const insert = async ()=>{
    const db = await getData()
    const result = db.insert({
        name: 'namrata', surName: 'panda', age: 30, category: 'human'
    })
}

insert()