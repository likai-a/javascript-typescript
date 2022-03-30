// Promise
// 诞生的意义
const fs = require("fs")

var file = "./js/cap1/1.txt"

// fs.readFile(file,(err, data)=>{
//     if (err) throw err;
//     console.log(data.toString())
// })

function promise_readfile(path){
    return new Promise((reslove, reject)=>{
        fs.readFile(path,(err,data)=>{
            if (err) reject(err)
            reslove(data)
        })
    })
}


promise_readfile(file)
.then((data)=>{
    console.log("promise_readfile");
    console.log("then");
    console.log(data.toString());
}).catch((err)=>{
    console.log("catch")
})





