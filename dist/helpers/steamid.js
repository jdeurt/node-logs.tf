"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const steamid_1 = __importDefault(require("steamid"));
function isValidId(id) {
    try {
        const steamId = new steamid_1.default(id);
        return steamId.isValid();
    }
    catch {
        return false;
    }
}
exports.isValidId = isValidId;
;
function toId64(id) {
    const steamId = new steamid_1.default(id);
    return steamId.getSteamID64();
}
exports.toId64 = toId64;
function toId3(id) {
    const steamId = new steamid_1.default(id);
    return steamId.getSteam3RenderedID();
}
exports.toId3 = toId3;
