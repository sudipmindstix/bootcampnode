const fs = require("fs");
const users = require("./users.json")


const me = {
    name: "sudip",
    surname: "pahari"
}

users.push(me)

fs.writeFile("users.json", JSON.stringify(users), (err, data)=>{
    if(err) throw err,
    console.log('done');
})

console.log("hiiiss");