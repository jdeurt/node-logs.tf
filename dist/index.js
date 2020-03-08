"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const LogsTfSearchApiHandler_1 = require("./structs/LogsTfSearchApiHandler");
const LogDataHandler_1 = require("./structs/LogDataHandler");
;
class LogsTfClient {
    constructor(apiKey) {
        this._apiKey = apiKey;
    }
    async upload(logFile, options) {
        const uploadResponse = await axios_1.default.post("https://logs.tf/upload", {
            ...options,
            logfile: logFile.stream(),
            key: this._apiKey
        }, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
            responseType: "json"
        });
        const data = uploadResponse.data;
        return new Promise((resolve, reject) => {
            if (data.success === true) {
                resolve(data.log_id);
            }
            else {
                reject(data.error);
            }
        });
    }
    getSearchResults({ title, map, uploader, players }) {
        return new LogsTfSearchApiHandler_1.LogsTfSearchApiHandler({
            title,
            map,
            uploader,
            players
        });
    }
    async getLogData(logId) {
        const response = await axios_1.default.get(`https://logs.tf/api/v1/log/${logId}`, {
            responseType: "json"
        });
        const data = response.data;
        return new LogDataHandler_1.LogDataHandler(data);
    }
}
exports.LogsTfClient = LogsTfClient;
exports.default = LogsTfClient;
