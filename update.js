const getData = require('./mongo')

const update = async ()=>{
    const data = await getData();
    const result = await data.updateOne({name: 'namrata'},{$set:{name: "bou"}})
}

update()