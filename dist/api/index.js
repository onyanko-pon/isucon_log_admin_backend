"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const models_1 = require("../db/models");
const router = express_1.default.Router();
router.get('/logs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const logs = yield models_1.Log.findAll();
        res.json({ logs });
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}));
router.get('/logs/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const logId = req.params.id;
    try {
        const log = yield models_1.Log.findByPk(logId);
        if (log === null) {
            return res.status(404).json({ message: `id=${logId}のlogは存在しません` });
        }
        res.json({ log });
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
}));
module.exports = router;
