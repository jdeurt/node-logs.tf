"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class LogFile {
    constructor(path) {
        this._filePath = path;
    }
    stream() {
        return fs_1.createReadStream(this._filePath, {
            encoding: "utf8"
        });
    }
}
exports.LogFile = LogFile;
