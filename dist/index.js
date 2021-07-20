"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    var dotenv = require('dotenv');
    dotenv.config();
}
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
// TODO 消す
app.get('/hello', function (req, res) {
    res.json({
        message: "hello"
    });
});
app.listen(PORT, function () {
    console.log("Start on port " + PORT);
});
