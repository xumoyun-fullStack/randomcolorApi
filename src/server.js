const express = require("express");
const server = express();
const fs = require("fs");
const path = require("path");
const { PORT } = require("../config");

server.listen(PORT,() => {
    console.log(`Server ready at ${PORT}`)
})

server.use(express.json());
server.use(express.urlencoded({extended: true}));

fs.readdir(path.join(__dirname, "routes"), (err, files) => {
    if(!err){
        files.forEach(file => {
            let routePath = path.join(__dirname, "routes", file);
            let Route = require(routePath);

            if(Route.path && Route.router) server.use(Route.path, Route.router);
        })
    }else{
        console.log(err)
    }
})

