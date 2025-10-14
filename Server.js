const ws = require("ws")
const server = new ws.Server({port:8080})
const clients = {
    "Daniele":{psw:"1234",ws:null},
    "Giacomo":{psw:"9936",ws:null},
    "Ludovico":{psw:"3957",ws:null},
    "Leonardo":{psw:"8562",ws:null},
    "Federico":{psw:"1047",ws:null},
    "Alessandro":{psw:"4851",ws:null}
}

server.on("connection",(socket)=>{
    console.log("Client connected")

    socket.on("message",(data)=>{
        let msg = data.toString().split("|")
        console.log(data.toString())
        if(msg[0]=="log"){
            let names = Object.keys(clients)
            let logged = false
            for (let index = 0; index < names.length; index++) {
                if (msg[1] == names[index] && msg[2] == clients[names[index]].psw) {
                    clients[names[index]].ws = socket
                    logged=true
                }
            }
            
            if(logged){
                socket.send("rlo|login effettuato")
                console.log("logged")
            }else{
                socket.send("rlo|login errato")
                console.log("errog log")
            }
        }
        if(msg[0]=="msg"){
            //
        }
    })
    
    socket.on("close",()=>{
        console.log("Client disconnected")
    })
})