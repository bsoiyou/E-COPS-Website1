import express from "express";
import {home} from "../controller/Controller.js";

const Router = express.Router();

Router.get("/", home);
//Router.get("/members", members);
//outer.get("/activity", activity);
//sRouter.get("/recruiting", recruiting);

export default Router;