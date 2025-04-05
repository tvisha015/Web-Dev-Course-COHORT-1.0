import http from 'http';
import fs from 'fs';

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} New Request Received\n`;
    fs.appendFile("log.txt", log, (err,data)=>{
        switch(req.url){
            case '/':res.end("Home Page");
            case '/about' : res.end("Tvisha here");
            default: res.end("404");
        }
    })
});

myServer.listen(8000, ()=>{
    console.log("Server started");
})