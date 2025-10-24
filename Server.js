//Costanti nodulo websocket(npm), server(porta 8080)
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

//lista client connessi e loggati
let connessi = []

//evento connessione client al server
server.on("connection",(socket)=>{
    console.log("Client connected")

    //messaggio dal client
    socket.on("message",(data)=>{
        let msg = data.toString().split("|")
        console.log(data.toString())
        //log|nome|passw
        if(msg[0]=="log"){
            let names = Object.keys(clients)
            let logged = false
            for (let index = 0; index < names.length; index++) {
                let element = names[index]
                if (msg[1] == element && msg[2] == clients[element].psw && clients[element].ws == null) {
                    clients[element].ws = socket
                    connessi.push(element)
                    logged=true
                }
            }

            if(logged){
                socket.send("rlo|login effettuato")
                console.log("logged")
                console.log(connessi)
            }else{
                socket.send("rlo|login errato")
                console.log("errog log")
            }

            server.clients.forEach(sk => {
                sk.send(Connessi(connessi))
            });
        }
        //msg|nome|data|msg
        if(msg[0]=="msg"){
            let names = Object.keys(clients)
            for (let index = 0; index < names.length; index++) {
                const element = names[index];
                if (msg[0]==undefined || msg[1]==undefined || msg[2]==undefined || msg[3]==undefined) {
                    return
                }
                if (element == msg[1] && clients[element].ws != null && msg[2] != "") {
                    for (const [key, value] of Object.entries(clients)) {
                        let x = data.toString()
                        if (value.ws!=null) {
                            value.ws.send(x)
                        }
                    }
                }
            }
        }

    })
    
    //disconnessione client
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
            sk.send(Connessi(connessi))
        });
    })
})

//l=[federico,daniele] ==> ele|federico|daniele
//ele|nome1|nome2|nome3...
function Connessi(l = []) {
    let lString = "ele"
    for (let index = 0; index < l.length; index++) {
        const element = l[index];
        lString+="|"+element
    }
    return lString
}