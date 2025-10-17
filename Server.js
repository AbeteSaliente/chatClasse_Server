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
let connessi = []

server.on("connection",(socket)=>{
    console.log("Client connected")

    socket.on("message",(data)=>{
        let msg = data.toString().split("|")
        console.log(data.toString())
        if(msg[0]=="log"){
            let names = Object.keys(clients)
            let logged = false
            for (let index = 0; index < names.length; index++) {
                if (msg[1] == names[index] && msg[2] == clients[names[index]].psw && clients[names[index]].ws == null) {
                    clients[names[index]].ws = socket
                    connessi.push(names[index])
                    logged=true
                }
            }

            server.clients.forEach(sk => {
                sk.send(Protocollo(connessi))
            });

            if(logged){
                socket.send("rlo|login effettuato")
                console.log("logged")
                console.log(connessi)
            }else{
                socket.send("rlo|login errato")
                console.log("errog log")
            }
        }

        if(msg[0]=="msg"){
            let names = Object.keys(clients)
            for (let index = 0; index < names.length; index++) {
                const element = names[index];
                if (msg[0]==undefined || msg[1]==undefined || msg[2]==undefined || msg[3]==undefined) {
                    return
                }
                if (element == msg[1] && clients[element].ws != null && msg[2] != "") {
                    server.clients.forEach((s)=>{
                        if (socket!=s) {
                            let x = data.toString()
                            s.send(x)
                        }
                    })
                }
            }
        }

    })
    
    socket.on("close",()=>{
        console.log("Client disconnected")
        let names = Object.keys(clients)
        for (let index = 0; index < names.length; index++) {
            const element = clients[names[index]];
            if (socket==element.ws) {
                connessi = connessi.filter(item => item !== names[index]);
                element.ws = null
                console.log(connessi)
            }
        }

        server.clients.forEach(sk => {
            sk.send(Protocollo(connessi))
        });
    })
})

function Protocollo(l = []) {
    let lString = "ele"
    for (let index = 0; index < l.length; index++) {
        const element = l[index];
        lString+="|"+element
    }
    return lString
}