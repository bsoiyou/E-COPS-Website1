import express from "express";
import morgan from "morgan";
import Router from "./route/Router";
const path = require("path");
const PORT=3456;

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

const app=express();
const logger= morgan("dev");

app.listen(PORT, handleListening);
app.use(express.static("../client"));
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use("/", Router);

export default app;