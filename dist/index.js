"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    const dotenv = require('dotenv');
    dotenv.config();
}
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
const router = require('./api/index');
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.use('/api', router);
app.listen(PORT, () => {
    console.log(`Start on port ${PORT}`);
});
