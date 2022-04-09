import express from "express";
import morgan from "morgan";
const path = require("path");
const PORT=3456;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

const app=express();
const logger= morgan("dev");

app.listen(PORT, handleListening);
app.use(express.static("../client"));
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.get("/", function(req,res) {
    res.sendFile(path.resolve(__dirname + "../../../client/main.html"));
 });
 app.get("/members", function(req,res) {
    res.sendFile(path.resolve(__dirname + "../../../client/members.html"));
 });
 


export default app;