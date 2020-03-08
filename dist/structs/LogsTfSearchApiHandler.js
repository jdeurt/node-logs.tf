"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
;
class LogsTfSearchApiHandler {
    constructor(options) {
        this._options = options;
        this._currentPageNum = 0;
    }
    _hasOption(optionName) {
        return this._options[optionName] !== undefined;
    }
    async page(pageNumber = 0) {
        const params = {};
        if (this._hasOption("title")) {
            params.title = this._options.title;
        }
        if (this._hasOption("map")) {
            params.map = this._options.map;
        }
        if (this._hasOption("uploader")) {
            params.uploader = this._options.uploader;
        }
        if (this._hasOption("players")) {
            params.player = this._options.players.join(",");
        }
        if (this._hasOption("pageSize")) {
            params.limit = this._options.pageSize;
            params.offset = this._options.pageSize * pageNumber;
        }
        else {
            params.limit = 100;
            params.offset = this._options.pageSize * pageNumber;
        }
        const response = await axios_1.default.get("https://logs.tf/api/v1/log", {
            params,
            responseType: "json"
        });
        const data = response.data;
        return new Promise((resolve, reject) => {
            if (data.success === true) {
                this._currentPageNum = pageNumber;
                resolve(data.logs);
            }
            else {
                reject(data.error);
            }
        });
    }
    /**
     * Moves to the next page
     */
    async next() {
        return await this.page(this._currentPageNum + 1);
    }
    /**
     * Moves to the previous page
     */
    async prev() {
        return await this.page(this._currentPageNum - 1);
    }
}
exports.LogsTfSearchApiHandler = LogsTfSearchApiHandler;
exports.default = LogsTfSearchApiHandler;
